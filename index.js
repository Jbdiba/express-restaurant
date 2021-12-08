const {sequelize} = require('./db')

//import models
const {Menu} = require('./models/Menu')
const {Restaurant} = require('./models/Restaurant')
const {Item} = require('./models/Item')
const {Orders} = require('./models/Orders')
const {Customer} = require('./models/Customer')

Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)

Item.belongsTo(Menu)
Menu.hasMany(Item)

Orders.belongsTo(Customer)
Customer.hasMany(Orders)

Customer.belongsTo(Restaurant)
Restaurant.hasMany(Customer)



module.exports = {Menu, Restaurant, Item, Orders, Customer, sequelize}