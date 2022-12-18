import postMessage from "../model/postMessage.js"




export const getPost= async(req,res) => {

    try {
        const messages= await new postMessage.find();
        console.log(messages);
        res.status(200).json(messages);
    } catch (error) {
        res.status(404).json({message:error.message});
        
    }
     
    }

export const createPost= async(req,res) => {
    const body= req.body;
    const newPost= new postMessage(body);
       try {
       
       await newPost.save();
       res.status(201).json(newPost);

        
       } catch (error) {

        res.status(409).json({message:error.message});
        
       }
         
    }