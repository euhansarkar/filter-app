const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);
const colors = require(`colors`);
dotenv.config();
const app = require(`./app`);

// database connection

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log(`database connection successful`.red.bold))
.catch(err => console.error(err))


//server

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app is running on port ${port}`.blue.bold)
})
