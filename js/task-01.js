const listItems = document.querySelectorAll('.item');
const numberOfCategories = listItems.length;
console.log('Number of categories:', numberOfCategories);
listItems.forEach((item) => {
    console.log('Category:', item.firstElementChild.innerText);
    console.log('Elements:',item.lastElementChild.children.length);
})

