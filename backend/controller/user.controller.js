import cloudinary from "../db/cloudinary.js";
import User from "../model/user.model.js";

export const updateDetails = async (req, res) => {
  try {
    const allowedFields = [
      "fname",
      "lname",
      "skills",
      "about",
      "experience",
      "education",
      "linkedin",
      "github",
    ];

    const updatedData = {};

    for (const field of allowedFields) {
      if (req.body[field]) {
        updatedData[field] = req.body[field];
      }
    }

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updatedData.profilePicture = result.secure_url;
    }

    if (req.body.skills) {
      updatedData.skills = JSON.parse(req.body.skills);
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updatedData },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error in updateProfile controller:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getUserInfo = async (req, res) => {
    const {userId}=req.params;
    try {
        const user = await User.findById(userId).populate({
            path: "User",
            select: "username fname lname about skills experience education projects",
        });
        if(!user)
        {
            return res.status(404).json({message:"No user found"});
        }

        res.status(200).json(user.User); 
    } catch (error) {
        console.log("Error in getUserInfo controller",error);
        return res.status(500).json({message:"Server error"});
    }
};
