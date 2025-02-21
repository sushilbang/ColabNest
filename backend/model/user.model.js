import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fname:{
        type:String,
    },
    lname:{
        type:String,
    },
    username:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        // required:true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    about: {
        type: String,
        default: "",
    },
    skills: [String],
    experience: [
        {
            type:String,
        },
    ],
    education: [
        {
            type:String,
        },
    ],
    projects:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Project",
        }
    ],
    task:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Task",
        }
    ],
    linkedin:{
        type: String,
        trim: true,
    },
    github:{
        type: String,
        trim: true,
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;