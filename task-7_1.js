const categoriesRef = document.querySelector('#categories');

const checkNumberOfCategories = (obj) => obj.children.length;

console.log(`В списке ${checkNumberOfCategories(categoriesRef)} категории. \n `);


const listOfCategories = [...categoriesRef.children];


const loger = (arr) => arr.map((item) => {
    const categoriesName = item.querySelector('h2');
    const numberOfItems = checkNumberOfCategories(categoriesName.nextElementSibling);
    console.log(`Категория: ${categoriesName.textContent}`);
    console.log(`Количество элементов: ${numberOfItems} \n `);
})

loger(listOfCategories)