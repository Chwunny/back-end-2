

// Outside of module.exports, create a variable that requires your db.
const houses = require('./db.json')
// Outside of module.exports, create a variable to keep track of your upcoming house id, and set it equal to 4 (we already have 3 houses in the database with id’s 1, 2, and 3).
let globalId = 4
// Build out the functionality of your getHouses function. It should send all the houses in the houses database to the front-end.
    


// Build out the functionality of your deleteHouse function. It should find the index of the house in the houses database whose id correlates to the id passed in as a parameter on your endpoint (I reccomend you use the findIndex method). Once you have the index, you can delete that house from the database using the splice method. Once done, send the remaining houses to the front-end so that the view can be updated.



// Build out the funtionality of your createHouse function. It should create a new house object with the following properties: id, address, price, and imageURL. All of those values should come from req.body, except for id, which will come from the variable you created above to keep track of your upcoming house id. Once you have created the new house object, add it to your houses database using the push method. Then send all your houses to the front-end so that the view can be updated to include your new house. Don’t forget to increment your varibale tracking your upcoming house id.



// Build out the functionality for your updateHouse function. It should capture the id from your endpoints params so that you know which house to update. It should also capture type off of req.body. Type is a string and could either be ‘plus’ or ‘minus’. Next, find the index of your house in the houses array by iterating through the houses array and locating the house with the correct id (I reccomend the findIndex method). Once you have the index of the house you should be updating, use a sequce of conditional checks to see if the type is ‘minus’ or ‘plus’, and then decrease or increase the price of the hosue by $10,000. Once complete, send all the houses to the front-end so you can update the views.

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body
        let newHouse = {
            id: globalId,
            address,
            price: +price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        
        let index = houses.findIndex(e => e.id === +id)
        
        if (houses[index].price <= 10000 && type === 'minus'){
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {res.status(400).send('Something went wrong!')}
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(e => e.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }
} 