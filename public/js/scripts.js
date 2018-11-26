function classToggle() {
  this.classList.toggle('class1');
  this.classList.toggle('class2');
}

document.querySelector('#div').addEventListener('click', classToggle);
$(document).ready(function () {
  $("#toggle-button").click(function () {
    $("#toggle-me").toggle();
  });
});
$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    //autoHeight: true,
    speed: 1000,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 4000
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});
//# sourceMappingURL=scripts.js.map
