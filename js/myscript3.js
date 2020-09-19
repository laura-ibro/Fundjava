
// OBJEKTET

var book = {
  author : "J.K.Rowling",
  title : "Harry Potter and the chamber of secrets",
  year : 1998,
  getSummary : function (){
    return  "The second instalment of boy wizard Harry Potter's adventures at Hogwarts School of Witchcraft and Wizardry, based on the novel by JK Rowling. A mysterious elf tells Harry to expect trouble during his second year at Hogwarts, but nothing can prepare him for trees that fight back, flying cars, spiders that talk and deadly warnings written in blood on the walls of the school."
  }
};

document.getElementById('book').innerHTML = book.getSummary()

var doc = document.getElementById('row');
var a = doc.getElementsByClassName('book');

document.querySelector("body").style.backgroundColor = "lightblue";

function ndrysho(){
  document.querySelector('#button').style.backgroundColor = "black"
}

document.getElementById('button').addEventListener("mouseover", function(){
  this.innerHTML = "clicked!"
  this.style.backgroundColor = "lihtblue"
})


function lali(){
  document.querySelector('#button').style.backgroundColor = "black"
  document.querySelector('#button').innerHTML = "ikaaa!"

}


document.querySelector('button').addEventListener("click", function(){

document.querySelector('#button').style.backgroundColor = "#c6e1d0" ;
this.innerHTML = "Ndrysho lali"
})


var paragrafi = document.createElement('p');
var node = document.createTextNode ('This  is a text node');
paragrafi.appendChild(node);
var demo = document.querySelector('#demo2');

