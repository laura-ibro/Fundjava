var books = [
{
    tittle: "Harry Potter and the chamber os secrets",
    author: "J.K.Rowling",
    alreadyRead: false,
    image :"https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg"
},
    
{tittle: "Kumbulla pertej murit",
    author: "Ernest Koliqi",
    alreadyRead: true,
    image: "https://i1.wp.com/shkoder.net/wp-content/uploads/2014/11/ernest-koliqi.jpg?fit=600%2C372&ssl=1"
}

];



/*
for (var i=0; i<books.length; i++){
    var p = document.createElement('p');
    var note = document.createTextNode( books[i].tittle + 'by' + books[i].author)
}
*/

var bookList = document.createElement ('ul');
for (var i = 0; i<books.length; i++){
  var item = document.createElement('li');
  var bImage = document.createElement('img');
  bImage.src = books[i].image;
  item.appendChild(bImage);
  var node = document.createTextNode( books[i].tittle + ' by ' + books[i].author)
  item.appendChild(node);
  if(books[i].alreadyRead === false){
      item.style.color = 'red';
  }
    bookList.appendChild(item);
}
document.body.appendChild(bookList);