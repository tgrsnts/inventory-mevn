const express = require('express');
const barangRoute = express.Router();

// Barang model
let BarangModel = require('../models/Barang');

// Get all data
barangRoute.route('/barang').get((req, res, next) => {
    BarangModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create barang data
barangRoute.route('/create-barang').post((req, res, next) => {
    BarangModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit barang data
barangRoute.route('/edit-barang/:id').get((req, res, next) => {
    BarangModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update barang data
barangRoute.route('/update-barang/:id').put((req, res, next) => {
    BarangModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Barang successfully updated.')
        }
    })
})

// Delete barang data
barangRoute.route('/delete-barang/:id').delete((req, res, next) => {
    BarangModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = barangRoute;