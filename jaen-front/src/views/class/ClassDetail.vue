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
    <section style="height: max-content;">
    <div class="container" style="display: block;">
        <div class="row">
            <!-- 대분류 이동 사이드바 start -->
            <div class="col-xl-4">
            <CourseSidebar />
            </div>
            <!-- 대분류 이동 사이드바 end -->
            <div class="col-xl-8">
            <!-- <div class="row"> -->
                <!-- 세부 설명 -->
                <!-- <div class="col-lg-12" style="width: 100px;"> -->
                    <!-- <div class="row"> -->
                        <div class="" style="">
                            <div class="details-tabs-list">
                                <ul>
                                    <li class="active">
                                        <a
                                            class="active"
                                            href="#overview"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            교육 개요
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#instructor"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            교육 대상 및 효과
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#review"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            실습 환경
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#comment"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            교육 내용
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- courses-details start -->
                        <div class="col-lg-12">
                            <div
                                class="courses-details-tab-panel"
                            >
                                <!-- tab-contnt start -->
                                <div class="tab-content">
                                    <div
                                        class="tab-pane active"
                                        id="overview"
                                    >
                                        <div
                                            class="courses-details-cont"
                                        >
                                            <h5>교육 개요</h5>
                                            <p>{{ classDetailData.description }}</p>
                                        </div>
                                    </div>

                                    <div
                                        class="tab-pane"
                                        id="instructor"
                                    >
                                        <div
                                            class="courses-details-cont details-list mb--30"
                                        >
                                            <h5>교육 대상</h5>
                                            <ul>
                                                <li>
                                                    <i
                                                        class="zmdi zmdi-arrow-right"
                                                    ></i>
                                                    {{ classDetailData.target }}
                                                </li>
                                            </ul>
                                        </div>

                                        <div
                                            class="courses-details-cont details-list mt-30"
                                        >
                                            <h5>교육 효과</h5>
                                            <ul>
                                                <li>
                                                    <i
                                                        class="zmdi zmdi-arrow-right"
                                                    ></i>
                                                    {{ classDetailData.goal }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div
                                        class="tab-pane"
                                        id="review"
                                    >
                                        <div
                                            class="courses-details-cont"
                                        >
                                            <h5>실습 환경</h5>
                                            <p>
                                                {{ classDetailData.environment }}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="tab-pane"
                                        id="comment"
                                    >
                                        <div
                                            class="courses-details-cont"
                                        >
                                            <h5>교육 내용</h5>
                                            <p>
                                                {{ classDetailData.environment }}
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <!--// courses-details start -->
                    </div>
            </div>
        </div>
    </div>
  </section>
</template>
  
 <script>
 import CourseSidebar from '@/components/layout/CourseSidebar.vue';
// import {  mapActions, mapMutations, mapState } from 'vuex';
  export default {
    data() {
      return{
        data: [],
        classId: null,
        classDetailData: [],
        categoryId: null,
      };
    },
    created() {
    },
    computed:{
        getCategoryId(){
            return this.$store.getters.getCategoryId
        }
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
      gotoClassAll(categoryName, categoryId){
        this.$router.push({name:'ClassAll', params: {categoryName, categoryId}});
        // this.$router.push({name:'ClassAll', query: {categoryName : JSON.stringify(categoryName), categoryId : JSON.stringify(categoryId)}});
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
        },
        
    },
    mounted(){
      this.classId = this.$route.params.classId;
      this.categoryId = this.$route.params.categoryId;
      this.get();
      this.getClassBasic();
    },
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
.details-tabs-list{
    width: 100%;
    box-sizing: border-box;
    padding: 0.4rem;
    font-size: 1.2rem;
    /* display: inline-block; */
    /* margin-right: 0.8rem; */
    border: 1px solid #ccc;
    /* width: 900px; */
    /* border-radius: 5px; */
    /* width: auto; */
}
.details-tabs-list ul{
    /* 모든 요소 수평정렬 */
    display: flex;
    /* 수평 가운데 정렬 */
    justify-content: center;
    /* 수직 가운데 정렬 */
    align-items: center;
}
.details-tabs-list ul li{
    flex: 1;
}
  </style>