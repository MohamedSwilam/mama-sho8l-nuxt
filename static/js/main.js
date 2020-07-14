$( document ).ready(function() {
// spnner function
  function spiner () {
    $(".loading-screen").fadeOut(1000, function () {
      $("body").css("overflow", "auto")
    });

  }

  window.addEventListener('load', function () {
    spiner()

  })
// spnner function

//  scroll button
  function scrollAndAnimate () {
    $(".sccroll-top i").click(function () {
      $("html , body").animate({ scrollTop: 0 }, 1000)
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 100) {
        $(".sccroll-top i").fadeIn(400)
      } else ($(".sccroll-top i").fadeOut(400))
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 100) {
        $(".big-nav").addClass('big-nav-fixed')
      } else {
        $(".big-nav").removeClass('big-nav-fixed')
      }

    });
  }

  scrollAndAnimate()

// cart alert

// end cart alert
// love product function
  function loveProduct () {
    $('.product-love ').click(function () {
      $(this).toggleClass('heart')
      if ($(this).hasClass('heart')) {
        this.innerHTML = `<i class="fas fa-heart love"></i>`
      } else {
        this.innerHTML = `<i class="far fa-heart love"></i>`
      }
    })
  }

  loveProduct();

//login function
  function loginPoup () {
    $(".img-sign").click(function (e) {
      e.preventDefault();
      $(".popup").fadeIn();
    })
    $(".popup").click(function () {
      $(this).fadeOut();
    })
    $(".login-popup").click(function (e) {
      e.stopPropagation();
    })
  }

// loginPoup()
// show password function
  function showPass () {
    const input = document.querySelectorAll(".pass-container input");
    const eye = document.querySelectorAll(".pass-container i");
    eye.forEach((el) => {

      el.addEventListener("click", function (e) {
        e.preventDefault();

        input.forEach((inp) => {
          inp.classList.toggle("show")

          if (inp.classList.contains("show")) {
            inp.setAttribute("type", "text");
          } else {
            inp.setAttribute("type", "password");
          }
        });

      });
    });

  }

  showPass()

//  start cart cartPopup
  function fixedCart () {
    const icon = document.querySelector("#poup-cart-icon i");
    const fixedPopup = document.querySelector(".fixedcart");
    icon.addEventListener("click", () => {
      fixedPopup.classList.toggle("changeRight");
      if (fixedPopup.classList.contains("changeRight")) {
        fixedPopup.style.right = "0"
      } else {
        fixedPopup.style.right = "-255px"
      }
      ;
    });
  };
  fixedCart();
//  end cart cartPopup

//  end form contact popup;

// article right side function
  function rightSide () {
    $(".right-side-header .d-flex ").click(function () {
      $(this).siblings().toggleClass("hideUl");

      if ($(this).siblings().hasClass("hideUl")) {
        $(this).children()[1].innerHTML = `<i class="fas fa-sort-down"></i>`
      } else {
        $(this).children()[1].innerHTML = `<i class="fas fa-sort-up"></i>`
      }
    })

  };
  rightSide();

  function like () {
    const likeIcon = document.querySelector('.article-like .fa-thumbs-up')
    const disLikeIcon = document.querySelector('.article-like .fa-thumbs-down')
    var likeNumber = document.querySelector('#like-number')
    var disLikeNumber = document.querySelector('#dislike-number')
    if (likeIcon !== null) {
      likeIcon.addEventListener('click', () => {
        likeNumber.textContent++
      })
    }
    if (disLikeIcon !== null) {
      disLikeIcon.addEventListener('click', () => {
        disLikeNumber.textContent++
      })
    }

  };
  like();

// view images function in review page
  function reviewImg () {

    $(".small-img").click(function () {
      var imgSrc = $(this).attr("src");
      console.log($(".big-img").attr('data-zoom-image'))
      $(".big-img").attr("src", imgSrc);
      $(".big-img").attr("data-zoom-image", imgSrc);

    })

  };
  reviewImg()

//  paginaaaaaaaaaaaaation function
  function pagination () {
    $('.pagination-btn').click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

    })
  };
  pagination()
// end paginaaaaaaaaaaaation

// news page taps function
  function newsTaps () {

    document.querySelectorAll(".news-btn").forEach((el) => {
      el.addEventListener("click", function () {

        var conent = this.getAttribute("data-value")
        var x = "." + "content" + conent
        var y = document.querySelector("" + x)
        // y.classList.toggle("active")
        $(y).siblings().removeClass("active")
        $(y).siblings().css({ "display": "none" });
        y.style.display = "block";
        $(this).addClass("active-btn");
        $(this).siblings().removeClass("active-btn");

        // if (y.classList.contains("active")){
        //   y.style.display ="block"
        // }else {
        //   y.style.display = "none"
        // }
      })

    });
  };
  newsTaps();

