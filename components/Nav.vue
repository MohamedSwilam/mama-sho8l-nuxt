<template>
  <div>
    <!-- staaaaaaaaaaaaaart naaaaaaaaaaaaav baaaaaaaaaaaaaar for desctop -->
    <nav class="main-nav desctop-nav">
      <div class="d-flex justify-content-between nav-top py-2">
        <div class="nav-shortcuts">
          <ul class="list-unstyled d-flex mb-0">
            <li class="px-2"> <a href=""> <i class="far fa-heart love main-color"></i> المفضله  </a>  </li>
            <li class="px-2"> <nuxt-link to="/cart"> <i class="fas fa-shopping-cart main-color"></i>  العربه </nuxt-link> </li>
          </ul>
        </div>
        <div class="nav-login">
          <ul class="list-unstyled d-flex mb-0">
            <li class="px-2"><nuxt-link to="/login"> <i class="fas fa-user-alt main-color"></i> تسجبل الدخول</nuxt-link> </li>
            <li class="px-2"><nuxt-link to="/register"><i class="fas fa-user-lock main-color"></i> حساب جديد</nuxt-link> </li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-between py-2 align-items-center nav-middle">
        <div class="nav-log">
          <a href="index.html"> <img class="logo trans img-responsive" src="~/assets/images/logo.png" alt=" logo"></a>
        </div>
        <div class="nav-search">
          <form action="" class="form-groun d-flex">
            <input type="search" class="form-control" placeholder="ابحثي هنا ">
            <button class="btn btn btn-Link">بحث</button>
          </form>
          <ul class="list-unstyled d-flex my-2 justify-content-between w-50 navbar-links">
            <li> <nuxt-link to="/"> <i class="fas fa-home main-color"></i> الرئيسيه</nuxt-link> </li>
            <li> <nuxt-link to="/products"> <i class="fas fa-clipboard main-color"></i> منتجاتنا </nuxt-link> </li>
            <li class="mum-article-parent"> <a > <i class="fas fa-newspaper main-color"></i>  مقالات  <i class="fas fa-chevron-down"></i> </a>
              <div class=" mum-article">
                <p> <nuxt-link class="trans" to="/mama-f-elbeet"> <i class="fas mr-3 fa-home main-color"></i> ماما في البيت </nuxt-link>
                </p>
                <p> <nuxt-link class="trans" to="/mama-f-elmatba5"> <i class="fas mr-3 fa-utensils main-color"></i> ماما في المطبخ
                </nuxt-link> </p>
                <p> <nuxt-link class="trans" to="/mama-f-elsho8l"> <i class="fas mr-3 fa-briefcase main-color"></i> ماما في الشغل
                </nuxt-link></p>
                <nuxt-link class="trans" to="/mama-w-elawlad"> <i class="fas mr-3 fa-users main-color"></i> ماما و الاولاد </nuxt-link>
              </div>
            </li>
            <li> <a href=""> <i class="far fa-newspaper main-color"></i> اخبارنا </a> </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- end naaaaaaaaaaaaav baaaaaaaaaaaaaar for desctop -->
    <!-- staaaaaaaaaaaaaart naaaaaaaaaaaaav baaaaaaaaaaaaaar for mobile -->
    <nav class="mobile-nav">
      <div class="nav-head d-flex justify-content-between">
        <div class="">
          <div id="togglmenu"><i  class="fas fa-bars"></i></div>
          <!-- <a href="index.html"> <img class="logo trans img-responsive" src="~/assets/images/logo.png" alt=" logo"></a> -->
        </div>
        <div class="">
          <ul class="list-unstyled d-flex mb-0">
            <li class="px-2"> <a href="login.html"> <i class="fas fa-user-alt main-color px-4"></i>  </a> </li>
            <li class="px-2"> <a href="cart.html"> <i class="fas fa-shopping-cart main-color"></i>   </a> </li>
          </ul>
        </div>
      </div>
      <div class="mobile-nav-content">
        <div class="d-flex justify-content-between nav-content-head align-items-center px-4">
          <div id="closemenu"> <i class="fas fa-times"></i></div>
          <a href="index.html"> <img class="logo trans img-responsive" src="~/assets/images/logo.png" alt=" logo"></a>
        </div>
        <div class="mobile-links">
          <ul class="navbar-links">
            <li> <a class="d-block" href="index.html"> <i class="fas fa-home main-color"></i> الرئيسيه</a> </li>
            <li> <a class="d-block"  href="product.html"> <i class="fas fa-clipboard main-color"></i> منتجاتنا </a> </li>
            <li class="mum-article-parent-mob"> <a class="d-flex justify-content-between"  >
              <span><i class="fas fa-newspaper main-color"></i>  مقالات  </span>
              <i class="fas fa-chevron-down"></i>
            </a>
              <div class="mum-article-mob">
                <p> <a class="trans" href="mama f elbet.html"> <i class="fas mr-3 fa-home main-color"></i> ماما في البيت </a>
                </p>
                <p> <a class="trans" href="mama f elmatb5.html"> <i class="fas mr-3 fa-utensils main-color"></i> ماما في المطبخ
                </a> </p>
                <p> <a class="trans" href="mama f elsho8l.html"> <i class="fas mr-3 fa-briefcase main-color"></i> ماما في الشغل
                </a></p>
                <a class="trans" href="mama w elawlad.html"> <i class="fas mr-3 fa-users main-color"></i> ماما و الاولاد </a>
              </div>
            </li>
            <li> <a class="d-block"  href=""> <i class="far fa-newspaper main-color"></i> اخبارنا </a> </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- dndddd naaaaaaaaaaaaav baaaaaaaaaaaaaar for mobile -->
    <!--eeeeeeeeeend naaaaaaaaaaaaav baaaaaaaaaaaaaar -->
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>

</style>
