import mongoose from 'mongoose';
import { isGoodPassword } from '../utils/validators.js';

const userSchema = new mongoose.Schema({
    name: {

        type : String,
        required : true,
        minlength : 2,
        maxlength : 20,
        trim : true,
        lowercase : true
    },
    lastName: {
        type : String,
        required : true,
        minlength : 2,
        maxlength : 20,
        trim : true,
        lowercase : true
    },
    email: {
        type: String,
        unique : true,
        required : true,
        match : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        maxlength : 30,
        minlength : 6,
        trim: true,
        lowercase : true
    },
    age:{
        type : Number,
        required : true,
        min : 18,
        max : 100
    },
    registrationDate: {
        type: Date,
        default: Date.now()
    },
    password: {
        type: String,
        required : true,
        trim : true,
        validate: {
            validator: function (value) {
                return isGoodPassword(value);
            },
            message: 'Password must be a digit, a capital letter, a lowercase and between 6 and 12 characters' 
                    
        }
    }
})

export default mongoose.model('users', userSchema)