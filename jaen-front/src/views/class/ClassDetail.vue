<template>
  <section class="bg-dark text-light p-0 jarallax" data-jarallax data-speed="0.2" data-overlay>
    <img src="@/assets/img/home/dg.jpg" alt="Image" class="jarallax-img opacity-40">
    <div class="title_section" data-aos="fade-up">
      <div class="" style="text-align: center;">
        <p class="col-12" @click="gotoAllCategories" style="color: darkgrey; font-size: 1.2rem" >전체과정  > {{ this.subcategoryName }}</p>
        <h1 style="text-align: center; align-items: center;">{{ classDetailData.title }}</h1>
      </div>
    </div>
  </section>
  <section>
    <div class="container" style="margin: auto;m">
      <!-- 대분류 메뉴 -->
      <div class="category_menu sidebar">
        <CourseSidebar />
      </div>
      <div class="item popular_class">인기강좌</div>
      <div class="item subcategory_menu">중분류</div>
      <div class="item class_card">강의카드</div>
      <div class="item class_menu">강의이동</div>
    </div>
  </section>
</template>
  
 <script>
 import CourseSidebar from '@/components/layout/CourseSidebar.vue';
  export default {
    data() {
      return{
        data: [],
        classId: null,
        classDetailData: [],
        subcategoryId: null,
        subcategoryName: null
      };
    },
    created() {
    },
    components:{
      CourseSidebar
    },
    methods: {
      get(){
        this.axios.get(`curriculum?classId=${this.classId}`).then((response) => {
          this.data = response.data;
        }).catch((error) => {
          console.error('Error fetching data: ',error);
        });
      },
      getClassBasic(){
            this.axios.get(`class/classId?index=${this.classId}`).then((response) => {
                this.classDetailData = response.data[0];
            }).catch((error)=>{
                console.error('Error fetching data: ',error)
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
        }
        ,formatTextWithLineBreaks(text){
          if(text){
            return text.replace(/\n/g, "<br>");
          }
          return ""
        }
    },
    mounted(){
      this.classId = this.$route.params.classId;
      this.subcategoryId = this.$route.params.subcategoryId;
      this.subcategoryName = this.$route.params.subcategoryName;
      this.get();
      this.getClassBasic();
    },
    beforeRouteLeave(to, from, next) {
      // 이전 페이지로 이동할 때 데이터를 전달
      to.params.subcategoryId = this.subcategoryId;
      to.params.subcategoryName = this.subcategoryName;
      to.params.categoryName = this.categoryName;
      to.params.categoryId = this.categoryId;
      next();
    }
  };
  </script>
  
  <style scoped>
  /* 필요한 스타일을 추가하세요 */
  .container{
    display: grid;
    margin-left: 15%;
  margin-right: 15%;
    grid-template-columns: 1fr 4fr;
    height: 100vh; /* 부모 요소가 화면 전체 높이를 가득 채우도록 설정 */
    row-gap: 1rem;
    column-gap: 1rem;
  }
  .item{
    width: 100%;
    height: 100%;
  }
.sidebar{
  @media (max-width: 600px) {   
    .container {    
        grid-template-columns: 1fr;    
        grid-template-areas:     
           "header"     
           "side-bar"     
           "main"     
           "footer";   
  }}
}
.category_menu{
  grid-row: 1/5;
	/* grid-row: 1 / 2; */
}
.popular_class{
  grid-row: 5/11;
}
.subcategory_menu{
  grid-row: 1;
  grid-column: 2/4;
}
.class_card{
  grid-row: 2/10;
  grid-column: 2/4;
}
.class_menu{
  grid-row: 10/11;
  grid-column: 2/4;
}
  </style>