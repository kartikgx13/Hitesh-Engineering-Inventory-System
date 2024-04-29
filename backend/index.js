const express = require('express')

require('dotenv').config()

const {connectToMongoDB} = require('./connect')
const bodyParser = require('body-parser')
const purchaseRoutes = require('./routes/purchase.route')

const app = express();

// Middleware
app.use(bodyParser.json())

connectToMongoDB(process.env.MONGODB)
.then(() => console.log("Mongodb Connected"))
.catch(err => {
    console.log("Mongo error", err);
    process.exit(1)
}) 

// Routes
app.use('/api',purchaseRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server Started")
})