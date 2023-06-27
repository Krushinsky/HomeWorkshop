const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const routes = require('./ServicesRoutes');
const cors = require('cors');

require ("dotenv").config();

mongoose.set("strictQuery", false);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const PORT = 7000 || process.env.port;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, ()=>{
    console.log(`I AM LISTENING ON PORT ${PORT}`)
}) 