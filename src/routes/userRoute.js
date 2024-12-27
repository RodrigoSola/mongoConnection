import express from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.post('/create', createUser)

userRoute.get('/get', getUser)

userRoute.delete("/delete/:id", deleteUser)

userRoute.put('/update/:id', updateUser)
export default userRoute