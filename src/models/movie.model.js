import { model, Schema } from "mongoose";

// Write the schema
const schema = new Schema ({
    title :{
        type : String,
        required: true,
    },
    
    desc: String,
    song: String,
    director: String,
    ticket: Number,

})

//create your model
const Movie = model("Movie", schema);

export default Movie