const express = require('express');
const router = express.Router();

const MenuItems = require('../Menu');


router.get('/:inputt',async(req,res)=>{
    try{
        const inputt = req.params.inputt;
        if(inputt == 'sweet' || inputt == 'sour' || inputt == 'spicy'){
            const ans = await MenuItems.find({taste:inputt});
            console.log('responce fetched');
            res.status(200).json(ans);

        }
        else{
            console.log('Invalid Input');
            res.status(500).json('Invalid');
        }
    }
    catch(err){
        console.log('Internal Server Error');
    }
});

router.get('/',async(req,res)=>{
    try{
        const ans = await MenuItems.find();
        res.status(200).json(ans);
    }
    catch(err){
        console.log('Internal Server error');
    }
})




router.post('/',async(req,res)=>{
    try{
        const menuData = req.body;
        const newMenu = new Menu(menuData);
        const savedMenu = await newMenu.save();
        res.status(200).json(savedMenu);
    }
    catch(err){
        console.log('Internal Server Error');
    }
})

module.exports = router;