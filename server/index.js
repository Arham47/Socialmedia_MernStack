import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import postRoutes from "./routes/post.js"

const app= express();

app.use(cors)
app.use(bodyParser.json({limit:"30mb",extended: true})) 
app.use(bodyParser.urlencoded({limit:"30mb",extended: true})) 

app.use('/posts',postRoutes);

const CONNECTION_URL="mongodb+srv://Arham:Ak03119708281@cluster0.zn5jerr.mongodb.net/?retryWrites=true&w=majority";

const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server is running on port localhost:${PORT}`)))
.catch((err)=>console.log(err));

// mongoose.set("useFindAndModify", false);
// mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);