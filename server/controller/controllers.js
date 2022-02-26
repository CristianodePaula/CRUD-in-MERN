const User = require('../model/User')

  const createUsers = async (req, res) => {
    try {
      const newUser = new User(req.body)
      const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }  
  }

  const readUsers = async (req, res) => {
    try {
      const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
  }

  const readUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
  } 

  const updateUsers = async (req, res) => {
    try {
        await User.findById(req.params.id);
        const updatedUser = await User.findByIdAndUpdate( 
          req.params.id, 
            { $set: req.body}, 
            { new: true }
        );
          res.status(200).json(updatedUser);
    } catch (err) {
          res.status(500).json(err);
        }
  }
  
  const deleteUsers = async (req, res) => {
    try {
      await User.deleteOne({_id: req.params.id});
        res.status(200).json({message: 'Usuário deletado'});
    } catch (err) {
        res.status(500).json(err);
      }
  }
  
module.exports = { createUsers, readUsers, readUserById, deleteUsers, updateUsers }

