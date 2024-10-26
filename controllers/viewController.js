const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  // Render the overview template using tour data
  res.status(200).render('overview', {
    title: 'All Tours',
    tours: tours
  });
});

// Function to get a specific tour by slug
exports.getTour = catchAsync(async (req, res, next) => {
  // Retrieve the tour based on the slug parameter
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user' // Adjust fields as needed
  });

  // Check if the tour exists
  if (!tour) {
    return next(new AppError('Tour not found', 404)); // Pass error to next middleware
  }

  // Render the tour template with the tour data
  res.status(200).render('tour', {
    title: tour.name, // Set the title to the tour name
    tour // Pass the entire tour object to the template
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into Your Acount'
  });
};
