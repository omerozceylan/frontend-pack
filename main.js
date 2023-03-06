import { packages } from "./data"


// import { gsap } from './node_modules/gsap'
// gsap.registerPlugin(ScrollSmoother)

// ScrollSmoother.create({
//     smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
//     effects: true,           // looks for data-speed and data-lag attributes on elements
//     smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
//   });


const items = document.querySelectorAll('.select-section')

items.forEach(element => {
    element.addEventListener('click', returnPackageKey)
    // element.addEventListener('dblclick',returnEqualForDeleting)
})

let itemArray = []
let theCode = ""

// console.log(packages[16].key + 'main js...');

function returnPackageKey(){
    const item = this.parentElement
    changeColorCard(item)
    const itemTitle = item.querySelector('.items-title').innerHTML
    let index = findIndexFromArray(itemTitle);
    let obj = packages[index]
    createNpmCode(obj.key)
}

function changeColorCard(item){
    item.classList.toggle('clicked')
}

function findIndexFromArray(nameToFind){
    let index = packages.findIndex(function(product){
    return product.name === nameToFind 
    })
    return index
}



// function returnEqualForDeleting(){
//     const clickedElement = this.innerHTML
//     const objReturn = itemsObj[clickedElement]
//     deleteItemInNpmCode(objReturn)
// }


function createNpmCode(value){
    if(itemArray.includes(value)) return
    itemArray.push(value)
    console.log(itemArray)
    updateTheCodeAndArray()
}

// function deleteItemInNpmCode(value){
//     if(!itemArray.includes(value)) return
//     console.log(itemArray.indexOf(value))
//     const i = itemArray.indexOf(value)
//     itemArray.splice(i,1)
//     updateTheCodeAndArray()
// }

function updateTheCodeAndArray(){
    //theCode value reset everytime. That's because it have to be not reprinting every time
    theCode= ""
    for(let i=0; i<itemArray.length;i++){
        theCode+= ` ${itemArray[i]}`
    }
    console.log(theCode + 'the codeee');
    let theNpmOut = `npm install${theCode}`
    console.log('npm code: ' + theNpmOut)
}
