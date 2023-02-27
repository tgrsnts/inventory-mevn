const express = require('express');
const projectRoute = express.Router();

// Project model
let ProjectModel = require('../models/Project');

// Get all data
projectRoute.route('/project').get((req, res, next) => {
    ProjectModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create project data
projectRoute.route('/create-project').post((req, res, next) => {
    ProjectModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit project data
projectRoute.route('/edit-project/:id').get((req, res, next) => {
    ProjectModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update project data
projectRoute.route('/update-project/:id').put((req, res, next) => {
    ProjectModel.findByIdAndUpdate(req.params.id, {
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

// Delete project data
projectRoute.route('/delete-project/:id').delete((req, res, next) => {
    ProjectModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = projectRoute;