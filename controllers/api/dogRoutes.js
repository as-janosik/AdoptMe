//post new dog 
//view all dogs

const router = require('express').Router();
const { Dog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newDog = await Dog.create({
            ...req.body,
            user_id: req.session.user_id
            //Not sure if we need the user_id: line
        });
        res.status(200).json(newDog);
    }   catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', withAuth, async (req, res) => {
    try{
        const viewDogs = await Dog.findAll();
        res.status(200).json(viewDogs);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router