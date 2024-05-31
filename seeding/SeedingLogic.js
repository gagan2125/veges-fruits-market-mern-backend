const mongoose = require("mongoose");
const Product = require("./models/ProductSchema");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
    seedDatabase();
  })
  .catch((err) => console.log(err));

const seedDatabase = async () => {
  try {
    await Product.deleteMany();
    const products = [
      {
        name: "Apple",
        type: "Fruit",
        description: "Fresh and crispy",
        price: 150,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142542/apple.jpg",
      },
      {
        name: "Banana",
        type: "Fruit",
        description: "Rich in potassium",
        price: 75,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142554/banana.jpg",
      },
      {
        name: "Orange",
        type: "Fruit",
        description: "Packed with vitamin C",
        price: 200,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142641/orange.jpg",
      },
      {
        name: "Carrot",
        type: "Vegetable",
        description: "Healthy and crunchy",
        price: 100,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142613/carrot.jpg",
      },
      {
        name: "Broccoli",
        type: "Vegetable",
        description: "Nutrient-rich greens",
        price: 175,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142601/brocoli.jpg",
      },
      {
        name: "Grapes",
        type: "Fruit",
        description: "Sweet and juicy",
        price: 250,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142629/grapes.jpg",
      },
      {
        name: "Strawberry",
        type: "Fruit",
        description: "Delicious red berries",
        price: 300,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142657/strawberry.jpg",
      },
      {
        name: "Lettuce",
        type: "Vegetable",
        description: "Crisp and fresh",
        price: 120,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142635/lettue.jpg",
      },
      {
        name: "Tomato",
        type: "Vegetable",
        description: "Versatile and flavorful",
        price: 180,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142704/tomato.jpg",
      },
      {
        name: "Cucumber",
        type: "Vegetable",
        description: "Cool and hydrating",
        price: 130,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240104142621/cocumber.jpg",
      },
    ];
    await Product.insertMany(products);
    console.log("Database Seeded Successfully");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error Seeding", error);
    mongoose.disconnect();
  }
};
