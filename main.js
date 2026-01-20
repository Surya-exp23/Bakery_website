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


const scrollup = () => {
  const scrollupElement = document.getElementById("scrollup");
  if (window.scrollY >= 250) {
    scrollupElement.classList.remove("-bottom-1/2");
    scrollupElement.classList.add("bottom-4");
  }
  else {
    scrollupElement.classList.add("-bottom-1/2");
    scrollupElement.classList.remove("bottom-4");
  }
}

window.addEventListener('scroll', scrollup);

// const scrollheader = () => {
//   const header = document.getElementById("navbar");

//   if (window.scrollY >= 50) {
//     header.classList.add("border-b","border-yellow-500");
//   }
//   else {
//     header.classList.remove("border-b","border-yellow-500");
//   }
// }

// window.addEventListener('scroll', scrollheader);









const swiper = new Swiper('.swiper', {

    speed:400,
    spaceBetween:30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }

});



const activeLink = () => {
  const sections = document.querySelectorAll('section');
  const navlinks = document.querySelectorAll('.nav-link');

  let current = "home";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    
    if(this.scrollY >= sectionTop - 60){
      current = section.getAttribute("id");
    }
  });


  navlinks.forEach(item => {
    item.classList.remove("active");

    if(item.href.includes(current)){
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activeLink);



// scrolling reveal animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  reset: true
})

sr.reveal(`.home_data`)
sr.reveal(`.home_image`,{delay: 500,scale: 0.85})

sr.reveal(`.service_card`,{interval: 100})

// sr.reveal(`.about_leaf`,{delay: 1000, origin: 'right'})
// sr.reveal(`.about_item1_content , .about_item2_img`,{delay: 1000, origin: 'right'})
// sr.reveal(`.about_item2_content , .about_item1_img`,{delay: 1000, origin: 'left'})