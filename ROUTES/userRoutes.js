const express = require("express");
const app=express()
const User = require("../MODELS/user");

const router=express.Router();
router.post('/register', async (req, res) => {
    try { 
        const { FirstName, MiddleName, LastName,Email } = req.body;

        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: 'User is already registered with this email' });
        }

        const newUser = new User({
            FirstName,
            MiddleName,
            LastName,
            Email
        });
        res.status(200).json({message:'This email is being registered,user id and password will be given to the registered mail once verified by admin'})
        }catch(err){
            res.status(500).json({message:err.message})
        }
    });

    router.post

        module.exports=router