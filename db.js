const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
    try {
        await mongoose.connect(
            process.env.MONGOURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
}