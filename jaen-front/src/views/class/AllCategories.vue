<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="h1">자앤의 교육과정 대분류</h3>
        <p class="lead"> 다양한 자앤의 교육과정들을 확인해보세요.</p>
      </div>
    </div>
    <div class="row" style="padding: 2rem;">
      <div class="col-md-6 col-lg-4 card" v-for="(category, index) in categories" :key="index" style="height: 8rem;">
        <div class="align-items-center d-flex flex-column" style="cursor: pointer;">
          <h5 class="" style="padding-top: 1rem;" @click="gotoSubCategories(categoryId, categoryName)">{{ category.name }}</h5>
        </div>
        <div class="align-items-center d-flex flex-column" v-for="subcategory in subcategories" :key="subcategory.subcategoryId">
          <a 
            v-if="subcategory.categoryId === category.categoryId" 
            @click="selectSubCategory(subcategory.name, subcategory.subcategoryId, category.name, category.categoryId)"
            style="cursor: pointer;"
            >
            {{ subcategory.name }}
          </a>
          <a v-else></a>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <p class="alert alert-primary position-relative layer-3">&#128587; 수업이 어떤 식으로 진행되는지 궁금하신가요? <a href="documentation/index.html">교육 지원 플랫폼</a>에서 확인해보세요.</p>
    </div>
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
            categoryId: null
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
        gotoSubCategories(){
            this.$router.push({name:'SubCategories', params: {categoryId: this.categoryId, categoryName: this.categoryName}});
        },
    },
    mounted(){
        // 화면이 로드되자마자
        this.getCategory();
        this.getAllSubcategory();
    },
};
</script>