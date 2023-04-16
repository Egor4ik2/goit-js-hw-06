const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('#ingredients')
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const newEl = document.createElement("li")
  
  newEl.textContent = ingredients;
  newEl.classList.add("item");

  fragment.appendChild(newEl);
});

navEl.appendChild(fragment)

console.log(navEl)




  


  


  
