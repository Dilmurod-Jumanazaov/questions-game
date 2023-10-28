const elRegisterForm = document.querySelector(".js-register-form");
const elRegisterNameInput = document.querySelector(".js-register-name-input");
const elRegisterEmailInput = document.querySelector(".js-register-email-input");
const elRegisterPasswordInput = document.querySelector(".js-register-password-input");
const questionsGameUsersArr = [];

function questionWrite() {
  let typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    startDelay: 500,
    typeSpeed: 40,
    backSpeed: 15,
    loop: true,
    loopCount: 5,
    showCursor: false,
    backDelay: 2000,
  });
}
questionWrite();

elRegisterForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let nameValue = elRegisterNameInput.value.trim();
  let emailValue = elRegisterNameInput.value;
  let passwordValue = elRegisterPasswordInput.value;
  const emailExample = "@gmail.com";

  if(nameValue.length < 3 || nameValue.length > 33) {
    alert("Ismingizni to'g'ri kiriting");
    return; 
  }
  if(emailValue.endsWith(emailExample,emailValue.length - 10)) {
    alert("Email addressni oxiri @gmail.com bilan tugashi kerak!");
    return;
  }
  if(passwordValue.length < 8) {
    alert("Parol kamida 8 ta belidan iborat bo'lsin");
    return;
  }

  let userObj = {
    user_name: nameValue,
    email: emailValue,
    password: passwordValue,
  };
  questionsGameUsersArr.push(userObj);
  window.location.href = "/index.html";
  elRegisterNameInput.value = "";
  elRegisterEmailInput.value = "";
  elRegisterPasswordInput.value = "";
});

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#938eb6"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.6797281087564977,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, update; count_particles = document.querySelector('.js-count-particles'); update = function() { if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;