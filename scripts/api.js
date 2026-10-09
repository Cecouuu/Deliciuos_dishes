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

async function FindDishByName(inputValue){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
    const dishes = await response.json();
    return dishes.meals;
}
async function makeArrayOfChosenDishName() {
        dishes = await FindDishByName(`${dishTextArea.value}`);
        dishesFromSpecificIngredient = dishes.filter(dish => dish.strCategory === `${dishTextArea.value}`).map(dish => dish.strMeal);
        console.log(dishesFromSpecificIngredient);
        dishRespond.style.visibility = ``;
        dishRespond.replaceChildren("");
        dishesFromSpecificIngredient.forEach(dish => {
            const divElement = document.createElement("div");
            divElement.style.display = `flex`;
            divElement.style.justifyContent = `center`;
            divElement.style.alignItems = `center`;
            divElement.style.border = `1px solid lime`;
            divElement.style.width = `100px`;
            divElement.style.height = `250px`;

            const node = document.createElement("p");
            node.textContent = `${dish}`;
            divElement.appendChild(node);
            dishRespond.appendChild(divElement);
        })
}

submitDish.addEventListener(`click`, () =>{
    makeArrayOfChosenDishName();
})