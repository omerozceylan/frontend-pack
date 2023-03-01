import './style.css'

let itemArray = []
let theCode = ""

let itemsObj = {
    "mehmt":'libary1',
    "sdaf":'libary2',
    "sdaf":'libary3',
    "dsfag":'libary4',
    "5":'libary5',
    "2":'libary6',
    "7":'libary7',
    "8":'libary8',
    "23":'libary23',
    "34":'fdsgsdf',
    "1fdsg2":'seksen5',
    "12":'sdhfgdeksen5',
    "12hg":'sgfhdeksen5',
    "1gfh2":'sgfheksen5',
    "1hgfh2":'sefghdfdksen5',
    "1hfgd2":'sefdhgksen5',
    "1hfdg2":'sfdhgeksen5',
    "1fghd2":'sekfghdsen5',
    "12hgf":'sefdghksen5',
    "1fghd2":'sekfgdhsen5',
    "1fghd2":'sefdhgksen5',
    "1dhfg2":'sfdhgeksen5',
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


function createNpmCode(value){
    if(itemArray.includes(value)) return
    itemArray.push(value)
    console.log(itemArray)
    updateTheCodeAndArray()
}

function deleteItemInNpmCode(value){
    if(!itemArray.includes(value)) return
    console.log(itemArray.indexOf(value))
    const i = itemArray.indexOf(value)
    itemArray.splice(i,1)
    updateTheCodeAndArray()
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

