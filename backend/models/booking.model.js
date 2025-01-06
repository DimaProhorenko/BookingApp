import mongoose from "mongoose";

const BookingSchema = mongoose.Schema(
  {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    numGuests: {
      type: Number,
      required: true,
    },
    cabinPrice: {
      type: Number,
      required: true,
    },
    extrasPrice: {
      type: Number,
      default: 0,
    },
    hasBreakfast: {
      type: Boolean,
      default: false,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    observations: {
      type: String,
      default: "",
    },
    cabin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cabin",
    },
    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
    },
  },
  { timestamps: true }
);

BookingSchema.virtual("numOfNights").get(function () {
  if (this.startDate && this.endDate) {
    const diffTime = Math.abs(
      new Date(this.endDate) - new Date(this.startDate)
    );
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  return 0;
});

BookingSchema.virtual("totalPrice").get(function () {
  const numOfNights = this.numOfNights;
  const cabinCost = numOfNights * (this.cabinPrice || 0);
  const extrasCost = this.extrasPrice || 0;
  return cabinCost + extrasCost;
});

BookingSchema.set("toJSON", { virtuals: true });
BookingSchema.set("toObject", { virtuals: true });
