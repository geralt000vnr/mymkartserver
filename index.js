const express = require("express");
const app = express();
const port = 4000;
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/mymkart"; // Replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true });

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB();
