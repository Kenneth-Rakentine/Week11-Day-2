

const express = require('express')
const app = express()


//___________________________(Requirements)


app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


const records = ['Robbie Basho', 'Valerio Tricoli', 'Philip Jeck', "John Cage", "Iannis Xenakis", "Jean Guerin", "Beatriz Ferreyra", "Jack Dejohnette", "Four Tet", "Billy Cobham"];



//______________________(Middleware)

const PORT = 3000





app.listen('3000', (req, res)=>{
    console.log(`Server is now listening on Port 3000`)
})
//_________Server

app.get('/:indexOfRecordsArray',(req, res)=>{
    res.send(records[req.params.indexOfRecordsArray])
})

//______QueryParams