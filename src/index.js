const express = require("express");
const { connectDB } = require("./config/db.js");
const User = require("./models/userModel.js");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();
    res
      .status(201)
      .json({ message: "user created successfully!!", user: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/feed", async (req, res) => {
  try {
    const user = await User.find();
    res
      .status(200)
      .send({ message: "Response sent successfully!!", user: user });
  } catch (error) {
    res.send(error);
  }
});
app.delete("/deleteuser", async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findByIdAndDelete(userId);
    res
      .status(200)
      .send({ message: "user deleted successfully!!", user: user });
  } catch (error) {
    res.send(error);
  }
});
app.patch("/updateuser", async (req, res) => {
  try {
    const { userId, ...updateData } = req.body;

    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    });
    res
      .status(200)
      .send({ message: "user updated successfully!!", user: user });
  } catch (error) {
    res.send(error);
  }
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
