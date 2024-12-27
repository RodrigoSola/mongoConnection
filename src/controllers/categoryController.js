import Category from "../models/categoryModel.js";

export const getCategory = async (req,res) => {
    try {
        const categories = await Category.find()
       if(categories.lenght === 0){
         return res.status(404).json({ message: "No categories found" })  // si no hay categorias devuelve un mensaje 404 y un mensaje de error
        }
        return res.status(200).json(categories)
      
    
    } catch (error) {
       return res.status(500).json({ message: "Server error", error })
    }
}

export const createCategory = async (req,res) => {

    try {
        const name = req.body.name
        const categoryExit = await Category.findOne({ name })
if(categoryExit){
    return res.status(400).json({ message: "Category already exists" })
}
        const newCategory = new Category({ name })
        const response = await newCategory.save()
        return res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error ", error })
    }
}

export const deleteCategory = async (req,res) => {

    try {
        const _id = req.params.id
        const categoryExit = await Category.findOne({ _id })
if(!categoryExit){
    return res.status(400).json({ message: "Category does not exist" })
}
        const response = await Category.findByIdAndDelete(_id)
        return res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error ", error })
    }
}