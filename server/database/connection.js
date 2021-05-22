const mongoose = require('mongoose');

const connectDb = async ()=>{
    try {
        const con = await mongoose.connect(process.env.Mongo_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`mongodb connection succesful ${con.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}


module.exports = connectDb;