// services function
  function service () {
    document.querySelectorAll(".servise-btn").forEach((el) => {
      el.addEventListener("click", function () {

        var conent = this.getAttribute("data-value")
        var x = "." + "servise" + conent
        var y = document.querySelector("" + x)
        $(y).siblings().css({ "display": "none" });
        y.style.display = "block";
        $(this).addClass("active-servise");
        $(this).siblings().removeClass("active-servise");
      })

    });

  }

  service();
// caaaaaaaaaaaaaaaart paaaaaaaaaaaaaaage
// product quantity function
  function quantityControl () {
    const min = document.querySelectorAll('.min');
    const max = document.querySelectorAll('.max');
    const quantityValue = document.querySelectorAll('.quantity-input');
    const price = document.querySelector('.price')
    const totalPrice = document.querySelector('.total-price')

    const disable = function () {
      quantityValue.forEach((input) => {
        if (input.value < 2) {
          min.setAttribute("disabled", false);
        } else {
          min.removeAttribute("disabled");
        }
      })

    };

    function renewPrice () {
      var allPrice = (price.textContent) * quantityValue.value;
      totalPrice.textContent = allPrice;

    }

    disable();
    renewPrice();

    min.forEach((inx) => {
      inx.addEventListener('click', () => {
        quantityValue.value--;
        // disable();
        renewPrice();
      })
    })
    max.forEach((ma) => {
      ma.addEventListener('click', () => {
        quantityValue.value++;
        disable();
        renewPrice();
      })
    })

  }

// quantityControl()

// function cartPopup(){
  function deleteRow () {
    $(".table-del").click(function () {
      var targetRow = $(this).parent().parent().parent();
      targetRow.addClass('removerow')
      $(".delete-order-container").css('display', 'block');

      $('#refuse').click(function () {
        $(".delete-order-container").css('display', 'none');
        targetRow.removeClass('removerow');
      })
      $('#agree').click(function () {
        $(".delete-order-container").css('display', 'none');
        if (targetRow.hasClass('removerow')) {
          targetRow.remove();
        }

      })
    })
  }

  deleteRow();
// end dellllllleeeeeeeeeeeeeeete rowwwwwwww function

// add quantity function
  function quantityControl () {
    const min = document.querySelectorAll('.min');
    const max = document.querySelectorAll('.max');
    min.forEach((inx) => {
      inx.addEventListener('click', () => {
        var inputValue = inx.nextElementSibling;
        inputValue.value--;
        disable();
      })
    })
    max.forEach((ma) => {
      ma.addEventListener('click', () => {
        var inputValue = ma.previousElementSibling;
        inputValue.value++;
        disable()
      })
    })
  }

  quantityControl();
// add quantity function

// disable  min butoun function
  function disable () {
    const inputValue = document.querySelectorAll('.quantity-input');
    inputValue.forEach((input) => {
      if (input.value < 2) {
        input.previousElementSibling.setAttribute("disabled", false)
      } else {
        input.previousElementSibling.removeAttribute("disabled");
      }
    })
  }

  disable()

  function cartNotifi () {
    $(".addToCart").click(function (e) {
      var cart = $('#big-cart');
      var imgtodrag = $(this).parent().parent().parent().parent().find("img").eq(0);
      e.preventDefault();
      if (imgtodrag) {

        var imgclone = imgtodrag.clone().offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        })

          .css({
            'opacity': '0.5',
            'position': 'absolute',
            'height': '100px',
            'width': '100px',
            'z-index': '9999999999'
          })
          .appendTo($('body'))
          .animate({
            'top': cart.offset().top + 10,
            'left': cart.offset().left + 10,
            'width': 75,
            'height': 75
          }, 1000);

        imgclone.animate({
          'width': 10,
          'height': 10
        }, function () {
          $(this).detach()
        });
      }

    })

  }

  cartNotifi();

//  cart poup
  function cartPoup () {
    $(".addToCart" + "," + ".addtocart-preview").click(function (e) {
      $(".cart-poup").fadeIn()
    })
    $(".cart-poup").click(function (e) {
      $(this).fadeOut()
    })
    $(".continueShopping").click(function (e) {
      $(".cart-poup").fadeOut()
    })
  }

  cartPoup()

  function mobileNav () {
    $("#togglmenu").click(function () {
      $(".mobile-nav-content").css("right", "0");
    })
    $("#closemenu").click(function () {
      $(".mobile-nav-content").css("right", "-1000px");
    })
  }

  mobileNav()
});
