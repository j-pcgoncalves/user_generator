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

app.get("/username", async (request, response) => {
    const fetchApi = await fetch(
        "https://random-user-by-api-ninjas.p.rapidapi.com/v1/randomuser", 
        {
            method: "GET",
            headers: {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": "random-user-by-api-ninjas.p.rapidapi.com",
            },
        }
    );
    const userNameResponse = await fetchApi.json();
    response.json(userNameResponse);
});

app.get("/userimage", async (request, response) => {
    const fetchApi = await fetch(
        "https://bing-image-search1.p.rapidapi.com/images/search?q=user&count=20", 
        {
            method: "GET",
            headers: {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
            },
        }
    );
    const userImageResponse = await fetchApi.json();
    response.json(userImageResponse);
})