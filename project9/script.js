/*
    функция - это блок различных команд, последовательности действий.
    С помощью функций наш код становится упорядоченным
    Чем каждый раз повторять несколько команд, можно спрятать их
        в одну функцию
*/

// function declaration - способ создания функции
// function showElements(number) {
//     console.log(`Запрос в базу данных на ${number} данных`) //  [{}, {}, {}, {}]
//     console.log("Отформатировать данные") // for [{}, {}, {}, {}]
//     console.log("Отобразить данные в html") // for [{}, {}, {}] для каждого {} рисуем карточку
// }


// showElements(1000) // вызов функции
// showElements(50) // вызов функции
// showElements(100) // вызов функции
// showElements(700) // вызов функции

/*
    function fnName(param1, param2) {
        тело функции
    }
    fnName - название функции, которое чаще всего должно содержать глагол
*/


// Создать функцию, которая называется power, она получает два аргумента
// первый - основание степени, а второй сама степень и выводить в консоль результат возведение в с тепень
// function power(number1, number2) {
//     const result = number1 ** number2
//     console.log(result)
//     // console.log(number1 ** number2) 
// }

// power(10, 2) // 100. 10^2 = 100
// power(3, 3) // 27. 3 ^ 3 = 27
// power(5, 2) // 25. 5 ^ 2 = 25
// power(4, 5) // 


// Создать функцию, которая называется square(), получает два аргумента - длина и ширина
// и возвращает в консоли квадратуру помещения. `N квадратов`
// function square(length, width) {
//     console.log(`${length * width} квадратов`)
// }

// square(5, 10) // 50 квадратов

// Создать функцию, которая принимает два аргумента - имя и возраст
// и в консоли отобразить строку "Вас зовут *Имя* и вам *возраст* лет"
// function showUserData(name, age) {
//     console.log(`Вас зовут ${name} и вам ${age} лет`)
// }

// showUserData("Arsen", 25)
// showUserData("User", 30)

// Написать функцию, которая получает число в аргумент
// и в консоли отображает "четное" если число четное, "нечетное" если нечетное

// function checkNumber(number) {
//     if(number % 2 === 0) {
//         console.log("четное")
//     } else {
//         console.log("нечетное")
//     }
// } 

// checkNumber(10) // четное
// checkNumber(17) // нечетное


// Написать функцию, которая получает число и в консоли отображает
// числа от 0 до этого числа

// function showNumbers(number) {
//     for(let i = 0; i < number; i++) {
//         console.log(i) //
//     }
// } 

// showNumbers(5) // 0, 1, 2, 3, 4, 5
// showNumbers(100) // 0, 1, 2, 3, 4, 5, 6 ... 100

/*
    for() }{
*/

// Написать функцию, которая получает число и в консоли отображает
// массив из чисел от 0 до этого числа

// function showNumbers(number) {
//     const arr = []
//     for(let i = 0; i <= number; i++) {
//         arr.push(i)
//     }
//     console.log(arr)
// }

// showNumbers(10) // [0, 1, 2, 3 ... 10]
// showNumbers(100) // [0, 1, 2, 3, ... 100]

/*
    array - массив
    arr - массив 
*/


// Создать функцию, которая получает два аргумента - оба числа
// и отображает в консоли бОльшее из них
// если числа равны, то в консоли отображается "N равно N"

function checkBiggerNumber(number1, number2) {
    if(number1 > number2) {
        console.log(number1)
    } else if(number1 < number1) {
        console.log(number2)
    } else {
        console.log(number1 + " равно " + number2)
    }
}

checkBiggerNumber(10, 50)


const arr = [10, 20, 30, 40, 50] // length = 5
// Чтобы получить последний элемент массива нужно [length - 1]
