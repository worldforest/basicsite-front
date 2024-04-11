<template>
<div>
    <h3>교육과정 전체 페이지입니다.</h3>
</div>
</template>
<script>
export default {
    name: "AllCategories",
    data() {
        return {
            //data 초기화
            data:[],
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
            this.axios.get("/jaen").then((response) => {
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