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
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
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

// document.getElementById("uploadBtn").onchange = function () {
// document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
// };



//   $(document).ready(function () {
//       $(document).on('click', '.anchor-link', function () {
//           if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//               let target = $(this.hash);
//               target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//               if (target.length) {
//                   $('html,body').animate({
//                       scrollTop: (target.offset().top) - $('.header').outerHeight()
//                   }, 1000);
//                   return false;
//               }
//           }
//       });
//     });
    // document.addEventListener("DOMContentLoaded", function (event) {

    //     let childrenItem = document.querySelectorAll('.menu-item-has-children > a');
    //     for (let i = 0; i < childrenItem.length; i++) {
    //         var btn = document.createElement("BUTTON");   // Create a <button> element
    //         btn.className = "nav-btn";                    // add class
    //         // btn.innerHTML = `<i class="icon-icon-arrow"></i>`;
    //         childrenItem[i].appendChild(btn);
    //     }
    // });
    
    // $(document).on('click', '.nav-btn', function (e) {
    //     e.preventDefault();
    //     var navTitle = document.createElement("p");
    //     navTitle.className = "nav-title";        
    //     navTitle.innerHTML = '<i class="icon-icon-arrow"></i>' + $(this).parent().text();
    //     $(this).parent().parent().find('.sub-menu').prepend(navTitle);
    //     if (!$(this).parent().parent().find('.sub-menu').hasClass('menuOpen')) {
    //         $(this).parent().parent().find('.sub-menu').addClass('menuOpen');
    //     } else {
    //         $(this).parent().parent().find('.sub-menu').removeClass("menuOpen");
    //     }
    // });
    
    // $(document).on('click', '.nav-title', function (e) {
    //     e.preventDefault();
    //     if ($(this).parent().hasClass('menuOpen')) {
    //         $(this).parent().removeClass("menuOpen");
    //         $(this).remove();
    //     }
    // });
    // document.addEventListener("DOMContentLoaded", function (event) {

    //     let childrenItem = document.querySelectorAll('.menu > .menu-item-has-children > a');
    //     for (let i = 0; i < childrenItem.length; i++) {
    //         var btn = document.createElement("BUTTON");   // Create a <button> element
    //         btn.className = "nav-btn";                    // add class
    //         btn.innerHTML = `<i class="icon-arrow-big"></i>`;
    //         childrenItem[i].appendChild(btn);
    //     }
    // });
    
    // $(document).on('click', '.nav-btn', function (e) {
    //     e.preventDefault();
    //     var navTitle = document.createElement("p");
    //     var navBack = document.createElement("span");
    //     navTitle.className = "nav-title";        
    //     navBack.className = "prev-page"
    //     navBack.innerHTML = '<i class="icon-arrow-big"></i>Назад';
    //     navTitle.innerHTML = $(this).parent().text();
    //     $(this).parent().next().prepend(navBack);
    //     $(this).parent().next('.sub-menu').prepend(navTitle);
    //     if (!$(this).parent().next('.sub-menu').hasClass('menuOpen')) {
    //         $(this).parent().next('.sub-menu').addClass('menuOpen');
    //         $(this).parent().parent().addClass('show');
    //     } else {
    //         $(this).parent().next('.sub-menu').removeClass("menuOpen");
    //     }
    // });
    
    
    // $(document).on('click', '.prev-page', function (e) {
    //     e.preventDefault();
    //     if ($(this).parent().hasClass('menuOpen')) {
    //         $(this).parent().removeClass("menuOpen");
    //         $(this).parent().find('p').remove();
    //         $(this).parent().find('span').remove();
    //         $(this).parent().parent().removeClass('show');
    //     }
    // });
// ScrollSpy

//     const highlightScroll = () => {
//       const scrollPos =  window.pageYOffset + 100
//       const links = document.querySelectorAll('.header-nav a')
      
//       links.forEach((link, index) => {
//           const sections = document.querySelectorAll('section')
//           const activeSection = sections[index]
//           const compare = activeSection.offsetTop <= scrollPos && (activeSection.offsetTop + activeSection.offsetHeight > scrollPos)  
          
//           if(scrollPos > 100) {
//               compare ? link.classList.add('active') : link.classList.remove('active')  
//           }
          
//       })
//   }
//   window.addEventListener('scroll', highlightScroll)
    
// $(function () {
//     $('.form-input, .form-textarea')
//         .on('focusin', function(){
//         $(this).parent().find('.label-name').addClass('active');
//     })
//         .on('focusout', function(){
//           $(this).parent().find('.label-name').removeClass('active');
//     })
//     $(".form-control input, .form-control textarea").focusout(function() {
//         let $this = $(this);
//         let $label = $this.parent().find('.label-name')

//         if ($this.val() != "") {
//             $this.addClass("has-content");
//             $label.addClass("active");
//         }
//         else {
//             $this.removeClass("has-content");
//             $label.removeClass("active");
//         }

//     })
// });

