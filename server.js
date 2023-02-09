const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require("./client/databaze/connect");

// const database = new dbConnect()
// database.connect();
dbConnect.connect()

app.get("/", (req, res) => {
    res.send("Jsi na hlavní stránce !");
})

app.listen(PORT, (err) => {
    console.log(`Server beží na ${PORT}!`);
})