const {sequelize} = require('./db')

//import models
const {Menu} = require('./models/Menu')
const {Restaurant} = require('./models/Restaurant')
const {Item} = require('./models/Item')
const {Orders} = require('./models/Orders')
const {Customer} = require('./models/Customer')
const {Payment} = require('./models/Payment')

Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)

Item.belongsTo(Menu)
Menu.hasMany(Item)

Orders.belongsTo(Customer)
Customer.hasMany(Orders)

Customer.belongsTo(Payment)
Payment.hasMany(Customer)

Payment.belongsTo(Restaurant)
Restaurant.hasMany(Payment)


module.exports = {Menu, Restaurant, Item, Orders, Customer,Payment, sequelize}