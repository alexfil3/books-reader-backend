const mongoose = require("mongoose");

const app = require("./app");

// const { DB_HOST, PORT = 3000 } = process.env;
const DB_HOST =
  "mongodb+srv://alex:Lh6LPYjEcAtm28Ar@cluster0.e6tf29l.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery"), true;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
