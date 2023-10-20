import express from 'express'
import './db/configDB'
import mainRouter from './routes/index.js'

const app = express()

app.use(express.json())
app.use(express.static('public'))

// Router
app.use('/', mainRouter)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
