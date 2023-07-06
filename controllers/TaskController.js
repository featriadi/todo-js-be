const Task = require('../models/Task');

module.exports = {
    createTask: async (req, res) => {
        try {
            const task = { 
                note: req.body.note,
                completed: false
            };
            const data = await Task.create(task);

            return res.status(201).json(data)
        } catch (error) {
            return res.status(404).json({
                status: 'error',
                message: error.message,
            });
        }
    },

    readTask: async (req, res) => {
        try {
            const { completed } = req.query;
            var data;

            if (completed) {
                data = await Task.find({ 
                    completed: completed
                });
            } else {
                data = await Task.find();
            }

            return res.status(200).json(data)
        } catch (error) {
            return res.status(404).json({
                status: 'error',
                message: error.message,
            });
        }
    },

    updateTask: async (req, res) => {
        try {
            const { id } = req.params;
            const { note, completed } = req.body;
            const data = await Task.findOne({ _id: id });

            data.note = note;
            data.completed = completed;
            data.save();

            return res.status(200).json(data)
        } catch (error) {
            return res.status(404).json({
                status: 'error',
                message: 'Task not found',
            });
        }
    },

    deleteTask: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await Task.findOne({ _id: id });

            data.deleteOne();
            
            return res.status(200).json({
                status: 'success',
                message: 'Success delete task',
            });
        } catch (error) {
            return res.status(404).json({
                status: 'error',
                message: 'Task not found',
            });
        }
    },
}