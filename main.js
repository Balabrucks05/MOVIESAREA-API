import express from "express";

const app = express();
const port = 6090;

app.get("/",(req,res) => {
    res.json({Msg: "This is my first commit!" });
});

app.listen(port,()=>{
    console.log(`This server is running at http://localhost:${port}`);
    
})
