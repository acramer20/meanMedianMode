const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./nums');

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError('You must enter a query of numbers as a comma-separated list.', 400)
    }
    let numsAsStrs = req.query.nums.split(',');
    // checking for the numbers and seeing if anything other than a num was put in.
    let nums = convertAndValidateNumsArray(numsAsStrs);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
  
    let result = {
      operation: "mean",
      result: findMean(nums)
    }
  
    return res.send(result);
  });

app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must enter a query of numbers as a comma-separated list.', 400)
    }
    let numsAsStrs = req.query.nums.split(',');
    //checking if there are any elements other than nums.
    let nums = convertAndValidateNumsArray(numsAsStrs);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: findMedian(nums)
      }
    
    return res.send(result)
})

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must enter a query of numbers as a comma-separated list.', 400)
    }
    let numsAsStrs = req.query.nums.split(',');
    //checking if there are any elements other than nums.
    let nums = convertAndValidateNumsArray(numsAsStrs);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: findMode(nums)
      }
    
    return res.send(result)
})

/** 404 error handler */

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
  
    // pass the error to the next piece of middleware
    return next(err);
  });

/** general error handler */

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
  });
  
  
  app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
  });