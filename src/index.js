import express from "express";
import connectDB from "./config/db.js";
import User from "./models/userModel.js";

const app = express();
app.use(express.json());

app.get("/user", async (req,res) => {
  const user = await User.find();
  res.status(200).json(user);
});

app.post("/adduser", async(req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.patch("/updateUser", async (req, res) => {
  try {
    const { id, ...updateData } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/deleteuser", async(req, res) => {
    const removeUserId = req.body.id;
    
  try {
    const deletedUser =await User.findByIdAndDelete(removeUserId)
    // const savedUser = await user.save();

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(201).json({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

connectDB().then(() => {
  console.log("Db connected successfully!!");
  app.listen(7777, () => {
    console.log("Port is Connect to 7777");
  });
});
