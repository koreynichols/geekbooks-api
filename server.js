const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());


const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(
    bodyParser.urlencoded({
        extedned: false
    })
);
app.use(bodyParser.json());

const userRouter = require('./routes/users');

app.use('/users', userRouter);


app.listen(port, () => console.log(`Server up and running on port ${port}`));

