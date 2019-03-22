var express = require('express');
var router = express.Router();
var animal = require('../models/zooAnimals');

router.get('/', (req,res) =>
{
    res.send('Here we talk about animals')
});

router.get('/add/:id/:type/:description', (req,res) =>
{
    newAnimal =
        {
            animal_id: parseInt(req.params.id) ,
            animal_type: req.params.type ,
            animal_description: req.params.description
        };

    animal.create(newAnimal, (error,results)=>
    {
        if(error)
        {
            console.log(error);
            res.send(error);
        }
        else
            {
                console.log(results);
                res.send(results)
            }
    });
});

router.get('/get/:id', (req,res) =>
{
    animalToDisplay = animal.find({animal_id:req.params.id} , (error,results)=>
    {
        if(error)
        {
            console.log(error);
            res.send(error);
        }
        else
            {
                console.log(results);
                res.send(results)
            }
    });
});

router.get('/update/:id/:type/:description', (req,res) =>
{
    animal.updateOne({animal_id:req.params.id},{animal_type:req.params.type,animal_description: req.params.description},
        (error,results)=>
        {
           if(error)
           {
               console.log(error);
               res.send(error);
           }
           else
               {
                   console.log(results);
                   res.send(results);
               }
        });
});

router.get('/delete/:id',(req,res)=>
{
    animal.deleteOne({animal_id:req.params.id}, (error,results)=>
    {
       if(error)
       {
           console.log(error);
           res.send(error);
       }
       else
           {
               console.log(results);
               res.send(results);
           }
    });
});

module.exports = router;