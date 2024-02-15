// 1. Есть массив products. Отрисовать продукты из этого массива 
const productsContainer = document.querySelector(".products") // находим контейнер
const form = document.querySelector("form") // находим форму
const productName = document.querySelector(".product-name") // нашли input НАЗВАНИЕ [name=""]
const productPrice = document.querySelector(".product-price") // нашли input ЦЕНА

const products = [
    {
        name: "Молоко",
        price: 100
    },
    {
        name: "Кефир",
        price: 150
    },
    {
        name: "Сахар",
        price: 140
    }
]

// функция отображения продуктов
function showProducts() {
    productsContainer.innerHTML = ""
    products.forEach(function(product, index) {
        productsContainer.innerHTML += `
            <div class="product">
                <h5>${product.name}</h5>
                <p>${product.price}</p>
                <button class="delete-btn" id=${index}>Удалить</button>
            </div> 
        `
    })
    deleteProduct() 
}
showProducts() // вызов функции при загрузке страницы

// 2. При отправке формы отображать в консоли введенные название и цену товара
form.addEventListener("submit", function(event) {
    event.preventDefault() // отменяем действие по умолчанию
    const product = {
        name: productName.value,
        price: productPrice.value
    } 
    products.push(product) // добавим новый продукт в массив products
    clearInputs() // очистить поля формы после того как данные добавлены
    showNotification() // отображаем уведомление
    showProducts() // вызов функции отображения продуктов после того как добавляем новый продукт в массив
})

// 3. При добавлении нового продукта в форме, отображать его в списке продуктов
// 4. Очищать поля после отправки формы
function clearInputs() {
    productName.value = ""
    productPrice.value = ""
}

function showNotification() {
    const notification = document.querySelector(".notification")
    notification.style.display = "block"
    setTimeout(function() {
        notification.style.display = "none"
    }, 3000)
}

function deleteProduct() {
    const deleteBtns = document.querySelectorAll(".delete-btn") // [btn, btn, btn]
    deleteBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.parentElement.remove() // удалить из html
            const currentIndex = btn.id // id кнопки или индекс элемента в массиве, который нужно удалить
            products.splice(currentIndex, 1) // удалить один элемент из массива по индексу currentIndexx
            showProducts() // перерисовать элементы после удаления из массива
        })
    })
}

/*
    array.splice(индекс, количество)
        индекс - индекс элемента, с которого нужно начать удалять
        количество - количество элементов, которые нужно удалить

    element.parentElement - родительский элемент
    element.remove() - удаляет элемент из html 

    setTimeout(cb, time) - метод, который позволяет вызвать операцию через некоторое время
        cb - функция, которую нужно выполнить через время
        time - время в миллисекундах

    let name = "Arsen"
    name = "Artem"
    name - Artem

    let name = "Arsen"
    name = name + "Artem" // name += "Artem"
    name - "ArsenArtem" 

    <div>
        Hello World
    </div> 

    div.innerHTML = "Arsen"

    div.innerHTML = div.innerHTML + "Arsen"
    div.innerHTML += "Arsen"
*/

/*
        <div class="product">
            <h5 class="product-name">Название</h5>
            <p class="product-price">Цена</p>
        </div>
*/