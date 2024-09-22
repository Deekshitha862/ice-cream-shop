const products=[
    {
        id:1
        name: 'Ice cream 1',
        price:10,
        quantity:50,
        description:This is ice cream 1,
        image:"https://placehold.co/350x350/blue/white?text=Ice+cream+1"
    },
    {
        id:2
        name: 'Ice cream 2',
        price:20,
        quantity:55,
        description:This is ice cream 2,
        image:"https://placehold.co/350x350/blue/white?text=Ice+cream+2"
    },
    {
        id:3
        name: 'Ice cream 3',
        price:60,
        quantity:80,
        description:This is ice cream 3,
         image:"https://placehold.co/350x350/blue/white?text=Ice+cream+3"
    },
  {
    id:4
    name: 'Ice cream 4',
    price:60,
    quantity:80,
    description:This is ice cream 3,
     image:"https://placehold.co/350x350/blue/white?text=Ice+cream+4"
  },
  {
    id:5
    name: 'Ice cream 5',
    price:60,
    quantity:80,
    description:This is ice cream 3,
     image:"https://placehold.co/350x350/blue/white?text=Ice+cream+5"
  },
  {
    id:6
    name: 'Ice cream 6',
    price:60,
    quantity:80,
    description:This is ice cream 3,
     image:"https://placehold.co/350x350/blue/white?text=Ice+cream+6"

  }
]
const productsElement=document.getElementById('#products')

divColumelement.classList.add("col-md-4")
divColumnelement.classList.add("mb-4")

const divColumelement=document.createElement('div')
divColumelement.classList.add("card-h-100")
divColumelement.classList.add("h-100")

const ImageElement=document.createElement('img')
ImageElement.classList.add("card-img-top")
ImageElement.src="https://placehold.co/350x350/blue/white?text=Ice+cream+1"
ImageElement.alt="Ice cream 1"

const divCardBodyElement=document.createElement('div')
divCardBodyElement.classList.add("card-body")

const cardTitleElement=document.createElementt("h5")
cardTitleElement.classList.add("card-title")
cardTitleElement.textContent="Ice cream 1"

const cardTextElement = document.createElement("p")
cardTextElement.classList.add("card-text")
cardTextElement.textContent="This is ice cream 1"

const priceElement = document.createElement("p")
priceElement.classList.add("card-text")
priceElement.textContent="Price:10"

const buttonGroupElement = document.createElement("div")
buttonGroupElement.classList.add("d-flex")
buttonGroupElement.classList.add("justify-content-end")
buttonGroupElement.classList.add("gap-3")
const viewDetailsButtonElement=document.createElement("a")
viewDetailsButtonElement.classList.add("btn", "btn-primary")
viewDetailsButtonElement.href="#"
viewDetailsButtonElement.textContent="View Details"

const addToCartButtonElement=document.createElement("a")
addToCartButtonElement.classList.add("btn", "btn-info")
addToCartButtonElement.href="#"
addToCartButtonElement.textContent="Add to Cart"


