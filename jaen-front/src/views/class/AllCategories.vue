<template>
  <section class="bg-light text-dark p-0 jarallax" data-jarallax data-speed="2" data-overlay>
    <!-- <img src="@/assets/img/home/dg.jpg" alt="Image" class="jarallax-img opacity-40"> -->
    <div class="title_section" data-aos="fade-up">
        <h1>자앤의 교육과정</h1>
    </div>
  </section>
  <div style="text-align: center; margin-top: 2rem;">
    <h5 style="line-height: 2rem;">현재 자앤에서 진행되는 교육과정 대분류 목록입니다.<br>세부 강의 목록은 궁금하신 대분류를 선택해서 확인해주세요.</h5>
  </div>
  <div class="container">

    <section class="pt-5">
      <div class="container" data-aos="fade-up">
        <!-- <div class="row" style="margin-bottom: 2rem;"><h4>현재 자앤에는 <a style="background-color: blanchedalmond; font-size: 1.6rem">{{ categories.length }}개</a>의 교육과정이 있습니다.</h4></div> -->
        <div class="row">
          <div class="col-sm-6 col-lg-4 mb-4" data-isotope-item data-category="Digital" v-for="(category, index) in categories" :key="index">
            <img
              class="rounded shadow-3d hover-shadow-3d border mb-3 mb-md-0"
              :src="require(`@/assets/img/class/category/${index + 1}.jpg`)"
              alt="category"
              @click="gotoClassAll(category.name, category.categoryId)"
              style="height: 14rem;"
              >
            <div style="padding: 1rem;">
              <h4 class="mb-1" style="cursor: pointer;" @click="gotoClassAll(category.name, category.categoryId)">{{ category.name }}</h4>
              <div class="text-small text-muted" v-for="subcategory in subcategories" :key="subcategory.subcategoryId">
                <a
                  v-if="subcategory.categoryId === category.categoryId"
                  style="cursor: default; font-size: 1.1rem"
                  >
                  {{ subcategory.name }}
                </a>
              </div>
            </div>
          </div>
       </div>
      </div>
      <p class="alert alert-primary" style="text-align: center;">&#128587; 수업이 어떤 식으로 진행되는지 궁금하신가요? <a @click="gotoSystem">교육 지원 플랫폼</a>에서 확인해보세요.</p>
    </section>
  </div>
</template>
<script>
    export default {
    name: "AllCategories",
    data() {
        return {
            //data 초기화
            categories:[],
            subcategories: [],
            categoryName: null,
            categoryId: null,
            imageList: ['1','2','3','4','5','6'],
        } ;
    },
    computed:{
      getCategoryData(){
          return this.$store.getters.getCategoryData
      },
      getSubcategoryData(){
          return this.$store.getters.getSubcategoryData
      },
      getJaenClassData(){
          return this.$store.getters.getJaenClassData
      },

    },
    methods: {
        getCategory() {
            // 대분류 카테고리 가져오는 비동기 함수
            this.axios.get("/categories").then((response) => {
                this.categories = response.data;
            });
        },
        getAllSubcategory() {
            // 중분류 카테고리 가져오는 비동기 함수
            this.axios.get(`/subcategories`).then((response) => {
                this.subcategories = response.data;
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        },
        selectSubCategory(subcategoryName, subcategoryId, categoryName, categoryId){
          this.$router.push({name:'ClassAll', params: {subcategoryName, subcategoryId, categoryName, categoryId}});
        },
        gotoClassAll(categoryName, categoryId){
          this.$router.push({name:'ClassAll', params: {categoryName, categoryId}});
          this.$store.dispatch('setCategory', {
                payload:{
                    categoryId: categoryId,
                    categoryName: categoryName
                }
            })
        },
        gotoSystem(){
          this.$router.push('/system');
        },
    },
    mounted(){
        // 화면이 로드되자마자
        this.getCategory();
        this.getAllSubcategory();
        // this.categoryId=this.getCategoryId();
    },
    beforeRouteLeave(to, from, next) {
      // 이전 페이지로 이동할 때 데이터를 전달
      to.params.myData = this.myData;
      next();
    }
};
</script>
<style>
.container{
  text-align: center;
}

</style>