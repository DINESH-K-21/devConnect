const express = require("express");
const { connectDB } = require("./config/db.js");
const User = require("./models/userModel.js");

const app = express();

app.use(express.json());

app.post("/signUp", async(req,res) => {
  const user = new User({
    firstName: "justin",
    lastName: "dinesh",
    password: "Dinesh@123",
    email: "dinesh@gmail.com",
  });
  await user.save();
  res.json({user})
});

connectDB()
  .then(() => {
    console.log("database connection established!!");

    app.listen("7777", () => {
      console.log(`server is runnin on PORT 7777`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
