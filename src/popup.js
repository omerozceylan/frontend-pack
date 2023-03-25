import { packages } from "./data.js";

const infoButton = document.querySelectorAll(".items-info-button");
const popUp = document.querySelector(".modal");
const popUpCloseButton = document.querySelector(".pop-up-button");
const popUpInner = document.querySelector(".pop-up-info");
const selectLanguage = document.querySelector('#language-select')
const topMessage1 = document.querySelector('.top-message')

selectLanguage.addEventListener('click', getSelectedLanguage)



const LANGUAGE_VALUE = 'language'

function atStart(){
  // console.log(localStorage.getItem(LANGUAGE_VALUE));
  if(localStorage.getItem(LANGUAGE_VALUE)=='null' || localStorage.getItem(LANGUAGE_VALUE)===''){
    console.log('null');
    localStorage.setItem(LANGUAGE_VALUE,'En')
    selectLanguage.value = language
  }else{
    const language = localStorage.getItem(LANGUAGE_VALUE)
    changeTextsByLanguage(language)
    selectLanguage.value = language
  }
}

atStart()

function getSelectedLanguage(){
   let index = selectLanguage.selectedIndex
   let selectedLanguage = selectLanguage.options[index].innerHTML
   localStorage.setItem(LANGUAGE_VALUE,selectedLanguage)
   changeTextsByLanguage(selectedLanguage)
   return selectedLanguage
}

infoButton.forEach((item) => {
  item.addEventListener("click", () => {
    popUp.showModal();
  });
});

popUpCloseButton.addEventListener("click", () => {
  popUp.close();
});

let infoButtons = document.querySelectorAll(".items-info-button");
let nameToFind = "";

infoButtons.forEach((item) => {
  item.addEventListener("click", function () {
    const div1 = this.parentElement;
    const itemTitle = div1.querySelector(".items-title");
    nameToFind = itemTitle.innerHTML;
    reWritePopUp(nameToFind)
  });
});

function findIndexFromArray(nameToFind) {
  let index = packages.findIndex(function (product) {
    return product.name === nameToFind;
  });
  return index
}

function returnObjectInfo(index, language) {
  const object = packages[index];
  if(language == 'Tr'){
    return object.info;
  }else{
    return object.enInfo;
  }
}

function reWritePopUp(selectedPackageTitle) {
  const languageSelectedByUser = getSelectedLanguage()
  const index = findIndexFromArray(selectedPackageTitle)
  const popUpInfo = returnObjectInfo(index,languageSelectedByUser);
  popUpInner.innerHTML = popUpInfo;
}


function changeTextsByLanguage(language='Tr'){
  if(language=='Tr'){
    topMessage1.innerHTML = `<a href="https://github.com/omerozceylan/frontend-pack#readme" target="_blank" class="top-message-message">Frontend-Pack</a> nedir? `
    popUpCloseButton.innerHTML= 'tamam'
  }else {
    topMessage1.innerHTML = `What is <a href="https://github.com/omerozceylan/frontend-pack#readme" target="_blank" class="top-message-message">Frontend-Pack?</a>`  
    popUpCloseButton.innerHTML = 'ok'
  }
}