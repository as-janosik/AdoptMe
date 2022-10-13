const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        dog_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateAdded: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        },
        addedBy: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: User,
                key: 'username'
            }
        }
    },
    {
        sequelize,
        modelname: 'dog'
    }
)

module.exports = Dog;