const sequelize = require('../config/connection');
const { User } = require('../models');
const { Dog } = require('../models');

const userData = require('./userData.json');
const dogData = require('./dogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Dog.bulkCreate(dogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
