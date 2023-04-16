
const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');


const numberOfCategories = categoriesItems.length;


console.log(`Number of categories: ${numberOfCategories}`);


categoriesItems.forEach(item => {

  const categoryTitle = item.querySelector('h2').textContent;


  const categoryElements = item.querySelectorAll('li');

 
  const numberOfElements = categoryElements.length;


  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});
