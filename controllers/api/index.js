const router = require('express').Router();

const dogRoutes = require('./dogRoutes');
const userRoutes = require('./userRoutes');

router.use('/dog', dogRoutes);
router.use('/user', userRoutes);

module.exports = router;
