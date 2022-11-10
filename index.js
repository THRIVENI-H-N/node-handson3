const express = require('express');
const app = express();
const middleware1 = (req,res,next)=>{
    console.log("middleware1");
    next();
}

const middleware2 = (req,res,next)=>{
    console.log("middleware2 for globally");
    next();
}
app.use(middleware2);
app.get('/page1', middleware1,(req,res)=>{
    res.send("<h1>page with middleware 1 & 2</h1>")
})

app.get('/page2',(req,res)=>{
    res.send('<h1>page with middleware 2')
})
app.listen(3000,()=>{
    console.log("server started");
})