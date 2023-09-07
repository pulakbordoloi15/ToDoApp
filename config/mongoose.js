const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/TodoApp');

//acquire the connection(to check if it is successful)
const db=mongoose.connection;

//error
db.on('error', console.error.bind(console,'error connecting to db'));

//up and running then print the message
db.once('open',function(){
    console.log('Connected to the dataBase:Mongodb');
});

module.exports=db;