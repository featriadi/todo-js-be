const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    note: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Task', taskSchema);