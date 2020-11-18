const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid")

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Note {
    read() {
        return readFileAsync("db/db.json","utf8")
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }
    getNotes(){
        return this.read().then(notes => {
            var parseNotes = [];
            try {
                parseNotes = parseNotes.concat(JSON.parse(notes))
            } catch (error) {
                parseNotes = [];
            }
            return parseNotes;
        })

    }
    addNote(note) {
        const { title, text } = note;

        // if statement to prevent blanks

        const newNote = {title, text, id: uuidv4()} 

        return this.getNotes().then(notes => [...notes, newNote]).then(updatedArray => this.write(updatedArray)).then(() => newNote)
    }
    deleteNote(id){
        return this.getNotes().then(notes => notes.filter(note => note.id !== id)).then(filteredNotes => this.write(filteredNotes))
    }
}

module.exports = new Note();