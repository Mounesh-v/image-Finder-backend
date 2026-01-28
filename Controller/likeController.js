import Like from "../Model/Like.js";

export const toggleLike = async (req, res) => {
  try {
    const { imageId, imageUrl, tags } = req.body; // ✅ FIXED
    const userId = req.user.id;

    if (!imageId || !imageUrl) {
      return res.status(400).json({ msg: "Missing fields" });
    }

    const existingLike = await Like.findOne({ userId, imageId });

    if (existingLike) {
      await Like.deleteOne({ userId, imageId });
      return res.json({ liked: false });
    }

    await Like.create({
      userId,
      imageId,
      imageUrl,
      tags,
    });

    res.json({ liked: true });
  } catch (error) {
    console.error("LIKE ERROR:", error);
    res.status(500).json({
      msg: "Error while liking image",
      success: false,
    });
  }
};

export const getUserLikes = async (req, res) => {
  try {
    const likes = await Like.find({ userId: req.user.id });
    res.json(likes);
  } catch (error) {
    res.status(500).json({ msg: "Failed to fetch likes" });
  }
};
