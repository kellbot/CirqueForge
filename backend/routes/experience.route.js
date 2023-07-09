const express = require('express');
const experienceRoute = express.Router();
// model
let ExperienceModel = require('../models/Experience');
experienceRoute.route('/create-experience').post((req, res, next) => {
    ExperienceModel.create(req.body).then((data) => {
      res.send(data)
}).catch((error) => {
  res.send(error);
})
});
experienceRoute.route('/').get((req, res, next) => {
    ExperienceModel.find().then((data) => {
     res.send(data)
   }).catch((error) => {
    res.send(error);
   })
 })
 experienceRoute.route('/edit-experience/:id').get((req, res, next) => {
    ExperienceModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
experienceRoute.route('/update-experience/:id').put((req, res, next) => {
    ExperienceModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('experience successfully updated!')
    }
  })
})
// Delete
experienceRoute.route('/delete-experience/:id').delete((req, res, next) => {
    ExperienceModel.findByIdAndRemove(req.params.id).then((data) => {
      res.status(200).json({
        msg: data
      });
    }).catch((error) => res.send(error));
  
})
module.exports = experienceRoute;