const express=require("express")
const app=express()
app.set("view engine","ejs")
app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/service",(req,res)=>{
    res.render("service")
})
app.listen(8080,()=>{
    console.log("server started")
})