function chipColorBlack () {
  document.querySelector('.chip').style.backgroundColor = 'black'
}
// change to rows and maybe get element by id and change children...which are now columns
// function chipColorRed () {
//  document.querySelector('.chip').style.backgroundColor = 'red'
// }

// function nextChip () {

window.onload = function () {
  document.querySelector('.chip').addEventListener('click', chipColorBlack)
//  document.querySelector('.chip').addEventListener('click', chipColorRed)
}
/* class chip () {
  constructor () {
 this.el = document.querySelectorAll('.chip').style.background = 'black'
  }
}
 function chipColor () {
   if (document.querySelectorAll('.chip').style.backgroundColor = 'white')
 }

  window.onload = function () {
    document.querySelectorAll('.chipClick').addEventListener('click', chip)
  }

 if (chipChange.style.backgroundColor = 'white') {
    chipChange.style.backgroundColor = 'black';
  }
}
chipChange.addEventListener('click', function chipColor());

class chips {
  constructor (){
    this.colour = document.body.querySelectorAll('.chip').style.backgroundColor,

  function checkColor () {
    for (let i = 0; i < 43; i++)
*/
