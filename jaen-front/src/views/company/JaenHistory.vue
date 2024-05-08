<template>
  <div class="contatiner">
    <section class="bg-light text-dark header-inner" data-jarallax data-speed="2" data-overlay>
            <div class="row" data-aos="fade-up" style="padding: 5rem; display: inline-flex; text-align: center;">
                <h2>자앤의 연혁</h2>
            </div>
        </section>
  </div>
<div class="history">
    <h2>연혁</h2>
    <!-- 연도별 탭 -->
    <div class="tab-container">
      <div
        v-for="(lectures, year) in groupedData"
        :key="year"
        @click="selectYear(year)"
        :class="{ tab: true, active: selectedYear === year }"
      >
        <span>{{ year }}</span>
        </div>
    </div>
    <div class="tab">
        <thead>
            <tr>
                <th>회사명</th>
                <th>강의명</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(lecture, index) in processedData[selectedYear]" :key="index">
            <td v-if="index === 0 || lecture.companyname !== processedData[selectedYear][index - 1].companyname">
              {{ lecture.companyname }}
            </td>
            <td v-else>&nbsp;</td>
            <td class="left-align">{{ lecture.classname }}</td>
          </tr>
        </tbody>
        <!-- <tbody>
            <tr v-for="lecture in groupedData[selectedYear]" :key="lecture.index">
                <td>{{ lecture.companyname }}</td>
                <td class="left-align">{{ lecture.classname }}</td>
            </tr>
        </tbody> -->
        <!-- <table v-if="selectedYear">
            <tr v-for="lecture in lectures" :key="lecture.index">
                <td>{{ lecture.companyname }}</td>
                <td>{{ lecture.classname }}</td>
            </tr>
        </table> -->
    </div>
  </div>
</template>
  
<script>
export default {
    name: "JaenHistory",
    // components: [],
    data() {
        return {
            //data 초기화
            data:[],
            selectedYear: 2024 // 선택된 연도를 저장할 변수
        } ;
    },
    computed: {
         // Group data by year
        groupedData() {
            const grouped = {};
            this.data.forEach(lecture => {
                const year = lecture.year; // Assuming there's a 'year' property in lecture object
                if (!grouped[year]) {
                grouped[year] = [];
                }
                grouped[year].push(lecture);
            });
            return grouped;
        },
        processedData() {
        const processed = {};
        for (const year in this.groupedData) {
            processed[year] = [];
            const seenCompanies = new Set();
            this.groupedData[year].forEach(lecture => {
            if (!seenCompanies.has(lecture.companyname)) {
                processed[year].push(lecture);
                seenCompanies.add(lecture.companyname);
            } else {
                processed[year].push({ companyname: "", classname: lecture.classname });
            }
            });
        }
        return processed;
        },
    },
    methods: {
        get() {
            // 데이터를 가져오는 비동기 함수
            this.axios.get("/history").then((response) => {
                this.data = response.data;
            });
        },
        selectYear(year){
            this.selectedYear=year;
        }
    },
    mounted(){
        // 화면이 로드되자마자
        this.get();
    },
};
</script>

<style>
/* 필요한 스타일을 추가하세요 */
.active {
  font-weight: bold; /* 선택된 탭 스타일*/
  cursor: pointer; /*마우스 오버 시 커서 스타일*/
}
.history{
    display: grid;
    justify-content: center; /* Align the content horizontally at the center */
    
}
/* 탭 컨테이너의 스타일 */
.tab-container {
  display: flex;
  border-bottom: 1px solid #ccc; /* Add a bottom border */
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
.tab span {
  color: #333; /* Text color */
}

.tab.active span {
  color: #000; /* Text color for active tab */
  font-weight: bold; /* Bold font for tab text */

}
.left-align {
  text-align: left; /* Align lecture names to the left */
}
</style>