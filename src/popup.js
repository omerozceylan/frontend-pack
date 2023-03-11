import { packages } from "./data.js";
// import { languageUserSelect } from "./main.js";

const infoButton = document.querySelectorAll(".items-info-button");
const popUp = document.querySelector(".modal");
const popUpCloseButton = document.querySelector(".pop-up-button");
const popUpInner = document.querySelector(".pop-up-info");
const selectLanguage = document.querySelector('#language-select')

let languageUserSelect = ''

selectLanguage.addEventListener('click', getSelectedLanguage)

function getSelectedLanguage(){
   let index = selectLanguage.selectedIndex
   let selectedLanguage = selectLanguage.options[index].innerHTML
   console.log(selectedLanguage);
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
