let front = {
  hamburger: $('.hamburger'),
  nav: $('.menu-container'),
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
    var swiper = new Swiper('.swiper-banner', {
      cssMode: true,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      mousewheel: true,
      keyboard: true,
    });

    window.addEventListener("load", function () {
        $(".swiper-container").addClass("loadSlider");
     });
      

    $(".product-carousel").each(function(index, element){
        var $this = $(this);
        $this.addClass("instance-" + index);
        $this.parent().parent().find('.swiper-button-prev').addClass("btn-prev-" + index);
        $this.parent().parent().find('.swiper-button-next').addClass("btn-next-" + index);
        var swiperproduct = new Swiper(".instance-" + index, {
            slidesPerView: 4,
            spaceBetween: 25,
            loop: true,
            navigation: {
                nextEl: ".btn-next-" + index,
                prevEl: ".btn-prev-" + index
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,

                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                992: {
                    slidesPerView: 4,
                },
              }
        });
    });
        
    var blogslider = new Swiper('.blog-recommendation-carousel', {
        // cssMode: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                spaceBetween: 24,

            },
        }
      });
      $(document).on('click', '.woof_container_inner h4', function () {
        let item = $(this);
        let list = $(this).next('.woof_block_html_items');
        if (item.hasClass('active')) {
            item.removeClass('active');
            list.slideToggle();
        } else {
            item.addClass('active');
            list.slideToggle();
        }
      });
      $(document).on('click', '.btn-filter', function () {
        let item = $(this);
        let list = $(this).next('.filter-container');
        $('body').toggleClass('active');
        $('.filter-container').toggleClass('active');
      });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $('header').addClass("scroll-header");
  } else {
  	$('header').removeClass("scroll-header");
  }
});


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
//     $("#uploadBtn").click(function() {
//         $('#uploadFile').addClass("has-content");
//     })
//     $(document).on('click', '#uploadFile', function(){
//         $('#uploadBtn').click();
//     })
// });


// document.getElementById("uploadBtn").onchange = function () {
// document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
// };



  $(document).ready(function () {
      $(document).on('click', '.anchor-link', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              let target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html,body').animate({
                      scrollTop: (target.offset().top) - $('.header').outerHeight()
                  }, 1000);
                  return false;
              }
          }
      });
    });
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
    document.addEventListener("DOMContentLoaded", function (event) {

        let childrenItem = document.querySelectorAll('.menu > .menu-item-has-children > a');
        for (let i = 0; i < childrenItem.length; i++) {
            var btn = document.createElement("BUTTON");   // Create a <button> element
            btn.className = "nav-btn";                    // add class
            btn.innerHTML = `<i class="icon-arrow-big"></i>`;
            childrenItem[i].appendChild(btn);
        }
    });
    
    $(document).on('click', '.nav-btn', function (e) {
        e.preventDefault();
        var navTitle = document.createElement("p");
        var navBack = document.createElement("span");
        navTitle.className = "nav-title";        
        navBack.className = "prev-page"
        navBack.innerHTML = '<i class="icon-arrow-big"></i>Назад';
        navTitle.innerHTML = $(this).parent().text();
        $(this).parent().next().prepend(navBack);
        $(this).parent().next('.sub-menu').prepend(navTitle);
        if (!$(this).parent().next('.sub-menu').hasClass('menuOpen')) {
            $(this).parent().next('.sub-menu').addClass('menuOpen');
            $(this).parent().parent().addClass('show');
        } else {
            $(this).parent().next('.sub-menu').removeClass("menuOpen");
        }
    });
    
    
    $(document).on('click', '.prev-page', function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass('menuOpen')) {
            $(this).parent().removeClass("menuOpen");
            $(this).parent().find('p').remove();
            $(this).parent().find('span').remove();
            $(this).parent().parent().removeClass('show');
        }
    });
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
    
$(function () {
    $('.form-input, .form-textarea')
        .on('focusin', function(){
        $(this).parent().find('.label-name').addClass('active');
    })
        .on('focusout', function(){
          $(this).parent().find('.label-name').removeClass('active');
    })
    $(".form-control input, .form-control textarea").focusout(function() {
        let $this = $(this);
        let $label = $this.parent().find('.label-name')

        if ($this.val() != "") {
            $this.addClass("has-content");
            $label.addClass("active");
        }
        else {
            $this.removeClass("has-content");
            $label.removeClass("active");
        }

    })
});

$(document).ready(function(){if($(window).width()>=1200){function t(t,o,s,i){let n=e(t,o,s/2,0),l=e(t,o,s/2,i),a=e(t,o,0,i/2),c=e(t,o,s,i/2);switch(Math.min(n,l,a,c)){case a:return"left";case c:return"right";case n:return"top";case l:return"bottom"}}function e(t,e,o,s){let i=t-o,n=e-s;return i*i+n*n}let o=document.querySelectorAll(".tools-box");for(let e=0;e<o.length;e++)o[e].addEventListener("mouseenter",function(e){let o=t(e.pageX-this.offsetLeft,e.pageY-this.offsetTop,this.clientWidth,this.clientHeight),s=this.children[1];this.children[0];switch(o){case"left":s.style.top="0%",s.style.left="-100%",TweenMax.to(s,.5,{left:"0%"});break;case"right":s.style.top="0%",s.style.left="100%",TweenMax.to(s,.5,{left:"0%"});break;case"top":s.style.top="-100%",s.style.left="0%",TweenMax.to(s,.5,{top:"0%"});break;case"bottom":s.style.top="100%",s.style.left="0%",TweenMax.to(s,.5,{top:"0%"})}}),o[e].addEventListener("mouseleave",function(e){let o=t(e.pageX-this.offsetLeft,e.pageY-this.offsetTop,this.clientWidth,this.clientHeight),s=this.children[1];this.children[0];switch(o){case"left":TweenMax.to(s,.5,{left:"-100%"});break;case"right":TweenMax.to(s,.5,{left:"100%"});break;case"top":TweenMax.to(s,.5,{top:"-100%"});break;case"bottom":TweenMax.to(s,.5,{top:"100%"})}})}});