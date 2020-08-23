let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  $body: $('body'),
  init: function () {
      this.events();
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        this.$body.addClass('active')
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
            this.$body.removeClass('active')
        }
    },


  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },
  hoverTab: function (el, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    el.currentTarget.className += " active";
  },

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      if($(window).width() < 767) {
        $('.team__item_content').click(function(){
          let $this = $(this);
          $(this).find('.team__item_text').slideToggle(300, function(){
            
          });
          $(this).toggleClass('opened');
        });
      } else {
        $('.team__item_content').hover(function(event){
          $(this).find('.team__item_text').stop().slideToggle(300);
        });
      }

      
  }
};

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');

      $('body, html').addClass('active');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
      $('body, html').removeClass('active');
  },

  events: function () {

      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

      $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });
        $(document).on('click', '.scroll-to-top i', function () {
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 500);
      });
        $(document).on('click', '.scroll-down i', function () {
            $('html, body').animate({
                scrollTop: $(this).closest("section").next().offset().top - 90
             }, "slow");
      });

  }
};


jQuery(function () {
  front.init();
  modal.init();

//   var lang = $('.lang');
//   var selection = $('.header-lang');
//   var select = selection.find('li');

//   lang.click(function(event) {
//       if (lang.hasClass('active')) {
//           lang.removeClass('active');
//           selection.stop().slideUp(200);
//       } else {
//           lang.addClass('active');
//           selection.stop().slideDown(200);
//       }
//       event.preventDefault();
//   });
//   if ($('.lang-item-uk').hasClass('current-lang')) {
//     $('.lang-ua').addClass('selected');
//     $('.lang-ru').removeClass('selected')
//   } else if ($('.lang-item-ru').hasClass('current-lang')) {
//       $('.lang-ua').removeClass('selected');
//       $('.lang-ru').addClass('selected')
//   } 
    // var swiper = new Swiper('.swiper-banner', {
    //   cssMode: true,
    //   spaceBetween: 30,
    //   loop: true,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    //   mousewheel: true,
    //   keyboard: true,
    // });

    // window.addEventListener("load", function () {
    //     $(".swiper-container").addClass("loadSlider");
    //  });
    
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $('.scroll-to-top').addClass("scrolled");
  } else {
  	$('.scroll-to-top').removeClass("scrolled");
  }
});


$(function () {
    $('.form-control input, .form-control textarea')
        .on('focusin', function(){
        $(this).parent().addClass('active');
    })
        .on('focusout', function(){
          $(this).parent().removeClass('active');
    })
    $(".form-control input, .form-control textarea").focusout(function() {
        let $this = $(this);

        if ($this.val() != "") {
            // $this.addClass("has-content");
            $this.parent().addClass('has-content');
        }
        else {
            $this.parent().removeClass("has-content");
        }
    })
});
document.body.addEventListener('keyup', function(e) {
  if (e.which === 9) /* tab */ {
    document.body.classList.remove('no-focus-outline');
  }
});


// CUSTOM SELECT
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.setAttribute("id", "idselect");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;

        myFunction($(this).text());

        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            // console.log($(this).text());

            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


function myFunction(a){
  $('#inputselect').attr('value', a);
}

$(document).ready(function(){
  $('.select-items div').on('click', function(){
    // alert($(inputselect).val())
    // закоментував щоб не мішало, прихував інпут і селект стилями
  })
})

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  
  // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
  // you could also use addEventListener() instead
  window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
     // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
     
      window.requestAnimationFrame(function() {
        if($(window).width() > 992) {

         // ANIMATIONS
         //  Hero screen text and arrow
          gsap.from('.text-inner-hero', {y: 140,opacity: 0,duration: .8, stagger: 0.1, ease: Power4.easeOut})
          gsap.from('.scroll-down', {y: 150, opacity: 0, duration: 1, delay: 1, ease: "back.out(1.7)", y: 100 })

          // BASIC TEXT REVEAL
          var $revealY = $('.text-inner');
          $($revealY).each(function(i) {
            gsap.from($revealY[i], {
              scrollTrigger: {
                trigger: $revealY[i],
              },
              y: 140,
              opacity: 0,
              duration: .7,
              ease: Power4.easeOut
            })
          })

          // IMAGE REVEAL
          var controller = new ScrollMagic.Controller();
          $(".reveal-image").each(function() {
            var tl = new TimelineMax();
            var cov = $(this).find(".overlay");
            var img = $(this).find("img");
            var text = $(this).find('.text-reveal-left');

            tl.from(cov, .7, { scaleY: 0, transformOrigin: "top" });
            tl.to(cov, .7, { scaleY: 0, transformOrigin: "bottom" }, "reveal");
            tl.from(img, 0, { opacity: 0 }, "reveal");
            tl.from(text, 1, { x: 70, opacity: 0, duration: 1.3, ease: Power4.easeOut}, "reveal");

            var scene = new ScrollMagic.Scene({
              triggerElement: this,
              triggerHook: 1,
            })
              .setTween(tl)
              .addTo(controller);
          });

          var controllerBlock = new ScrollMagic.Controller();
          $(".reveal-block").each(function() {
            var tl = new TimelineMax();
            var cov = $(this).find(".overlay");
            var img = $(this).find("img");
            var text = $(this).find('.cases__item_content');

            tl.from(cov, .7, { scaleY: 0, transformOrigin: "top" });
            tl.to(cov, .7, { scaleY: 0, transformOrigin: "bottom" }, "reveal");
            tl.from(img, 0, { opacity: 0 }, "reveal");
            tl.from(text, 1, { y: -70, opacity: 0, duration: 1.3, delay: .3, ease: Power4.easeOut}, "reveal");

            var scene = new ScrollMagic.Scene({
              triggerElement: this,
              triggerHook: 1,
            })
              .setTween(tl)
              .addTo(controllerBlock);
          });


          // TOOLS ITEMS
          var $blockReveal = $('.tools__item, .home-services .services__item, .platforms__item, .clients__item');
          $($blockReveal).each(function(i) {
            gsap.from($blockReveal[i], {
              scrollTrigger: {
                trigger: $blockReveal[i],
              },
              y: 50,
              opacity: 0,
              scale: .9,
              duration: .7,
              ease: Power4.easeOut
            })
          })

          var $formControl = $('.form-control');
          $($formControl).each(function(i) {
            gsap.from($formControl[i], {
              scrollTrigger: {
                trigger: $formControl[i],
              },
              y: 100,
              opacity: 0,
              duration: 1,
              ease: Power4.easeOut
            })
          })

          gsap.from('.steps__button', {
            scrollTrigger: {
              trigger: $('.steps__button')
            },
            y: 100,
            opacity: 0,
            ease: Power4.easeOut
          })

          var rellax = new Rellax('.rellax', {
            speed: 10,
            center: true,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
          });  
        } else {
          null
        }
       
     });


    
  };
  

});

