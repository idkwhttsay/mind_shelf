const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const bookRouter = require("./routes/bookRoute");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const app = express();

app.use(express.json());

// user route
app.use("/user", userRouter);

// book route
app.use("/book", bookRouter);

mongoose
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.4gnrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Node API app is running on http://localhost:${PORT}`);
    });
    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
