const navmenu= document.getElementById("nav-menu");
const navlink= document.querySelectorAll(".nav-link");
const hamburger= document.getElementById("hamburger");

hamburger.addEventListener("click", ()=>{
  if (navmenu.classList.contains('left-full')) {
    navmenu.classList.replace('left-full','left-0');
  } else {
    navmenu.classList.replace('left-0','left-full');
  }
  hamburger.classList.toggle('ri-menu-4-fill');
  hamburger.classList.toggle('ri-close-line');
});

navlink.forEach(link =>{
  link.addEventListener("click", ()=>{
    if (navmenu.classList.contains('left-0')) {
      navmenu.classList.replace('left-0','left-full');
    }
    hamburger.classList.remove('ri-close-line');
    hamburger.classList.add('ri-menu-4-fill');
  });
});