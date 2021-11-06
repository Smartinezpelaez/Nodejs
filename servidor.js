//console.log ('Hola mundo')

const { Router } = require('express');
const expres = require('express');
const mongoose = require('mongoose');
const TareSchema = require("./Modelos/Tarea.js");

const app = expres();
const router = expres.Router();
app.use(expres.urlencoded({extended:true}));
app.use(expres.json());


//Conexion a base de datos
mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.vetgd.mongodb.net/ActividadesBD?retryWrites=true&w=majority"); 

// Operaciones crud
router.get('/',(req, res)=>{
    res.send('El inicio de mi api');
})
router.get('/Tarea', (req,res)=>{
    TareSchema.find(function(err,datos){
        if (err){
            console.log('Error leyendo las tareas')
        }else{
            res.send(datos);
        }
    })
});

router.post('/Tarea',(req, res)=>{
    let nuevaTarea = new TareSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });
    nuevaTarea.save(function(err, datos){
        if (err){
            console.log(err);
        }
        res.send('Tarea almacenada correctamanete');
    })
});

app.use(router);
app.listen(3000, ()=>{
console.log('Servidor corriendo en el puerto 3000')
});