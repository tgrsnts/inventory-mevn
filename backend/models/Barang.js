const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let barangSchema = new Schema({
    nama: {
        type: String
    },
    unit: {
        type: String
    },
}, {
    collection: 'barangs'
})

module.exports = mongoose.model('Barang', barangSchema)