import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    postName: String,
    title: String,
    userTag: String,
    buttonLink: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
