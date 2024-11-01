import mongoose, { Schema } from "mongoose";
import { category } from "./category.model";

const productSchema = new Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    require: true,
  },
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    require: true,
  },
  youtubeUrl:{
    
  },
  specifications: [specificationSchema], // Embedded array of specifications
  features: [featureSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "USer",
  },
});

const specificationSchema = new mongoose.Schema({
  name: String,
  value: String,
});

// Feature Schema
const featureSchema = new mongoose.Schema({
    name: String,
    value: String,
});

export const Product = mongoose.model("Product", productSchema);
