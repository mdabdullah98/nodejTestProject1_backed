const express = require("express");
const sequelize = require("./utils/database");
const Product = require("./models/product");
const routes = require("./routes/product");
const cors = require("cors");
const Port = 8080;
const server = express();

//cors for cross origin
server.use(cors());

//middlware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", routes);

sequelize
  .sync()
  .then((res) => {
    server.listen(Port, () => {
      console.log(`server is running on http://localhost:${Port}`);
    });
  })
  .catch((err) => console.log(err));
