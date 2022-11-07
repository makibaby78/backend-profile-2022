const express = require('express')
const router = express.Router()
const Message = require('../models/message')

// Getting all
router.get('/', async (req, res) => {
    try{
        const messages = await Message.find()
        res.json(messages)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {

    const message = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        dateCreated: req.body.dateCreated,
    })
    try{
        const newMessage = await message.save()
        res.status(201).json(newMessage)
    } catch (err){
        res.status(400).json({ message: err.message })
    }

})

module.exports = router