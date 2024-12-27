import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config.js"
import { connectDB } from "./db.js"
import userRoute from "./routes/userRoute.js";
import categoryRoute from "./routes/categoryRoute.js";


const app = express();

app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: true}))

connectDB()

app.use("/api/users", userRoute)
app.use("/api/category", categoryRoute)

app.listen(3000, () => {
    console.log(`Server running at ${PORT}`);
});