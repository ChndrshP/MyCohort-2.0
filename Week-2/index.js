const express = require("express");
const app = express();

const users = [{
    name:"Chandresh",
    cars: [{
        fixed: true
    }]
}];

app.use(express.json());

app.get("/", function(req,res){
    const chndrshCars = users[0].cars;
    const numberOfCars = chndrshCars.length;
    let numberOfFixedCars = 0;
    for(let i = 0; i < chndrshCars.length; i++){
        if(chndrshCars[i].fixed){
            numberOfFixedCars = numberOfFixedCars + 1; 
        }
    }
    const numberOfUnfixedCars = numberOfCars - numberOfFixedCars;
    res.json({
        numberOfCars, 
        numberOfFixedCars,
        numberOfUnfixedCars
    })
})

app.post("/", function(req, res){
    const isFixed = req.body.isFixed;
    users[0].cars.push({
        healthy: isFixed
    })
    res.json({
        msg: "Pleasure doin business!!"
    })
})

app.put("/", function(req,res){
    for(let i = 0; i <= users[0].cars.length; i++){
        users[0].cars[i].healthy = true;
    }
    res.json({
        msg: "Fixed!!!"
    })
})

app.listen(3000);


/*
Requests :             Status Codes : 
    GET (Read),           200(everything's fine),
    POST (Create),        404(Not defined),
    PUT (Update),         500(Internnal server error),
    DELETE (Delete)       411(Input incorrect)
    --------------        403(access not allowed)
*/ 

