const Joi = require('joi');
const userDAO = require('../DAO/UserDAO');

const schema = {
    fname: Joi.string().regex(/w+/).min(2).max(20).required(),
    lname: Joi.string().regex(/w+/).min(2).max(20).required(),
    dateOfBirth: Joi.string().regex(/^((0)[0-9]|(1)[0-2])(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/).min(10).max(10),
    email: Joi.string().regex(/^[0-9A-Za-z]+@ufl.edu$/).email(),
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).max(20).required()
};


exports.getAll = (req,res)=>{
    console.log('API GET request called for all users');
    userDAO.getAllUsers((result)=>{
        res.send(result);
    });
};

exports.get = (req,res)=>{
    console.log(`API GET request called for ${req.params.id}`);
    userDAO.getUser(req.params.id,(result)=>{
        if(result){
            res.json(result);
        }
        else{
            res.status(404).send(`User with username ${req.params.id} not found`);
        }
    });
};
exports.update = (req,res)=>{
    const params = req.query;
    if(Object.keys(params).length!=0){
        console.log(`API PUT request called for ${req.params.id}`);
        userDAO.getUser(req.params.id,(result)=>{
            if(result){
                for(var entry in params){
                    if(!Object.keys(result[0]).includes(entry)){
                        res.status(404).send(`User has no attritube of ${entry}`);
                        return;
                    }
                }
                for(var entry in params){
                    userDAO.updateUser(req.params.id,entry,params[entry]);
                }
                res.status(204).send();
            }
            else{
                res.status(404).send(`User with username ${req.params.id} not found`)
            }
        });
    }
    else{
        res.status(404).send('No query string passed into request; Must include parameters to be updated');
    }
};
exports.create = (req,res)=>{
    userDAO.getUser(req.body.username,(result)=>{
        if(!result){
            Joi.validate(req.body,schema,(err,value)=>{
                if(err) res.status(400).send(err);
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
    userDAO.getUser(req.params.id,(result)=>{
        if(result){
            userDAO.deleteUser(req.params.id);
            res.status(204).send('User successfully deleted');
        }
        else{
            res.status(404).send(`User with username ${req.params.id} not found`);
        }
    });
};