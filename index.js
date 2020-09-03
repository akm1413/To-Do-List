const express = require('express');
const port = 8000;
const path = require('path');
const app = express();

const db = require('./config/mongoose');
const Task = require('./models/task');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

var taskList = []

app.get('/', function(req, res){
    Task.find({}, function(err, tasks){
        if(err)
        {
            console.log('error in fetching data from the DataBase !!');
            return;
        }
        return res.render('home', {
        title : "My Tasks" ,
        task_list : tasks
        });
    });
});
 
//adding a task to-do
app.post('/create-task', function(req, res){
    Task.create({
        name: req.body.name,
        time: req.body.time,
        category: req.body.category
    },

    //error handling while adding the task
    function(err, newTask){
        if(err)
        {
            console.log('error in adding the Task !!');
            return;
        }
        console.log('***##***', newTask);
        return res.redirect('back');
    });
    
});

//deleting a task from the list
app.get('/delete-task/', function(req, res){
    //get the id from query in the url
    let id = req.query.id;

    //find the respective task in the DB using id and delete it
    Task.findByIdAndDelete(id, function(err){
        if(err)
        {
            console.log('error in deleting the task !!');
            return;
        }
        return res.redirect('back');
    });
    
});

const taskCounter = taskList.length;

//error handling in connecting the Server
app.listen(port, function(err){
    if(err) { console.log('Error in running the server')}

    console.log('Yup!! My Express Server is runninggg on port: ', port);
});
