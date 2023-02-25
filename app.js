let itemsObj = {
    "1":'libary1',
    "2":'libary2',
    "3":'libary3',
    "4":'libary4',
    "5":'libary5',
    "6":'libary6',
    "7":'libary7',
    "8":'libary8',
    "23":'libary23'
}

let containerNode = document.querySelector('.items-container')


//Print all items in obj
for(const property in itemsObj){
    let elementHTMLNode = document.createElement('div')
    elementHTMLNode.classList.add('items')
    elementHTMLNode.innerHTML = property
    containerNode.appendChild(elementHTMLNode)
}

const items = document.querySelectorAll('.items')

items.forEach(element => {
    element.addEventListener('click', returnEqual)
})

function returnEqual(){
    const clickedElement = this.innerHTML
    const objReturn = itemsObj[clickedElement]
    createNpmCode(objReturn)
}

let itemArray = []

let theCode = ""

function createNpmCode(value){
    if(itemArray.includes(value)) return
    itemArray.push(value)
    console.log(itemArray)
    //theCode value reset everytime. That's because 
    theCode= ""
    for(let i=0; i<itemArray.length;i++){
        theCode+= `yarn add ${itemArray[i]}`
    }
    console.log(theCode)
}




