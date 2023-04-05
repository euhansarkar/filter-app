const mongoose = require(`mongoose`);
const validator = require(`validator`);

// product schema
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, `product name is required`],
      trim: true,
      unique: [true, `name must be unique`],
      minLength: [3, `name must be at least 3 characters`],
      maxLength: [100, `name must be at least 3 characters`],
      lowercase: true,
    },
    category: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
      validate: [validator.isURL, `please provide a valid source`],
    },
    price: {
      type: Number,
      required: true,
      min: [0, `product price can't be negative`],
    },
    stock: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "other"],
        message:
          "Stock value can't be {VALUE}, it must be in-stock/out-of-stock",
      },
    },
    rating: {
      type: Number,
      required: true,
    },
    color: [
      {
        type: String,
        required: true,
        enum: {
          values: [
            "Red",
            "Blue",
            "Green",
            "Gray",
            "Black",
            "Yellow",
            "Silver",
            "Gold",
            "Orange",
            "Brown",
            "White",
            "Pink",
            "Purple"
          ],
          message: `unit value can't be {VALUE}, value must be a valid color`,
        },
      },
    ],
  },
  { timestamps: true }
);

// model

const Product = mongoose.model(`Product`, productSchema);

module.exports = Product;
