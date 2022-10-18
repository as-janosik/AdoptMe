//RENDER all dogs

const router = require('express').Router();
const { Dog, User } = require('../models');
const withAuth = require('../utils/auth');

//Route to main.hbs
router.get('/', async (req, res) => {
  try {
    res.render('main');
  } catch (err) {
    res.status(500).json(err);
    res.redirect('error')
  }
});

//Route to view all the dogs
router.get('/viewDogs', async (req, res) => {
  try {
    const dogData = await Dog.findAll();

    const dogs = dogData.map((dog) => dog.get({ plain: true }));
//sends to the viewDogs.hbs
    res.render('viewDogs', { 
      dogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
    res.redirect('error')
  }
});


//Route to get to postDogs
router.get('/postDogs', async (req, res) => {
  try {
    res.render('postDogs');
  } catch (err) {
    res.status(500).json(err);
    res.redirect('error')
  }
});

//Route to get to login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('main');
    return;
  }

  res.render('login');
});

module.exports = router;
