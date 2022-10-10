const express= require('express')
const Client=require('./router/clients')
require('./db/mongoose')
const port=3000
const app= express()

app.use(express.json())
app.use(Client)



app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})
