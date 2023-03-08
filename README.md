# frontend-pack

## What Does Frontend-Pack?

frontend-pack is a tool that allows you to generate npm code with just a click.




Before we dive into my project, there's something you should know: this is the first time I am writing something at this level. My previous project was a calculator :)

![Screenshot_1](https://user-images.githubusercontent.com/42185275/223608612-c7e6d5e7-9153-464c-9997-e51abc006b91.jpg)

And as you can see, I haven't used any React, jQuery, or similar tools in my project. It is entirely vanilla. And this will be the last project I write in vanilla.
Or at least, i hope so!


## Let me tell you about how my project works and the logic behind it:

### Firstly, all the objects are printed to HTML from data.js file, as usual.


```
//Print to html all items in obj
packages.forEach((item) => {
  let html = `
            <div class="items">
                <div class="select-section">
                 <div class="items-img">
                      <img src=${item.imgUrl} class="img"/>
                  </div>
                </div>
                <div class="items-button-container">
                    <div class="items-title">${item.name}</div>
                    <img src="info2.svg" class="items-info-button"/>
                </div>
            </div>
  `;
  containerNode.innerHTML = containerNode.innerHTML + html;
});

```


### I am listening for the click event on the 'img' section of all the cards, and obtaining the index of the object that corresponds to the card's title. From this index, I retrieve the value from the 'key' attribute and add it to our code.

```
function returnPackageKey() {
  const item = this.parentElement; // The 'item' variable refers to the card itself.
  changeColorCard(item); // The color-changing function is called when a card is selected.
  const itemTitle = item.querySelector(".items-title").innerHTML; // The title of the selected card is assigned to a variable.
  let index = getProductIndexByName(itemTitle);
  let obj = packagesData[index];
  createNpmCode(obj.key); //The index is then found using the title, and the value of the 'key' attribute in that index is passed to the createNpmCode() function.
}

```


### createNpmCode() does this;

 If there is something there, remove it; otherwise, add it. Everything is done with a single click.

```
function createNpmCode(value) {
  if (packages.includes(value)) {
    const i = packages.indexOf(value);
    packages.splice(i, 1);
  } else {
    packages.push(value);
  } 
  updateTheCodeAndArray();
}

```


### What does updateTheCodeAndArray() do?

Whenever there is an addition or removal operation, this function retrieves the corresponding code snippets from the array and uses them to regenerate the output, which is the 'commandText'.



```
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

```
And I forgot to mention: if the code is empty when a change is made, the place where the code is displayed is hidden.



### removeAll() and removeSelectedItems()
These functions are called when the 'delete' button in the code display section is clicked

![Screenshot_2](https://user-images.githubusercontent.com/42185275/223615066-4514a867-d7fc-4851-ad62-b3fdeceddace.jpg)

The purpose of the removeSelectedItems() function is to clear the selection effect on the cards whose codes have been deleted, to keep things tidy.

```
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

```


I wanted to explain the code and logic I've implemented here. I've provided a summary, but if you want to understand it more thoroughly, you can take a look at the code.



