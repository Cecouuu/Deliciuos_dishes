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

const hamOpenBtn = document.querySelector("#hamOpenBtn");
const hamCloseBtn = document.querySelector("#hamCloseBtn");
const hamMenuUI = document.querySelector("#hamMenuUI");

hamOpenBtn.addEventListener(`click`, activeFunction);
hamCloseBtn.addEventListener(`click`, deActivatedFunction);
function activeFunction(){
    hamMenuUI.classList.add("activeHam");
    hamOpenBtn.classList.remove("ham-active");
    hamCloseBtn.classList.add("ham-active");
}
function deActivatedFunction(){
    hamMenuUI.classList.remove("activeHam");
    hamOpenBtn.classList.add("ham-active");
    hamCloseBtn.classList.remove("ham-active");

}