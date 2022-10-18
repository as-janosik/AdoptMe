//RENDER all dogs

const router = require('express').Router();
const { Dog, User } = require('../models');
const withAuth = require('../utils/auth');


//Route to get all the posts and join with the info from the user
router.get('/', async (req, res) => {
  try {
    const dogData = await Dog.findAll({
      include: [
        {
          model: Dog,
          attributes: ['dog_name'],
        },
      ],
    });

    const dogs = dogData.map((dog) => dog.get({ plain: true }));
//sends to the homepage.handlebars
    res.render('main', { 
      dogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});