// циклы и массивы

/*
    цикл - повторяющийся алгоритм действий
    цикл for - конструкиця, которая создает цикл

    for(инициализация; условие; завершающая операция) {
        // тело цикла
    }
    1. инициализация - создание начального значения счетчика
    2. условие - условие, по которому выполняется и как только
        условие становится ложным его работа прекращается
    3. завершающая операция - выражение, которое выполняется после тела цикла
        в нем заадется выражение изменения счетчика
    4. тело цикла - действие, которое выполняется

    1. инициализация счетчика. создаем старт для счетчика
    2. проверяем условие, по которму работает цикла
    3. выполняем действие, если условие в п2. верно
    4. если условие неверно, завершай цикл
*/

// 5 раз вывести в консоли слово hello
// for(let i = 0; i < 10; i++) {
//     console.log("hello")
// }
/*
    Цикл for.  i = 0; 
    1. i = 0; 0 < 5 - true, console.log("hello"), i++, i = 1
    2. i = 1; 1 < 5 - true, console.log("hello"), i++, i = 2
    3. i = 2; 2 < 5 - true, console.log("hello"), i++, i = 3
    4. i = 3; 3 < 5 - true, console.log("hello"), i++, i = 4
    5. i = 4; 4 < 5 - true, console.log("hello"), i++, i = 5
    6. i = 5; 5 < 5 - false, цикл заканчивается
*/

// В консоли отобразить числа от 0 до 100
// for(let i = 0; i <= 100; i++) {
//     console.log(i)
// }

/*
    i++ - инкремент, увеличение i на 1
    i = i + 1

    ctrl + / - комментарий
*/


/*
    Типы данных
     1. строка
     2. число
     3. булевое значение - true/false
     4. массивы 

     массив - упорядоченная коллекция данных, в которой
        можно хранить разные типы данных, например число, строку, буль, другой массив и тд
    элементов в массиве может быть бесконечное количество
*/

// const names = ["Arsen", "Hanna", "Ekaterina", "Liubomyr"]
// // [0, 1, 2, 3]
// // console.log(names[0])
// // console.log(names[1])
// // console.log(names[2])
// // console.log(names[3])

// console.log(names.length) // array.length - длина массива, количество элементов в массиве

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }
/*
    i = 0, names.length = 4
    1. i = 0; 0 < 4 - true, console.log(names[0]) - Arsen, i++
    2. i = 1; 1 < 4 - true, console.log(names[1]) - Hanna, i++
    3. i = 2; 2 < 4 - true, console.log(names[2]) - Ekaterina, i++
    4. i = 3; 3 < 4 - true, console.log(names[3]) - Liubomyr, i++
    5. i = 4; 4 < 4 - FALSE, выход из цикла
*/


// Есть массив numbers, вывести все числа возведенные в квадрат из массива numbers в консоли
// const numbers = [10, 20, 30, 40, 50, 60]

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] ** 2)
// }

// Есть массив numbers, вывести из него только положительные числа
// const numbers = [-10, 60, 70, -100, -20, 50]
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) {
//         console.log(numbers[i])
//     }
// }
/*
    i = 0; numbers.length = 6
    1. i = 0; 0 < 6 - true; numbers[0] > 0 => -10 > 0 - false, в консоли ничего не делаем, i++
    2. i = 1; 1 < 6 - true; numbers[1] > 0 =>  60 > 0 - true, console.log(60), i++
    3. i = 2; 2 < 6 - true; numbers[2] > 0 => 70 > 0 - true, console.log(70), i++
    4. i = 3; 3 < 6 - true; numbers[3] > 0 => -100 > 0 - false, в консоли не выводим, i++
    5. i = 4; 4 < 6 - true; numbers[4] > 0 => -20 > 0 - false, в консоли не выводим, i++
    6. i = 5; 5 < 6 - true; numbers[5] > 0 => 50 > 0 - true, console.log(50), i++
    7. i = 6; 6 < 6 - false, выход из цикла
*/

/*
    if() {
        ///
    }

    for() {
         if() {
            //
        }
    }
*/


// Методы массив push() и pop() 
// push() - добавляет в конце массива
// pop() - удаляет с конца массива элемент

// const names = ["Arsen", "Vasylyna", "Roman"] 
// names.push("Grigory") 
// console.log(names) // ["Arsen", "Vasylyna", "Roman", "Grigory"] 

// // Из массива numbers отфильтровать положительные числа и положить в массив positiveNumbers
// const numbers = [-10, 60, 70, -100, -20, 50]
// const positiveNumbers = []

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) {
//         positiveNumbers.push(numbers[i])
//     }
// }
// console.log(positiveNumbers)

// Попросить пользователя ввести 2 числа и добавить их в массив numbers
// const numbers = []

// const number1 = +prompt("Введите число 1")
// const number2 = +prompt("Введите число 2")
// numbers.push(number1, number2) 
// console.log(numbers) // ["1 число", "2 число"]

// Задача. Есть массив numbers. Вывести только четные числа из этого массива
// const numbers = [10, 15, 24, 17, 42, 61, 70]
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         console.log(numbers[i])
//     }
// }

/*
    "10" == 10 - true без учета типа данных
    "10" === 10 - false с учетом типа данных
*/

// Задача. Найти сумму всех чисел в массиве numbers
// const numbers = [10, 20, 30, 40, 50]
// let sum = 0 
// for(let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i]
// }
// console.log(sum)

// Задача. Найти сумму положительных числе в массиве numbers
const numbers = [-10, 20, -50, 1, -15, -40, -58, 70, 100]
let sum = 0
for(let i = 0; i < numbers.length; i++) {
    // sum = sum + numbers[i] // суммируется всегда
    if(numbers[i] > 0) {
        sum = sum + numbers[i]
    }
} 
console.log(sum)
/*
    let i = 0, numbers.length = 5 
    1. let i = 0; 0 < 5 - true; sum = sum + numbers[0]; sum = 0 + 10 = 10; i++
    2. i = 1; 1 < 5 - true; sum = sum + numbers[1]; sum = 10 + 20 = 30; i++
    3. i = 2; 2 < 5 - true; sum = sum + numbers[2]; sum = 30 + 30 = 60; i++
    4. i = 3; 3 < 5 - true; sum = sum + numbers[3]; sum = 60 + 40 = 100; i++
    5. i = 4; 4 < 5 - true; sum = sum + numbers[4]; sum = 100 + 50 = 150; i++
    6. i = 5; 5 < 5 - FALSE, выход из цикла
    
    let number = 10
    number = number + 50
*/

/*      ДЗ.
    1. Найти сумму четных и нечетных чисел из массива и вывести в консоли разницу между ними
    2. Найти сумму четных и нечетных чисел из массива и вывести их сумму в консоли
    3. Найти сумму отрицательных чисел из массива
*/
