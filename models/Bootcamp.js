import mongoose from 'mongoose'
import { validateEmail } from '../utils/index.js'


const BootcampSchema = new mongoose.Schema({
    name:{
        firstname:{
            type:String,
            required:[true, 'please add the firstname'],
            maxlength:[20,'Name can not be morethan 10 characters']
        },
        lastname:{
            type:String,
            required:[true, 'please add the lastname'],
            maxlength:[20,'Name can not be morethan 10 characters']
        },

    },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: [true, 'Email address is required'],
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
    password: {
        type: String,
        required: 'Password is required', 
    },
    gender: {
        type: Number,
        min:0,
        max:2,
        required: "Gender is required"
    }


})


export default  mongoose.model('users', BootcampSchema);