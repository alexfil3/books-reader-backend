const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://alex:Lh6LPYjEcAtm28Ar@cluster0.e6tf29l.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error.message));
