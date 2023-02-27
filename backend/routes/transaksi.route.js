const express = require('express');
const transaksiRoute = express.Router();

// Transaksi model
let TransaksiModel = require('../models/Transaksi');
let BarangProjectModel = require('../models/BarangProject');
const { json } = require('express');

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
    TransaksiModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {         
            BarangProjectModel.findOne({ id_barang: req.body.id_barang, id_project: req.body.dari }, (error, data) => {
                if (error) {
                    return next(error)
                } else {                        
                    res.json(data)
                    BarangProjectModel.updateOne({id_barang: req.body.id_barang, id_project: req.body.dari}, 
                        { $set: { stock: data.stock - req.body.keluar } }, (error, data) => {
                        if (error) {
                            return next(error)
                        } else {
                            res.json(data);
                        }
                    })
                }
            })            
            res.json(data);
        }
    })
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