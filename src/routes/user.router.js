const {Router} = require('express');
const router = Router();
const jwt = require('jsonwebtoken');

const userCtrl = require('../controllers/user.controller')
router.get('/', userCtrl.getUser);
router.post('/signUp', userCtrl.signUp);
router.post('/signIn', userCtrl.signIn);

router.get('/tasks',userCtrl.tasks);
router.get('/private-tasks',verifyToken,userCtrl.privatetasks);


// const userCtrl = require('../controllers/employee.controller')

// router.get('/', userCtrl.getUser);
// router.post('/', userCtrl.createUser);
// router.get('/:id',userCtrl.getUserbyId);
// router.put('/:id',userCtrl.editUser);
// router.delete('/:id',userCtrl.deleteUser);

// const fetch = require('node-fetch');
// router.get('/',async(req,res) =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     console.log(users)
//     res.json(users);
// })

module.exports = router;

function verifyToken(req,res,next){
    // console.log(req.headers.authorization)
    if(!req.headers.authorization){
        return res.status(401).send('Authorization Failed')
    }

    const token = req.headers.authorization.split(' ')[1]
    if( token === 'null'){
        return res.status(401).send('Authorization Failed')
    }

    const payload = jwt.verify(token,'secretkey')
    req.userId = payload._id;
    next();
    console.log(payload)
}