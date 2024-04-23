<template>
 <div class="navbar-container ">
      <nav class="navbar navbar-expand-lg navbar-light " data-overlay style="position: fixed; border: none;">
        <div class="container">
          <a class="navbar-brand fade-page" @click="goToHome">
            <img src="@/assets/img/main-logo.png" alt="자앤" width="90" height="38">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <img class="icon navbar-toggler-open" src="@/assets/img/icons/interface/menu.svg" alt="menu interface icon" data-inject-svg />
            <img class="icon navbar-toggler-close" src="@/assets/img/icons/interface/cross.svg" alt="cross interface icon" data-inject-svg />
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <div class="py-2 py-lg-0">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">교육과정</a>
                  <div class="dropdown-menu row">
                    <div class="col-auto" data-dropdown-content>
                      <div class="dropdown-grid-menu">
                        <a class="dropdown-item" @click="goToAllCategories()">전체과정</a>
                        <div class="dropdown">
                          <a class="dropdown-item dropdown-toggle"
                          v-for="category in categories" :key="category.category_id"
                          
                          data-toggle="dropdown-grid" 
                          aria-expanded="false" 
                          aria-haspopup="true">
                            <span>{{ category.name }}</span>
                            <img class="icon bg-dark opacity-20" src="@/assets/img/icons/interface/arrow-caret.svg" alt="arrow-caret interface icon" data-inject-svg />
                          </a>
                          <div class="dropdown-menu row" v-if="subcategories !== null && subcategories.length > 0">
                            <div class="col-auto" data-dropdown-content>
                              <div class="dropdown-grid-menu">
                                <a class="dropdown-item fade-page" v-for="subcategory in subcategories" :key="subcategory.subcategoryId">{{ subcategory.name }}</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="dropdown">
                          <a href="#" class="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                            <span>Contact</span>
                            <img class="icon opacity-20" src="@/assets/img/icons/interface/arrow-caret.svg" alt="arrow-caret interface icon" data-inject-svg />
                          </a>
                          <div class="dropdown-menu row">
                            <div class="col-auto" data-dropdown-content>
                              <div class="dropdown-grid-menu">
                                <a class="dropdown-item fade-page" v-for="subcategory in subcategories" :key="subcategory.subcategoryId">{{ subcategory.name }}</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="gotoSystem()">교육지원</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true" @click="gotoCompany()">회사소개</a>
                  <div class="dropdown-menu row">
                    <div class="col-auto" data-dropdown-content>
                      <div class="dropdown-grid-menu">
                        <a class="dropdown-item fade-page" @click="gotoHistory()">회사연혁</a>
                        <a class="dropdown-item fade-page">인재채용</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="gotoContact()">문의하기</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
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
            console.log("getCategory: "+this.categories);
        });
    },
    getSubCategory() {
        // 대분류 카테고리 가져오는 비동기 함수
        this.axios.get("/subcategories").then((response) => {
            this.subcategories = response.data;
            const filterSubcategories = this.subcategories.filter(subcategory => subcategory.categoryId === 1);
            console.log("getSubCategory: "+filterSubcategories);
        });
    },
    goToAllCategories(){
      this.$router.push('/categories');
    },
    // 대분류 선택하면 중분류 가져오는 함수에 전달
    selectCategory(categoryId){
      this.selectedCategory = categoryId;
      this.getSubcategory(this.selectedCategory);
      // console.log("중분류: "+ this.subcategories[0].name)
    },
    // 중분류 카테고리 가져오는 비동기 함수
    // getSubcategory(categoryId) {
    //     this.axios.get(`/subcategory?categoryId=${categoryId}`).then((response) => {
    //         this.subcategories = response.data;
    //     }).catch((error) => {
    //         console.error('Error fetching data:', error);
    //     });
    // },
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
      this.getSubCategory();
  }
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
