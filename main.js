import express from "express";

const app = express();
const port = 6090;

app.get("/",(req,res) => {
    res.json({Msg: "This is my first commit!" });
});

//CRUD functionality movies

// R - For Reading movies
app.get("/movies", () => {});

// C - For Creating movies
app.post("/movies", () => {});

// U - For Updating movies
app.put("/movies/:id", () => {});

//D - For Deleting movies
app.delete("/movies/:id", () => {});



app.listen(port,()=>{
    console.log(`This server is running at http://localhost:${port}`);
    
})
