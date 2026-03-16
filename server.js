require("dotenv").config()

const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")

const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes")
const recommendationRoutes = require("./routes/recommendationRoutes")

const app = express()

connectDB()

app.set("view engine","ejs")

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
secret:process.env.SESSION_SECRET,
resave:false,
saveUninitialized:true
}))

app.use("/",authRoutes)
app.use("/",productRoutes)
app.use("/",recommendationRoutes)

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/dashboard",(req,res)=>{
res.render("dashboard")
})

app.listen(process.env.PORT,()=>{
console.log(`Server running at http://localhost:${process.env.PORT}`)
})