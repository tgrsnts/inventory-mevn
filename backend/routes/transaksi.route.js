const express = require('express');
const transaksiRoute = express.Router();

// Transaksi model
let TransaksiModel = require('../models/Transaksi');
let BarangProjectModel = require('../models/BarangProject');

// Get all data
transaksiRoute.route('/transaksi').get((req, res, next) => {
    TransaksiModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create transaksi data
transaksiRoute.route('/create-transaksi').post((req, res, next) => {
    if (req.body.dari && req.body.ke) {
        BarangProjectModel.findOne({ id_barang: req.body.id_barang, id_project: req.body.dari }, (errorBarangProjectDari, dataBarangProjectDari) => {
            if (errorBarangProjectDari) {
                return next(errorBarangProjectDari)
            } else {
                BarangProjectModel.updateOne({ id_barang: req.body.id_barang, id_project: req.body.dari }, { $set: { stock: dataBarangProjectDari.stock - req.body.keluar } }, (errorUpdateDari, dataUpdateDari) => {
                    if (errorUpdateDari) {
                        return next(errorUpdateDari)
                    } else {
                        BarangProjectModel.findOne({ id_barang: req.body.id_barang, id_project: req.body.ke }, (errorBarangProjectKe, dataBarangProjectKe) => {
                            if (errorBarangProjectKe) {
                                return next(errorBarangProjectKe)
                            } else {
                                if (dataBarangProjectKe) {
                                    BarangProjectModel.updateOne({ id_barang: req.body.id_barang, id_project: req.body.ke }, { $set: { stock: dataBarangProjectKe.stock + req.body.keluar } }, (errorUpdateKe, dataUpdateKe) => {
                                        if (errorUpdateKe) {
                                            return next(errorUpdateKe)
                                        } else {
                                            TransaksiModel.create(req.body, (errorTransaksi, dataTransaksi) => {
                                                if (errorTransaksi) {
                                                    return next(errorTransaksi);
                                                } else {
                                                    res.json(dataTransaksi);
                                                }
                                            })
                                        }
                                    })
                                } else {
                                    BarangProjectModel.create({ code_project: req.body.code_project, id_barang: req.body.id_barang, id_project: req.body.ke, stock: req.body.keluar, remark: req.body.remark }, (errorUpdateKe, dataUpdateKe) => {
                                        if (errorUpdateKe) {
                                            return next(errorUpdateKe)
                                        } else {
                                            TransaksiModel.create(req.body, (errorTransaksi, dataTransaksi) => {
                                                if (errorTransaksi) {
                                                    return next(errorTransaksi);
                                                } else {
                                                    res.json(dataTransaksi);
                                                }
                                            })
                                        }
                                    })
                                }
                            }
                        })
                    }
                })
            }
        })
    } else if (req.body.dari) {
        BarangProjectModel.findOne({ id_barang: req.body.id_barang, id_project: req.body.dari }, (errorBarangProject, dataBarangProject) => {
            if (errorBarangProject) {
                return next(errorBarangProject)
            } else {
                BarangProjectModel.updateOne({ id_barang: req.body.id_barang, id_project: req.body.dari }, { $set: { stock: dataBarangProject.stock - req.body.keluar } }, (errorUpdate, dataUpdate) => {
                    if (errorUpdate) {
                        return next(errorUpdate)
                    } else {
                        TransaksiModel.create(req.body, (errorTransaksi, dataTransaksi) => {
                            if (errorTransaksi) {
                                return next(errorTransaksi);
                            } else {
                                res.json(dataTransaksi);
                            }
                        })
                    }
                })
            }
        })
    } else if (req.body.ke) {
        BarangProjectModel.findOne({ id_barang: req.body.id_barang, id_project: req.body.ke }, (errorBarangProject, dataBarangProject) => {
            if (errorBarangProject) {
                return next(errorBarangProject)
            } else {
                if (dataBarangProject) {
                    BarangProjectModel.updateOne({ id_barang: req.body.id_barang, id_project: req.body.ke }, { $set: { stock: dataBarangProject.stock + req.body.masuk } }, (errorUpdate, dataUpdate) => {
                        if (errorUpdate) {
                            return next(errorUpdate)
                        } else {
                            TransaksiModel.create(req.body, (errorTransaksi, dataTransaksi) => {
                                if (errorTransaksi) {
                                    return next(errorTransaksi);
                                } else {
                                    res.json(dataTransaksi);
                                }
                            })
                        }
                    })
                } else {
                    BarangProjectModel.create({ code_project: req.body.code_project, id_barang: req.body.id_barang, id_project: req.body.id_project, stock: req.body.masuk, remark: req.body.remark }, (errorCreate, dataCreate) => {
                        if (errorCreate) {
                            return next(errorCreate)
                        } else {
                            TransaksiModel.create(req.body, (errorTransaksi, dataTransaksi) => {
                                if (errorTransaksi) {
                                    return next(errorTransaksi);
                                } else {
                                    res.json(dataTransaksi);
                                }
                            })
                        }
                    })
                }
            }
        })
    } else {

    }

})

// Edit transaksi data
transaksiRoute.route('/edit-transaksi/:id').get((req, res, next) => {
    TransaksiModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update transaksi data
transaksiRoute.route('/update-transaksi/:id').put((req, res, next) => {
    TransaksiModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Transaksi successfully updated.')
        }
    })
})

// Delete transaksi data
transaksiRoute.route('/delete-transaksi/:id').delete((req, res, next) => {
    TransaksiModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = transaksiRoute;