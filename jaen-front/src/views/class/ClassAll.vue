<template>
  <section class="bg-dark text-light p-0 jarallax" data-jarallax data-speed="0.2" data-overlay>
    <img src="@/assets/img/home/dg.jpg" alt="Image" class="jarallax-img opacity-40">
    <div class="title_section" data-aos="fade-up">
      <div class="" style="text-align: center;">
        <h1 class="">{{ this.categoryName }}</h1>
      </div>
    </div>
  </section>
  <section style="height: max-content; ">
    <div class="container" style="display: block;">
      <div class="row">
        <!-- 대분류 이동 사이드바 start -->
        <div class="col-xl-4">
          <CourseSidebar />
        </div>
        <!-- 대분류 이동 사이드바 end -->
        <div class="col-xl-8">
          <!-- 중분류 이동 바 start -->
          <div class="row" style="justify-content: center;">
            <ul data-isotope-filters data-isotope-id="projects" style="justify-content: center; display: flex; font-size: 1.2rem;">
              <li class="nav-item">
                <a class="nav-link" @click="showClass(-1)">All</a>
              </li>
              <li class="nav-item" v-for="subcategory in subcategories" :key="subcategory.subcategoryId">
                <a class="nav-link" @click="showClass(subcategory.subcategoryId, subcategory.name)" >{{subcategory.name}}</a>
              </li>
            </ul>
          </div>
          <!-- 중분류 이동 바 end -->
          <!-- 강의 card start -->
          <div class="row" style="margin: 1rem;" data-aos="fade-up" data-aos-delay="200">
            <div v-for="(item) in filteredData" :key="item.index" @click="gotoDetail(item.index, item.subcategoryId)">
              <div class="card"  data-aos-offset="50">
                <img
                class="card-img-top"
                alt="class_image"
                :src="item.categoryId === 6 ? require(`@/assets/img/class/${item.categoryId}-${item.subcategoryId}-${item.title.split(' ')[0]}.jpg`): require(`@/assets/img/class/${item.categoryId}-${item.subcategoryId}.jpg`)"
                style="height: 12rem;"
                >
                <!-- <span class="badge" style="position: absolute; top: 0; right: 0;">{{ getLevel(item.level) }}</span> -->
                <p class="lead">{{ item.title }}</p>
                <div class="card-body d-flex flex-column" style="justify-content: center;">
                  <!-- <span class="badge" style="width: fit-content;">{{ getLevel(item.level) }}</span> -->
                  <span class="lead">{{ item.title }}</span>
                  <span class="text-muted">{{ item.duration }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 강의 card end -->
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import CourseSidebar from '@/components/layout/CourseSidebar.vue';
import defaultImage from  '@/assets/img/class/category/1.jpg';
import { mapGetters } from 'vuex';

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
            selectedCategory: -1, //1 ALL 2 subcategoryId
            classId: null,
            // level: null
            dataLoaded: false, // 데이터 로드 상태 추가
        } ;
    },
    created() {
      this.restoreStateFromUrl();
      this.fetchDataBasedOnCategory();
    },
    computed:{
      ...mapGetters(['getCategoryData', 'getCategoryId', 'getCategoryName']),
      
      categoryId(){
        return this.getCategoryData.categoryId;
      },
      categoryName(){
        return this.getCategoryData.categoryName;
      },

      filteredData() {
        if (this.selectedCategory === -1) {
          return this.data; // If selectedCategory is -1, return all data
        } else {
          return this.data.filter(item => item.subcategoryId === this.selectedCategory);
        }
      },
    },
    components:{
      CourseSidebar
    },
    watch:{
      getCategoryData(newValue, oldValue){
        if(newValue.categoryId !== oldValue.categoryId || newValue.categoryName !== oldValue.categoryName){
          console.log("category가 변경되었습니다. : ",newValue, oldValue);
          this.updateURLAndReload(newValue.categoryId, newValue.categoryName);
        }
      }
    }, 
    methods: {
      fetchDataBasedOnCategory() {
        const categoryId = this.getCategoryId | this.$route.query.categoryId;
        if (categoryId) {
          this.getCategoryDataMethod(categoryId);
          this.getSubcategories(categoryId);
        }
      },
      getCategoryDataMethod(categoryId){
          this.axios.get(`class/category?categoryId=${categoryId}`).then((response) => {
              this.data = response.data;
              this.dataLoaded = true;
          }).catch((error)=>{
              console.error('Error fetching data: ',error)
              this.dataLoaded = false;
          });
      },
      getCategory() {
          this.axios.get("/categories").then((response) => {
              this.categories = response.data;
          });
      },
      getSubcategories(){
        this.axios.get(`subcategory?categoryId=${this.$store.getters.getCategoryId}`).then((response) => {
              this.subcategories = response.data;
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
        this.subcategoryId = subcategoryId;
        this.$store.dispatch('setJaenClass', {
            payload:{
              classId: classId,
            }
        })

        this.$router.push(
        {
          name:'ClassDetail',
          params:{
            classId: this.$store.getters.getJaenClassId,
            categoryId: this.categoryId,
            subcategoryId: this.subcategoryId,
            subcategoryName: this.subcategoryName
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
        if (!this.categoryId) {
          return defaultImage;  // categoryId가 null인 경우 기본 이미지 사용
        }
        try {
          return require(`@/assets/img/class/category/${this.categoryId}.jpg`);
        } catch (e) {
          return defaultImage;  // 이미지가 존재하지 않는 경우 기본 이미지 사용
        }
      },
      updateURLAndReload(categoryId, categoryName) {
        this.$router.push({ query: { categoryId: categoryId, categoryName: categoryName } }).then(() => {
          location.reload();
        });
        // this.$router.push({name:'ClassAll', params: {categoryId, categoryName}}).then(() => {
        //   location.reload();
        // });
        //   this.$store.dispatch('setCategory', {
        //         payload:{
        //             categoryId: categoryId,
        //             categoryName: categoryName
        //         }
        //     })
        // },
      },
      restoreStateFromUrl() {
        if (this.$store && this.$store.dispatch) {
          const categoryId = this.$route.query.categoryId;
          const categoryName = this.$route.query.categoryName;
          if (categoryId && categoryName) {
            this.$store.dispatch('setCategory', { categoryId, categoryName });
          }
        } else {
          console.error('Vuex 스토어가 정의되지 않았습니다.');
        }
      }
    },
    mounted(){
      // 화면이 로드되자마자
      // this.categoryId = this.$store.getters.getCategoryId
      // this.categoryName = this.$store.getters.getCategoryName
      // this.get();
      this.getCategory();
      this.getSubcategories();
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
  font-size: 1.5rem;
  font-weight: 600;
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