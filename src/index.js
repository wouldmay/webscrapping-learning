import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import crawlroutes from './routes/crawlroutes.js'


dotenv.config()

const app = express()

app.use(bodyParser.json())

app.use('/api', crawlroutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})