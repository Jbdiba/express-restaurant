const {sequelize, DataTypes, Model} = require('./db')

//import models
const { Menu } = require('./Menu')
const { Restaurant } = require('./Restaurant')
const { MenuItem } = require('./MenuItem')
const { Orders } = require('./Orders')
const {Customer } = require('./Customer')

Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)

MenuItem.belongsTo(Menu)
Menu.hasMany(MenuItem)

MenuItem.belongsTo(Restaurant)
Restaurant.hasMany(MenuItem)

Orders.belongsTo(Customer)
Customer.hasMany(Orders)

Customer.belongsTo(Restaurant)
Restaurant.hasMany(Customer)

module.exports = {Menu, Restaurant, MenuItem, Orders,Customer, sequelize}