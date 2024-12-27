import { Router } from "express";
import { createCategory, deleteCategory, getCategory } from "../controllers/categoryController.js";

const categoryRoute = Router()

categoryRoute.get('/get', getCategory)
categoryRoute.post('/create', createCategory)
categoryRoute.delete('/delete/:id', deleteCategory)



export default categoryRoute