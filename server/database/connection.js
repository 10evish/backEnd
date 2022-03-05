const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const dbURL = "mongodb+srv://vishaln:PA8tMiPBVQT6rzL3@cluster0.fvda1.mongodb.net/blogs?retryWrites=true&w=majority";
        const con = await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB