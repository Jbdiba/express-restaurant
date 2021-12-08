const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')
class Orders extends Model {
}

Orders.init({
    ordersDate: DataTypes.DATE,
    price: DataTypes.FLOAT
},
{   sequelize,
    timestamps:false
})

module.exports = {Orders}