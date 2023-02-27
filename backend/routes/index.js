const router = require('express').Router()
const barang = require('../routes/barang.route')
const barangProject = require('../routes/barang.project.route')
const project = require('../routes/project.route')
const student = require('../routes/student.route')
const suratJalan = require('../routes/surat.jalan.route')
const transaksi = require('../routes/transaksi.route')

router.use(barang)
router.use(barangProject)
router.use(project)
router.use(student)
router.use(suratJalan)
router.use(transaksi)

module.exports = router