const mongoose = require("mongoose");


let TareSchema = new mongoose.Schema({
    idTarea : Number,
    nombreTarea : String,
    detalleTarea : String
});

module.exports = mongoose.model('Tarea',TareSchema,'Tareas');