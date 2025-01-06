import mongoose from "mongoose";

const CabinSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxCapacity: {
      type: Number,
      default: 1,
      min: [1, "Capacity can not be less than 1"],
    },
    regularPrice: {
      type: Number,
      required: true,
      min: [0, "Price can not be less than 0"],
    },
    discount: {
      type: Number,
      default: 0,
    },
    desription: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Cabin = mongoose.model("Cabin", CabinSchema);

export default Cabin;
