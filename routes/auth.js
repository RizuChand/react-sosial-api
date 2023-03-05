const Users = require("../models/Users");
const bcrypt = require("bcrypt");

const router = require("express").Router();


// REGISTER

router.post("/register", async (req,res)=>{
    try {
        // generate password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        //new user
        const newUser = new Users({
        username : req.body.username,
        email : req.body.email,
        password : hashedPass,
        }) 
        //save new user
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log("error disini");
        
    }
})

// LOGIN
router.post("/login", async (req, res)=>{
try {
    const user = await Users.findOne({email:req.body.email});
    !user && res.status(404).json("user not found");

    const validPass = await bcrypt.compare(req.body.password, user.password);
    !validPass && res.status(404).json("wrong password")

    res.status(200).json("you are login")
} catch (error) {
    console.log(error);
    
}

    
})


module.exports = router