<template>
<div class="history">
    <h2>연혁</h2>
    <!-- 연도별 탭 -->
    <div class="tab-container">
        <div v-for="(group, year) in historyAll" :key="year" @click="selectYear(year)" :class="{ 'active': selectedYear === year }" class="tab">
            <h3>{{ year }}</h3>
        </div>
    </div>
    <!-- 선택된 연도의 데이터 표시 -->
    <div>
        <table v-if="selectedYear === year">
            <thead>
                <tr>
                    <th>회사명</th>
                    <th>강의명</th>
                </tr>
            </thead>
            <tbody>
                <!-- 선택된 연도에 해당하는 데이터만 표시 -->
                <tr v-for="(item, index) in selectedGroup" :key="index">
                    <td>{{ item.companyname }}</td>
                    <!-- <td v-if="index === 0">{{ item.companyname }}</td>
                    <td v-else-if="index > 0 && item.companyname !== selectedGroup[index - 1].companyname">{{ item.companyname }}</td>
                    <td v-else></td> 중복된 경우에는 빈 셀을 출력 -->
                    <td>{{ item.classname }}</td>
                </tr>
            </tbody>
        </table>
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
            historyAll:[],
            groupedHistory: {}, // 연도별로 그룹화된 데이터
            selectedYear: null // 선택된 연도를 저장할 변수
        } ;
    },
    computed: {
        selectedGroup() {
            return this.groupedHistory[this.selectedYear] || [];
        }
    },
    methods: {
        get() {
            // 데이터를 가져오는 비동기 함수
            this.axios.get("/jaen").then((response) => {
                this.historyAll = response.data;
  
                // 연도별로 그룹화하여 groupedHistory에 저장
                this.groupedHistory = this.groupDataByYear(this.historyAll);
                // 기본적으로 첫 번째 연도를 선택
                if (Object.keys(this.groupedHistory).length > 0) {
                    this.selectedYear = Object.keys(this.groupedHistory)[0];
                }
            });
        },
        groupDataByYear(data) {
            // 연도별로 데이터를 그룹화하는 함수
            const grouped = {};
            data.forEach((item) => {
                const year = item.year; // 연도를 추출합니다. 연도에 맞게 수정 필요
                if (!grouped[year]) {
                grouped[year] = [];
                }
                grouped[year].push(item);
            });
            return grouped;
        },
        selectYear(year) {
            // 탭을 클릭하면 선택된 연도를 업데이트합니다.
            this.selectedYear = year;
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
.active {
  font-weight: bold; /* 선택된 탭 스타일*/
  cursor: pointer; /*마우스 오버 시 커서 스타일*/
}
/* 탭 컨테이너의 스타일 */
.tab-container {
  display: flex;
}
/* 각 탭의 스타일 */
.tab {
  margin-right: 10px;
}
</style>