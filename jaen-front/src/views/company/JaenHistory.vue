<template>
  <section class="bg-light text-dark p-0 jarallax" data-jarallax data-speed="2" data-overlay>
    <div class="title_section" data-aos="fade-up">
      <h2>자앤의 연혁</h2>
    </div>
  </section>
  <div class="container">
    <section class="row history-section" style="flex-wrap: nowrap;">
      <div class="vertical-tabs col-sm-2" style="display: inline;">
        <div class="tab-list">
          <div
            v-for="year in groupedYear"
            :key="year"
            @click="activeTab = year"
            :class="{ active: activeTab === year }"
          >
            <span>{{ year }}</span>
          </div>
        </div>
      </div>
      <div class="table-div">
        <table class="history-table">
          <thead class="history-thead">
            <td style="text-align: left">회사명</td>
            <td></td>
            <td>강의명</td>
          </thead>
          <tbody>
            <tr v-for="(lecture, index) in groupedData[activeTab]" :key="lecture.index">
              <td style="text-align: left">
                <span v-if="index === 0 || lecture.companyname !== groupedData[activeTab][index - 1].companyname">
                  {{ lecture.companyname }}
                </span>
              </td>
              <td style="width: 6vw;"></td>
              <td style="text-align: right">
                {{ lecture.classname }}
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'JaenHistory',
  data() {
    return {
      //data 초기화
      data: [],
      // selectedYear: 2024, // 선택된 연도를 저장할 변수
      activeTab: '2024', // 현재 활성화된 탭의 인덱스
      years: [],
    };
  },
  computed: {
    // 년도별로 강의 그룹화
    groupedData() {
      const grouped = {};
      this.data.forEach((lecture) => {
        const year = lecture.year; // Assuming there's a 'year' property in lecture object
        if (!grouped[year]) {
          grouped[year] = [];
        }
        // 강의 오래된 순 정렬
        grouped[year].push(lecture);
        // 강의 최신순 정렬
        // grouped[year].unshift(lecture);
      });
      return grouped;
    },
    groupedYear() {
      const years = [];
      // var idx = 0;
      this.data.forEach((lecture) => {
        const year = lecture.year; // Assuming there's a 'year' property in lecture object
        if (!years.includes(year)) {
          years.push(year);
          // console.log('groupedData year', this.years[idx]);
        }
      });
      return years.reverse();
    },
  },
  methods: {
    get() {
      // 데이터를 가져오는 비동기 함수
      this.axios.get('/history').then((response) => {
        this.data = response.data;
        // console.log(this.data);
      });
    },
    selectYear(year) {
      this.selectedYear = year;
    },
    // reversedGroupedData() {
    //   console.log(this.grouped)
    //   const reversegrouped = this.grouped.reverse();
    //   return reversegrouped;
    // },
  },
  mounted() {
    // 화면이 로드되자마자
    this.get();
  },
};
</script>

<style scoped>
.active {
  background-color: beige;
  font-weight: bold; /* 선택된 탭 스타일*/
  cursor: pointer; /*마우스 오버 시 커서 스타일*/
}
.history {
  /* display: grid; */
  justify-content: center; /* Align the content horizontally at the center */
  text-align: center;
}
/* 각 탭의 스타일 */
.tab {
  padding: 10px 20px; /* Add padding */
  cursor: pointer;
  background-color: #f0f0f0; /* Set background color */
  border-top-left-radius: 5px; /* Rounded corners */
  border-top-right-radius: 5px;
}
.tab:not(:last-child) {
  margin-right: 5px; /* Add some spacing between tabs */
}

.vertical-tabs {
  display: flex;
  font-size: 1.3rem;
}

.tab-list {
  display: flex;
  flex-direction: column;
}

.tab.active {
  font-weight: bold;
}

.tab-content {
  margin-left: 20px;
  width: 600px;
}

.history-section {
  justify-content: space-evenly;
}
.history-table {
  width: 40vw;
}
.history-thead{
  font-weight: bold;
  font-size: large;
}
</style>
