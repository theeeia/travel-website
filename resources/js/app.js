/*==================================================================
    LAZY LOAD
====================================================================*/
const lazyLoadInstance = new LazyLoad({ threshold: 800 });

/*==================================================================
    SWIPER
====================================================================*/
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  autoHeight: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 35,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 35
    }
  }
});

/*==================================================================
    header functions
====================================================================*/
// add header background on scroll
window.addEventListener('scroll', () =>{
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    header.classList.add("header__bg");
  } else {
    header.classList.remove("header__bg");
  }
})

// add background to menu if reloaded when scrolled
window.addEventListener("load", function (){
  if( document.documentElement.scrollTop > 200) {
    header.classList.add("header__bg");
    console.log("header")
  }   
  console.log( document.documentElement.scrollTop)
 });

// close menu when navigation link is clicked
const navItems = Array.from(document.querySelectorAll('.nav__item'));
const checkBox = document.getElementById("checkbox")

navItems.forEach(item => {
  item.addEventListener('click', function handleClick() {
    checkBox.checked = false;
  });
});

/*==================================================================
    FOOTER INPUT VALIDATION
====================================================================*/
const form = document.querySelector(".js-submit-btn");
const email= document.querySelector(".js-email-input");

//check if input is a valid email format
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

//check if input is not empty or invalid email format
const validateInput = (e)=> {
  e.preventDefault();
  msg= document.querySelector(".js-footer__msg");

  if(email.value=== "" ){
    msg.textContent = "Field cannot be empty!"
    msg.classList.add("footer__msg--error")
    msg.classList.remove("footer__msg--success")
  }else if (!validateEmail(email.value)){
    msg.textContent = "Not a valid email!"
    msg.classList.add("footer__msg--error")
    msg.classList.remove("footer__msg--success")
  }else {
     email.value = ""
     msg.textContent = "You've been successfully subscribed."
     msg.classList.add("footer__msg--success")
     msg.classList.remove("footer__msg--error")
  }
}

form.addEventListener('submit', validateInput);


