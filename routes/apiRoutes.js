const router = require("express").Router();
const Notes = require("../db/Notes")

router.get("/notes", (req, res) => {
   Notes.getNotes().then(notesArray => res.json(notesArray)).catch(err => res.status(500).json(err))
});
router.post("/notes", (req, res) =>{
    Notes.addNote(req.body).then(notesArray => res.json(notesArray)).catch(err => res.status(500).json(err))
})
router.delete("/notes", (req, res) =>{
  Notes.delete(req.params.id).then(notesArray => res.json(notesArray)).catch(err => res.status(500).json(err))

})

module.exports = router;