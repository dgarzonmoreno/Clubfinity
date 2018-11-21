const Joi = require('joi');
const userDAO = require('../DAO/UserDAO');


exports.getAll = (req,res)=>{
    console.log('API GET request called for all users');
    userDAO.getAllUsers((err, result)=>{
        if (err) throw err;
        res.send(result);
    });
};

exports.get = (req,res)=>{
    console.log(`API GET request called for ${req.params.id}`);
    userDAO.getUser(req.params.id,(err,result)=>{
        if(err) throw err;
        if(result){
            res.send(result);
        }
        else{
            res.status(404).send(`User with username ${req.params.id} not found`);
        }
    });
};
exports.update = (req,res)=>{
    const schema = {
        fname: Joi.string().regex(/\w+/).min(2).max(20),
        lname: Joi.string().regex(/\w+/).min(2).max(20),
        dateOfBirth: Joi.string().regex(/^((0)[0-9]|(1)[0-2])(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/).min(10).max(10),
        email: Joi.string().regex(/^[0-9A-Za-z]+@ufl.edu$/).email(),
        username: Joi.string().min(3).max(20),
        password: Joi.string().min(3).max(20)
    };
    console.log(`API PUT request called for ${req.params.id}`);
    userDAO.getUser(req.params.id,(err,result)=>{
        if(err) throw err;
        if(result){
            Joi.validate(req.body,schema,(err,value)=>{
                if(err) res.status(404).send(err['message']);
                else if(Object.keys(value).length===0){
                    res.status(404).send('No request body');
                }
                else{
                    for(var entry in value){
                        if(value[entry]){
                            userDAO.updateUser(req.params.id, entry, value[entry],(err)=>{
                                if(err) throw err;
                            });
                        }
                    }
                    res.status(204).send();
                }
            });
        }
        else{
            res.status(404).send(`User with username ${req.params.id} not found`)
        }
    });
};
exports.create = (req,res)=>{
    const schema = {
        fname: Joi.string().regex(/^\w+$/).min(2).max(20).required(),
        lname: Joi.string().regex(/\w+/).min(2).max(20).required(),
        dateOfBirth: Joi.string().regex(/^((0)[0-9]|(1)[0-2])(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/).min(10).max(10),
        email: Joi.string().regex(/^[0-9A-Za-z]+@ufl.edu$/).email(),
        username: Joi.string().min(3).max(20).required(),
        password: Joi.string().min(3).max(20).required()
    };
    userDAO.getUser(req.body.username,(err, result)=>{
        if(err) throw err;
        if(!result){
            console.log('User does not exist, creating...');
            Joi.validate(req.body,schema,(err,value)=>{
                if(err) res.status(400).send(err['message']);
                else {
                    console.log(value);
                    userDAO.createUser(value['fname'],value['lname'],value['dateOfBirth'],value['email'],value['username'],value['password'],(err)=>{
                        if(err) throw err;
                        res.status(201).send('User created successfully');
                    });
                }
            });
        }
        else{
            res.status(400).send('User already exists in the database');
        }
    });
    
};
exports.delete = (req,res)=>{
    userDAO.getUser(req.params.id,(err,result)=>{
        if(err) throw err;
        if(result){
            userDAO.deleteUser(req.params.id,(err)=>{
                if(err) throw err;
            });
            res.status(204).send('User successfully deleted');
        }
        else{
            res.status(404).send(`User with username ${req.params.id} not found`);
        }
    });
};