const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let barangProjectSchema = new Schema({
    code_project: {
        type: String
    },
    id_barang: {
        type: String
    },
    id_project: {
        type: String
    },
    stock: {
        type: Number
    },
    remark: {
        type: String
    },
}, {
    collection: 'barang_projects'
})

module.exports = mongoose.model('BarangProject', barangProjectSchema)