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

import {dishesArray} from "./api.js"
import {generateCard} from "./renderCards.js";

const submitDish = document.querySelector("#submitDish");
const dishTextArea = document.querySelector("#dishTextArea");
const dishRespondBox = document.querySelector(".dishRespondBox");
const heroContainer = document.querySelector("#hero-container")
const invalidInputResponse = document.querySelector("#invalidInputResponse");

async function filterDishesFromSpecificIngredient() {
    try{
        const dishes = await dishesArray(dishTextArea.value);

        if (dishes === undefined || dishes === null){
            throw new Error(`API has error ${dishes.status}`);
        }

        if (dishTextArea.value === ""){
            invalidInputResponse.style.display = `flex`;
            invalidInputResponse.textContent = "There is no match of what you are looking!";
            heroContainer.appendChild(invalidInputResponse);
            dishRespondBox.classList.remove("dishRespondBoxActive");
            return console.log("There is no match of what you are looking!");
        }
        dishRespondBox.classList.add("dishRespondBoxActive");
        dishRespondBox.replaceChildren("");
        invalidInputResponse.style.display = `none`;
        dishes.forEach(dish => {
            if (dish === null){
                invalidInputResponse.style.display = `flex`;
                invalidInputResponse.textContent = "There is no match of what you are looking!";
                heroContainer.appendChild(invalidInputResponse);
                dishRespondBox.classList.remove("dishRespondBoxActive");
                return console.log("There is no match of what you are looking!");
            }
            else{
                generateCard(dishRespondBox, dish);
            }
        })
    }
    catch (error){
        dishRespondBox.classList.remove("dishRespondBoxActive")
        const errorCaught = document.createElement("h1")
        errorCaught.textContent = "Error appeared in API request!"
        dishRespondBox.classList.remove("dishRespondBoxActive");
        heroContainer.appendChild(errorCaught);
    }
}

export function startingEvents () {
    submitDish.addEventListener(`click`, () =>{
        filterDishesFromSpecificIngredient();
    })
}a