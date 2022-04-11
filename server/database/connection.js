const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/users")
        console.log('Mongo Connected Success: ' + con.connection.host)
    } catch(err){
        console.log("in catch");
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB