const mongoose = require('mongoose');
const dateonly=require('mongoose-dateonly')(mongoose);

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: dateonly,
        required: true
    },
     category: {
        type: String,
        required : true
     }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;

