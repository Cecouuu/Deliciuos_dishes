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


async function FindDishByName(dishName){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`);

    const dishes = await response.json();

    console.log(`${dishes}`);
}

FindDishByName("chicken");