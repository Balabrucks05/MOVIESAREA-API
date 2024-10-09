export const MovieIndex = (req,res) => {
    res.send("Get all the movie lists")
};

export const MovieCreate = (req,res) => {
    // id , title , description
    console.log(req.body);

    return res.json(req.body);
    

    //create the movie info
}

export const MovieUpdate = (req,res) => {
    res.send("Update a new movie lists")
}

export const MovieDelete = (req,res) => {
    res.send("Delete the lists")
}