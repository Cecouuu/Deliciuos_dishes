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
        let dishes = await dishesArray(`${dishTextArea.value}`);

        if (dishes === undefined || dishes === null){
            throw new Error(`API has error ${dishesArray().status}`)
        }
        dishRespondBox.classList.add("dishRespondBoxActive");
        dishRespondBox.replaceChildren("");
        dishes.forEach(dish => {
            generateCard(dishRespondBox, dish);
        })
    }catch (error){
        console.error(error.message);
    }

}

export function startingEvents () {
    submitDish.addEventListener(`click`, () =>{
        filterDishesFromSpecificIngredient();
    })
}