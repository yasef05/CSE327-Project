import { Message } from "../models/message_schema";

export const sendMessage = async(req,res,next)=> {
    const {firstName, lastName, email, phone , message} = req.body;
    if(firstName || lastName || email || phone || message){
        return res.status(400).jsoon({
            success:false,
            message:"Please fill the form",

        });
    }
        await Message.create({firstName, lastName, email, phone , message});
        res.status(200).json({
            success:true,
            message: "Message Send Successfully!", 
        });
    };