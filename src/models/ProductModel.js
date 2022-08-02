const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
      product_name: { type: String, required: true },
      product_id:{type:Number,required:true,unique:true}
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Product = mongoose.model("product", productSchema)

  module.exports = Product;