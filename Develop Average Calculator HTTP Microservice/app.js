const express =  require("express");
const app=express();
const routers=require("./routes/numbersRoute");
app.use(express.json());




app.use("/numbers",routers);

app.listen(9876,()=>{
    console.log("application listening http://localhost:9876");
})