const mongoose = require("mongoose");

 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    mongoose
      .connect("mongodb://localhost:27017/netflix", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB Connetion Successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
}
 