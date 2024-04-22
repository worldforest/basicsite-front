<template>
<nav class="navbar navbar-expand-sm navbar-light fixed-top">
  <div class="container">
    <a class="navbar-brand fade-page" @click="goToHome" >
      <img src="@/assets/img/main-logo.png" alt="자앤" width="90" height="38">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="" id="navbarSupportedContent">
      <ul class="navbar-nav dropdown-menu-up">
        <li class="nav-item nav-link dropdown" @mouseenter="toggleDropdown(true)" @mouseleave="toggleDropdown(false)">
          <a class="list-unstyled dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            교육과정
          </a>
          <div class="dropdown-content" v-show="isDropdownOpen">
            <a class="dropdown-item" @click="goToAllCategories()">전체과정</a>
            <a class="dropdown-item" v-for="category in categories" :key="category.category_id" @mouseenter="selectCategory(category.category_id)">
              {{ category.name}}
              <li class="dropdown-item" v-for="subcategory in filteredItems()" :key="subcategory.categoryId">
                {{ subcategory.name }}
              </li>
            </a>
            <ul>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="gotoSystem()">교육기술</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="gotoCompany()">회사소개</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="gotoHistory()">회사연혁</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="gotoContact()">문의하기</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  name: "JaenHeader",
  data() {
    return {
      isDropdownOpen: false,
      categories:[],
      selectedCategoryId: null,
      subcategories:[]
    }
  },
  methods: {
    // 마우스 hover에 따라 dropdown
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    goToHome(){
      this.$router.push('/');
    },
    getCategory() {
        // 대분류 카테고리 가져오는 비동기 함수
        this.axios.get("/categories").then((response) => {
            this.categories = response.data;
        });
    },
    goToAllCategories(){
      this.$router.push('/categories');
    },
    // 대분류 선택하면 중분류 가져오는 함수에 전달
    selectCategory(categoryId){
      console.log("대분류: "+categoryId)
      this.selectedCategory = categoryId;
      this.getSubcategory(this.selectedCategory);
    },
    // 중분류 카테고리 가져오는 비동기 함수
    getSubcategory(categoryId) {
        this.axios.get(`/subcategory?categoryId=${categoryId}`).then((response) => {
            this.subcategories = response.data;
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    },
    filteredItems(){
      console.log("필터링: "+this.subcategories);
      console.log("선택된 대분류: "+this.selectedCategoryId)
      return this.subcategories.filter(subcategory => subcategory.categoryId === this.selectedCategoryId);
    },
    gotoSystem(){
      this.$router.push('/system');
    },
    gotoCompany(){
      this.$router.push('/company');
    },
    gotoHistory(){
      this.$router.push('/history');
    },
    gotoContact(){
      this.$router.push('/contact');
    }
  },
  mounted(){
      // 화면이 로드되자마자
      this.getCategory();
  },
};
</script>
<style>
.dropdown{
  position: relative;
  display: inline-block;
}
.dropdown-content{
  display: none;
  position: absolute;
  background-color: aliceblue;
  min-width: 190px;
  z-index: 1;
  transition-delay: opacity 5s;
}
.dropdown:hover .dropdown-content{
  display: block;
}
.dropdown-content a{
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover{
  background-color: #f1f1f1;
  transition-delay: 5s;
}
</style>
