const express = require('express')
const path = require('path') //node native module
const { Restaurant } = require('./models/Restaurant')
const { Menu } = require('./models/Menu')
const { Item } = require('./models/Item')
const { Orders } = require('./models/Orders')
const { Customer } = require('./models/Customer')
const { Payment } = require('./models/Payment')

const app = express()
const port = 3000

//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

// //GET method on /flipcoin route responds with heads or tails
// app.get('/flipcoin', (req, res) => {
//     let coinflip = Math.floor(Math.random()*2)
//     if (coinflip == 1){
//         coinflip = 'Heads'
//     } else {
//         coinflip = 'Tails'
//     }
//     res.send(coinflip)
// })

//GET method on /restaurants route returns all restaurants
app.get('/Restaurant', async (req,res) => {
    //find all instances of the Model Restaurant
    const allRestaurants = await Restaurant.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allRestaurants)
})

//GET method on /Menu route returns all menu
app.get('/Menu', async (req,res) => {
    //find all instances of the Model Menu
    const allMenus = await Menu.findAll()
    //respond with allMenus as a json objeect
    res.json(allMenus)
})

//GET method on /Item route returns all item
app.get('/Item', async (req,res) => {
    //find all instances of the Model Item
    const allItems = await Item.findAll()
    //respond with allItems as a json objeect
    res.json(allItems)
})

//GET method on /Orders route returns all orders
app.get('/Orders', async (req,res) => {
    //find all instances of the Model Order
    const allOrders = await Orders.findAll()
    //respond with allOrders as a json objeect
    res.json(allOrders)
})

//GET method on /Cusatomer route returns all customers
app.get('/Customer', async (req,res) => {
    //find all instances of the Model Customer
    const allCustomers = await Customer.findAll()
    //respond with allCustomers as a json objeect
    res.json(allCustomers)
})

//GET method on /Cusatomer route returns all customers
app.get('/Payment', async (req,res) => {
    //find all instances of the Model Customer
    const allPayments = await Payment.findAll()
    //respond with allCustomers as a json objeect
    res.json(allPayments)
})

//return one order by id
app.get('/Orders/:id', async (req,res) => {
    //find one specific instance of the Orders model by id
    const thisOrder = await Orders.findByPk(req.params.id)
    //respond with allOrders as an array of json objects
    res.json(thisOrder)

    // in browser checking should be with localhost:3000/orders/1
})

// return one customer by name
app.get('/Customer-customerName/:name', async (req,res) => {
    //find one specific instance of the customers model by name
    const thisCustomer = await Customer.findOne({where:{customerName: req.params.name}})
    //respond with allCustomers as an array of json objects
    res.json(thisCustomer)

    // in browser checking should be with localhost:3000/Customer-customerName/Michael
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})