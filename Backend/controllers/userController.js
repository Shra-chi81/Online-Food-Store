const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc post Register user
//@route post/api/users/register
//@access public

const registerUser = asyncHandler(async (req,res) => {
    const {username, password,email,phoneNumber} = req.body;
    if(!username || !password ||!email ||!phoneNumber){
        res.status(400)
        throw new Error({message:"All field are required"})

    }

    //hash password
    const hasedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        email,
        password:hasedPassword,
    });

    if(user){
        res.status(201).json({_id:user._id,email:user.email,phoneNumber:user.phoneNumber})
    }else{
        res.status(400);
        throw new Error({message:"User data not valid"})
    }
    res.json({message:"User register successfully"})

});

//@desc post login user
//@route post/api/users/login
//@access public

const loginUser = asyncHandler(async (req,res) => {
    const {phoneNumber,email,password} = req.body;
    if(!email || !phoneNumber || !password){
       res.status(400);
       throw ("All field sre required!")

    }

})