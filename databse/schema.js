const mongoose = require('mongoose');


// Creating Structure of the collection
const collection_structure = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required:true
    }
})

// Creating collection
const collections = mongoose.model(
    "product", collection_structure)

module.exports = collections;