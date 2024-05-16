<template>
  <div class="container">
    <section class="bg-light text-dark header-inner" data-jarallax data-speed="0.2" data-overlay>
      <div class="row title_section" data-aos="fade-up">
        <p class="col-12" @click="gotoAllCategories" style="color: darkgrey; font-size: 1.2rem" >전체과정  > {{ this.subcategoryName }}</p>
        <h2 style="text-align: center; align-items: center;">{{ classDetailData.title }}</h2>
      </div>
    </section>
    <section>
        <div class="row text-center" style="display: inline-flex;">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <h3>📆</h3>
            <h4>교육기간</h4>
            <h5>{{ classDetailData.duration }}</h5>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <h3>🖥️</h3>
            <h4>기술스택</h4>
            <h5>{{ classDetailData.environment }}</h5>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <h3>✏️</h3>
            <h4>난이도</h4>
            <h5>{{ getLevel(classDetailData.level) }}</h5>
          </div>
        </div>
    </section>
    <section style="background-color: cornsilk; padding: 3rem; padding-left: 5rem; padding-right: 5rem;  border-radius: 2rem;">
      <h5>{{ classDetailData.description }}</h5>
      <!-- <h5>{{ formatTextWithLineBreaks(classDetailData.description) }}</h5> -->
    </section>
    <section >
      <h4>📒 학습대상</h4>      
      <h5
        v-html="formatTextWithLineBreaks(classDetailData.target)"
        style="line-height: 3rem;"
      >
      </h5>
    </section>
    <section style="background-color: beige; padding: 2rem;">
      <table>
        <thead style="margin: 2rem;">
          <tr>
            <th><h5>순서</h5></th>
            <th><h5>제목</h5></th>
            <th><h5>설명</h5></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(curriculum, sequenceNum) in data" :key="sequenceNum">
            <td class="col-1"><h5>{{ curriculum.sequenceNum }}</h5></td>
            <td class="col-5" style=""><h5>{{ curriculum.title }}</h5></td>
            <td class="col-6" style="text-align: left;">
              <h5 v-html="formatTextWithLineBreaks(curriculum.description)"></h5>
            </td>
          </tr>
         </tbody>
      </table>
    </section>
  </div>
</template>
  
 <script>
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
  
  <style>
  /* 필요한 스타일을 추가하세요 */
  .description p {
  white-space: pre-line;
}
  </style>