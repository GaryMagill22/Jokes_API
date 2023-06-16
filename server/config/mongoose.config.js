const mongoose = require('mongoose')
const username = process.env.ATLAS_USERNAME
const dbPassword = process.env.ATLAS_PASSWORD
const db = process.env.DB

async function connectDB() {
    try {
        mongoose.connect(`mongodb+srv://garymagill22:${dbPassword}@mongopractice.zp13odz.mongodb.net/${db}`)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB

mongoose.connect(`mongodb+srv://garymagill22:${dbPassword}@mongopractice.zp13odz.mongodb.net/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a Database Commlink Sync with: ${db}`))
    .catch(err => console.log(`Something went wrong when connecting to the database `, err));
