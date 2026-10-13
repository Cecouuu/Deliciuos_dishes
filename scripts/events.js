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

const submitDish = document.querySelector("#submitDish");
import {filterDishesFromSpecificIngredient} from "./renderCards.js";

export async function startSearching () {
    submitDish.addEventListener(`click`, () =>{
        filterDishesFromSpecificIngredient();
    })
}