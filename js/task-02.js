const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const markup = ingredients.map((ingredient) => {
  const li = document.createElement('li')
  li.className = 'item';
  li.textContent = ingredient;
  return li;
});

const list = document.querySelector('#ingredients');
list.append(...markup)
