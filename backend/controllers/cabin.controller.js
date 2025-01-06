import {
  sendErrorResponse,
  sendServerError,
  sendSuccessResponse,
} from "../utils/responseHandlers.js";
import Cabin from "../models/cabin.model.js";

export const getAllCabins = async (req, res) => {
  try {
    const cabins = await Cabin.find();

    if (!cabins || cabins.length === 0) {
      return sendSuccessResponse(res, 200, "No cabins found", []);
    }

    return sendSuccessResponse(
      res,
      200,
      "Cabins retrieved successfully",
      cabins
    );
  } catch (error) {
    return sendServerError(res, error);
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

export const updateCabin = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const cabin = await Cabin.findById(id);

    if (!cabin) {
      return sendErrorResponse(res, 404, "Cabin not found");
    }

    if (
      updates.discount !== undefined &&
      updates.discount > cabin.regularPrice
    ) {
      return sendErrorResponse(
        res,
        400,
        "Discount cannot exceed the regular price"
      );
    }

    const updatedCabin = await Cabin.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    return sendSuccessResponse(res, 200, "Cabin updated", updatedCabin);
  } catch (error) {
    sendServerError(res, error);
  }
};

export const deleteCabin = async (req, res) => {
  try {
    console.log("Fuck");
    const cabin = await Cabin.findById(req.params.id);
    if (!cabin) {
      return sendErrorResponse(res, 404, "Cabin not found");
    }

    await cabin.deleteOne();
    return sendSuccessResponse(res, 200, "Cabin deleted");
  } catch (error) {
    sendServerError(res, error);
  }
};
