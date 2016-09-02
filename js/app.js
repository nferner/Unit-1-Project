function chipColor () {
  if (document.querySelectorAll('.chip').style.backgroundColor = 'white')
  return document.querySelectorAll('.chip').style.backgroundColor = 'black'
}

window.onload = function () {
  document.querySelectorAll('.chipClick').addEventListener('click', chipColor())
}

/*  if (chipChange.style.backgroundColor = 'white') {
    chipChange.style.backgroundColor = 'black';
  }
}
chipChange.addEventListener('click', function chipColor());
*/
