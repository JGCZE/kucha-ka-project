const saveMaterial = require("express").Router();
const modelMaterial = require("../../models/materials")

saveMaterial.post("/save-material", (req, res) => {
    const {name} = req.body;
    const surovina = new modelMaterial({
        name: name
    })
    surovina.save((err, document) => {
        if(err){
            return res.json({
                msg: "!! nedošlo k uložení objektu"
            })
        } else {
            return res.json({
                msg: `Došlo k úspěšnému uložení receptu ${JSON.stringify(document)}`
            })
        }
    })
    res.send("ANO, POST")
})

saveMaterial.get("/save-material", (req, res) => {
    res.send("ANO, GET")
})

module.exports = saveMaterial