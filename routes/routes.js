const express = require('express')
router = express()

let contactUsHandler = require('../handlers/contactUs_handler')

router.post('/contactUs', (req,res)=>{
    contactUsHandler.contactUs(req,res)
})
