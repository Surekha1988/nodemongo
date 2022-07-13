import mongoose from 'mongoose';


const TodoSchema = new mongoose.Schema({
    userId:{
        type:Number,
        required:[true,'UserId is required']
    },
    title:{
        type:String,
        required:[true,'please give title'],
        maxlength:[15,'titel more than 10 characters']
    },
    completed:{
        type:Boolean,
        required:[true,"please add completed or not"]
    }
})

export default mongoose.model('todo', TodoSchema);


