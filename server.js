const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(
    bodyParser.urlencoded({
        extedned: false
    })
);
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server up and running on port ${port}`));