const mongoose = require("mongoose");
const material = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 5,
        max: 255,
    }
})

module.exports = mongoose.model("Material", material)