const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./controller.js')

// Setup an endpoint to get all houses, making sure to call you controllers getHouses function.
app.get('/api/houses', ctrl.getHouses)
// Setup an endpoint to create a house, making sure to call you controllers createHouse function.
app.post('/api/houses', ctrl.createHouse)
// Setup an endpoint to update a house, making sure to call you controllers updateHouse function. Note: It should require an id param in order to allow for you to update the correct house.
app.put('/api/houses/:id', ctrl.updateHouse)
// Setup an endpoint to delete a house, making sure to call you controllers deleteHouse function. Note: It should require an id param in order to allow for you to delete the correct house.
app.delete('/api/houses/:id', ctrl.deleteHouse)





app.listen(4004, () => console.log('Up and running on 4004!'))