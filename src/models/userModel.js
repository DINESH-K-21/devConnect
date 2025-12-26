import mongoose from "mongoose";


const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  
  lastName: {
    type: String,
    
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  age:{
    type:Number,
 
  },
  gender:{
    type:String,
  },


})
const UserModel = mongoose.model("User", User);

export default UserModel

