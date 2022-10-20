//RENDER all dogs

const router = require('express').Router();
const { Dog, User } = require('../models');

//Route to main.hbs
router.get('/', async (req, res) => {
  try {
    res.render('homePage');
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route to view all the dogs
router.get('/viewdogs', async (req, res) => {
  try {
    const dogData = await Dog.findAll({});

    const dogs = dogData.map((dog) => dog.get({ plain: true }));
    console.log(dogs);
//sends to the viewDogs.hbs
    res.render('viewdogs', { 
      dogs, 
      logged_in: req.session?.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dogpage/:id', async (req, res) => {
  try {
    const dogData = await Dog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const dog = dogData.get({plain: true})
    console.log(dog);
    
    res.render('dogPage', { 
      dog, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route to get to postDogs
router.get('/postDogs', async (req, res) => {
  try {
    res.render('postDogs', {
     logged_in: req.session?.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//could do .redirect(/error)

//Route to get to login
router.get('/login', (req, res) => {
  if (req.session?.logged_in) {
    res.redirect('/postDogs');
    return;
  }
  res.render('login');
});

module.exports = router;
