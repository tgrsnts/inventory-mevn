const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transaksiSchema = new Schema({
    dari: {
        type: String
    },
    ke: {
        type: String
    },
    dari: {
        type: String
    },
    code_project: {
        type: String
    },
    masuk: {
        type: Number
    },
    keluar: {
        type: Number
    },
    stock: {
        type: String
    },
    keterangan: {
        type: String
    },
    remark: {
        type: String
    },
}, {
    collection: 'transaksis'
})

module.exports = mongoose.model('Transaksi', transaksiSchema)