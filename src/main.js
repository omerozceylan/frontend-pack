import { packages as packagesData } from "./data";

const items = document.querySelectorAll(".select-section");
const deleteIcon = document.querySelector(".delete-svg");
const showCodeDiv = document.querySelector(".show-code-inner-text");
const showCodeSection = document.querySelector('.show-code-div')
const copyButton = document.querySelector(".copy-svg");
const cards = document.querySelectorAll(".items");

items.forEach((element) => {
  element.addEventListener("click", returnPackageKey);
});

changeVisibiltyOfCode(0);
let theNpmOut = "";
let packages = [];
let commandText = "";
let tooltip = document.getElementById("myTooltip");

copyButton.addEventListener("click", copyToClickBoard);
deleteIcon.addEventListener("click", removeAll);

function returnPackageKey() {
  const item = this.parentElement;
  changeColorCard(item);
  const itemTitle = item.querySelector(".items-title").innerHTML;
  let index = getProductIndexByName(itemTitle);
  let obj = packagesData[index];
  createNpmCode(obj.key);
}

function changeColorCard(item) {
  item.classList.toggle("clicked");
}

function getProductIndexByName(nameToFind) {
  let index = packagesData.findIndex(function (product) {
    return product.name === nameToFind;
  });
  return index;
}

function createNpmCode(value) {
  if (packages.includes(value)) {
    const i = packages.indexOf(value);
    packages.splice(i, 1);
  } else {
    packages.push(value);
  }
  tooltip.innerHTML = "Copy to clipboard"
  updateTheCodeAndArray();
}

function updateTheCodeAndArray() {
  commandText = packages.join(" ");

  //if there is a no code in "commandText" variable, code showing container will be gone
  if (commandText == "") changeVisibiltyOfCode(0);
  else {
    changeVisibiltyOfCode(1);
  }

  theNpmOut = `npm install ${commandText}`;
  showCode(theNpmOut);
}

function showCode(theNpmOut) {
  showCodeDiv.innerHTML = theNpmOut;
  showCodeDiv.scroll(showCodeDiv.scrollWidth,0)

}

function changeVisibiltyOfCode(value) {
    if(value==1){
      if(showCodeSection.classList.contains('hidden')){
        showCodeSection.classList.remove('hidden')
        showCodeSection.classList.add('show')
      }else{
        showCodeSection.classList.add('show')
      }
    }else{
      if(showCodeSection.classList.contains('show')){
        showCodeSection.classList.remove('show')
        showCodeSection.classList.add('hidden')
      }else{
        showCodeSection.classList.add('hidden')
      }
    }
}

function copyToClickBoard() {
  // showCodeDiv.select()
  // showCodeDiv.setSelectionRange(0, 99999)

  navigator.clipboard.writeText(theNpmOut);
  tooltip.innerHTML = "Copied!"
}

function removeAll() {
  commandText = "";
  packages = [];
  updateTheCodeAndArray();
  removeSelectedItems();
}

function removeSelectedItems() {
  cards.forEach((item) => {
    if (item.classList.contains("clicked")) {
      item.classList.remove("clicked");
    }
  });
}
