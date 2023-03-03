import './style.css'

let itemArray = []
let theCode = ""

const items = document.querySelectorAll('.items')

// items.forEach(element => {
//     element.addEventListener('click', returnEqual)
//     element.addEventListener('dblclick',returnEqualForDeleting)
// })

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
    let theNpmOut = `{theCode}`
    console.log('npm code: ' + theNpmOut)
}

