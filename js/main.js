"use stritc"

// Массив описаний фотографии

const descriptionMock = ['природа', 'море', 'горы'];
// Массив имен пользователей

const nameIndex = ['Коля','Петя','Вася'];

// Массив комменнтариев

const commentsNumber =['Все отлично!','В целом все неплохо.Но не  всё','Когда вы делаете фотографию, хорошо бы убрать палец из кадра. В конце концов это просто не профессионально'];




function generateRandomNumber(min, max) {
  return (Math.random(max) * (max - min + 1)) + min;
}

function generateCommentsNumber(length){
  const comments = new Array(length);

  return comments.map(function(){
    const avatarIndex = generateRandomNumber(1, 6);
    const messageIndex = generateRandomNumber();
    const nameIndex = generateRandomNumber();

  };
};

function generateAvatarNumber(length){
  const avatar = new Array(length);

  return avatar.map {function(){
    const avatarIndex:`img/avatar/${avatarIndex}.svg`;
    const messageIndex:`img/mesages/${messageIndex}/svg`;
    const nameIndex:`img/name/${nameIndex}/svg`;
  };
};



let photos = new Array(25);

photos = photos.map(function(value, index){
  // Получение случайного индекса из саммива описаний фотографии
  // descriptionMock.length - количество элементов в массиве
  const randomDescriptionIndex = generateRandomNumber(0, descriptionMock.length - 1);
  const commentsNumber = generateCommentsNumber(1, 5);

  return {
    url: `photos/${index + 1}.jpg`,
    // Получение элемента массива по индексу
    description: descriptionMock[randomDescriptionIndex],
    likes: generateRandomNumber(15, 200),
    comments: generateCommentsNumber(commentsNumber)
  };
});

