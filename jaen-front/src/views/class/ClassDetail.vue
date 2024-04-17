<template>
  <div class="container">
    <div>
    <h2>강의 상세 페이지</h2>

    <div>
      <thead>
        <tr>
          <th>과정 소개</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {{ classDetailData.title }}
        </tr>
      </tbody>
    </div>

    <div>
      <thead>
        <tr>
          <th>과정 요약</th>
          <th>학습 목표</th>
        </tr>
      </thead>
      <tbody>
        <td>
          <tr>과정명 : {{ classDetailData.title }}</tr>
          <tr>교육기간 : {{ classDetailData.duration }}</tr>
          <tr>실습환경 : {{ classDetailData.environment }}</tr>
          <tr>난이도 : {{ classDetailData.level }}</tr>
      </td>
      <td class="description">
        <tr>
          <p>{{ classDetailData.goal }}</p>
        </tr>
      </td>
      </tbody>
    </div>

    <div class="description">
      <thead>
        <tr>
          <th>학습대상</th>
        </tr>
      </thead>
      <tbody>
        <p>{{classDetailData.target}}</p>
      </tbody>
    </div>
    <div>
      <thead>
        <tr>
          <th>선수지식</th>
          <th>기술스택</th>
        </tr>
      </thead>
      <tbody>
        <td>
          <tr>{{ classDetailData.background }}</tr>
          </td>
          <td>
          <tr>{{ classDetailData.technology_stack }}</tr>
        </td>
      </tbody>
    </div>

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
          <td>{{ curriculum.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
      this.classId = this.$route.params.classId;
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
    },
    mounted(){
      this.get();
      this.getClassBasic();
    }
  };
  </script>
  
  <style>
  /* 필요한 스타일을 추가하세요 */
  .description p {
  white-space: pre-line;
}
  </style>