const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryRef = document.querySelector('#gallery');
  
  const itemConstructor = (src, alt) => {
    const itemOfList = document.createElement('li');
    const imageElement = document.createElement('img');

    imageElement.src = `${src}`;
    imageElement.alt = `${alt}`;
    imageElement.width = 500;

    itemOfList.append(imageElement);

    return itemOfList;
  }
  // console.log(itemConstructor('a', 's'));

  const renderGallery = (images) => {
    const galleryItem = images.map((obj) => itemConstructor (obj.url, obj.alt));
    galleryRef.append(...galleryItem);
  }

  renderGallery(images);