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
const hamRising = document.querySelector("#ham-rising");

hamOpenBtn.addEventListener(`click`, openMenu);
hamCloseBtn.addEventListener(`click`, closeMenu);
function openMenu(){
    hamMenuUI.classList.add("activeHam");
    hamRising.classList.add("ham-rising-active");
    hamOpenBtn.classList.remove("ham-active");
    hamCloseBtn.classList.add("ham-active");
}
function closeMenu(){
    hamRising.classList.remove("ham-rising-active");
    hamMenuUI.classList.remove("activeHam");
    hamOpenBtn.classList.add("ham-active");
    hamCloseBtn.classList.remove("ham-active");

}