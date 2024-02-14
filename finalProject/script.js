// При отправке формы в консоли отображать "Отправлено"
const form = document.querySelector("form")
const username = document.querySelector(".username") // ("input[name="username"]")
const age = document.querySelector(".userage") // ("input[name="userage"]")
const usersContainer = document.querySelector(".users")

// Отобразить карточки пользователей согласно данным из массива users
const users = [
    {
        name: "Vyacheslav",
        age: "100"
    },
    {
        name: "Arsen",
        age: "25"
    }, 
    {
        name: "Stefan",
        age: "90"
    }
]

form.addEventListener("submit", function(event) {
    event.preventDefault() // отменяем действие по умолчанию
    console.log(username.value) // Отобразить данные из input username
    console.log(age.value) // Отобразить данные из input age
    const user = {
        name: username.value,
        age: age.value
    }
    users.push(user) 
    showUsers() // вызываем функцию отрисовки в html после добавления нового пользователя в массив
})
 
function showUsers() {
    usersContainer.innerHTML = "" // очищаем контейнер перед отображением новых пользователей
    users.forEach(function(user) {
        usersContainer.innerHTML += `
            <div class="user">
                <h5>${user.name}</h5>
                <p>${user.age}</p>
            </div>
        `
    })
}
showUsers() // вызываем функцию отрисовки в html в момент загрузки страницы



/*
    users.push(element)
*/

// Отобразить в консоли данные которые пользователь заполнил в поле name
/*
    При отправке формы страница обновляется по умолчанию, но нам такое поведение нужно отменять.
    Для того, чтобы отменить подобное поведение используется функция preventDefault(), 
    которая реализована у объекта события, которое происходит
    Когда в браузере происходит какое-либо событие (клик, сабмит и тд), автоматические
    создается объект события event, который можно получить в коллбэк функции метода addEventListener()

    В объекте события event есть свойство target - это элемент, который вызвал событие

    У input есть свойство value, внутри которого лежат заполненные пользователем данные

    input = {
        value: "Arsen"
    }
    input.value // "Arsen"

    События:
    1. click - событие клика по тегу
    2. submit - событие отправки формы, оно реализовано только у формы
*/