<template>
  <section class="bg-dark text-light p-0 jarallax" data-jarallax data-speed="0.2" data-overlay>
    <img src="@/assets/img/home/dg.jpg" alt="Image" class="jarallax-img opacity-40">
    <div class="title_section" data-aos="fade-up">
      <div class="" style="text-align: center;">
        <h1 class="">{{ this.categoryName }}</h1>
      </div>
    </div>
  </section>
  <section style="height: max-content;">
    <div class="container" style="display: block;">
      <div class="row">
        <div class="col-xl-4">
          <CourseSidebar />
          <div class="row" style="display: flexbox; flex-wrap: wrap; justify-content: center;">
            <div v-for="(item) in popularClass" :key="item.index" @click="gotoDetail(item.index, item.subcategoryId)" style="margin: 1rem;" >
                <div v-if="selectedCategory === -1 || selectedCategory === item.subcategoryId">
                  <!-- 강의카드 이미지 및 강의명 -->
                  <div class="classIamge" data-aos="fade-up"  data-aos-delay="200">
                    <!-- 강의 이미지 -->
                    <img
                      v-if="item.categoryId === 6"
                      alt="class_image"
                      :src="require(`@/assets/img/class/${item.categoryId}-${item.subcategoryId}-${item.title.split(' ')[0]}.jpg`)"
                      style="height: 12rem;"
                    >
                    <img
                      v-else
                      alt="class_image"
                      :src="require(`@/assets/img/class/${item.categoryId}-${item.subcategoryId}.jpg`)"
                      style="height: 12rem;"
                    >
                    <!-- 이미지에 출력할 강의 제목 -->
                    <div class="text-overlay">
                      <h4>{{ item.title }}</h4>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <!-- <div class="col-xl-4">
          <div class="row">
            <CourseSidebar />
          </div>
          <div class="row">
            <CourseSidebar />
          </div>
        </div> -->
        <div class="col-xl-8">
          <div class="row" style="justify-content: center;">
            <ul data-isotope-filters data-isotope-id="projects" style="justify-content: center; display: flex;">
              <li class="nav-item">
                <a class="nav-link" @click="showClass(-1)">All</a>
              </li>
              <li class="nav-item" v-for="subcategory in subcategories" :key="subcategory.subcategoryId">
                <a class="nav-link" @click="showClass(subcategory.subcategoryId, subcategory.name)" >{{subcategory.name}}</a>
              </li>
            </ul>
          </div>
          <div class="row" style="display: flexbox; flex-wrap: wrap; justify-content: center;">
            <div v-for="(item) in data" :key="item.index" @click="gotoDetail(item.index, item.subcategoryId)" style="margin: 1rem;" >
                <div v-if="selectedCategory === -1 || selectedCategory === item.subcategoryId">
                  <!-- 강의카드 이미지 및 강의명 -->
                  <div class="classIamge" data-aos="fade-up"  data-aos-delay="200">
                    <!-- 강의 이미지 -->
                    <img
                      v-if="item.categoryId === 6"
                      alt="class_image"
                      :src="require(`@/assets/img/class/${item.categoryId}-${item.subcategoryId}-${item.title.split(' ')[0]}.jpg`)"
                      style="height: 12rem;"
                    >
                    <img
                      v-else
                      alt="class_image"
                      :src="require(`@/assets/img/class/${item.categoryId}-${item.subcategoryId}.jpg`)"
                      style="height: 12rem;"
                    >
                    <!-- 이미지에 출력할 강의 제목 -->
                    <div class="text-overlay">
                      <p>{{ item.title }}</p>
                    </div>
                  </div>
                  <!-- 강의카드 기본정보 -->
                  <div class="classIamge" style="padding: 0.5rem; font-size: 1.2rem;" data-aos="fade-up" data-aos-delay="200">
                      <div class="title">{{ item.title }}</div>
                      <div class="level">level : {{ getLevel(item.level) }}</div>
                      <div>{{ item.duration }}</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import CourseSidebar from '@/components/layout/CourseSidebar.vue';
import defaultImage from  '@/assets/img/class/category/1.jpg';
import { mapState } from "vuex";

