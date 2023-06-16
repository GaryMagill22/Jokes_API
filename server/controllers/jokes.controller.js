const Jokes = require('../models/jokes.model')
const Joke = require('../models/jokes.model')

module.exports.apiTest = (req, res) => {
    res.json({ message: "succesful wooot woooot!" })
}

// Create Joke
module.exports.createJoke = (req, res) => {
    const newJoke = req.body
    Jokes.create(newJoke)
        .then((joke) => { res.json({ results: joke }) })
        .catch((err) => { res.json({ err: err }) })
}


// Read All Jokes
module.exports.allJokes = (req, res) => {
    Jokes.find()
        .then((allJokes) => { res.json({ results: allJokes }) })
        .catch((err) => { res.json({ err: err }) })

}


// Find One Joke
module.exports.readOne = (req, res) => {
    const idFromParams = req.params.idFromParams
    Jokes.findOne({ _id: idFromParams })
        .then((oneJoke) => { res.json({ results: oneJoke }) })
        .catch((err) => { res.json({ err: err }) })
}



// Update One Joke
module.exports.update = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((updateJoke) => { res.json({ results: updateJoke }) })
        .catch((err) => { res.json({ err: err }) })
}



// Delete One
module.exports.delete = (req, res) => {
    jokes.deleteOne({ _id: req.params.id })
        .then((deleteJoke) => { res.json({ results: deleteJoke }) })
        .catch((err) => { res.json({ err: err }) })
}