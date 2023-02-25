const mongoose = require("mongoose");
// process.env.DB_URI
const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://scrap:scrap1234@cluster0.tfw3p.mongodb.net/scrap-into-creative?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
