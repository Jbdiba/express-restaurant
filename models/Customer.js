const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')
class Customer extends Model {
}

Customer.init({
    customerName: DataTypes.STRING,
    paymentType: DataTypes.STRING
},
{   sequelize,
    timestamps:false
})

module.exports = {Customer}