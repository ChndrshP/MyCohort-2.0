const express = require("express");
const z = require("zod");
const zod = require("zod");
const app = express();


app.use(express.json());

const schema = zod.object({
    email : zod.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(zod.number())
})

app.post("/health-checkup", function(req,res){
    //kidneys = [1 , 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(req.body);

    if(!response.success){
        res.status(441).json({
            msg:"invalid inputs"
        })
    }else{
        res.send({
            response
        })
    }
})


app.listen(3000, ()=>{
    console.log("App running on port 3000");
});


//Middleware implementation
/*
function middleware(req, res, next){
    fetch().then(() => {
        next();
    })
}

app.post("/health-checkup", function(req, res){
    const kidney = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("You have " + kidneyLength + " kidney");    
});


app.use(function(err, req ,res, next){
    res.json({
        msg:"Server Error"
    })
})
*/