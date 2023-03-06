const router = require("express").Router();
const bcrypt = require("bcrypt");
const Users = require("../models/Users")
//update user
router.put("/:id", async (req, res)=>{
    if(req.body.userId === req.params.id || req.user.isAdmin) {
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


//get user


//follow user


//unfollow user 



module.exports = router