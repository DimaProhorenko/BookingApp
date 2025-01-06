import mongoose from "mongoose";

const SettingsSchema = mongoose.Schema(
  {
    minBookingLength: {
      type: Number,
      required: true,
    },
    maxBookingLength: {
      type: Number,
      required: true,
    },
    maxGuestsPerBooking: {
      type: Number,
      required: true,
    },
    breakfastPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Settings = mongoose.model("Settings", SettingsSchema);

export default Settings;
