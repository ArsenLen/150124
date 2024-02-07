// DOM-дерево

// element.querySelector(selector) - метод, который позволяет найти тег, первый подходящий под селектор
// element.querySelectorAll(selector) - метод, который позволяет найти несколько тегов

// const title = document.querySelector("h1") // найти h1 на странице
// title.innerText = "Hello Arsen"

// const myTitle = document.querySelector(".title-2") // найти тег с классом title-2 на странице
// console.log(myTitle.innerText) // Helloooo

// Найти тег h1 который описан внутри main
// const mainTag = document.querySelector("main")
// const mainTitle = mainTag.querySelector("h1")
// console.log(mainTitle.innerText) // Hello Main


// const mainTitle = document.querySelector("main .title") // ищем элемент с классом title внутри main

// const lorem10Text = document.querySelector(".my-text") // querySelector("p")

// const hello2 = document.querySelector("main .my-text") // querySelector("main p")
// // const main = document.querySelector("main")
// // const hello2 = main.querySelector("p") // querySelector(".my-text")

// const descr = document.querySelector(".descr") // ищем по классу descr

// const footerText = document.querySelector("footer .my-text") // querySelector("footer p")
 
/*
    <main>
        <p class="my-text">Hello</p>
        <div> 
            <p class="my-text">hello 2</p>
        </div>
    </main>

    const myText = document.querySelector("main div .my-text")
*/

// Всем тегам h1 на странице поменять текст на Hello my friend
// const titles = document.querySelectorAll("h1") // [h1, h1, h1]
// for(let i = 0; i < titles.length; i++) {
//     titles[i].innerText = "Hello my friend"
// }

// Во всех тегах p поменять текст на My beautiful text
const texts = document.querySelectorAll("p") // [p, p, p, p]
for(let i = 0; i < texts.length; i++) {
    texts[i].innerText = "My beatiful text"
}
/*
    i = 0, texts.length = 4
    1. i = 0; 0 < 4; texts[0].innerText = "My bf text", i++. p.innerText
    2. i = 1; 1 < 4; texts[1].innerText = "My bf text", i++
    3. i = 2; 2 < 4; texts[2].innerText = "My bf text", i++
    4. i = 3; 3 < 4; texts[3].innerText = "My bf text", 
    5. i = 4; 4 < 4 - false, выход из цикла
*/

/*  
    array[i] - каждый элемент массива, текущий элемент
*/

// titles[0].innerText = "Hello my friend"
// titles[1].innerText = "Hello my friend"
// titles[2].innerText = "Hello my friend"

/*
    for(let i = 0; i < 10; i++) {
        console.log("hello")
    }

    const numbers = [10, 20, 30, 40, 50, 60, 70, 80]
    numbers[0] ** 2
    numbers[1] ** 2
    numbers[2] ** 2

    for(let i = 0; i < numbers.length; i++) {
        numbers[i] ** 2
    }
*/

// Используя цикл for поменять текст во всех h1 на Hello my friend

// console.log(titles)
// titles.innerText = "Hello my friend" // [h1, h1, h1].innerText

/*
    element.innerText - свойство, которое позволяет отобразить или назначить текст для тега
*/

/*
     селекторы:
        1. селектор по тегу - h1
        2. селектор по классу - .item
        3. селектор по id - #red, #idName
*/

/*
    метод - это функция, которая реализована в объекте

    const user = {
        name: "Arsen"
        age: 25,
        sayHello: function() {
            console.log('hello')
        }
    }

    user.name - свойство 
    user.age - свойство
    user.sayHello() - метод

    user.sayHello() - вызов метода. console.log('hello')

    function sayHello() {

    }

    h1 = {
        innerText: "Hello world"
    }

    h1.innerText = "Hello my friend"

    const user = {
        name: "Arsen"
    }

    user.name = "Vadzim" 
*/


// getAttribute(), setAttribue()
// const image = document.querySelector("img") // Найти картинку
// const imageSource = image.getAttribute("src") // Получить атрибут src у картинки в переменную imageSource
// console.log(imageSource) 

// image.setAttribute("src", "./img6.jpg")

// Задача. Добавить картинки img1-img5 в теги img
// С помощью цикла пройтись по всем картинкам и каждой назначить соответствующий путь к картинке
// 1. Всем 5 картинкам добавить путь img1.jpg
// 2. Всем 5 картинкам добавить свой путь img1-img5
// const images = document.querySelectorAll("img") // Найти все теги img [{}, {}, {}, {}]
// for(let i = 0; i < images.length; i++) {
//     images[i].setAttribute("src", `./img${i + 1}.jpg`)
// }
/*
    `Helloo, ${name}`

    i = 0; images.length = 5
    1. i = 0, 0 < 5 - true, images[0].setAttribute("src", "./img1.jpg"), i++
    2. i = 1, 1 < 5 - true, images[1].setAttribute("src", "./img2.jpg"), i++
    3. i = 2, 2 < 5 - true, images[2].setAttribute("src", "./img3.jpg"), i++
    4. i = 3, 3 < 5 - true, images[3].setAttribute("src", "./img4.jpg"), i++
    5. i = 4, 4 < 5 - true, images[4].setAttribute("src", "./img5.jpg"), i++
    6. i = 5, 5 < 5 - false, ВЫХОД ИЗ ЦИКЛА
*/

// images[0].setAttribute("src", "img1.jpg")
// images[1].setAttribute("src", "img2.jpg")
// images[2].setAttribute("src", "img3.jpg")

// Есть массив с названиями картинок, добавить эти названия в путь к 5 картинкам
const imagesNames = ["./les.jpg", "./kamni.jpg", "./listya.jpg", "./oblaka.jpg", "./zakat.jpg"]
const images = document.querySelectorAll("img")

for(let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", imagesNames[i])
}

/* 
    array.length - количество элементов массива
    string.length - количество символов в строке

    const name = "Arsen Iusupov"
    name.length = 13
*/

/*
    getAttribute("attrName") - получить значение атрибута тега
    setAttribute("attrName", "attrValue") - назначить значение атрибут тега

    attrName - название атрибута
    attrValue - значение атрибута
*/