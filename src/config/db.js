const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect( "mongodb+srv://justindinesh21:IuToXhPai1z588CE@devconnect.e3pvsdi.mongodb.net/devConnect" );
};
module.exports = {connectDB}

