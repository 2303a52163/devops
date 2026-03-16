const express = require("express")

const router = express.Router()

const User = require("../models/User")
const Product = require("../models/Product")

const recommendProducts = require("../utils/recommender")

router.get("/recommendations", async(req,res)=>{

const user = await User.findById(req.session.userId)

const products = await Product.find()

const recommended = recommendProducts(user,products)

res.render("recommendations",{products:recommended})

})

module.exports = router