if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const port = 3000;
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const api_key = process.env.API_KEY;