const express = require(`express`);
const cors = require(`cors`);
const app = express();

//routes
const productRoutes = require(`./routes/product.router`)

//middlewires
app.use(express.json())
app.use(cors())

app.get(`/`, (req, res, next) => {
    res.json({message: `app is running`})
})

app.use(`/api/v1/product`, productRoutes);


module.exports = app;


