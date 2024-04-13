<template>
    <div>
        <h3>교육과정 중분류 전체 페이지입니다.</h3>
        <div>
           <span>대분류 : </span> {{ categoryName }}
        </div>
        <div v-for="(subcategory, index) in data" :key="index">
            <div
                @click="selectSubCategory(subcategory.subcategory_id)"
            >{{subcategory.name}}</div>
        </div>
    </div>
    </template>
<script>
    export default {
    name: "AllCategories",
    data() {
        return {
            //data 초기화
            data:[],
            categoryId: null,
            categoryName: null
        } ;
    },
    created(){
        this.categoryName = this.$route.params.categoryName;
        this.categoryId = this.$route.params.categoryId;
        this.get();
    },
    methods: {
        get() {
            // 데이터를 가져오는 비동기 함수
            this.axios.get(`/subcategory?categoryId=${this.categoryId}`).then((response) => {
                this.data = response.data;
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        },
        selectSubCategory(subcategoryId){
            this.$router.push({name:'ClassAll', params: {subcategoryId}});
        }
    },
    mounted(){
        // 화면이 로드되자마자
        this.get();
    },
    };
</script>