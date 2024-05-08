<template>
  <div class="container">
    <section class="bg-light text-dark header-inner" data-jarallax data-speed="0.2" data-overlay>
      <div class="row" data-aos="fade-up" style="padding: 5rem; display: inline-flex; text-align: center;">
        <h2>{{ classDetailData.title }}</h2>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col-xl-4 col-sm-6">
          <h6>📆</h6>
          <h6>교육기간</h6>
          <h6>{{ classDetailData.duration }}</h6>
        </div>
        <div class="col-xl-4 col-sm-6">
          <h6>🖥️</h6>
          <h6>실습환경</h6>
          <h6>{{ classDetailData.environment }}</h6>
        </div>
        <div class="col-xl-4 col-sm-6">
          <h6>✏️</h6>
          <h6>난이도</h6>
          <h6>{{ getLevel(classDetailData.level) }}</h6>
        </div>
      </div>
    </section>
  </div>
</template>
  
 <script>
  export default {
    data() {
      return{
        data: [],
        classId: null,
        classDetailData: []
      };
    },
    created() {
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
          return text.replace(/\n/g, "<br>");
          // return text.split('\n').join('<br>');
        }
    },
    mounted(){
      this.classId = this.$route.params.classId;
      console.log("classId: "+this.$route.params.classId)
      this.get();
      this.getClassBasic();
    },
    beforeRouteLeave(to, from, next) {
      // 이전 페이지로 이동할 때 데이터를 전달
      to.params.subcategoryId = this.subcategoryId;
      to.params.subcategoryName = this.subcategoryName;
      to.params.categoryName = this.categoryName;
      to.params.categoryId = this.categoryId;
      console.log("detail에서 All로 보내는: "+to.params.categoryId)
      next();
    }
  };
  </script>
  
  <style>
  /* 필요한 스타일을 추가하세요 */
  .description p {
  white-space: pre-line;
}
  </style>