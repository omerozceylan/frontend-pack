// import { gsap } from './node_modules/gsap'
// gsap.registerPlugin(ScrollSmoother)

// ScrollSmoother.create({
//     smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
//     effects: true,           // looks for data-speed and data-lag attributes on elements
//     smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
//   });


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

