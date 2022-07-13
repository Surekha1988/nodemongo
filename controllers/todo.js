import ErrorResponse from '../utils/errorhandler.js'
import TodoSchema from '../models/Todo.js'

/**
 * Create Todo
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const createTodo = async(req, res, next) => {
    try{
        const todo = await TodoSchema.create(req.body)
        res.status(201).json({success: true,  data: todo})
    }catch(err){
        next(err)
    }
}

export const getTodo = async(req, res, next) => {
    try{
        const todo = await TodoSchema.find()
        res.status(200).json({success: true,  data: todo})
    }catch(err){
        next(err)
    }
}

export const getTodoByID = async(req, res, next) => {
    const {id} = req.params
    console.log(id)
    try {
        const todo = await TodoSchema.findById(id)
        res.status(200).json({success: true, data: todo})
    } catch (error) {
        
    }
}

export const updateTodoByID = async(req, res, next) => {
    try {
        const todo = await TodoSchema.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators:true
        })
        if(!todo){
            return  next(new ErrorResponse(`Todo is not updated id of ${id}`, 404))
        }
        res.status(200).json({ success: true, data: todo})
    } catch (error) {
        
    }
}