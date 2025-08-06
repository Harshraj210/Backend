import("dotenv/config");
import express from "express";
// CRUD --> create,read,update,delete

const app = express();

// app can understand JSON DATA
app.use(express.json());

// storing Data in array
let data = [];
let nextId = 1;

// to handle the incoming POST req. --> Sends data to server
// adding new data
app.post("/", (req, res) => {
  const { name, price } = req.body;
  const newData = { id: nextId++, name, price };
  data.push(newData);
  res.status(200).send(newData);

  // it recieves JSON data and sens it back with unique ID
});

// route to get all data
app.get("/hello", (req, res) => {
  res.status(200).send(data);
});

// get data with id
app.get("/hello/:id", (req, res) => {
  // to view one item by ID we params
  const key = data.find((t) => t.id === parseInt(req.params.id));
  if (!key) {
    return res.status(404).send("Data not found");
  }
  res.status(200).send(key);
});

// updating the data
app.put("/hello/:id", (req, res) => {
  const key = data.find((t) => t.id === parseInt(req.params.id));

  if (!key) {
    return res.status(404).send("Data not found");
  }
  const { name, price } = req.body;
  key.name = name;
  key.price = price;
  res.status(200).send(key);

  // we send the updated Data withy name and price , it changes with the given ID
});

//  deleting Data
// to delete first we have to find Id and remove it with ID

app.delete("/hello/:id", (req, res) => {
  console.log("Delete");
  console.log(req.params.id);
  const index = data.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).send("Key not found");
  }
  data.splice(index, 1);
  return res.status(204).send("Data Deleted");
});
// .env is used to keep the api or the secret and add .env to git ignore so that it is not pushed to github
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at : ${port}`);
  // server running at the port mentioned.
  // node modules should be inn .gitignore file
});
