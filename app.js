// const mongoose = require("mongoose");

// const DB_HOST =
//   "mongodb+srv://alex:Lh6LPYjEcAtm28Ar@cluster0.e6tf29l.mongodb.net/books_reader?retryWrites=true&w=majority";

// mongoose.set("strictQuery", true);

// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("Database connected"))
//   .catch((error) => console.log(error.message));

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// const booksRouter = require("./routes/api/books");
// const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use("/api/books", booksRouter);
// app.use("/api/contacts", contactsRouter);

// app.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

module.exports = app;
