const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Payment extends Model {}

Payment.init({
    PaymentType: DataTypes.STRING,
    CustomerId : DataTypes.INTEGER
}, 
{   sequelize, 
    timestamps: false
})

module.exports = {Payment}