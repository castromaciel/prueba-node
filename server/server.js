require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const port = process.env.PORT

app.get('/users', (req, res) =>{
  res.send("Pegaste bien")
})

app.post('/new-user', (req, res) => {
  console.log((req.body))  //Recibimos data del Frontend
  res.send("Recibimos el usuario")
})

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto:${port}`)
})