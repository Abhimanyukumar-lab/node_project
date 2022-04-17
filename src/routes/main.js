const express=require('express')
const { route } = require('express/lib/application')

const Detail=require("../models/Detail")
const Slider=require("../models/Slider")
const Service=require("../models/Service")
const Contact=require("../models/Contact")
const { response } = require('express')

const routes=express.Router()

routes.get("/", async (req,res)=>{


    const details=await Detail.findOne({"_id":"61f80c62249d60c0e7b14425"})
    
     const slides=await Slider.find()
    
    // console.log("details")
//    console.log(slides)

    const services=await Service.find()

   
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})


routes.get("/gallery", async(req,res)=>{
    const details=await Detail.findOne({"_id":"61f80c62249d60c0e7b14425"})
    res.render("gallery",{
        details:details
    })
})
//Process contact Form

routes.post("/process-contact-form",async(request,response)=>{
    console.log("form is submit")
    console.log("request.body")
    //save the data mongo db
try{
    const data=await Contact.create(request.body)
    console.log(data)
    response.redirect("/")

}catch(e)
{
    console.log(e)
    response.redirect("/")
}


})


module.exports=routes