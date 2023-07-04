const Task = require('../models/Task');

module.exports = {
    createTask: async (req, res) => {
        try {
            const { note } = req.body;
            Task.create({ note });

            res.statusCode = 201;
            res.send('Success create task');
        } catch (error) {
            res.send(error.message);
        }
    },

    readTask: async (req, res) => {
        try {
            const task = await Task.find();

            res.statusCode = 200;
            res.send(task)
        } catch (error) {
            res.send(error.message)
        }
    },

    updateTask: async (req, res) => {
        try {
            const { id } = req.params;
            const { note } = req.body;
            const task = await Task.findOne({ _id: id });

            task.note = note;
            task.save();

            res.statusCode = 200;
            res.send('Success update task')
        } catch (error) {
            res.statusCode = 410;
            res.send('Task not found');
        }
    },

    deleteTask: async (req, res) => {
        try {
            const { id } = req.params;
            const task = await Task.findOne({ _id: id });

            task.deleteOne();

            res.statusCode = 200;
            res.send("Success delete task")
        } catch (error) {
            res.statusCode = 410;
            res.send('Task not found');
        }
    },
}