const express = require("express")
const bcrypt = require("bcryptjs")

const router = express.Router()

const User = require("../models/User")

router.get("/login",(req,res)=>{
res.render("login")
})

router.get("/register",(req,res)=>{
res.render("register")
})

router.post("/register", async(req,res)=>{

const {name,email,password} = req.body

const hash = await bcrypt.hash(password,10)

const user = new User({

name,
email,
password:hash,
interests:["electronics"]

})

await user.save()

res.redirect("/login")

})

router.post("/login", async(req,res)=>{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){

return res.send("Invalid Email")

}

const match = await bcrypt.compare(password,user.password)

if(!match){

return res.send("Invalid Password")

}

req.session.userId = user._id

res.redirect("/dashboard")

})

router.get("/logout",(req,res)=>{

req.session.destroy()

res.redirect("/login")

})

module.exports = router