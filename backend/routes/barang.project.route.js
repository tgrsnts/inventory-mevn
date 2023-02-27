const express = require('express');
const barangProjectRoute = express.Router();

// Barang Project model
let BarangProjectModel = require('../models/BarangProject');

// Get all data
barangProjectRoute.route('/barang-project').get((req, res, next) => {
    BarangProjectModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create barangProject data
barangProjectRoute.route('/create-barang-project').post((req, res, next) => {
    BarangProjectModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit barangProject data
barangProjectRoute.route('/edit-barang-project/:id').get((req, res, next) => {
    BarangProjectModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update barangProject data
barangProjectRoute.route('/update-barang-project/:id').put((req, res, next) => {
    BarangProjectModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Project successfully updated.')
        }
    })
})

// Delete barangProject data
barangProjectRoute.route('/delete-barang-project/:id').delete((req, res, next) => {
    BarangProjectModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = barangProjectRoute;