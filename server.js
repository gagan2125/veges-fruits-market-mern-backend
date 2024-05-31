const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/ProductSchema");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");

    app.get("/api/products", async (req, res) => {
      try {
        const allProducts = await Product.find();
        res.json(allProducts);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
};

startServer();

// Export the app object
module.exports = app;