export default {
    name: "ClassAll",
    data() {
        return {
            //data 초기화
            data:[],
            categories:[],
            subcategories: [],
            subcategoryId: null,
            subcategoryName: null,
            categoryName: null,
            categoryId: null,
            selectedCategory: -1, //1 ALL 2 subcategoryId
            // level: null
            popularClass: []
        } ;
    },
    created(){
      console.log("유저 목록: ", this.Users);
    },
    computed:{
      computed: {
    //mapState 데이터 등록
    ...mapState(["Users"]), // Users라는 변수명을 사용
    ...mapState({ Users: "Users" }), // 키 Users는 해당 컴포넌트에서 사용할 변수명 값은 State 값
  },
    },
    components:{
      CourseSidebar
    },
    methods: {
        get(){
            this.axios.get(`class/category?categoryId=${this.categoryId}`).then((response) => {
                this.data = response.data;
                console.log(this.data);
                // this.level = response.data.level;
            }).catch((error)=>{
                console.error('Error fetching data: ',error)
            });
        },
        getCategory() {
            // 대분류 카테고리 가져오는 비동기 함수
            this.axios.get("/categories").then((response) => {
                this.categories = response.data;
            });
        },
        getSubcategories(){
          this.axios.get(`subcategory?categoryId=${this.categoryId}`).then((response) => {
                this.subcategories = response.data;
                // this.level = response.data.level;
            }).catch((error)=>{
                console.error('Error fetching data: ',error)
            });
        },
        getSubcategoryName(){
          this.axios.get(`subcategory/name?subcategoryId=${this.subcategoryId}`).then((response) => {
              this.subcategoryName = response.getSubcategoryName;
              // console.log("response:"+response.categoryId)
              console.log("response:"+response.name)
              // this.level = response.data.level;
          }).catch((error)=>{
              console.error('Error fetching data: ',error)
          });
        },
        getPopularClass(){
          // 인기있는 강좌 조회
          this.axios.get("/ispopular").then((response) => {
                this.popularClass = response.data;
            });
        },
        gotoDetail(classId, subcategoryId){
          // this.getSubcategoryName();
          this.subcategoryId = subcategoryId;
          this.$router.push(
          {
            name:'ClassDetail',
            params:{
              classId: classId,
              subcategoryId: this.subcategoryId
            }
          });
        },
        gotoAllCategories(){
            this.$router.push({name:'AllCategories'});
        },
        getLevel(level){
          let description;
          switch(level) {
            case 1:
                description = "초급";
                break;
            case 2:
                description = "중급";
                break;
            case 3:
                description = "고급";
                break;
            default:
                description = "알 수 없음";
                break;
          }
          return description;
        },
        getSubcategoryId(subcategoryId){
          this.subcategoryId=subcategoryId;
        },
        showClass(subcategoryId){
          this.selectedCategory = subcategoryId
        },
        categoryImg(){
          console.log(this.categoryId);
          if (!this.categoryId) {
            return defaultImage;  // categoryId가 null인 경우 기본 이미지 사용
          }
          try {
            return require(`@/assets/img/class/category/${this.categoryId}.jpg`);
          } catch (e) {
            return defaultImage;  // 이미지가 존재하지 않는 경우 기본 이미지 사용
          }
        }
    },
    mounted(){
      // 화면이 로드되자마자
      this.categoryName = this.$route.params.categoryName;
      this.categoryId = this.$route.params.categoryId;
      this.get();
      this.getSubcategories();
      this.getCategory();
      this.getPopularClass();
    },
  
};
</script>
<style scoped>
.container {
  /* display: inline-block; */
  margin-left: 15%;
  margin-right: 15%;
  grid-template-columns: 1fr 4fr;
  /* grid-template-rows: 2fr ; */
  /* 부모 요소가 화면 전체 높이를 가득 채우도록 설정 */
  /* height: 100vh;  */
  /* row-gap: 1rem; */
  /* column-gap: 1rem; */
  /* text-align: center; */
  /* justify-content : center; */
  /* grid-template-columns: 10% 20% 69%; */
  /* grid-template-columns: 1fr 1fr 1fr; */
}
.item {
  /* width: 100%;
  height: 100%; */
  /* width: calc(33.33% - 10px);
  margin: 0 5px;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box; */
}
.classCard{
  margin: 1rem;
  /* object-fit:fill ; */
  /* position: relative; */
  /* display: grid; */
}
/* 강의 이미지 */
.classIamge{
  /* 이미지 안에 강의명 출력하기 위한 설정 */
  /* position: relative; */
  /* display: grid; */
  /* display: inline-block; */
  /* 마우스오버시 이미지 확대될 때 크기는 그대로 유지 */
  overflow: hidden;
  width: 300px;
  height: auto;
  /* border-radius: 0.2rem; */

}
.classIamge img{
  /* 이미지만 어둡게 */
  filter: brightness(50%);
}

/* 이미지 안에 강의명 */
.text-overlay p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  /* background-color: rgba(255, 255, 255, 0.7); */
  /* padding: 10px; */
  /* border-radius: 5px; */
  text-align: center;
  font-size: 1.0rem;
  pointer-events: none; 
  /* p 태그에 대한 hover 이벤트 비활성화 */
}
.sidebar{
  @media (max-width: 600px) {   
    .container {
      height: 0;
        /* grid-template-columns: 1fr;    
        grid-template-areas:     
           "header"     
           "side-bar"     
           "main"     
           "footer";    */
  }}
}
.class_card{
  /* grid-row: 2;
  grid-column: 2; */
  margin: 1rem;
  /* overflow: auto; */
}
/* 강의 이미지 마우스오버시 확대 */
.class_card img:hover {
  height: auto;
  transform: scale(1.2);
  transition: all 0.5s ease-in-out;
  /* border-radius: 1rem; */
}
/* 오버 후 부드럽게 scale out */
.class_card img:not(:hover) {
  height: auto;
  transform: scale(1);
  transition: all 0.5s ease-in-out;
  border-radius: 0rem;
  overflow: auto;
}
</style>