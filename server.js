require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL , 
    { 
    useNewUrlParser: true 
    }
)

app.use(express.json())
app.use(cors());

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.get('/', (req, res) => {
    res.send('Api is running test 10')
})

const messagesRouter = require('./routes/messages')
app.use('/messages', messagesRouter)

app.listen(process.env.PORT || 8000, () => console.log("Server is running"))