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

const matchingDishResults = document.querySelector("#matchingDishResults");
const dishTextArea = document.querySelector("#dishTextArea");
const submitDish = document.querySelector("#submitDish");
const dishRespond = document.querySelector(".dishRespond");
let dishes;
let dishesFromSpecificIngredient;
let dishesFromSpecificIngredientOldSearch;

async function FindDishByName(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishTextArea.value}`);
    const dishes = await response.json();
    return dishes.meals;
}
async function makeArrayOfChosenDishName() {
        dishes = await FindDishByName(`${dishTextArea.value}`);
        dishesFromSpecificIngredient = dishes.filter(dish => dish.strCategory === `${dishTextArea.value}`).map(dish => dish.strMeal);
        console.log(dishesFromSpecificIngredient);
        dishRespond.style.display = "flex";
        dishesFromSpecificIngredient.forEach(dishes => {
        matchingDishResults.replaceChildren(`${dishes} ${document.createElement(`br`)}`);
        });
}
function displayFoodsByEach(dishArray){
    dishArray.forEach(dish => {
        return "dish"
    })
}

submitDish.addEventListener(`click`, () =>{
    makeArrayOfChosenDishName();
})