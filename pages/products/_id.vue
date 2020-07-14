<template>
  <div>
    <!-- start preview swction -->
    <section id="preview">
      <div class="container">
        <div class="row py-4">
          <div class="col-md-5 mb-3 ">

            <div class="preview-images">
              <img id="img_01" src="~/assets/images/bc-2.jpg" data-zoom-image="./images/bc-2.jpg"
                   class="mgtest img-responsive img-fluid big-img big-img2 " />

              <div id="gallery_01" class="previe-small-img d-flex justify-content-between mt-3">

                <a href="#" data-image="./images/bc-1.jpg" data-zoom-image="./images/bc-1.jpg" class="behiend-img">
                  <img id="img_01" src="~/assets/images/bc-1.jpg" class="mgtest small-img " />
                </a>

                <a href="#" data-image="./images/bc-2.jpg" data-zoom-image="./images/bc-2.jpg" class="behiend-img">
                  <img id="img_01" src="~/assets/images/bc-2.jpg" class="mgtest small-img" />
                </a>

                <a href="#" data-image="./images/bc-3.jpg" data-zoom-image="./images/bc-3.jpg" class="behiend-img">
                  <img id="img_01" src="~/assets/images/bc-3.jpg" class="mgtest small-img" />
                </a>
              </div>
            </div>

          </div>
          <!-- end img slider and start details -->
          <div class="col-md-7 ">

            <!-- starrrrrt tabs -->
            <div class="">

              <nav>
                <div class="nav nav-tabs tabs-header" id="nav-tab" role="tablist">
                  <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                     aria-controls="nav-home" aria-selected="true">معلومات اساسيه</a>
                  <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                     aria-controls="nav-profile" aria-selected="false">معلومات اضافيه</a>

                </div>
              </nav>
              <div class="row ">
                <div class="col-md-9">
                  <div class="tab-content main-tab-container" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <div class="preview-content quantity-main-conteent ">
                        <h5> لوحه المهام والسلوك </h5>
                        <div class="">
                          <p>

                            واحدة من أقوي الأدوات التعليميه لتهذيب السلوك عند الأطفال ، هي لوحة السلوك و المهام اليومية
                            <br>
                            ماما في الشغل بتقدم اللوحة دي لأول مرة في مصر علشان تساعدك تعلمي و تكافئي أولادك علي السلوكيات
                            الإيجابية

                            اللوحة تحتوي علي ٢٤ أسبوع . كل أسبوع ليه جهتين ، أول جهة ، هتساعدك تكافيئ أولادك علي مجموعة من
                            السلوكيات اللي هتكون مكتوبة و متفقين عليها كل اسبوع. و الجهة التانيه فيها لستة المهام اليومية المتكررة
                            اللي لازم يقوم بيها كل يوم .

                            اللوحة بيجي معاها استيكرز علشان تكافئ اولادك و فيها أشكال مختلفة مفرحة من الداخل


                          </p>

                        </div>

                        <div class="text-center m-auto">
                        </div>

                      </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <ul class="ml-5 ">
                        <li class="my-2"> مناسبة من ٤ سنوات حتي ١٢ سنة </li>
                        <li class="my-2">اللون : اصفر </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 my-2 preview-content ">

                  <div class=" droduct-view-details pt-3">
                    <h3 class="text-center font-weight-bold second-color">200</h3>
                    <p class="text-center"> جنيه مصري</p>
                    <hr>
                    <div class="d-flex justify-content-between">
                      <button id="min" class="btn btn-defualt ml-2 min" type="button">-</button>
                      <input id="quantity-value" type="text" readonly="" value="1" min="1" max="399"
                             class="quantity-input text-center form-control ">
                      <button id="max" class="btn btn-defualt max" type="button">+</button>
                    </div>
                    <hr>

                    <p class="text-center">متاح 5 عناصر </p>
                    <hr>
                    <a> <button class="btn btn-block addtocart-preview">اضافه الى السله</button> </a>

                  </div>

                </div>
              </div>




            </div>

            <!-- ennnnnnnnd tabs -->





          </div>
          <!-- end view product section                      -->


          <!-- start slider for related products                    -->

          <div class="col-md-12 mt-4 related-products">
            <!-- <h5 class="font-weight-bold main-color">منتجات ذات صله </h5> -->
            <div class="col-md-12 article-header d-flex">
              <h5 class="font-weight-bold main-color"> منتجات ذات صله </h5>
              <span></span>
            </div>


            <div class="swiper-container product-slide  w-100">
              <div class="swiper-wrapper">

                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination mt-5"></div>
              <div class="swiper-button-next"> <i class="fas fa-arrow-left"></i></div>
              <div class="swiper-button-prev"> <i class="fas fa-arrow-right"></i> </div>
            </div>

          </div>
          <!-- end slider for related products                    -->

          <!-- start slider for similar products                    -->

          <div class="col-md-12 mt-4 related-products">
            <div class="col-md-12 article-header d-flex">
              <h5 class="font-weight-bold main-color"> منتجات مشابهه </h5>
              <span></span>
            </div>


            <div class="swiper-container product-slide  w-100">
              <div class="swiper-wrapper">

                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide my-5">
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
                      <a href="view product.html">  <h5 class="">اسم المنتتج</h5>
                        <h5 class="product-english"> product name</h5>
                        <hr class="product-name-line">
                      </a>
                      <p class="product-discription"> تفاااااااااااصيل المنتج تفاااااااااااصيل المنتج تفاااااااااااصيل
                        المنتجتفاااااااااااصيل المنتج</p>

                      <div class="d-flex justify-content-around text-center mb-3">
                        <p class="mb-0"> <span class="font-weight-bold">100</span> جنيه مصري </p>
                        <p class="mb-0 font-weight-bold old-age"> 100 </p>
                      </div>
                      <div class="d-flex justify-content-between px-3 product-card-buttons ">
                        <a href="view product.html"> <button class="btn   addToCart">اضافه الى السله</button> </a>
                        <a href="view product.html"> <button class="btn default-side "> عرض المنتج </button> </a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination mt-5"></div>
              <div class="swiper-button-next"> <i class="fas fa-arrow-left"></i></div>
              <div class="swiper-button-prev"> <i class="fas fa-arrow-right"></i> </div>
            </div>

          </div>
          <!-- end slider for similar products -->

        </div>
      </div>
    </section>

    <!-- endd preview paaaaaaaaaage -->
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
        <a href="#" id="clear-cart" class="btn btn-outline-secondary  ">ازاله العربه</a>
        <a href="#" class="btn btn-outline-secondary ">شراء</a>
      </div>
      <!--end of  cart buttons -->
      <!-- end my  cart -->

    </div>
    <!-- fixed cart menu -->
    <EndScripts />
  </div>
</template>

<script>
import EndScripts from '~/components/Nav'
export default {
  name: 'product_details',
  comments: {
    EndScripts
  }
}
</script>

<style scoped>

</style>
