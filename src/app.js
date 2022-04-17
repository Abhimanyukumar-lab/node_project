var express=require("express")
const hbs=require("hbs")
const mongoose=require("mongoose")

const bodyparser=require("body-parser")

const app=express();


const routes=require('./routes/main')
const  Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")

app.use(bodyparser.urlencoded({
    extended:true
}
))




app.use('/static',express.static("public"))
app.use('',routes)




//template hbs
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")
//Database connection
mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db connect sucesslly")

    //     Service.create([
    //         {
    //             icon:'fab fa-accusoft',
    // title:'Provide Best Courses',
    // description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa delectus suscipit mollitia verovoluptatum! Sed possimus dolor autem veritatis? Facere.',
    // linkText:'https://www.learneinsteintechnology.com',
    // link:'check'
    //         },
    //         {
    //             icon:'fab fa-affiliatetheme',
    // title:'Learn Project',
    // description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa delectus suscipit mollitia verovoluptatum! Sed possimus dolor autem veritatis? Facere.',
    // linkText:'https://www.learneinsteintechnology.com',
    // link:'Learn'
    //         },
    //         {
    //             icon:'fab fa-affiliatetheme',
    // title:'Learn Project',
    // description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa delectus suscipit mollitia verovoluptatum! Sed possimus dolor autem veritatis? Facere.',
    // linkText:'https://www.learneinsteintechnology.com',
    // link:'Learn'
    //         }
    //     ])




// Slider.create([
//     {
//         title:'Learn Technology  in very easy manner',
//         subTitle:'Withoue Technology Not Survive in a world!',
//         imageUrl:'/static/images/s1.jpg'
//     },
//     {
//         title:'Technology is way of Life  ',
//         subTitle:'Technology make a Easy Life',
//         imageUrl:'/static/images/s2.jpg'
//     },
//     {
//         title:'Technology is Very important ....',
//         subTitle:'Withoue Technology Not Survive in a world!',
//         imageUrl:'/static/images/s3.jpg'
//     },
// ])





    // Detail.create({
    //     brandName:"Einstein technology!",
    //     brandIconUrl:"https://scontent.fixr3-2.fna.fbcdn.net/v/t1.6435-9/37026360_800771446786984_213126052573085696_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_AchPI1XG90AX8zSzbC&tn=FdywFc9PFMuiyX4J&_nc_ht=scontent.fixr3-2.fna&oh=00_AT8juR2ALvGih130LT31yascPl-AdxzLUAD9R3f-wOicuQ&oe=621D6E3A",
    //     links:[

    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //            label:"Gallery" ,
    //            url:"/gallery"
    //         },
    //         {
    //            label:"About" ,
    //            url:"/About"
    //         },
    //         {
    //            label:"Contact Us" ,
    //            url:"/Contact Us"
    //         },
            

    //     ]
    // })


})



// app.get("/home",(request,response)=>{
//     response.send("wow server is started hi bro")
    
// })


app.listen(process.env.PORT | 5556,()=>{
    console.log("server started............")
})

