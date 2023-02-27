const express = require('express');
const suratJalanRoute = express.Router();

// SuratJalan model
let SuratJalanModel = require('../models/SuratJalan');

// Get all data
suratJalanRoute.route('/surat-jalan').get((req, res, next) => {
    SuratJalanModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create suratJalan data
suratJalanRoute.route('/create-surat-jalan').post((req, res, next) => {
    SuratJalanModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit suratJalan data
suratJalanRoute.route('/edit-surat-jalan/:id').get((req, res, next) => {
    SuratJalanModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update suratJalan data
suratJalanRoute.route('/update-surat-jalan/:id').put((req, res, next) => {
    SuratJalanModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('SuratJalan successfully updated.')
        }
    })
})

// Delete suratJalan data
suratJalanRoute.route('/delete-surat-jalan/:id').delete((req, res, next) => {
    SuratJalanModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = suratJalanRoute;