import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  phone: {
    type: String
  },
  role: {
    type: String,
    default: "user"
  }
})

const User = mongoose.model("User", UserSchema);

export default User