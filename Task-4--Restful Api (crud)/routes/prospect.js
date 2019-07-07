let express = require('express')
let router = express.Router()

// QueryString => query property on the request object
// localhost:3000/prospects?name=bokang
router.get('/prospects', (req, res) => {
    if (req.query.name) {
        res.send(`you requested a Prospect ${req.query.name}`)
    } else {
        res.send('You have requested for an Umuzi Prospect')
    }
})

//Params property on the request object
// localhost:3000/prospects/bokang
router.get('/prospects/:name', (req, res) => {
    res.send(`You have requested prospect ${req.params.name}`)
})

router.get('/error', (req, res) => {
    throw new Error('This is a forced error.')
})


module.exports = router