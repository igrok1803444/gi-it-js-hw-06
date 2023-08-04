const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let markup =  [];
ingredients.forEach((ingredient) => {
  const li = document.createElement('li')
li.className = 'item';
li.textContent = ingredient;
  markup.push(li);
})
console.log(markup);
const list = document.querySelector('#ingredients');
list.append(...markup)
