const Mongoose = require("mongoose");

const productSchema = new Mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Product", productSchema);
