function chipColorBlack () {
  document.querySelector('.chip1').style.backgroundColor = 'black'
}
function chipColorBlack2 () {
  document.querySelector('.chip2').style.backgroundColor = 'black'
}
// function chipColorRed () {
//  document.querySelector('.chip').style.backgroundColor = 'red'
// }

// function nextChip () {

window.onload = function () {
  document.querySelector('.chip1').addEventListener('click', chipColorBlack)
  document.querySelector('.chip2').addEventListener('click', chipColorBlack2)
//  document.querySelector('.chip').addEventListener('click', chipColorRed)
}
/* class chip () { s
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
*/
