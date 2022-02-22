//NPM Packages
const express = require('express')
const bodyParser = requre('body-parser')
const helmet = require('helmet')
const dotenv =require('dotenv')
const morgan = require('morgan')


//Local Reuirements
const mongoConnect = require('./config')

dotenv.config()

const app = express()
const port = 4000 || process.env.PORT


app.use(helmet())
app.use(bodyParser())
app.use(morgan('dev'))




app.get('/', (req, res)=>{
  res.status(200).json({message: "API UP"})
})

app.listen(port, ()=>{
  mongoConnect()
  console.log('Server is Listening at ${port}')
})
