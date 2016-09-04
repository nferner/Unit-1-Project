/*  need to make each space accesible for click to turn black
    need to make each space accesible for each click to turn chip red
    need to order the clicks for either after one you get the other or by how many clicks
    for each odd click of the array with the class of chip the 'chip' should turn black
    for each even click of the array with the class of chip the 'chip' should turn red
    the 'chip' can only turn red or black if the 'chip' is white
    this 'chip' can only turn red or black if the 'chip' is above another red or black chip
    in order for a 'chip' to be above a red or black 'chip' the column is the same
    the row is one place higher
    I think what i need is an array for each column
    all inside an array for the grid as a whole
    something that looks like first move: [i][j]
    the next possible move could be [i][j--], [i++][j] thru [i+8][j]
    maybe something about .length goes in there
*/





function chipColorBlack () {
 for (let chip of chipss)
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
