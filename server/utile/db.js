const mongoose = require('mongoose');


// const URI = 'mongodb+srv://patilavdhut198:patil%402712@cluster0.eme50.mongodb.net/'

const URI = process.env.MONGO_URI;


const connectDb = async () => {
    try{
        await mongoose.connect(URI)
        console.log("connection successfully to DB")
    }catch(error){
        console.log("database connection failed")
        process.exit(0);
    }
};

module.exports = connectDb;