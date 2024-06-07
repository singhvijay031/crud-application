const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

//This is the Mock Data from database
let mockData = [];

app.use(express.json()); //works as middleware

app.get("/", (req, res) => {
  res.send({
    message: "List of all users",
    data: mockData,
  });
});

app.post("/", (req, res) => {
  const payLoad = req.body; // this is from client
  const id = uuidv4();
  payLoad.id = id;

  mockData.push({ id, ...payLoad }); //this is saving data in dabatbase
  res.send({
    message: "New user created",
    data: payLoad,
  });
});

app.listen(8080, () => {
  console.log("Server running at 8080");
});
