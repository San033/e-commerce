const express = require("express");
const app = express();
const productsRouter = require("./src/routes/products.router");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.get("/commerce/ping", (req, res) => {
  res.json({
    ping: "pong",
  });
});
app.use(productsRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
