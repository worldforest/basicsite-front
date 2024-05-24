<template>
    <section>
        <div id="app">
            <table>
                <thead>
                    <tr>
                        <th>일차</th>
                        <th>목차</th>
                        <th>주요 내용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="curriculum in curriculumData" :key="curriculum.sequenceNum">
                        <td style="width: 2.8rem;">{{ curriculum.sequenceNum }}</td>
                        <td style="width: rem;">{{ curriculum.title }}</td>
                        <td>{{ curriculum.description }}</td>
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
    return{
        curriculumData: [],
    };
    },
    created() {
    },
    computed:{
    },
    methods: {
        getCurriculum(){
                this.axios.get(`curriculum?classId=${this.$store.getters.getJaenClassId}`).then((response) => {
                    this.curriculumData = response.data;
                }).catch((error)=>{
                    console.error('Error fetching data: ',error)
                });
        },
    },
    mounted(){
        this.getCurriculum();
    },
};
</script>

<style scoped>
/* 필요한 스타일을 추가하세요 */
</style>