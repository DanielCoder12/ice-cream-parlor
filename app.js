// SECTION GLOBAL 
const iceCreams = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
},
{
    name: 'Chocolate',
    price: 1.25,
    quantity: 0
},
{
    name: 'Mint',
    price: 1.25,
    quantity: 0
},
{
    name: 'Birthday Cake',
    price: 1.25,
    quantity: 0
}
]

const Vessels = [{
    name: 'Waffle Cone',
    quantity: 0,
    price: .25
},
{
    name: 'Waffle Bowl',
    quantity: 0,
    price: .5
},
{
    name: 'Dipped Cone',
    quantity: 0,
    price: .75
},
]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]




// !SECTION GLOBAL END

// SECTION FUNCTIONS


function orderIceCream(nameOfIceCream) {

    const IceCreamQuantity = iceCreams.find(iceCream =>

        iceCream.name == nameOfIceCream
    )
    IceCreamQuantity.quantity++
    // console.log('ice cream info', IceCreamQuantity.quantity, IceCreamQuantity.name, IceCreamQuantity.price);

    displayIndividualInfo()

    costOfIceCream()


    // const iceCreamOnPage = document.getElementById('showThings')
    // iceCreamOnPage.innerText = (`ice cream info, ${IceCreamQuantity.quantity}, ${IceCreamQuantity.name}, ${IceCreamQuantity.price}`)
}

function orderTopping(nameOfTopping) {
    const toppingQuantity = toppings.find(topping =>
        topping.name == nameOfTopping)
    toppingQuantity.quantity++

    displayIndividualInfo()
    costOfIceCream()
}

function orderVessel(nameOfVessel) {
    const vesselQuantity = Vessels.find(vessel =>
        vessel.name == nameOfVessel)
    vesselQuantity.quantity++

    displayIndividualInfo()
    costOfIceCream()
}

function costOfIceCream() {
    let totalPrice = 0

    iceCreams.forEach(iceCream => {
        const price = iceCream.price * iceCream.quantity
        totalPrice += price
    })
    toppings.forEach(topping => {
        const price = topping.price * topping.quantity
        totalPrice += price


    })

    Vessels.forEach(vessel => {
        const price = vessel.price * vessel.quantity
        totalPrice += price
    })

    const runningTotal = document.getElementById('cartTotal')
    runningTotal.innerText = totalPrice
}

function payButton() {
    const checkOut = window.confirm('Are you done shopping?')
    if (checkOut) {
        iceCreams.forEach(icecream => icecream.quantity = 0)
        Vessels.forEach(vessel => vessel.quantity = 0)
        toppings.forEach(topping => topping.quantity = 0)
        costOfIceCream()
        displayIndividualInfo()
    }
}



function displayIndividualInfo() {
    content = ''
    iceCreams.forEach(icecream => {
        if (icecream.quantity) {
            const individualTotal = (icecream.quantity * icecream.price)
            content += ` <div class="col-6">${icecream.name}</div>
            <div class="col-2">${icecream.quantity}</div>
            <div class="col-2">${icecream.price}</div>
            <div class="col-2">${individualTotal}</div>`

        }
    })

    toppings.forEach(topping => {
        if (topping.quantity) {
            const individualTotal = (topping.quantity * topping.price)
            content += ` <div class="col-6">${topping.name}</div>
            <div class="col-2">${topping.quantity}</div>
            <div class="col-2">${topping.price}</div>
            <div class="col-2">${individualTotal}</div>`
        }
    })

    Vessels.forEach(vessel => {
        if (vessel.quantity) {
            const individualTotal = (vessel.quantity * vessel.price)
            content += ` <div class="col-6">${vessel.name}</div>
            <div class="col-2">${vessel.quantity}</div>
            <div class="col-2">${vessel.price}</div>
            <div class="col-2">${individualTotal}</div>`
        }
    })
    const nameOfThing = document.getElementById('showThings')
    nameOfThing.innerHTML = content

}


// !SECTION FUNCTIONS END

