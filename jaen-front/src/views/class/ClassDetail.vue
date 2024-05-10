<template>
  <div class="container">
    <section class="bg-light text-dark header-inner" data-jarallax data-speed="0.2" data-overlay>
      <div class="row title_section" data-aos="fade-up">
        <h2>{{ classDetailData.title }}</h2>
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
    <section style="background-color: cornsilk; padding: 3rem;">
      <h5>{{ formatTextWithLineBreaks(classDetailData.description) }}</h5>
    </section>
    <section class="row">
      <h4 class="col">📒 학습대상</h4>
      <!-- <p v-html="formatTextWithLineBreaks(classDetailData.target)"></p> -->
      <!-- <p v-html="formatTextWithLineBreaks(classDetailData.target)"></p> -->
      <h5 class="col" style="width: 80%; text-align: center; justify-content: center; align-items: center;">{{ classDetailData.target }}</h5>
    </section>
    <table>
      <thead>
        <tr>
          <th>순서</th>
          <th>제목</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(curriculum, sequenceNum) in data" :key="sequenceNum">
          <td>{{ curriculum.sequenceNum }}</td>
          <td>{{ curriculum.title }}</td>
          <td>
            <p v-html="formatTextWithLineBreaks(curriculum.description)"></p>
          </td>
        </tr>
       </tbody>
        </table>

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