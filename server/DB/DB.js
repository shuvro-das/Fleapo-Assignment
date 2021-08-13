const mongoose = require("mongoose");

const PostMessage = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    message: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", PostMessage);
