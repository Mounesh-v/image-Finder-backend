import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    imageId: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    tags: String,
  },
  { timestamps: true }
);

likeSchema.index({ userId: 1, imageId: 1 }, { unique: true });

export default mongoose.model("Like", likeSchema);
