const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(

{

name: {

  type: String,

  required: [true, "Product name is required"],

  trim: true,

},



category: {

  type: String,

  required: [true, "Category is required"],

  trim: true,

},



price: {

  type: Number,

  required: [true, "Price is required"],

  min: 0,

},



description: {

  type: String,

  required: [true, "Description is required"],

},



image: {

  type: String,

  default: "https://via.placeholder.com/150",

},
```

},

{

```
timestamps: true,
```

}

);

module.exports = mongoose.model("Product", productSchema);
