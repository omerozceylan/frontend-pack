let infoButton = document.querySelectorAll('.items-info-button')
let popUp = document.querySelector('.modal')
let popUpCloseButton = document.querySelector('.pop-up-button')


infoButton.forEach((item)=> {
    item.addEventListener('click',()=>{
        popUp.showModal()
    })        
})

popUpCloseButton.addEventListener('click', ()=> {
    popUp.close()
})
