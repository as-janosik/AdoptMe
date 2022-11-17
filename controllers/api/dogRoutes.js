//post new dog 
//view all dogs

const router = require('express').Router();
const { Dog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newDog = await Dog.create({
            ...req.body//,
            //addedBy: req.session.user_id//This is not working for adding to the request body. Missing and required.
            
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

router.delete('/:id', withAuth, async (req,res) => {
    try{
        const dogData = await Dog.destroy({
            where: {
                id: req.params.id,
            },
        });
        if(!dogData) {
            res.status(404).json({ message: 'No Dog found with this id!' });
            return;
        }

        res.status(200).json(dogData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router