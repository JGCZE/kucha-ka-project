const getMaterials = require("express").Router();
const materials = require("../../models/materials")

getMaterials.get("/get-materials", (req, res) => {
    materials.find({}, (err, docs) => {
        if(err){
            return res.json({
                msg: "nepodařilo se získat dokumenty",
                documents:[]
            })
        } else {
            return res.json({
                msg: "Úspěšně se podařilo získat suroviny",
                documents: docs
            })
        }
    })
})

module.exports = getMaterials;