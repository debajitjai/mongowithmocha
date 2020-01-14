//this file connects to db and run intial flush

const mongoose = require('mongoose');
//use ES6 promise
mongoose.Promise = global.Promise;

//mocha hooks https://mochajs.org/#hooks, done inside before to wait on the database connection before moving to tests
before((done)=>{

    //mongo on docker is running and exposed on 8000, can be also default 27017. Here is the format : mongodb://host:port/dbName
mongoose.connect("mongodb://localhost:8000/mongowithmocha", {useUnifiedTopology: true, useNewUrlParser: true});
//listeners
mongoose.connection
    .once('open', ()=> {
        //console.log("Connected")
        done();
    })
    .on('error', error=> {
        console.log("Error: ", error);
    })

})

beforeEach((done)=>{
    mongoose.connection.collections.profiles.drop(()=>{
        done();
    })
})

