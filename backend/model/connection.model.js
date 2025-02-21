import mongoose from 'mongoose';

const connectionSchema = mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required: true,
    },
    reciever:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default: "pending",
    },
},{timestamps: true});

const Connection = mongoose.model('Connection', connectionSchema);

export default Connection;