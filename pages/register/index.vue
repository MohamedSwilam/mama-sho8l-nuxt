<template>
  <div>
    <!-- staaaaaaaaaartform -->
    <section class="sign-up">
      <div class="container-fluid p-0">
        <img src="~/assets/images/hello.jpg" alt="" class="img-fluid">
      </div>
      <div class="container">

        <form class=" p-4 ">
          <div class="row my-2 form-group form-sign-up mx-auto py-4">
            <div class="col-md-12">
              <h2 class="text-center">ضيفي حساب جديد </h2>
            </div>
            <div class="col-md-6 my-2">
              <label for="" class="mb-0"> الاسم الاول* </label>
              <input required id="my-input" class="form-control my-2" type="text" name="" placeholder="الاسم الاول">
            </div>
            <div class="col-md-6  my-2">
              <label for="" class="mb-0"> الاسم الثاني* </label>
              <input required id="my-input" class="form-control my-2" type="text" name="" placeholder="الاسم الثاني">
            </div>
            <div class="col-md-6  my-2">
              <label for="" class="mb-0"> الايميل* </label>
              <input required id="my-input" class="form-control my-2" type="mail" name=""placeholder=" الايميل">
            </div>
            <div class="col-md-6 my-2">
              <label for="" class="mb-0"> رقم الموبايل* </label>
              <input required id="my-input" class="form-control my-2" type="number" name="" placeholder="رقم الموبايل">
            </div>
            <div class="col-md-6  my-2">
              <div class="pass-container">
                <label for="" class="mb-0">  كلمه المرور* </label>
                <input required type="password" class="form-control my-2" name="" placeholder="  كلمه المرور">
                <i class=" fas fa-eye"></i>
              </div>
            </div>
            <div class="col-md-6  my-2">
              <div class="pass-container">
                <label for="" class="mb-0"> تأكيد كلمه المرور*   </label>
                <input required type="password" class="form-control my-2" name="" placeholder=" تأكيد كلمه المرور ">
                <i class=" fas fa-eye"></i>
              </div>
            </div>
            <!-- <div class="col-md-6 my-2">
                 <label for="" class="mb-0"> تاريخ الميلاد </label>
                <input  id="my-input" class="form-control my-2" type="date" name="" placeholder="تاريخ الميلاد">
            </div> -->
            <!-- <div class="col-md-12 my-2">
                <label for="" class="mb-0"> العنوان </label>
              <textarea  id="my-input" rows="2" class="form-control my-2" name="" placeholder=" العنوان"></textarea>
            </div> -->
            <div class="col-md-6 col-6 my-2">
              <div class="work">
                <label class="work-label">هل بتشتغلي</label>
                <div class="form-check">
                  <input required class="form-check-input" type="radio" name="exampleRadios" id="" value="option1" >
                  <label class="form-check-label" for="exampleRadios1">
                    نعم
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="" value="option2">
                  <label class="form-check-label" for="exampleRadios2">
                    لا
                  </label>
                </div>

              </div>
            </div>

            <div class="col-md-6 col-6 my-2">
              <div class="work2">
                <label class="work-label">هل انتي ام </label>
                <div class="form-check">
                  <input required class="form-check-input" type="radio" name="exampleRadios2" id="" value="option1" >
                  <label class="form-check-label" for="exampleRadios1">
                    نعم
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios2" id="" value="option2">
                  <label class="form-check-label" for="exampleRadios2">
                    لا
                  </label>
                </div>
              </div>
            </div>
            <button class="mx-auto mt-3"> سجلي الان </button>
          </div>
        </form>

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
