const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


  const ingredientsListRef = document.querySelector('#ingredients');
  // console.log(ingredientsListRef);

  const ingredientItem = (name) => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = name;

  return ingredientElement;
  };

  const renderIngredienstList = (ingredientsList) => {
  const ingredientsElements = ingredientsList.map((ingredient) => ingredientItem(ingredient));
  ingredientsListRef.append(...ingredientsElements);
  } ;

renderIngredienstList(ingredients);