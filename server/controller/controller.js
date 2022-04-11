var UserDb = require('../model/model')

// Create, Save user API
exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({message: "Content can't be empty"})
        return
    } else {
        const user = new UserDb({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
        });

        user
            .save(user)
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occured"
                })
            })
    }
}

// Get All Users or one API
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id

        UserDb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message:"No data found"})
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Catch block exception"
                })
            })
    } else {
        UserDb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Some Error occured"})
        })
    }
    
}

// Update user API
exports.update = (req, res) => {
    if(!req.body) {
        return res
            .status(400)
            .send({message: "No data passed by you!"})
    } else {
        const id = req.params.id
        UserDb.findByIdAndUpdate(id, req.body)
            .then(data => {
                if(!data) {
                    res.status(404).send({message: "Cannot update, no user in DB!"})
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error update user!"})
            })
    }
}

// Delete user API
exports.delete = (req, res) => {
    const id = req.params.id

    UserDb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: 'Cannot delete, not found id in DB'})
            } else {
                res.send({
                    message:"User deleted Successfully"
                })
            }
        })
}