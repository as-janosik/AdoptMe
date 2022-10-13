const Dog = require('./dog');
const User = require('./user');

User.hasMany(Dog, {
    foreignKey: 'addedBy',
    onDelete: 'CASCADE'
})

Dog.belongsTo(User, {
    foreignKey: 'username'
})

module.exports = { Dog, User}