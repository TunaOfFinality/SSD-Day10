import User from "../models/User.js"

const userService = {
  getAllUsers: async () => {
    return await User.find();
  },
  getUserById: async (id) => {
    return await User.findById(id); 
  },
  getByUsername: async (name) => {
    return await User.findOne({ name: name });
  },
  create: async(name, password, age, phone) => {
    return await User.create({
      name: name,
      password: password,
      age: age,
      phone: phone
    })
  }
}

export default userService