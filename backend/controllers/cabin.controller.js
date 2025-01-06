import {
  sendErrorResponse,
  sendServerError,
  sendSuccessResponse,
} from "../utils/responseHandlers.js";
import Cabin from "../models/cabin.model.js";

export const getAllCabins = async (req, res) => {
  try {
    const cabins = await Cabin.find();
    console.log(cabins);
  } catch (error) {
    sendServerError(res, error);
  }
};

export const createCabin = async (req, res) => {
  try {
    const { name, maxCapacity, regularPrice, discount, description } = req.body;

    if (!name || !regularPrice) {
      return sendErrorResponse(res, 400, "Name and price fields are required");
    }

    if (regularPrice < 0) {
      return sendErrorResponse(res, 400, "Price can not be negative");
    }

    const cabin = new Cabin({
      name,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });

    await cabin.save();

    return sendSuccessResponse(res, 200, "Cabin created", cabin);
  } catch (error) {
    sendServerError(res, error);
  }
};
