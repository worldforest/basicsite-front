<template>
<div class="history">
    <h2>연혁</h2>
    <!-- <h5>{{ historyAll }}</h5> -->
    <!-- <div id="getHistory"> -->
        <div v-for="(group, year) in groupedHistory" :key="year">
            <h3>{{ year }}</h3>
            <table>
                <thead>
                <tr>
                    <th>회사명</th>
                    <th>강의명</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in group" :key="index">
                    <td>{{ item.companyname }}</td>
                    <td>{{ item.classname }}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    <!-- </div> -->
</template>
  
<script>
export default {
    name: "JaenHistory",
    components: [],
    data() {
        return {
            //data 초기화
            historyAll:[],
        } ;
    },
    computed: {
        groupedHistory() {
        // 데이터를 년도별로 그룹화
        const grouped = {};
        this.historyAll.forEach(item => {
            if (!grouped[item.year]) {
            grouped[item.year] = [];
            }
            grouped[item.year].push(item);
        });
        return grouped;
        }
    },
    methods: {
        get(){
            this.axios.get("/jaen").then((response) => {
                this.historyAll = response.data;
            });
        },
        getBackEndGo(i){
            let url  = process.env.VUE_APP_baseApiURL + '/jaen/' + i;
            console.log(url);
            this.axios.get(url)
            .then(function (response) {
                let result = response.data;
                console.log(result);
                return alert(result)
            })
            .catch(function (ex) { 
                console.log('getBackEndGo 실패', ex); 
            });
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
</style>