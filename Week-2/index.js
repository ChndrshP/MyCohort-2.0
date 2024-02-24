const express = require("express")
const app = express()

const user = [{
    name:"Chandresh",
    cars: [{
        fixed: true
    }]
}];

app.get("/", function(req,res){

})

app.listen(3000)


/*
Requests :             Status Codes : 
    GET (Read),           200(everything's fine),
    POST (Create),        404(Not defined),
    PUT (Update),         500(Internnal server error),
    DELETE (Delete)       411(Input incorrect)
    --------------        403(access not allowed)
*/ 

