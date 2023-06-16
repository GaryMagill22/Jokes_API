const express = require('express');
const app = express();
require('dotenv').config();
const port = 8001;


// Configure express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




const Routes = require('./routes/jokes.routes')
Routes(app)

const connectDB = require('./config/mongoose.config')
connectDB()


app.listen(port, () => console.log(`Listening on port: ${port}`));

