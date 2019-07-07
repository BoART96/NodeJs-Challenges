let mongoose = require('mongoose')
require('dotenv/config')

// const server = ''
// const database = 'REST CRUD'
// const user = 'umuzi'
// const password = 'tegniese96'


//CONNECT TO DB
mongoose.connect(`process.env.DB_CONNECTION`, { useNewUrlParser: true }, () =>
    console.log("connected to DB!")
);

let ProspectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    assist: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Prospect', ProspectSchema);