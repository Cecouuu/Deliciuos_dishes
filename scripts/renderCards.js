// --------------------------------------------------
//     Deliciuos dishes
// Created by Tsvetoslav Krumov
// 2026
//
// Portfolio Project
//
// Copyright (c) 2026 Tsvetoslav Krumov
// All Rights Reserved.
//
//     This project is published for educational and portfolio purposes only.
//
//     Unauthorized copying, redistribution or claiming this project as your own is prohibited.
// --------------------------------------------------

const dishTextArea = document.querySelector("#dishTextArea");
const dishRespond = document.querySelector(".dishRespond");
let dishes;
let dishesFromSpecificIngredient;

import {dishesArray} from "./api.js"

export async function filterDishesFromSpecificIngredient() {
    dishes = await dishesArray(`${dishTextArea.value}`);
    dishesFromSpecificIngredient = dishes.filter(dish => dish.strCategory === dishTextArea.value);
    dishRespond.style.display = `flex`;
    dishRespond.replaceChildren("");
    dishesFromSpecificIngredient.forEach(dish => {
        const cardBody = document.createElement("div");
        cardBody.classList.add("cardBody");

        const cardImage = document.createElement("img");
        cardImage.src = dish.strMealThumb;
        cardImage.alt = dish.strMeal;
        cardImage.classList.add("cardImage");

        const cardTitle = document.createElement("h1");
        cardTitle.classList.add("cardTitle");
        cardTitle.textContent = dish.strMeal;

        cardBody.appendChild(cardImage);
        cardBody.appendChild(cardTitle);
        dishRespond.appendChild(cardBody);
    })
}