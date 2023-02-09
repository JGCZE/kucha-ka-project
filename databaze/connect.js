const Mongoose = require("mongoose");
Mongoose.set('strictQuery', false);
const URL = "mongodb+srv://user123:kkiojuxw@cookbookhuss.4ncphvq.mongodb.net/?retryWrites=true&w=majority";
const dotenv = require("dotenv");

class dbConnect {
    connect(){
        dotenv.config();
        Mongoose.connect(URL, {
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        },(err) => {
            if(err) throw new Error("K databázi se nejde připojit");
            console.log("Připojeno úspěšně k databázi");
        })
    }
}

module.exports = new dbConnect();