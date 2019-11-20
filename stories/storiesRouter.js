const express = require('express');
const router = express.Router();
const Stories = require('./helpersmodels');


const middleware = require('./helpers/helpers');

//Testing endpoint

router.get("/test", (req, res) => {
    res.status(200).json({ message: `Welcome to my Expat Journal Test` });
  });


  // Get request endpoint
  router.get("/", (req, res) => {
    Stories.getStories()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: `Unable to retrieve Journal because ${error.message}` });
      });
  });

  //Get by ID request

  router.get("/:id", middleware.checkValidtyId, (req, res) => {
    res.status(200).json(req.data);
  });


  
  module.exports = router;