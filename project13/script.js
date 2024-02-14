// При нажатии на h1 выводить текст который написан в нем
// const button = document.querySelector("button") // нашли кнопку
// const title = document.querySelector("h1") // нашли h1

// title.addEventListener("click", function() {
//     console.log(title.innerText)
// })

// element.addEventListener()

// При нажатии на картинку отображать в консоли ее значение атрибута src
// const image = document.querySelector("img")
// image.addEventListener("click", function() {
//     const src = image.getAttribute("src") // "img1.jpg" 
//     console.log(src)
// })

// При нажатии на каждую картинку отображать ее атрибут в консоли. Используйте цикл for для этой задча
// const images = document.querySelectorAll("img") // находим картинки. [img, img, img, img]
// // console.log(images)
// for(let i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", function() {
//         const src = images[i].getAttribute("src")
//         console.log(src)
//     })
// } 

// Переписать эту задачу с помощью forEach()
// images.forEach(function(image) {
//     image.addEventListener("click", function() {
//         const src = image.getAttribute("src")
//         console.log(src)
//     })
// })

// array[i] === item внутри forEach

// Переключать главную картинку при клике на ее превью. 
// const miniImages = document.querySelectorAll(".images-container img") // [img, img, img, img]
// const fullImage = document.querySelector(".full-img")

// miniImages.forEach(function(image) {
//     image.addEventListener("click", function() {
//         const src = image.getAttribute("src")
//         fullImage.setAttribute("src", src)
//     })
// })

const square = document.querySelector(".square")
const button = document.querySelector("button")
const greenBtn = document.querySelector(".green")

// button.addEventListener("click", function() {
//     square.style.backgroundColor = "red"
// })

// greenBtn.addEventListener("click", function() {
//     square.style.backgroundColor = "green"
// })

const allBtns = document.querySelectorAll("button")
allBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const color = btn.getAttribute("class") // red, green
        square.style.backgroundColor = color
    })
})

// При нажатии на кнопку red менять цвет квадрата на красный


/*
    1. Найти все мини картинки
    2. Найти full картинку
    3. Повесить на все мини картинки слушатель события
    4. При клике получать путь к картинке
    5. Добавлять полученный путь к full картинке
*/

/* 
    setAttribute("src", "img1.jpg")
    1. название атрибута - src, href, 
    2. значение атрибута
*/
