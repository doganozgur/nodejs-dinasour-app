require('dotenv').config()
const express = require('express')
const fetch = require('node-fetch')
const app = express()

app.use(express.static('public'))

app.get('/dinoname', async(request, response) => {
    const data = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.API_KEY,
		"x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
	}
    })
    const dinoNameResponse = await data.json();
    console.log(dinoNameResponse);
    response.json(dinoNameResponse);
})

app.get('/dinoimage', async(request, response) => {
    const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinasour&count=10", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.API_KEY,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    })
    const dinoImageResponse = await fetchApi.json();
    console.log(dinoImageResponse);
    response.json(dinoImageResponse);
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`${port} is being listened`);
})
