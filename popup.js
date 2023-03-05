import {packages} from './data.js'

const infoButton = document.querySelectorAll('.items-info-button')
const popUp = document.querySelector('.modal')
const popUpCloseButton = document.querySelector('.pop-up-button')
const popUpInner = document.querySelector('.pop-up-info')

console.log('popup js icinde clg to data js: ' + packages);

infoButton.forEach((item)=> {
    item.addEventListener('click',()=>{
        popUp.showModal()
    })        
})

popUpCloseButton.addEventListener('click', ()=> {
    popUp.close()
})



let infoButtons = document.querySelectorAll('.items-info-button')
let nameToFind = ''



infoButtons.forEach((item)=>{
    item.addEventListener('click',function(){
        const div1 = this.parentElement
        const itemTitle = div1.querySelector('.items-title')
        nameToFind = itemTitle.innerHTML
        console.log(nameToFind);
        findIndexFromArray(nameToFind)
        
    })
})


function findIndexFromArray(nameToFind){
  let index = packages.findIndex(function(product){
      return product.name === nameToFind 
  })
  const popUpInfo = returnObjectInfo(index)
  reWritePopUp(popUpInfo)
}

function returnObjectInfo(index){
  const object = packages[index]
  return object.info
   
}

function reWritePopUp(text='hata: bilgi bulunamadı'){
    popUpInner.innerHTML = text
}