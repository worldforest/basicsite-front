<template>
  <nav class="navbar navbar-expand-lg " data-overlay >
    <a class="navbar-brand fade-page" @click="goToHome" >
      <img src="@/assets/img/main-logo.png" alt="자앤" width="90" height="38">
    </a>
    <div class="dropdown" @mouseenter="toggleDropdown(true)" @mouseleave="toggleDropdown(false)">
      <a>교육과정</a>
      <div class="dropdown-content" v-show="isDropdownOpen">
        <a @click="goToAllCategories()">전체과정</a>
        <template v-for="category in categories" :key="category.category_id">
          <div @click="selectCategory(category.category_id)" class="category-item">
            <a>{{ category.name }}</a>
            <!-- 카테고리 옆에 subcategory.name을 표시합니다. -->
            <a v-for="subcategory in filteredItems()" :key="subcategory.name">
              {{ filteredItems }}
              {{ subcategory }}
            </a>
          </div>
        </template>
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
      console.log(this.subcategories);
      return this.subcategories.filter(subcategory => subcategory.category_id === this.selectedCategoryId);
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
  min-width: 160px;
  z-index: 1;
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
}
</style>
