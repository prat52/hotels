const express = require('express');
const Person = require('../person');
const req = require('express/lib/request');
const router = express.Router();


router.get('/',async (req,res)=>{
    try{
        const ans = await Person.find();
        res.status(200).json(ans);
    }catch(err){
        console.log('Internal server error');
    }
})

router.post('/', async (req, res) => {
    try {
        
        const personData = req.body; // Get data from the request body
        console.log(1);
        const newPerson = new Person(personData); // Create a new instance of the model
        console.log(2);
        const savedPerson = await newPerson.save(); // Save to the database
        console.log(3);

        res.status(200).json(savedPerson); // Return the saved document
    } catch (err) {
        console.error('Internal Server Error:', err);
        res.status(500).json({ error: 'Internal Server Error', details: err });
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const responce = await Person.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true,
        })
        if(!responce){
            return res.status(404).json('Person Not found');
        }
        console.log('data updated');
        res.status(500).json(responce);
    }
    catch(err){
        console.log('Internal Error');
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const responce = await Person.findByIdAndDelete(id);
        if(!responce){
            return res.status(404).json('Person Not found');
        }
        console.log('data deleted');
        res.status(500).json(responce);
    }
    catch(err){
        console.log('Internal Error');
    }
});


module.exports = router;