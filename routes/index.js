const express=require('express');

const router=express.Router();
const homecontoller=require('../controllers/home_controller');

console.log('router loaded');


router.get('/',homecontoller.home);
router.use('/users',require('./users'));

module.exports=router;