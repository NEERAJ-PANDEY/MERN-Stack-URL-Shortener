const mongoose = require("mongoose");
require("dotenv").config();

//local db
// const DB_URL = 'mongodb://0.0.0.0:27017/urlshortener'; 

const connect = () => {
    return mongoose.connect(process.env.DB_URL);
    //  local db
    // return mongoose.connect(DB_URL);
};

module.exports = connect;