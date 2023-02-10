const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require("./databaze/connect");
const getMaterials = require("./routes/GET/getMaterial")
const saveMaterial = require("./routes/POST/saveMaterial")

// const database = new dbConnect()
// database.connect();
dbConnect.connect()

// Middleware
// povolme přijímat JSON z frontendu
app.use(express.json({extended:false}))
app.use(express.text({extended:false}))

// Routy - GET
app.use("/", getMaterials);

// Routy - POST
app.use("/", saveMaterial)



app.get("/", (req, res) => {
    res.send("Jsi na hlavní stránce !");
})

app.listen(PORT, (err) => {
    console.log(`Server beží na ${PORT}!`);
})