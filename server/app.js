const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const moongoose = require('mongoose')
const cors = require('cors')



//settings up connection to DB
moongoose.connect('mongodb+srv://omerShimran:gunr1980@cluster0.khdmauq.mongodb.net/?retryWrites=true&w=majority')
moongoose.connection.once('open',() => {
    console.log('connected to databse');
})

const PORT = 4000;
const app = express();

//enabling CORS
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }

app.use(cors(corsOptions))

app.use('/graphlql', graphqlHTTP({
    schema,
    graphiql : true
}));

app.listen(PORT,() => {
    console.log('listening to port ' + PORT);
})