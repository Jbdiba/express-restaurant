const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Menu extends Model {}

Menu.init({
    title: DataTypes.STRING,
    RestaurantId: DataTypes.INTEGER
}, 
{   sequelize, 
    timestamps: false
})

module.exports = {Menu}