const express = require('express')
const app = express()
require('dotenv').config()
const mongoConnect = require('./db/conn').mongoConnect

const PORT = process.env.PORT
const productRoutes = require('./routes/Product.routes')


///rouets
app.use(express.json())
app.use('/api',productRoutes)

mongoConnect(() => {
    app.listen(PORT,()=>{
        console.log(`Server is Running On PORT : ${PORT}`);
    })
  });
  

