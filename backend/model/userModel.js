const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Add the neme"],
    },

    email: {
      type: String,
      required: [true, "Please Add the email"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please Add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
