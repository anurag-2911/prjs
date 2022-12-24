const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
exports.connect = (MONGO_URI) => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("connecton to database successful");
    })
    .catch((error) => {
      console.log("failed to connect to database,terminating the application");
      console.error(error);
      process.exit(1);
    });
};
