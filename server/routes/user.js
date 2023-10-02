const express = require("express");
const router = express.Router();
const User = require("../models/user");



router.post("/login", async (req, res) => {

    try {
        console.log(req.body);
        const user = await User.findByCredentials(req.body.email,req.body.password);

        res.send(user);
    } catch (error) {
        res.status(401).send(error);
    }
});



// router.post("/logout",auth,async(req,res)=>{

//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token !== req.token; 
//         })

//         await req.user.save();
//         res.send();

//     } catch (error) {
//         res.status(500).send();
//     }

// })


router.post("/register", async (req, res) => {

    console.log(req.body);
    const user = new User(req.body);

    try {

        await user.save();
        res.status(201).send(user);

    } catch (error) {

        res.status(400).send(error);

    }
});




module.exports = router;