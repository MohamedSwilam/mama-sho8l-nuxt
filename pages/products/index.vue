<template>
  <div>
    <section id="product-manager">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-3">
            <div class="main-product-right my-4 ">
              <div class="product-header text-center"> <h5> منتجاتنا</h5>
            </div>
            <div class="product-search ">
              <input type="search" class="form-control w-100" placeholder=" دوري ع المنتج بتاعك هنا ... ">
              <a class="" href=""><i class="fas fa-search"></i></a>
            </div>

            <a href="#" class="product-header"> <i style="color: #74b9ff" class="fas fa-calendar-alt mr-2"></i> <span>
                أجندة ماما فى الشغل السنوية</span>
            </a>
            <a href="#" class="product-header"><i style="color: #6c5ce7" class="fas fa-newspaper mr-2"></i> <span>
                جورنال</span>
            </a>
            <a href="#" class="product-header"><i style="color: #ff7675" class="fas fa-book-open mr-2"></i> <span>
                جورنال للمدرسات</span>
            </a>
            <a href="#" class="product-header"><i style="color: #a29bfe" class="fas fa-bath mr-2"></i><span> لوحة
                التدريب على الحمام</span>
            </a>
            <a href="#" class="product-header"> <i style="color: #00cec9" class="fas fa-chalkboard mr-2"></i> <span>
                لوحة تعديل المهام و السلوك </span>
            </a>
            <a href="#" class="product-header"><i style="color: #b2bec3" class="fas fa-ruler-combined mr-2"></i> <span>
                بلانر التلاجة المغناطيسى</span>
            </a>
            <a href="#" class="product-header"><i style="color: #800080" class="fas fa-magnet mr-2"></i> <span> مغناطيس
                التلاجة</span>
            </a>
            <a href="#" class="product-header"><i style="color: #cc0000" class="fas fa-people-carry mr-2"></i> <span>
                بلانر التلاجة الرمضانى</span>
            </a>
            <a href="#" class="product-header"><i style="color: #ffff00" class="fas fa-sort-amount-down mr-2"></i>
              <span>لوحة العد التنازلى الرمضانية </span>
            </a>
            <a href="#" class="product-header"><i style="color: #cc6600" class="fas fa-child mr-2"></i> <span> أجندة
                للأطفال</span>
            </a>
            <a href="#" class="product-header"><i style="color: #cc0066" class="fas fa-book mr-2"></i> <span> كتاب
                الوصفات</span>
            </a>
            <a href="#" class="product-header"><i style="color: #cc0044" class="fas fa-box mr-2"></i> <span> كروت اللانش
                بوكس</span>
            </a>
            <a href="#" class="product-header"><i style="color: #660000" class="fas fa-book mr-2"></i> <span> كتب
                للأطفال</span>
            </a>
            <a href="#" class="product-header"><i style="color: #2929a3" class="fas fa-clipboard mr-2"></i> <span> نوت
                بوك</span>
            </a>
          </div>

        </div>
        <div class="col-md-9">
          <div class="row py-4">
            <!-- profuct slier  -->
            <div class="col-md-12 product-slider-manager mb-3">
              <div class="row ">
                <div class="col-md-6 col-6 product-slider">
                  <div class="constant">
                    <h2 class="">اخر عروضناا</h2>
                    <h5 class="mt-5 text-center">اسم المنتج</h5>
                    <p>ء كنتي أم عاملة أو غير عامله ، فوجود جدول هيساعدك انتي و ولادك انكوا تعرفوا تقسموا المذاكرة علي
                      الأيام و الوقت .</p>
                    <button class="btn my-2"> تسوق الان</button>
                  </div>
                </div>
                <div class="col-md-6 col-6 product-slider">
                  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item product-slider-img active">
                        <img src="~/assets/images/product-1.png" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item product-slider-img">
                        <img src="~/assets/images/product-2.png" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item product-slider-img">
                        <img src="~/assets/images/product-3.png" class="d-block w-100" alt="...">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- product slier  -->

            <div class="col-md-4 my-2">
              <div class="borderd">
                <div class="product-main-card ">
                  <a href="view product.html">
                    <img class="img-fluid m-0" src="~/assets/images/product-1.png" alt="">
                  </a>
                  <div class="product-love">
                    <i class="far fa-heart love"></i>
                  </div>

                </div>
                <div class="product-main-content product-card-content my-2">
                  <nuxt-link to="/products/1">  <h5 class="">اسم المنتتج</h5>
                    <h5 class="product-english"> product name</h5>
                    <hr class="product-name-line">
                  </nuxt-link>
                  <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                    المنتجتفاااااااااااصيل المنتج</p>

                  <div class="d-flex justify-content-around text-center mb-3">
                    <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                    <p class="mb-0 font-weight-bold old-age"> 100 </p>
                  </div>
                  <div class="d-flex justify-content-between px-3 product-card-buttons ">
                    <a> <button class="btn   addToCart">اضافه الى السله</button> </a>
                    <nuxt-link to="/products/1"> <button class="btn default-side "> عرض المنتج </button> </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 my-2">
              <div class="borderd">
                <div class="product-main-card ">
                  <a href="view product.html">
                    <img class="img-fluid m-0" src="~/assets/images/product-1.png" alt="">
                  </a>
                  <div class="product-love">
                    <i class="far fa-heart love"></i>
                  </div>

                </div>
                <div class="product-main-content product-card-content my-2">
                  <nuxt-link to="/products/1">  <h5 class="">اسم المنتتج</h5>
                    <h5 class="product-english"> product name</h5>
                    <hr class="product-name-line">
                  </nuxt-link>
                  <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                    المنتجتفاااااااااااصيل المنتج</p>

                  <div class="d-flex justify-content-around text-center mb-3">
                    <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                    <p class="mb-0 font-weight-bold old-age"> 100 </p>
                  </div>
                  <div class="d-flex justify-content-between px-3 product-card-buttons ">
                    <a> <button class="btn   addToCart">اضافه الى السله</button> </a>
                    <nuxt-link to="/products/1"> <button class="btn default-side "> عرض المنتج </button> </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 my-2">
              <div class="borderd">
                <div class="product-main-card ">
                  <a href="view product.html">
                    <img class="img-fluid m-0" src="~/assets/images/product-1.png" alt="">
                  </a>
                  <div class="product-love">
                    <i class="far fa-heart love"></i>
                  </div>

                </div>
                <div class="product-main-content product-card-content my-2">
                  <nuxt-link to="/products/1">  <h5 class="">اسم المنتتج</h5>
                    <h5 class="product-english"> product name</h5>
                    <hr class="product-name-line">
                  </nuxt-link>
                  <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                    المنتجتفاااااااااااصيل المنتج</p>

                  <div class="d-flex justify-content-around text-center mb-3">
                    <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                    <p class="mb-0 font-weight-bold old-age"> 100 </p>
                  </div>
                  <div class="d-flex justify-content-between px-3 product-card-buttons ">
                    <a> <button class="btn   addToCart">اضافه الى السله</button> </a>
                    <nuxt-link to="/products/1"> <button class="btn default-side "> عرض المنتج </button> </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 my-2">
              <div class="borderd">
                <div class="product-main-card ">
                  <a href="view product.html">
                    <img class="img-fluid m-0" src="~/assets/images/product-1.png" alt="">
                  </a>
                  <div class="product-love">
                    <i class="far fa-heart love"></i>
                  </div>

                </div>
                <div class="product-main-content product-card-content my-2">
                  <nuxt-link to="/products/1">  <h5 class="">اسم المنتتج</h5>
                    <h5 class="product-english"> product name</h5>
                    <hr class="product-name-line">
                  </nuxt-link>
                  <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                    المنتجتفاااااااااااصيل المنتج</p>

                  <div class="d-flex justify-content-around text-center mb-3">
                    <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                    <p class="mb-0 font-weight-bold old-age"> 100 </p>
                  </div>
                  <div class="d-flex justify-content-between px-3 product-card-buttons ">
                    <a> <button class="btn   addToCart">اضافه الى السله</button> </a>
                    <nuxt-link to="/products/1"> <button class="btn default-side "> عرض المنتج </button> </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 my-2">
              <div class="borderd">
                <div class="product-main-card ">
                  <a href="view product.html">
                    <img class="img-fluid m-0" src="~/assets/images/product-1.png" alt="">
                  </a>
                  <div class="product-love">
                    <i class="far fa-heart love"></i>
                  </div>

                </div>
                <div class="product-main-content product-card-content my-2">
                  <nuxt-link to="/products/1">  <h5 class="">اسم المنتتج</h5>
                    <h5 class="product-english"> product name</h5>
                    <hr class="product-name-line">
                  </nuxt-link>
                  <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                    المنتجتفاااااااااااصيل المنتج</p>

                  <div class="d-flex justify-content-around text-center mb-3">
                    <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                    <p class="mb-0 font-weight-bold old-age"> 100 </p>
                  </div>
                  <div class="d-flex justify-content-between px-3 product-card-buttons ">
                    <a> <button class="btn   addToCart">اضافه الى السله</button> </a>
                    <nuxt-link to="/products/1"> <button class="btn default-side "> عرض المنتج </button> </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 my-2">
              <div class="borderd">
                <div class="product-main-card ">
                  <a href="view product.html">
                    <img class="img-fluid m-0" src="~/assets/images/product-1.png" alt="">
                  </a>
                  <div class="product-love">
                    <i class="far fa-heart love"></i>
                  </div>

                </div>
                <div class="product-main-content product-card-content my-2">
                  <nuxt-link to="/products/1">  <h5 class="">اسم المنتتج</h5>
                    <h5 class="product-english"> product name</h5>
                    <hr class="product-name-line">
                  </nuxt-link>
                  <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                    المنتجتفاااااااااااصيل المنتج</p>

                  <div class="d-flex justify-content-around text-center mb-3">
                    <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                    <p class="mb-0 font-weight-bold old-age"> 100 </p>
                  </div>
                  <div class="d-flex justify-content-between px-3 product-card-buttons ">
                    <a> <button class="btn   addToCart">اضافه الى السله</button> </a>
                    <nuxt-link to="/products/1"> <button class="btn default-side "> عرض المنتج </button> </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="pagination text-center mt-4 mx-auto">
            <div class="pagination-content w-100 m-auto">
              <button class="btn"><i class="fas fa-angle-double-right"></i></button>
              <button class="btn"> <a href="">1</a> </button>
              <button class="btn active"> <a>2</a></button>
              <button class="btn"> <a>3</a></button>
              <button class="btn"> <a>4</a></button>
              <button class="btn"> <a>5</a> </button>
              <button class="btn"><i class="fas fa-angle-double-left"></i></button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>

  <!-- fixed cart menu -->
  <div class="fixedcart">
    <!-- my  cart -->
    <!-- cart item -->
    <span id="poup-cart-icon">
      <i class="fas fa-shopping-cart"></i>
    </span>
    <div class="cart-item d-flex justify-content-between mt-3">
      <img src="~/assets/images/product-1.png" class="img-fluid rounded-circle" id="item-img" alt="">
      <div class="item-text">
        <p id="cart-item-title" class=" mb-0"> الاجنده الجديده</p>
        <span id="cart-item-price" class="cart-item-price mb-0">50</span>
      </div>
      <a href="#" id='cart-item-remove' class="cart-item-remove">
        <i class="fas fa-trash"></i>
      </a>
    </div>
    <!-- cart item -->
    <div class="cart-item d-flex justify-content-between mt-3">
      <img src="~/assets/images/product-1.png" class="img-fluid rounded-circle" id="item-img" alt="">
      <div class="item-text">
        <p id="cart-item-title" class=" mb-0"> الاجنده الجديده</p>
        <span id="cart-item-price" class="cart-item-price mb-0">50</span>
      </div>
      <a href="#" id='cart-item-remove' class="cart-item-remove">
        <i class="fas fa-trash"></i>
      </a>
    </div>
    <!-- cart item -->
    <div class="cart-item d-flex justify-content-between mt-3">
      <img src="~/assets/images/product-1.png" class="img-fluid rounded-circle" id="item-img" alt="">
      <div class="item-text">
        <p id="cart-item-title" class="f mb-0"> الاجنده الجديده</p>
        <span id="cart-item-price" class="cart-item-price text-center">50</span>
      </div>
      <a href="#" id='cart-item-remove' class="cart-item-remove">
        <i class="fas fa-trash"></i>
      </a>
    </div>
    <!--end of  cart item -->
    <!-- cart total -->
    <div class="cart-total-container d-flex justify-content-around text-capitalize mt-2">
      <h5>الاجمالي</h5>
      <h5> <strong id="cart-total" class="font-weight-bold">150</strong> </h5>
    </div>
    <!--end cart total -->
    <!-- cart buttons -->
    <div class="cart-buttons-container my-3 d-flex justify-content-between justify-content-center">
      <a href="#" id="clear-cart" class="btn btn-outline-secondary  ">ازاله العربه</a></div>
    <a href="#" class="btn btn-outline-secondary ">شراء</a>
  </div>
  <!-- end my  cart -->
    <EndScripts />
  </div>
</template>

<script>
import EndScripts from '~/components/Nav'
export default {
  name: 'index',
  comments: {
    EndScripts
  }
}
</script>

<style scoped>

</style>
