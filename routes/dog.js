var express = require('express');
var router = express.Router();
const request = require('request');
async function displayRandomDog(){       
        const url = "https://dog.ceo/api/breeds/image/random";
        const response = await fetch(url)
        data = await response.json();       
        const object = document.getElementById("randomDog");
        object.innerHTML = `<img src="${data.message}">`;
}
displayRandomDog();