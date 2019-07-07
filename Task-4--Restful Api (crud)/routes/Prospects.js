let ProspectsModel = require('../models/prospect.model')
let express = require('express')
let router = express.Router()

//Create New Prospects

router.post('/Prospects', (req, res) => {
    if (!req.query.name) {
        return res.status(400).send('Request body is missing')
    }
    if(!req.body.name) {
    // ...
  }
    let model = new ProspectsModel(req.body)
    model.save()
        .then(doc => {
            if ((!doc) || doc.length === 0) {
                return res.status(500).send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//Get
router.get('/Prospects', (req, res) => {
    if (!req.query.name) {
        return res.status(400).send('Missing URL parameter: name')
    }
    ProspectsModel.findOne({
            title: req.query.title,
            name: req.query.name,
            surname: req.query.surname,
            age: req.query.age,
            subject: req.query.subject,
            assist: req.query.assist,
        })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//Update
router.put('/Prospects', (req, res) => {
    if (!req.query.name) {
        return res.status(400).send('Missing URL parameter: name')
    }
    ProspectsModel.findOneAndUpdate({
            title: req.query.title,
            name: req.query.name,
            surname: req.query.surname,
            age: req.query.age,
            subject: req.query.subject,
            assist: req.query.assist,
        }, req.body, {
            new: true
        })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//Delete
router.delete('/Prospects', (req, res) => {
    if (!req.query.name) {
        return res.status(400).send('Missing URL parameter: name')
    }
    ProspectsModel.findOneAndRemove({
            title: req.query.title,
            name: req.query.name,
            surname: req.query.surname,
            age: req.query.age,
            subject: req.query.subject,
            assist: req.query.assist,
        })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router