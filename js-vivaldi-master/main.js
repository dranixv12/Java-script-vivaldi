//Vivaldi JS (ex)
//When Summer button clicked
document.getElementById('summerBtn') .addEventListener('click,setSummer')
//Event Function//
function setSummer() {

console.log('set summer')

  //Change text concerto text text
  document.getElementById('season-text') .innerHTML ='Summer';
  //change main images
  document.getElementById('main-img').src='images/summer.jpg';
  //change background color
  document.body.style.backgroundColor='#1BA848';
  //change audio resources
  document.getElementById('song').src='songs/vivaldi-summer.mp3'
  //update active border on buttons

}
