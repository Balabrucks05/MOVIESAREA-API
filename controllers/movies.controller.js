import Movie from "../models/movie.model.js";
export const MovieIndex = (req,res) => {
    res.send("Get all the movie lists")
};

export const MovieCreate = async(req,res) => {
    // id , title , description
    // console.log(req.body);

    //validate your date.
     const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc,
        song: req.body.song,
        director : req.body.director,
        ticket: req.body.ticket
     });
     //Successful or eror?
    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie)
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