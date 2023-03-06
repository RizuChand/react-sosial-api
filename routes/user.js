const router = require("express").Router();
const bcrypt = require("bcrypt");
const Users = require("../models/Users")
//update user
router.put("/:id", async (req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                console.log(error);      
            }   
        }
        try {
            const user = await Users.findByIdAndUpdate(req.params.id, {
                $set : req.body,
            })
            res.status(200).json("Account has been change");
        } catch (error) {
            console.log(error);
            
        }
    }else {
        return res.status(403).json("you only can update yourself");
    }
})

//delete user
router.delete("/:id", async (req, res)=>{
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await Users.findByIdAndDelete(req.params.id);
            res.status(200).json("account has been deleted");
        } catch (error) {
            console.log(error);
        }
    } else {
        return res.status(403).json("you can only delete yourself account!")
    }
})

//get user
router.get("/:id", async (req, res)=>{
    try {
        const user = await Users.findById(req.params.id);
        const {password , updatedAt, ...other} = user._doc
        res.status(200).json(other);
    } catch (error) {
        res.status(404).json(error);
        
    }

})

//follow user


//unfollow user 



module.exports = router