const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Add the Contact Name"],
    },
    email: {
      type: String,
      required: [true, "Please Add the Contact email address"],
    },
    phone: {
      type: String,
      required: [true, "Please Add the Contact phone number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
