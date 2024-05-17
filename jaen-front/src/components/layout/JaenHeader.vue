<template>
 <div class="navbar-container ">
      <nav class="navbar navbar-expand-md bg-white" data-overlay style="position: fixed; border: none; margin: 0; padding: 1rem;">
        <div class="container">
          <a class="navbar-brand fade-page" @click="goToHome">
            <img src="@/assets/img/main-logo.png" alt="자앤" width="95" height="38">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <img class="icon navbar-toggler-open" src="@/assets/img/icons/interface/menu.svg" alt="menu interface icon" />
            <img class="icon navbar-toggler-close" src="@/assets/img/icons/interface/cross.svg" alt="cross interface icon"/>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <div class="py-2 py-lg-0">
              <ul class="navbar-nav">
                <li class="nav-item dropdown bg-ligth">
                  <!-- <a class="nav-link dropdown-toggle" data-toggle="" aria-expanded="false" aria-haspopup="true" @click="toggleDropdown">교육과정</a> -->
                  <a class="nav-link" data-toggle="" aria-expanded="false" aria-haspopup="true" @click="toggleDropdown">교육과정</a>
                  <!-- <div class="dropdown-menu row"></div> -->
                  <div class="">
                    <div class="col-auto" data-dropdown-content>
                      <!-- <div class="dropdown-grid-menu"> -->
                      <div v-show="isDropdownOpen" class="dropdown-content">
                        <a class="" @click="goToAllCategories()">전체과정</a>
                        <div class="">
                          <a class=""
                            v-for="category in categories" :key="category.category_id"
                            @click="gotoClassAll(category.name, category.categoryId)"
                            data-toggle="" 
                            aria-expanded="false" 
                            aria-haspopup="true">
                            <span>{{ category.name }}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown bg-ligth">
                  <a class="nav-link" data-toggle="" aria-expanded="false" aria-haspopup="true" @click="gotoSystem">기술지원</a>
                </li>
                <li class="nav-item dropdown bg-ligth">
                  <a class="nav-link" data-toggle="" aria-expanded="false" aria-haspopup="true" @click="toggleDropdown_company">회사소개</a>
                  <div class="">
                    <div class="col-auto" data-dropdown-content>
                      <div v-show="isDropdownOpen_company" class="dropdown-content">
                        <div class="">
                          <a class="" @click="gotoCompany()">About JAEN</a>
                          <a class="" @click="gotoCurriculum()">커리큘럼</a>
                          <a class="" @click="gotoRoadmap()">로드맵</a>
                          <a class="" @click="gotoHistory()">회사연혁</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown bg-ligth">
                  <a class="nav-link" data-toggle="" aria-expanded="false" aria-haspopup="true" @click="gotoContact">문의하기</a>
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
      isDropdownOpen_company: false,
      categories:[],
      selectedCategoryId: null,
      subcategories:[]
    }
  },
  methods: {
    goToHome(){
      this.$router.push('/');
    },
    getCategory() {
        // 대분류 카테고리 가져오는 비동기 함수
        this.axios.get("/categories").then((response) => {
            this.categories = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    goToAllCategories(){
      this.$router.push('/categories');
    },
    gotoClassAll(categoryName, categoryId){
      console.log("categoryId:"+categoryId)
      this.$router.push({ name: 'ClassAll', params: { categoryName, categoryId }});
    },
    gotoSystem(){
      this.$router.push('/system');
    },
    gotoCompany(){
      this.$router.push('/company');
    },
    gotoCurriculum(){
      this.$router.push('/curriculum');
    },
    gotoRoadmap(){
      this.$router.push('/roadmap');
    },
    gotoHistory(){
      this.$router.push('/history');
    },
    gotoContact(){
      this.$router.push('/contact');
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggleDropdown_company() {
      this.isDropdownOpen_company = !this.isDropdownOpen_company;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    }
  },
  mounted(){
      // 화면이 로드되자마자
      this.getCategory();
  },
  created(){
    // 라우터 이동 시 드롭다운을 닫도록 네비게이션 가드를 추가합니다.
    this.$router.beforeEach((to, from, next) => {
      this.closeDropdown(); // 페이지 이동 시 드롭다운을 닫습니다.
      next();
    });
    // this.data(this.$route.params.index);
  },
  beforeRouteLeave(to, from, next) {
    // 이전 페이지로 이동할 때 데이터를 전달
    to.params.myData = this.myData;
    next();
  },
};
</script>
<style>
.dropdown{
  position: relative;
  display: inline-block;
  font-size: 1.1rem;
}
.dropdown-content{
  position: absolute;
  left: 50%;
  transform: translate(-50%); /* 중앙으로 이동 */
  width: max-content;
  display: none;
  background-color: #fff;
  /* min-width: 150px; */
  z-index: 1;
  transition-delay: opacity 5s;
  justify-content: center;
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
