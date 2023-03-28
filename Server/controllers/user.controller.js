const express = require('express');
const router = express.Router();


const user = require('../models/user.model')

router.get('/',(req , res)=>{
    user.find().then((docs)=>{
        res.send(docs);
    }).catch(err =>{
        res.status(501).send(err);
    })
});
router.post('/',(req , res)=>{
    const obj = req.body;
    user.create(obj).then((doc)=>{
        res.status(201).send(doc);
    }).catch(err =>{
        res.status(501).send(err);
    })
});
router.get('/:id',(req , res)=>{
    let id = req.params.id;
    user.findById(id).then((docs)=>{
        res.send(docs);
    }).catch(err =>{
        res.status(501).send(err);
    })
});

router.put('/:id',(req , res)=>{
    let id = req.params.id;
    const obj = req.body;
    user.findByIdAndUpdate(id,{name:obj.name , contact:obj.contact ,address:obj.address}).then((doc)=>{
        res.status(200).send(doc);
    }).catch(err =>{
        res.status(501).send(err);
    })
});

router.delete('/:id',(req , res)=>{
    let id = req.params.id;
    user.findByIdAndDelete(id).then((docs)=>{
        res.status(200).send(docs);
    }).catch(err =>{
        res.status(501).send(err);
    })
});

module.exports = router;