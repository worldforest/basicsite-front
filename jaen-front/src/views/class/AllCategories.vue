<template>
<div>
    <section class="">
      <div class="container">
        <div class="row mb-4">
          <div class="col">
            <h3 class="h1">자앤의 교육과정 대분류</h3>
            <p class="lead">
                다양한 자앤의 교육과정들을 확인해보세요.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-4"
            v-for="(category, index) in categories"
                :key="index"
            >
            <a class="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d"
                style="cursor: pointer;">
              <img class="icon icon-lg bg-primary-2" src="assets/img/icons/theme/layout/layout-3d.svg" alt="icon" data-inject-svg />
                <h5 class="mb-0">{{category.name}}</h5>
            </a>
            <a @click="getSubcategory(category.category_id)">
            아무것도 없지? {{ subcategories }}
            </a>
          </div>
          </div>
          </div>
        <div>
            <span>$primary-3:</span>
            <span data-typed-text data-type-speed="80" data-strings='["#1B1F3B;"]' data-loop="true" data-back-delay="2000" class="text-primary-3"></span>
        </div>
        <div class="row justify-content-center mb-6">
          <div class="col-xl-5 col-md-8">
            <div class="position-relative">
              <div class="rounded bg-primary-3 p-4 text-light text-monospace mb-2 layer-2">
                <div class="mb-3">
                  <div>&gt;  if you want to be a Developer</div>
                  <div class="text-primary-2">Everything’s installed!</div>
                </div>
                <div class="mb-3">
                  <div>&gt; $ gulp</div>
                  <div class="text-primary-2">SCSS watching</div>
                  <div class="text-primary-2">LiveReload started</div>
                  <div class="text-primary-2">Opening localhost:3000</div>
                </div>
                <div>
                  <div>&gt; $ that's it?</div>
                  <div class="text-primary-2">Yep, that's it.</div>
                </div>
              </div>
            </div>
            <div class="alert alert-primary position-relative layer-3">&#x1F631; Look unfamiliar? Don’t worry! Our <a href="documentation/index.html">comprehensive
            documentation</a> has got you covered.</div>
          </div>
        </div>
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
            categoryName: null
        } ;
    },
    methods: {
        getCategory() {
            // 대분류 카테고리 가져오는 비동기 함수
            this.axios.get("/categories").then((response) => {
                this.categories = response.data;
            });
        },
        getSubcategory(categoryId) {
            // 중분류 카테고리 가져오는 비동기 함수
            this.axios.get(`/subcategory?categoryId=${categoryId}`).then((response) => {
                this.subcategories = response.data;
                console.log( this.subcategories)
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        },
        selectCategory(categoryName, categoryId) {
            console.log(categoryId);
            // this.$emit("category-selected", categoryId); // Emit custom event with index
            this.$router.push({ name: 'SubCategories', params: { categoryId: categoryId, categoryName : categoryName } });
        },
        selectSubCategory(subcategoryName,subcategoryId){
            this.$router.push({name:'ClassAll', params: {subcategoryName, subcategoryId, categoryName: this.categoryName, categoryId: this.categoryId}});
        },
    },
    mounted(){
        // 화면이 로드되자마자
        this.getCategory();
        this.getSubcategory();
    },
};
</script>