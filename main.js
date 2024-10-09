import express from "express";
import movieRoutes from "./routes/movies.routes.js"

const app = express();
const port = 6090;

app.get("/",(req,res) => {
    res.json({Msg: "This is my first commit!!!" });
});

//CRUD functionality movies

// CLIENT -> MIDDLEWARE ->SERVER
app.use("/movies", movieRoutes); 

 
app.listen(port,()=>{
    console.log(`This server is running at http://localhost:${port}`);
    
})
