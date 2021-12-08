const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')
class Orders extends Model {
}

Orders.init({
    customerId: DataTypes.INTEGER,
    ordersDate: DataTypes.DATE,
    price: DataTypes.FLOAT
},
{   sequelize,
    timestamps:false
})

module.exports = {Orders}