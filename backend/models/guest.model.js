import mongoose from "mongoose";

const GuestSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    nationalId: {
      type: String,
      required: true,
    },
    countryFlag: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Guest = mongoose.model("Guest", GuestSchema);

export default Guest;
