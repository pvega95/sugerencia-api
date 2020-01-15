const Users = require('../models/user');

const userCtrol = {};
const jwt = require('jsonwebtoken');

userCtrol.getUser = async (req,res)=>{
    const users = await Users.find()
    res.json(users);
}

userCtrol.signUp = async (req,res)=>{
    const registerUser = new Users(req.body);
    await registerUser.save();
   
    const token = jwt.sign({_id: registerUser._id},'secretkey')

    return res.status(200).json({token});
}

userCtrol.signIn = async (req,res)=>{
    const { email, password} = req.body;
    const user = await Users.findOne({email})
    const userInfo = await Users.findOne({email},'email position')

    if(!user) return res.status(401).send("Email no existe")
    if (user.password !== password ) return res.status(401).send("Contraseña Incorrecta")

    const token = jwt.sign({_id : user._id}, 'secretkey')
    return res.status(200).json({token, userInfo });
}

userCtrol.tasks = async(req,res)=>{
    res.send("Tasks")
}

userCtrol.privatetasks = async(req,res)=>{
    res.send("Private Tasks")
}

module.exports = userCtrol;