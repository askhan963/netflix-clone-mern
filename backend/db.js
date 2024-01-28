const mongoose = require("mongoose");

 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    mongoose
      .connect("mongodb://awaiskhan963:awaiskhanniazi@ac-ymeczwc-shard-00-00.jhki4ct.mongodb.net:27017,ac-ymeczwc-shard-00-01.jhki4ct.mongodb.net:27017,ac-ymeczwc-shard-00-02.jhki4ct.mongodb.net:27017/netflix?ssl=true&replicaSet=atlas-13au00-shard-0&authSource=admin&retryWrites=true&w=majority", {
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
 