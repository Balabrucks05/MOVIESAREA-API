import express from "express";

const router = express.Router();

// R - For Reading movies
router.get("/", (req,res) => {
    res.send("Get all the movie lists")
});

// C - For Creating movies
router.post("/", (req,res) => {
    res.send("Create a new movie lists")
});

// U - For Updating movies
router.put(" /:id", (req,res) => {
    res.send("Update a new movie lists")
});

//D - For Deleting movies
router.delete("/:id", (req,res) => {
    res.send("Delete the lists")
});
 
export default router;