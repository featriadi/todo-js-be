const { Router } = require('express');
const {
    readTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/TaskController');

const router = Router();

router.get('/', readTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;