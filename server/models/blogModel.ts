import mongoose, { InferSchemaType, model } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

type Blog = InferSchemaType<typeof blogSchema>;

export default model<Blog>("Blog", blogSchema);
