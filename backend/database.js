const mongoose = require('mongoose');

async function startDatabase() {
  await mongoose.connect('mongodb://localhost:27017/rednit', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("Connection to MongoDB succeeded"))
  .catch((_) => console.log("Connection to MongoDB failed"));;
}

module.exports.startDatabase = startDatabase;