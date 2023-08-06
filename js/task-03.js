const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
let markup = ' ';
images.map(({ url, alt }) => {
  markup += `<li><img src='${url}' alt='${alt}' width="100%" height="100%" style></li> `
});
const list = document.querySelector('.gallery');
list.insertAdjacentHTML('beforeend', markup);
list.style.display = 'flex';
list.style.gap = "20px";
list.style.listStyle = "none";
list.style.padding = "0";
list.style.flexWrap = "wrap"

for (const listItem of list.children) {
  listItem.style.width ="calc((100% - 40px) / 3)"
}

for (const listItem of list.children) {
  for (const itemChildren of listItem.children) {
    itemChildren.style.display = "block";
    itemChildren.style.objectFit = "cover";
  }
}
