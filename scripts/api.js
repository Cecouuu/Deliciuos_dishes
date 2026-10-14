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

export async function dishesArray(inputValue){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?i=${inputValue}`);
    const dishArray = await response.json();
    return dishArray.meals;
}
