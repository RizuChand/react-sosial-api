const router = require("express").Router();

router.get("/", (req,res)=>{
    res.send("ini masuk ke router users")
})


module.exports = router