const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
// >>>>>> 1
const booksRouter = require("./routes/api/books");
const contactsRouter = require("./routes/api/contacts");
// >>>>> 1
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
// >>>>2
app.use("/api/books", booksRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
// >>>>>2
module.exports = app;
