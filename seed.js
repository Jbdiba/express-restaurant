const {sequelize} = require('./db')
const {Restaurant, Menu, Item, Orders, Customer, Payment} = require('./index') //Q: WHY import these models from index vs. from each separate model file?
// const {Restaurant} = require('./models/Restaurant')
// const { Menu } = require('./models/Menu')
// const { Item } = require('./models/Item')
// const { Orders } = require('./models/Orders')
// const { Customer } = require('./models/Customer')

//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedRestaurant = [
  { 
    name: 'AppleBees',
    location: 'Texas',
    cuisine: 'FastFood'
  },
  {
    name: 'LittleSheep',
    location: 'Dallas',
    cuisine: 'Hotpot' 
  },
  {
    name: 'Spice Grill',
    location: 'Houston',
    cuisine: 'Indian'
  },
  {
    name: 'burgetking',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
  {
    name: 'MCDS',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
]

const seedMenu = [
  {
    title: 'Breakfast',
    RestaurantId : 1,
  },
  {
    title: 'Lunch',
    RestaurantId : 2,
  },
  {
    title: 'Dinner',
    RestaurantId : 3,
  },
]

const seedItem = [
  {
    name: 'bhindi masala',
    image: 'someimage.jpg',
    price: 9.50,
    vegetarian: true,
    MenuId : 1,
  },
  {
    name: 'egusi soup',
    image: 'someimage.jpg',
    price: 10.50,
    vegetarian: false,
    MenuId : 2,
  },
  {
    name: 'hamburger',
    image: 'someimage.jpg',
    price: 6.50,
    vegetarian: false,
    MenuId : 3,
  }
]

const seedOrders = [
  {
    CustomerId: 1,
    ordersDate: 12-01-2021,
    price: 20.50   
  },
  {
    CustomerId: 2,
    ordersDate: 12-03-2021,
    price: 15   
  },
  {
    CustomerId: 3,
    ordersDate: 12-05-2021,
    price: 13.30 
  }
]

const seedCustomer = [
  { PaymentId: 1,
    customerName: 'John',
    paymentType: 'debit-card'
  },
  { PaymentId: 2,
    customerName: 'Michael',
    paymentType: 'debit-card'
  },
  { PaymentId: 3,
    customerName: 'Jessica',
    paymentType: 'cash'
  }
]

const seedPayment = [
  {
    PaymentType: 'Card',
    CustomerId : 1,
    RestaurantId: 1
  },
  {
    PaymentType: 'Card',
    CustomerId : 2,
    RestaurantId: 2
  },
  {
    PaymentType: 'Cash',
    CustomerId : 3,
    RestaurantId: 3
  },
]

//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Restaurant.bulkCreate(seedRestaurant, {validate: true})
    await Menu.bulkCreate(seedMenu, {validate: true})
    await Item.bulkCreate(seedItem, {validate: true})
    await Payment.bulkCreate(seedPayment, {validate: true})
    await Customer.bulkCreate(seedCustomer, {validate: true})
    await Orders.bulkCreate(seedOrders, {validate: true})
    
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })


   