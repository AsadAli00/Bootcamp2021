const express = require ('express');
require('dotenv').config();
const mongoose = require('mongoose');
const decipher = require('./decipher-envs');
const bodyParser = require('body-parser');


const app = express();

const port = 3000;



app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());

decipher.decrypted(process.env.DATABASE_URL).then(conx => {
    //Connect to database
    mongoose
    .connect(conx)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        throw new Error(error);
    });


const ToDoSchema = mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    }
});


const ToDo = mongoose.model("ToDo", ToDoSchema);


app.get("/todo/:id", (req,res)=>{

    ToDo.findById(req.params.id)
    .lean()
    .then(todo => {
        res.send(todo);
    })
    .catch(err=>{
        res.send(err)
    })

})

app.get("/todos", (req,res)=>{
    ToDo.find({})
    .lean()
    .then(todos =>{
        res.send(todos)
    }).catch(err=>{
        res.send(err)
    })
})

});
