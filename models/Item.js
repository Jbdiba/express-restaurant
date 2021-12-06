const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Item extends Model {}

Item.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    vegetarian: DataTypes.BOOLEAN,
    MenuId: DataTypes.INTEGER
}, 
{   sequelize, 
    timestamps: false
})

module.exports = {Item}