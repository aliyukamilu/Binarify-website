let services = [
  {
    "title": "Website",
    "content": "The most stunning websites on the internet are created and developed by us.",
    "img": "website.png"
  },
  {
    "title": "App",
    "content": "We create your mobile application using top-notch development.",
    "img": "mobile.png"
  },
  {
    "title": "UI/UX",
    "content": "We carefully design a user interface and experience that is centered on people.",
    "img": "uiux.png"
  }
]

services.map(service => {
  $('#servicesCard').append(`
    <div class="col-sm-4">
      <div class="serviceCard">
        <img src="./assets/img/icons/${service.img}" alt>
        <h3>${service.title}</h3>
        <p>${service.content}</p>
      </div>
    </div>
  `)
})

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.circularTabList a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('.circularTabList a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.circularTabList a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.fixedTab .circularTabList a').removeClass("active");
      currLink.addClass("active");
    }
    else {
      currLink.removeClass("active");
    }
  });
}