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
const submitDish = document.querySelector("#submitDish");
const dishRespond = document.querySelector(".dishRespond");
let dishes;
let dishesFromSpecificIngredient;

async function dishesArray(inputValue){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
    const dishes = await response.json();
    return dishes.meals;
}
async function filterDishesFromSpecificIngredient() {
        dishes = await dishesArray(`${dishTextArea.value}`);
        dishesFromSpecificIngredient = dishes.filter(dish => dish.strCategory === `${dishTextArea.value}`);
        dishRespond.style.visibility = `visible`;
        dishRespond.replaceChildren("");
        dishesFromSpecificIngredient.forEach(dish => {
            const cardBody = document.createElement("div");
            cardBody.classList.add("cardBody")

            const cardImage = document.createElement("img");
            cardImage.src = `${dish.strMealThumb}`
            cardImage.classList.add("cardImage");

            const cardTitle = document.createElement("h1");
            cardTitle.classList.add("cardTitle");
            cardTitle.textContent = `${dish.strMeal}`;

            cardBody.appendChild(cardImage, cardTitle);
            dishRespond.appendChild(cardBody);
        })
}

submitDish.addEventListener(`click`, () =>{
    filterDishesFromSpecificIngredient();
})