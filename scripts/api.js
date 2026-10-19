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

export async function dishesArray(inputValue) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue.trim().toLowerCase().replaceAll(" ", "_")}`);
        if (!response.ok){
            throw new Error(`Server error ${response.status}`);
        }
        const dishArray = await response.json();
        console.log(dishArray.meals);
        return dishArray.meals ?? [];
    }
    catch (error){
        console.error("Request failed:", error.message);
        return null;
    }
}
