import Movie from "../models/movie.model.js";
export const MovieIndex = (req,res) => {
    res.send("Get all the movie lists")
};

export const MovieCreate = async(req,res) => {
    // id , title , description
    // console.log(req.body);
    try {
    //validate your date.
     const newMovie = await Movie.create({
        title: req.body.title,
        desc: req.body.desc,
        song: req.body.song,
        director : req.body.director,
        ticket: req.body.ticket
     });
     //Successful or eror?
    
        // const movie = await newMovie.save();
        return res.status(201).json({message: "created successfully...!",newMovie})
    } catch (error) {
        return res.status(404).json({message:error.message})
        
    }
    // return res.json(req.body);
    //create the movie info.
}

export const MovieUpdate = (req,res) => {
    res.send("Update a new movie lists")
}

export const MovieDelete = (req,res) => {
    res.send("Delete the lists")
}