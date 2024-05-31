const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/ProductSchema");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err));

// app.get("/api/products", async (req, res) => {
//   try {
//     const allProducts = await Product.find();
//     res.json(allProducts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       error: "Internal Server Error",
//     });
//   }
// });

app.get("/api/test", (req, res) => {
  try {
    console.log("Test is Running");
  } catch (error) {
    console.error("Error:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
