//required library
var mongoose = require('mongoose');

//connect to database
// mongoose.connect('mongodb://localhost/To-Do_List_db', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost/To-Do_List_db');

//acquire the connection(to check if it is successful)
const db = mongoose.connection;

//error handling
db.on('error', console.error.bind(console, 'error connecting to the DataBase'));

//up and running
db.once('open', function(){
    console.log('Successfully connected to the DataBase');
});