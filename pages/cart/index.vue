<template>
  <div>
    <EndScripts />
    <!-- start preview swction -->
    <section class=" main-cart py-4">
      <div class="container-fluid p-0 mb-5">
        <img src="~/assets/images/bannercart.png" alt="" class="img-fluid">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-3">
            <div class="cart-right second-color mb-2 px-3">
              <h5 class="text-center second-color pt-4 font-weight-bold">
                ملخص الطلب
              </h5>
              <hr>
              <div class="d-flex justify-content-between">
                <p>الاجمالي</p>
                <p class="font-weight-bold" id="">500</p>
              </div>
              <div class="d-flex justify-content-between">
                <p>الخصم</p>
                <p class="font-weight-bold"  id="">0</p>
              </div>
              <hr>
              <div class="d-flex justify-content-between">
                <p>اجمالي العمليه</p>
                <p class="font-weight-bold" id="">5000</p>
              </div>
              <p class="m-0 font-weight-bold text-center">+</p>
              <br>
              <p class="mt-0 mb-4 charge-price">مصاريف الشحن حسب المكان</p>
              <button class="btn  my-2"> متابعه عمليه الشراء </button>
            </div>
          </div>
          <div class="col-md-9 col-12 ">
            <div class="table-responsive  product-table">
              <table class="table table-striped   table-hover pendind-table text-center mb-0">
                <thead class=" head-table">
                <tr>
                  <th> العنصر </th>
                  <th> السعر</th>
                  <th> الكميه </th>
                  <th> الاجمالي</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                  <td class="el-name">
                    <div class="d-flex">
                      <a href="view product.html"> <img class="img-fluid mr-2 img-responsive" src="~/assets/images/bc-1.jpg"
                                                        alt=""> </a>
                      <p> لوحه المهام والسلوك
                      </p>
                    </div>

                  </td>
                  <td class="el-price">
                    <div class=" "><span class="mr-2 price">200</span> جنيه مصري </div>
                  </td>
                  <td class="el-quantity">
                    <div class="d-flex justify-content-between">
                      <button id="min" class="btn btn-defualt ml-4 min" type="button">-</button>
                      <input id="quantity-value" type="text" readonly="" value="1" min="1" max="399"
                             class="quantity-input text-center form-control ">
                      <button id="max" class="btn btn-defualt max" type="button">+</button>
                    </div>
                  </td>
                  <td class="el-total">
                    <div class="d-flex justify-content-between">
                      <div><span class="total-price">200</span> جنيه مصري</div>
                      <div class="table-del">
                        <span><i class="fas fa-trash"></i></span> </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="el-name">
                    <div class="d-flex">
                      <a href="view product.html"> <img class="img-fluid mr-2 img-responsive" src="~/assets/images/bc-1.jpg"
                                                        alt=""> </a>
                      <p> لوحه المهام والسلوك
                      </p>
                    </div>

                  </td>
                  <td class="el-price">
                    <div class=" "><span class="mr-2 price">150</span> جنيه مصري </div>
                  </td>
                  <td class="el-quantity">
                    <div class="d-flex justify-content-between">
                      <button id="min" class="btn btn-defualt ml-4 min" type="button">-</button>
                      <input id="quantity-value" type="text" value="4" min="1" max="100"
                             class="quantity-input text-center form-control ">
                      <button id="max" class="btn btn-defualt max" type="button">+</button>
                    </div>
                  </td>
                  <td class="el-total">
                    <div class="d-flex justify-content-between">
                      <div><span class="total-price">200</span> جنيه مصري</div>
                      <div class="table-del">
                        <span><i class="fas fa-trash"></i></span> </div>
                    </div>
                  </td>
                </tr>


                <tr>
                  <td class="el-name">
                    <div class="d-flex">
                      <a href="view product.html"> <img class="img-fluid mr-2 img-responsive" src="~/assets/images/bc-1.jpg"
                                                        alt=""> </a>
                      <p> لوحه المهام والسلوك
                      </p>
                    </div>

                  </td>
                  <td class="el-price">
                    <div class=" "><span class="mr-2" id="price">220</span> جنيه مصري </div>
                  </td>
                  <td class="el-quantity">
                    <div class="d-flex justify-content-between">
                      <button id="min" class="btn btn-defualt ml-4 min" type="button">-</button>
                      <input id="quantity-value" type="text" readonly="" value="1" min="1" max="399"
                             class="quantity-input text-center form-control ">
                      <button id="max" class="btn btn-defualt max" type="button">+</button>
                    </div>
                  </td>
                  <td class="el-total">
                    <div class="d-flex justify-content-between">
                      <div><span id="total-price">200</span> جنيه مصري</div>
                      <div class="table-del">
                        <span><i class="fas fa-trash"></i></span> </div>
                    </div>
                  </td>
                </tr>



                </tbody>


                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end table -->

    <!-- delet poppup -->
    <div class="delete-order-container">
      <div class="delete-order">
        <p>هل انت متاكد انك تريد مسح المنتج</p>
        <div class="d-flex justify-content-between">
          <button id="agree" class="btn ">نعم</button>
          <button id="refuse" class="btn">لا</button>
        </div>
      </div>
    </div>
    <!-- delet poppup -->


    <!-- fixed cart menu -->
    <div class="fixedcart">
      <!-- my  cart -->
      <!-- cart item -->
      <span id="poup-cart-icon">
      <i class="fas fa-shopping-cart"></i>
    </span>
      <div class="cart-item-container">
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
      </div>

      <!--end of  cart item -->
      <!-- cart total -->
      <hr>
      <div class="cart-total-container d-flex justify-content-around text-capitalize mt-2">
        <h5>الاجمالي</h5>
        <h5> <strong id="cart-total" class="font-weight-bold">150</strong> </h5>
      </div>
      <!--end cart total -->
      <!-- cart buttons -->
      <hr>
      <div class="cart-buttons-container my-3 d-flex justify-content-between justify-content-center">
        <a href="#" id="clear-cart" class="btn btn-outline-secondary  ">ازاله العربه</a>
        <a href="#" class="btn btn-outline-secondary ">عرض العربه</a>
      </div>
      <!--end of  cart buttons -->
      <!-- end my  cart -->

    </div>
    <!-- fixed cart menu -->
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
