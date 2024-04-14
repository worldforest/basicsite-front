<template>
    <div>
      <h2>강의 상세 페이지</h2>

      <span>{{ classDetailData.title }}</span>

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
      this.classDetailData = this.$route.params.objectParam.map(item => {
        return {
          title: item.title
        }

      });
    },
    methods: {
      get(){
        this.axios.get(`curriculum?classId=${this.classId}`).then((response) => {
          this.data = response.data;
        }).catch((error) => {
          console.error('Error fetching data: ',error);
        });
      },
    },
    mounted(){
      this.get();
      console.log(this.$route.params.objectParam);
    }
  };
  </script>
  
  <style>
  /* 필요한 스타일을 추가하세요 */
  </style>