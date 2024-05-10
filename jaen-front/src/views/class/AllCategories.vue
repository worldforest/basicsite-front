<template>
  <div class="container">
    <section class="bg-light text-dark header-inner" data-jarallax data-speed="0.2" data-overlay>
      <div class="row title_section">
        <div class="" style="display: flex;">
          <h3 class="h1">자앤의 교육과정 대분류</h3>
        </div>
      </div>
    </section>
    <section class="pt-5">
      <div class="container" data-aos="fade-up">
        <div class="col-sm-6 col-lg-4 mb-4" data-isotope-item data-category="Digital" v-for="(category, index) in categories" :key="index">
          <a href="#">
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
                  class="h6"
                  v-if="subcategory.categoryId === category.categoryId" 
                  @click="selectSubCategory(subcategory.name, subcategory.subcategoryId, category.name, category.categoryId)"
                  style="cursor: pointer;"
                  >
                  {{ subcategory.name }}
                </a>
              </div>
            </div>
          </a>
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
                console.log( this.subcategories)
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        },
        selectSubCategory(subcategoryName, subcategoryId, categoryName, categoryId){
          this.$router.push({name:'ClassAll', params: {subcategoryName, subcategoryId, categoryName, categoryId}});
        },
        gotoClassAll(categoryName, categoryId){
          this.$router.push({name:'ClassAll', params: {categoryName, categoryId}});
        },
        gotoSystem(){
          this.$router.push('/system');
        },
    },
    mounted(){
        // 화면이 로드되자마자
        this.getCategory();
        this.getAllSubcategory();
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