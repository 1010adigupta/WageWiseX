const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const authRouter = require("./Routes/authRoutes");
const empRouter = require("./Routes/empTableRoutes");
const hrRouter = require("./Routes/hrTableRoutes");
const port = 5000;
const db =
  "mongodb+srv://samarendragouda:hello123@cluster0.zlkx28k.mongodb.net/?retryWrites=true&w=majority";
dotenv.config();

const app = express();

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const allowList = [process.env.ALLOWED_URL_1, process.env.ALLOWED_URL_2];

var corsOptionsDelegate = function (req, callback) {
  var corsOptions = {
    credentials: true,
  };

  if (allowList.indexOf(req.header("Origin")) !== -1) {
    corsOptions.origin = true; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions.origin = false; // disable CORS for this request
  }

  callback(null, corsOptions); // callback expects two parameters: error and options
};

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors({ ...corsOptionsDelegate, methods: "*" }));

app.use("/test", (req, res) => {
  res.send("Working");
});

app.use(express.json({ limit: "8mb" }));

//All the routes comes here

app.get("/app/v1", (req, res, next) => {
  res.send("Test working");
});

app.use("/app/v1/auth", authRouter);
app.use("/app/v1/emp", empRouter);
app.use("/app/v1/hr", hrRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = app;
