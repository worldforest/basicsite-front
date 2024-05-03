<template>
 <div class="navbar-container ">
      <nav class="navbar navbar-expand-md bg-white" data-overlay style="position: fixed; border: none;">
        <div class="container">
          <a class="navbar-brand fade-page" @click="goToHome">
            <img src="@/assets/img/main-logo.png" alt="자앤" width="90" height="38">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <img class="icon navbar-toggler-open" src="@/assets/img/icons/interface/menu.svg" alt="menu interface icon" />
            <img class="icon navbar-toggler-close" src="@/assets/img/icons/interface/cross.svg" alt="cross interface icon"/>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <div class="py-2 py-lg-0">
              <ul class="navbar-nav">
                <li class="nav-item dropdown bg-ligth">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">교육과정</a>
                  <div class="dropdown-menu row">
                    <div class="col-auto" data-dropdown-content>
                      <div class="dropdown-grid-menu">
                        <a class="dropdown-item" @click="goToAllCategories()">전체과정</a>
                        <div class="dropdown">
                          <a class="dropdown-item dropdown-toggle"
                            v-for="category in categories" :key="category.category_id"
                            @click="gotoClassAll(category.name, category.categoryId)"
                            data-toggle="dropdown-grid" 
                            aria-expanded="false" 
                            aria-haspopup="true">
                            <span>{{ category.name }}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true" @click="gotoSystem">기술지원</a>
                  <div class="dropdown-menu row">
                    <div class="col-auto" data-dropdown-content>
                      <div class="dropdown-grid-menu">
                        <a class="dropdown-item">공지사항/수업자료 공유</a>
                        <a class="dropdown-item">응대</a>
                        <a class="dropdown-item">평가관리</a>
                        <a class="dropdown-item">프로젝트관리</a>
                        <a class="dropdown-item">교육지원</a>
                        <a class="dropdown-item">과제관리</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">회사소개</a>
                  <div class="dropdown-menu row">
                    <div class="col-auto" data-dropdown-content>
                      <div class="dropdown-grid-menu">
                        <a class="dropdown-item fade-page" @click="gotoCompany()">About JAEN</a>
                        <a class="dropdown-item fade-page" @click="gotoHistory()">회사연혁</a>
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
      this.$router.push({ name: 'ClassAll', params: { categoryName, categoryId }});
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
