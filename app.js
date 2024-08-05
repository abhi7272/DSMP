let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Large Kivi(500gm)',
        image: '1.PNG',
        price: 120
    },
    {
        id: 2,
        name: 'APPLE (500gm)',
        image: '2.PNG',
        price: 80
    },
    {
        id: 3,
        name: 'Strawberries(500gm)',
        image: '3.PNG',
        price: 100
    },
    {
        id: 4,
        name: 'Oranges(500gm)',
        image: '4.jpg',
        price: 70
    },
    {
        id: 5,
        name: 'Grapes(500 gm)',
        image: '5.JPG',
        price: 60
    },
    {
        id: 6,
        name: 'Guava(500gm)',
        image: '6.jpg',
        price: 40
    },
     {
        id: 7,
        name: 'Banana(06 pc)',
        image: '7.png',
        price: 40
    },
    {
        id: 8,
        name: 'Mango(06 pc)',
        image: '8.png',
        price: 300
    },
    {
        id: 9,
        name: 'Watermelon(2.5kg)',
        image: '9.png',
        price: 45
    },
    {
        id: 10,
        name: 'Pineapple(2.5kg)',
        image: '10.png',
        price: 55
    },
    {
        id: 11,
        name: 'Pomengranate(2.5kg)',
        image: '11.png',
        price:  75
    },
    {
        id: 12,
        name: 'Jackfruit(2kg)',
        image: '12.jpg',
        price: 65
    },
    {
        id: 13,
        name: 'Custard Apple(500gm)',
        image: '13.jpg',
        price: 60
    },
    {
        id: 14,
        name: 'Dragon Fruit(1 pc)',
        image: '14.jpg',
        price: 100
    },
    {
        id: 15,
        name: 'Jackfruit(1kg per pc)',
        image: '15.jpg',
        price: 70
    },
    {
        id: 10,
        name: 'Mango(2kg)',
        image: '10.png',
        price: 55
    },   
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}