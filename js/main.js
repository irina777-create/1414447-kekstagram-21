"use stritc"

// Массив описаний фотографии

const descriptionMock = ['природа', 'море', 'горы'];
// Массив имен пользователей

const nameIndex = ['Коля','Петя','Вася'];

// Массив комменнтариев

const commentsNumber = ['Все отлично!','В целом все неплохо.Но не  всё','Когда вы делаете фотографию, хорошо бы убрать палец из кадра. В конце концов это просто не профессионально'];




function generateRandomNumber(min, max) {
  return (Math.random(max) * (max - min + 1)) + min;
}

function generateCommentsNumber(length){
  const comments = new Array(length)
  return comments();
};

const avatarIndex = generateRandomNumber(1, 6);
const messageIndex = generateRandomNumber();
const nameIndex = generateRandomNumber();

const avatarsIndex = avatars.map(function(){
    const avatarsIndex: `img/avatar/${avatarIndex}/svg`;
    const messageIndex:`img/mesages/${messageIndex}/svg`;
    const nameIndex:`img/name/${nameIndex}/svg`;
    console.log (avatarsIndex,messageIndex,nameIndex);


});

const  photos = new Array(25);

const photos =photos.map(function(value, index){
  return {
    url: photos/$`{index + 1}/jpg`

  }

})();

function generateRandomNumber(length){
  var likesIndex = [15,200]
  for (var i=15; i>=200 , i++) {
    console.log likesIndex();

  }

};



