const Users = require("../models/Users");

const router = require("express").Router();

router.get("/register", async (req,res)=>{

    const user = await new Users({
        username : "lovharem",
        email : "harem@gmail.com",
        password : "yahooo"
    })
    await user.save();
    res.send("ini masuk ke router auth hello world")
})



module.exports = router