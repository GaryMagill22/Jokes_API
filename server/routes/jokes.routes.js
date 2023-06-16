const JokesController = require('../controllers/jokes.controller')
const Jokes = require('../models/jokes.model')
// Model can now see Controller

module.exports = (app) => {
    //Api test
    app.get('/api/test', JokesController.apiTest)



    // Create Joke
    app.post('/api/jokes/new', JokesController.createJoke)




    // // Read All jokes           this must match Controller export for that route
    app.get('/api/jokes', JokesController.allJokes)


    // // Read/Find One
    app.get('/api/jokes/:id', JokesController.readOne)





    // // Update Joke
    app.put('/api/Jokes/:id', JokesController.update)


    // // Delete One Joke
    app.delete('/api/jokes/:id', JokesController.delete)






}