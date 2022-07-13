import express from 'express';
const routes = express.Router();
import { 
    createTodo,
    getTodo,
    getTodoByID,
    updateTodoByID
} from '../controllers/todo.js';


routes.route('/')
.get(getTodo)
.post(createTodo);

routes.route('/:id')
.get(getTodoByID)
.put(updateTodoByID)


export default routes