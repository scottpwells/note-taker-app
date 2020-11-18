//1. require express
const express = require("express");
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")
//2. create a instance of express
const app = express();
//3. Set the Port
const PORT = process.env.PORT || 8080;
//5. middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
//6. build routes beginning with test route (view route and api routes)

//4. listen on port
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});











