const menu = document.querySelector('.list-items');
const burger = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');

burger.addEventListener('click',()=>{
  console.log('123');
  menu.classList.toggle('adjustPosition');
  burger.classList.toggle('change');
});

window.addEventListener('click',hideNav);

function hideNav(e){
  if(e.target === container)
  menu.classList.remove('adjustPosition');
}