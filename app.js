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


//Print to htm all items in obj
for(const property in itemsObj){
    let elementHTMLNode = document.createElement('div')
    elementHTMLNode.classList.add('items')
    elementHTMLNode.innerHTML = property
    containerNode.appendChild(elementHTMLNode)
}

const items = document.querySelectorAll('.items')

items.forEach(element => {
    element.addEventListener('click', returnEqual)
    element.addEventListener('dblclick',returnEqualForDeleting)
})

function returnEqual(){
    const clickedElement = this.innerHTML
    const objReturn = itemsObj[clickedElement]
    createNpmCode(objReturn)
}

function returnEqualForDeleting(){
    const clickedElement = this.innerHTML
    const objReturn = itemsObj[clickedElement]
    deleteItemInNpmCode(objReturn)
}

let itemArray = []
let theCode = ""

function createNpmCode(value){
    if(itemArray.includes(value)) return
    itemArray.push(value)
    console.log(itemArray)
    updateTheCodeAndArray()
}

function deleteItemInNpmCode(value){
    if(!itemArray.includes(value)) return
    itemArray.indexOf(value)
}

function updateTheCodeAndArray(){
    //theCode value reset everytime. That's because it have to be not reprinting every time
    theCode= ""
    for(let i=0; i<itemArray.length;i++){
        theCode+= ` ${itemArray[i]}`
    }
    let theNpmOut = `npm install${theCode}`
    console.log('npm code: ' + theNpmOut)
}


