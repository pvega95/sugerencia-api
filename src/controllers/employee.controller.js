const Users = require('../models/users.demo');

const userCtrol = {};

userCtrol.getUser = async (req,res)=>{
    const users = await Users.find()
    res.json(users);
}

userCtrol.createUser = async (req,res)=>{
    const user = new Users(req.body);
    await user.save();
    res.json({
        'status':'usuario creado'
    });
}

userCtrol.getUserbyId = async (req,res)=> {
    const user = await Users.findById(req.params.id)
    // console.log(req.params);
    res.json(user);
}

userCtrol.editUser = async (req,res)=>{
    const {id} = req.params;
    const user = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Users.findByIdAndUpdate(id,{$set:user},{new:true});
    res.json({
        status:'usuario actualizado'
    });
}

userCtrol.deleteUser = async(req,res)=>{
    await Users.findByIdAndDelete(req.params.id);
    res.json({
        status:'usuario eliminado'
    });
}

module.exports = userCtrol;