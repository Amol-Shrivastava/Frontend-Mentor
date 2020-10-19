const btn = document.getElementById('shareicon');
const menu = document.getElementById('menu');
const authorBox = document.getElementById('author');

// btn.classList.remove("icon");

btn.addEventListener('click', () =>{
menu.classList.toggle("toggle");
btn.classList.toggle("icon");
// author.classList.toggle("hide");
// btn.classList.add("icon");
   //menu.classList.add('toggle');
})


//window.addEventListener('click', event => {
  //alert(event.target);
  // if(event.target !== menu){
  //   menu.style.opacity = '0';
  //   menu.style.visiblity = 'visible';
  // }
//})
