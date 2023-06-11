import { RequestHandler } from "express";
import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser: RequestHandler = async (req, res) => {
  // const username = req.body.username;
  // const email = req.body.email;
  // const rawPassword = req.body.password;
  const { username, email } = req.body;
  const rawPassword = req.body.password;

  if (!username || !email || !rawPassword) {
    res.status(400).json({ message: "Please add all credentials" });
  }

  const existingUsername = await userModel.findOne({ username: username });
  if (existingUsername) {
    res.json({ message: "Username is already taken" });
    return;
  }
  const existingEmail = await userModel.findOne({ email: email });
  if (existingEmail) {
    res.json({ message: "Email is already taken" });
    return;
  }
  // if (!username || !email || !rawPassword) {
  //   res.json({ error: "Credetials missing" });
  // }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(rawPassword, salt);

  const newUser = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });
  const response = await newUser.save();
  res.json(response);
};

export const loginUser: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const isUser = await userModel.findOne({ email });
  if (isUser) {
    // res.json(isUser);
    const validity = await bcrypt.compare(password, isUser.password);

    if (!validity) {
      res.json({ message: "Password didn't matched" });
    } else {
      const token = jwt.sign(
        {
          email: isUser.email,
          id: isUser._id,
        },
        "MERN",
        { expiresIn: "2h" }
      );
      res.json({ isUser, token });
    }
  } else {
    res.json({ message: "Failed to login" });
  }
};
