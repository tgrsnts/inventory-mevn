const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let barangProjectSchema = new Schema({
    code_project: {
        type: String
    },
    id_barang: {
        type: mongoose.Types.ObjectId, ref: "Barang"
    },
    id_project: {
        type: mongoose.Types.ObjectId, ref: "Project"
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