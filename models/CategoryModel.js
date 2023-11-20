// CategoryModel.js

import mongoose from "mongoose";

// Check if the model is already defined
const existingModel = mongoose.models.Category;

// If the model is already defined, export it, else define the model
export default existingModel || mongoose.model("Category", new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
}));
