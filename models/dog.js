const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
    {
        id: {
            type: DataTypes.INTEGER,
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
            allowNull: true,
        },
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true,
        },        
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        addedBy: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "user",
                key: 'username'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dog',
    }
)

module.exports = Dog;