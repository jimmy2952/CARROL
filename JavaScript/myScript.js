let scrollUpBtn = document.getElementById("scrollUp");
let menuBtn = document.getElementById("menu-icon");
let mobileHeader = document.getElementById("mobile-header");

menuBtn.onclick = function() {
  if (mobileHeader.classList.contains('open')) {
  menuBtn.classList.remove('close-icon');
  mobileHeader.classList.remove('open');
  } else {
  menuBtn.classList.add('close-icon');
  mobileHeader.classList.add('open');
  }
}

scrollUpBtn.onclick = function(){
  console.log("點擊！");
  window.scrollTo({ top: 0, behavior: 'smooth'});
}

lightGallery(document.getElementById('aniimated-thumbnials'), {
    thumbnail:true,
    escKey: false
})

window.onscroll = function (e) {
  console.log(window.pageYOffset);

  
  if (window.pageYOffset >= 500) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
}
