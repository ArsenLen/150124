// Создание элементов в html 
// Создать тег h1 в main

// 1 способ создания элемента createElement
// const title = document.createElement("h1") // создаем тег h1 и кладем его в переменную title
// title.innerText = "Hello World"
// const main = document.querySelector("main") // Поиск родительского элемента для созданного тега
// main.appendChild(title) // в найденный main кладем созданный title(тег h1)


// 2 способ - свойство .innerHTML
// const main = document.querySelector("main") // Поиск родительского элемента, куда хотим положить тег
// main.innerHTML += "<h1>Hello World</h1>"

// создать тег p в main с текстом Hello
// 1 способ
// const text = document.createElement("p")
// text.innerText = "Hello"
// const main = document.querySelector("main")
// main.appendChild(text)

// // 2 способ
// const main = document.querySelector("main")
// main.innerHTML += "<p>Hello</p>"


// Создать 20 тегов <p>1</p><p>2</p> в main с числами от 0 до 19 
// const main = document.querySelector("main")
// // innerHTML
// for(let i = 0; i < 20; i++) {
//     main.innerHTML += `<p>${i}</p>`
// }
/*
    i = 0; 

    1. i = 0; 0 < 20 - true, main.innerHTML += `<p>0</p>`, i++
    2. i = 1; 1 < 20 - true, main.innerHTML += `<p>1</p>`, i++
    3. i = 2; 2 < 20 - true, main.innerHTML += `<p>2</p>`, i++

    let name = "Arsen"
    name += "Artem"

    name = name + "Artem"
    // ArsenArtem

    let number = 10
    number += 5 // 15
    number = number + 5 
*/

// // createElement()
// for(let i = 0; i < 20; i++) {
//     const text = document.createElement("p")
//     text.innerText = i
//     main.appendChild(text)
// }


// Есть массив имен names. Создать теги p для каждого из имени в main
// const names = ["Arsen", "Esmira", "Hanna", "Artem", "Vasylyna"]
// const main = document.querySelector("main")
// for(let i = 0; i < names.length; i++) {
//     main.innerHTML += `<p>${names[i]}</p>`
// }


// Есть массив ссылок на картинки. Для каждого элемента массива создать картинку с ссылкой
// const links = ["https://placehold.co/600x400/png", "https://placehold.co/320x480/png", "https://placehold.co/300x200/png"]
// const main = document.querySelector("main")
// for(let i = 0; i < links.length; i++) {
//     main.innerHTML += `<img src=${links[i]}>`
// }


// Есть массив объектов. Отобразить в консоли строки "Название: Ссылка"
// Есть массив объектов. Отобразить тег a для каждого из объектов. <a href="Ссылка">Название</a>
// const links = [
//     {
//         name: "Google",
//         link: "https://google.com"
//     },
//     {
//         name: "Amazon",
//         link: "https://amazon.com"
//     },
//     {
//         name: "Youtube",
//         link: "https://youtube.com"
//     }
// ]

// const main = document.querySelector("main")
// for(let i = 0; i < links.length; i++) {
//     main.innerHTML += `<a href=${links[i].link}> ${links[i].name} </a>`
// }
/*
    <a href="https://google.com">Google</a>
*/
// console.log(`${links[0].name}: ${links[0].link}`) // Google: https://google.com
// console.log(`${links[1].name}: ${links[1].link}`) // Amazon: https://amazon.com
// console.log(`${links[2].name}: ${links[2].link}`) // Youtube: https://youtube.com


// Есть массив объектов. На его основе создать карточки элементов
const users = [
    {
        name: "Arsen",
        age: 25
    },
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 40
    },
    {
        name: "User 3",
        age: 35
    }
]
// Отобразить в консоли строки `Имя - name, Возраст - age`
const main = document.querySelector("main")
for(let i = 0; i < users.length; i++) {
    // console.log(`${users[i].name, users[i].age}`)
    main.innerHTML += `
        <div class="user">
            <h1>${users[i].name}</h1>
            <p>${users[i].age}</p>
        </div>    
    `
}

/*
    <div>
        <h1>name</h1>
        <p>age</p>
    </div>
*/



// const array = [{name: "Arsen"}, "Hello 2", "Hello 3"] // array[0].name
// const user = {
//     name: "Arsen"
// }
// user.name

/*
    Google: https://google.com
    Amazon: https://amazon.com
    Youtube: https://youtube.com
 */




/*
    <img src="ваша ссылка здесь">

    <p>Arsen</p>
    <p>Esmira</p>
*/

/*
    <div>
        <h1>Hello</h1>
        <p>Hello</p>
    </div>

    const main = document.querySelector("main")
    main.innerHTML = `<div>
                    <h1>Hello</h1>
                    <p>Hello</p>
                    </div>
                `

    const container = document.createElement("div")
    container.innerHTML = `<h1>Hello</h1> <p>Hello</p>`
    main.appendChild(container)

    main = {
        innerHTML: "<p>Hello</p>",
        appendChild: function(element) {
            // положить тег
        }
    }

    main.innerHTML += "<h1>Hello World</h1>"
    main.innerHTML = main.innerHTML + "<h1>Hello World</h1>"
    main.innerHTML = "<p>Hello</p>" +  "<h1>Hello World</h1>"

    let name = "Arsen"
    name = name + "Artem" // "Arsen" + "Artem"
    name = "ArsenArtem"

    let number = 10
    number += 5
    number // 15

    let number = 10
    number = number + 5 ||  number += 5

    i++
    i = i + 1
    i += 1
    i++


    const user = {
        name: "ARsen"
    }

    user.name = "ArsenArtem" 

    document.createElement("tagName") - позволяет создать html тег
    element.appendChild(element) - добавлем созданный элемент в html тег


    element.innerText - свойство которое позволяет получить или назначить текстовый контент
    element.innerHTML - свойство которое позволяет получить или назначить html разметку

    const number = 10
    const user = {
        name: "Arsen"
    }
    user.name = "Esmira"
    
    let number = 50
    number = 100

    for(let i = 0; i < 10; i++) {

    }

    const array = []
*/