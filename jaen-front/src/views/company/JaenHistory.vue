<template>
  <div class="container">
    <section class="bg-light text-dark header-inner" data-jarallax data-speed="2" data-overlay>
        <div class="row title_section" data-aos="fade-up">
            <h2>자앤의 연혁</h2>
        </div>
    </section>
    <section>
      <div class="vertical-tabs">
        <!-- 탭 목록 -->
        <div class="tab-list">
          <div
          class="tab"
              v-for="(lectures, year) in groupedData"
              :key="year"
              @click="activeTab = year"
              :class="{ 'active': activeTab === year }"
            >
              <span>{{ year }}</span>
            </div>
        </div>
        <!-- 탭 내용(회사명 강의명) -->
        <div class="tab-content">
            <tbody>
                <tr v-for="lecture in groupedData[activeTab]" :key="lecture.index">
                    <td>{{ lecture.companyname }}</td>
                    <td class="left-align">{{ lecture.classname }}</td>
                </tr>
            </tbody>
            <table v-if="activeTab">
                <tr v-for="lecture in lectures" :key="lecture.index">
                    <td>{{ lecture.companyname }}</td>
                    <td>{{ lecture.classname }}</td>
                </tr>
            </table>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>
export default {
    name: "JaenHistory",
    data() {
        return {
            //data 초기화
            data:[],
            // selectedYear: 2024, // 선택된 연도를 저장할 변수
            activeTab: 2024, // 현재 활성화된 탭의 인덱스
    };
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
        },
        reversedGroupedData() {
          console.log(this.grouped)
          const reversegrouped = this.grouped.reverse();
          return reversegrouped;
        },
    },
    mounted(){
        // 화면이 로드되자마자
        this.get();
    },
};
</script>

<style>
/* 필요한 스타일을 추가하세요 */
.container {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content : center;
}
.active {
  font-weight: bold; /* 선택된 탭 스타일*/
  cursor: pointer; /*마우스 오버 시 커서 스타일*/
}
.history{
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
  width:600px;
}
</style>