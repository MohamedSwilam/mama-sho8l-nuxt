<template>
  <div>
    <!-- staaaaaaaaaartform -->
    <section class="sign-up">
      <div class="container-fluid p-0">
        <img src="~/assets/images/hello.jpg" alt="" class="img-fluid">
      </div>
      <div class="container">
        <!-- login  -->
        <div class="form-login my-5 mx-auto">
          <form class="form-group py-2 px-3">
            <h3 class="text-center">تسجيل الدخول </h3>
            <label class="mb-0" for=""> الايميل او رقم الموبايل   </label>
            <input required type="text" class="form-control my-2" placeholder="الايميل ">
            <div class="pass-container mt-3">
              <label class="mb-0" for=""> كلمه المرور</label>
              <input required type="password" class="form-control my-2" placeholder="  كلمه المرور">
              <i class="fas fa-eye"></i>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <div class="form-check">
                <input required="" class="form-check-input" type="checkbox" name="" id="remember" value="option1">
                <label class="form-check-label" for="remember">
                  تزكرني
                </label>
              </div>
              <a href="">نسيت كلمه المرور</a>
            </div>

            <button type="submit" class="btn py-2 my-3">تسجيل الدخول</button>
            <!--  </div>-->
            <!-- login  -->
          </form>

        </div>
      </div>
    </section>
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
