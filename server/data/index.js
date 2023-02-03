import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    about: "Some random about me",
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    email: "steve@gmail.com",
    password: "stevespassword",
    picturePath: "p3.jpeg",
    about: "Another random about me",
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    postName: "Steve Ralph",
    description: "Some really long random description",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    title: "Some random title",
    userTag: "@steveralph",
    buttonLink: "https://www.google.com",
  },
];
