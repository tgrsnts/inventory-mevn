const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transaksiSchema = new Schema({
    dari: {
        type: mongoose.Types.ObjectId, ref: "Project"
    },
    ke: {
        type: mongoose.Types.ObjectId, ref: "Project"
    },
    code_project: {
        type: String
    },
    id_barang: {
        type: mongoose.Types.ObjectId, ref: "Barang"
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