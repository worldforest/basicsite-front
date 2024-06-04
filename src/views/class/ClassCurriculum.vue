<template>
  <section>
    <div id="app">
      <table>
        <thead>
          <tr>
            <th class="day-th" >일차</th>
            <th class="index-th">목차</th>
            <th class="content-th">주요 내용</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="curriculum in curriculumData" :key="curriculum.sequenceNum">
            <td class="day-td" style="width: 5px;">{{ curriculum.sequenceNum }}일차</td>
            <td class="index-td">{{ curriculum.title }}</td>
            <td class="content-td" style="text-align: left;">{{ curriculum.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
// import {  mapActions, mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      curriculumData: [],
    };
  },
  created() {},
  computed: {
    classId(){
      return this.$store.getters.getClassId;
    },
  },
  watch:{
    classId(){
      this.getCurriculum();
    }
  }, 
  methods: {
    getCurriculum() {
      this.axios
        .get(`curriculum?classId=${this.classId}`)
        .then((response) => {
          console.log("getCurriculum ",response);
          this.curriculumData = response.data;
          console.log("getCurriculum curriculumData",this.curriculumData);
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
        });
    },
  },
  mounted() {
    this.getCurriculum();
  },
};
</script>

<style scoped>
/* 필요한 스타일을 추가하세요 */

table {
  border: 1px solid #dee2e6;
}

tr:nth-child(even) {
  background-color: #fff;
}
tr:nth-child(odd) {
  background-color: #f2f2f2;
}
th {
  background-color: #fff;
  color: black;
  text-align: center;
  padding: 15px;
}
td {
  padding: 15px;
}

.table td, .table th {
    padding: .75rem;
}

.day-th {
  width: 6vw;
  height: 45px;
}
.index-th {
  width: 15vw;
  height: 45px;
}

</style>
