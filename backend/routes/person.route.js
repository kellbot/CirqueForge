const express = require('express');
const personRoute = express.Router();
// model
let PersonModel = require('../models/Person');
personRoute.route('/create-person').post((req, res, next) => {
    PersonModel.create(req.body).then((data) => {
      res.send(data)
}).catch((error) => {
  res.send(error);
})
});
personRoute.route('/').get((req, res, next) => {
    PersonModel.find().then((data) => {
     res.send(data)
   }).catch((error) => {
    res.send(error);
   })
 })
 personRoute.route('/edit-person/:id').get((req, res, next) => {
    PersonModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
personRoute.route('/update-person/:id').put((req, res, next) => {
    PersonModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('person successfully updated!')
    }
  })
})
// Delete
personRoute.route('/delete-person/:id').delete((req, res, next) => {
    PersonModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = personRoute;