const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let suratJalanSchema = new Schema({
    id_project: {
        type: String
    },
    delivery: {
        type: String
    },
    kepada: {
        type: String
    },
    noSj: {
        type: String
    },
    noMobil: {
        type: Number
    }
}, {
    collection: 'surat_jalans'
})

module.exports = mongoose.model('SuratJalan', suratJalanSchema)