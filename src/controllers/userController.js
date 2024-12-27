import User from "../models/userModel.js";

export const createUser = async (req,res) => {
    try {
        const userData = new User(req.body)
        const { email } = userData
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "User with email: ${email} already exists" })
        }
        await userData.save()
         const { password, ...rest } = savedUser

        return res.status(201).json({message:"User created" , rest})
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error})
    }
}

export const getUser = async (req,res) => {
    try {
        const users = await User.find()
        if (users.lenght === 0){
            return res.status(404).json({ message: "No users found" })
        }
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error})
    }
}

export const deleteUser = async (req,res) => {
    try {
        const _id= req.params.id

       const userExist = await User.findOne({ _id })

       if(!userExist){
        return res.status(404).json({ message: "User not found" })
       }
       await User.findByIdAndDelete(_id)
       return res.status(200).json({ message: "User deleted successfully" })

    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error})
        
    }
}

export const updateUser = async (req,res) => {
    try {
        const _id = req.params.id
        const userExist = await User.findOne({ _id })
        if(!userExist){
            return res.status(404).json({ message: "User not found" })
        }
        const updatedUser = await User.findByIdAndUpdate({ _id }, req.body, {
            new: true
        })
        return res.status(201).json(updatedUser)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error})
        
    }
}