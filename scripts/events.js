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

async function filterDishesFromSpecificIngredient() {
    try{
        const dishes = await dishesArray(dishTextArea.value);

        if (dishes === undefined || dishes === null){
            throw new Error(`API has error ${dishes.status}`)
        }
        if (dishTextArea.value === ""){
            dishRespondBox.classList.remove("dishRespondBoxActive");
            return console.log("There is no match of what you are looking!");
        }
        dishRespondBox.classList.add("dishRespondBoxActive");
        dishRespondBox.replaceChildren("");
        dishes.forEach(dish => {
            if (dish === null){
                dishRespondBox.classList.remove("dishRespondBoxActive");
                dishRespondBox.replaceChildren("");
                return console.log("There is no match of what you are looking!");
            }
            generateCard(dishRespondBox, dish);
        })
    }catch (error){
        const errorCaught = document.createElement("h1")
        errorCaught.textContent = "Error appeared in API request!"
        dishRespondBox.appendChild(errorCaught);
    }

}

export function startingEvents () {
    submitDish.addEventListener(`click`, () =>{
        filterDishesFromSpecificIngredient();
    })
}