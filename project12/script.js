// Обработка событий
// а. При нажатии на кнопку в консоли отображать "Клик"
// б. При нажатии на кнопку увеличивать число в h1 на 1. инкремент
// в. при нажатии на кнопку "Минус" уменьшать число в h1
// г. при нажатии на кнопку "Сброс" менять значение на 0
// д. Убрать возможность появления отрицательных чисел. Минимально возможное значение - 0
// ж. Максимально допустимое значение - 10. Когда вы достигли этого значение - отобразить
// тег h1 с текстом "Это максимальное значение" и увеличение дальше не происходит

// const button = document.querySelector(".btn") // поиск элемента
// const title = document.querySelector("h1") // поиск элемента h1
// const buttonMinus = document.querySelector(".btn-minus") // поиск кнопки минус 
// const buttonReset = document.querySelector(".btn-reset") // поиск кнопки сброса
// const body = document.querySelector("body")
// let number = 0
// button.addEventListener("click", function() {
//     if(number === 10) {
//         title.innerText = `${number} Это максимально допустимое значение`
//         // body.innerHTML += "<p>Это максимально допустимое значенеи</p>"
//     } else {
//         number++ // number = number + 1
//         title.innerText = number // добавить текст number в h1
//     }
// })

// buttonMinus.addEventListener("click", function() {
//     if(number > 0) {
//         number-- // number =  number - 1
//         title.innerText = number
//     }
// })

// buttonReset.addEventListener("click", function() {
//     number = 0
//     title.innerText = number
// })


// При нажатии на все кнопки - в консоли отображать "Кликнули"
// используя цикл for()
// const button = document.querySelector("btn")
// const button1 = document.querySelector("btn-minus")
// const button2 = document.querySelector(".btn-reset")

// button.addEventListener("click", function() {
//     console.log('кликнули')
// })

// button1.addEventListener("click", function() {
//     console.log("кликнули")
// })

// button2.addEventListener("click", function() {
//     console.log("кликнули")
// })

const buttons = document.querySelectorAll("button") // [button1, button2, button3]
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        console.log("кликнули")
    })
}
// Переписать цикл for на forEach()

/*
    Метод forEach - метод массива, который позволяет применить колбэк-функцию ко всем 
    элементам массива. Используется вместо цикла for. Упрощенная версия цикла for, которая
    выглядит более читабельно
    
    array.forEach(function(item, index, array) {})

    1. item - каждый элемент массива
    2. index - индекс элемента массива в текущей итерации
    3. arr - сам массив
*/

// Есть массив numbers. Вывести в консоли каждое число из массива numbers с помощью for
// const numbers = [10, 20, 30, 40, 50]
// // console.log(numbers[0])
// // console.log(numbers[1])
// // console.log(numbers[2])
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]) 
// }

// // решить эту задачу с помощью forEach
// const numbers = [10, 20, 30, 40, 50]
// numbers.forEach(function(number) {
//     console.log(number) // number - каждый элемент, текущий элемент - numbers[i]
// })

// Есть массив имен. Вывести в консоли строку "Привет, {имя}" с помощью forEach
// const names = ["Arsen", "Hanna", "Sergey", "Maria"] 
// names.forEach(function(name) {
//     console.log(`Привет, ${name}`)
// })
/*
    1. Найти все кнопки
    2. На каждую из кнопок повесить слушатель события
*/

/*
    1. querySelectorAll() - метод, который возвращает массив со всеми элементами по заданному селектору
    [p, p, p] 

    if(условие) {
        действие
    }

    element.addEventListener(type, callback) - метод слушателя события

    1. type - тип события (click, scroll, submit)
    2. callback-функция - функция обратного вызова
*/

// function sum(a, b) {
//     console.log(a + b)
// }
// sum(10, 15) // immediately invoke function - немедленный вызов функции

/*

*/

// function sum(a, b) {
//     return a + b
// }
// console.log(sum(10, 15)) // 25

// console.log(sum(10, 15)) // 25

// const mySum = sum(10, 15) // 

// // if(arr.length == 0) { return null }
// const username = "Arsen"
// username.length // длина строки - количество символов в строке 5
// Создать переменную, которая будет сохранять самую длинную строку в массиве

// const array = ["Arsen", "Ivan", "Kolya"]
// let max_length = 0

// function maxString() {
//     for(let i = 0; i < array.length; i++) {
//         // console.log(array[i].length)
//         if(max_length < array[i].length) {
//             max_length = array[i].length
//         }
//     }
//     return max_length
// }

/*
    i = 0, array.length = 3
    1. i = 0, 0 < 3 - true, max_length < array[0].length, 0 < 5 - true, max_length = 5
    2. i = 1, 1 < 3 - true, max_length < array[1].length, 5 < 4 - false, max_length = 5
    3. i = 2, 2 < 3 - true, max_length < array[2].length, 5 < 5 - false, max_length = 5
*/

// 5, 4, 5

// function sum(a, b) {
//     return a + b
// }

// const mySum = sum(10, 15)

// console.log(mySum)