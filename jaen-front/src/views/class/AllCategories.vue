<template>
<div>
    <h3>교육과정 대분류 전체 페이지입니다.</h3>
    <div
        v-for="(category, index) in data"
        :key="index"
        @click="selectCategory(category.name, category.category_id)"
        style="cursor: pointer;"
    >
        {{category.name}}
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
            categoryName: null
        } ;
    },
    methods: {
        get() {
            // 데이터를 가져오는 비동기 함수
            this.axios.get("/categories").then((response) => {
                this.data = response.data;
            });
        },
        selectCategory(categoryName, categoryId) {
            console.log(categoryId);
            // this.$emit("category-selected", categoryId); // Emit custom event with index
            this.$router.push({ name: 'SubCategories', params: { categoryId: categoryId, categoryName : categoryName } });
        },
    },
    mounted(){
        // 화면이 로드되자마자
        this.get();
    },
};
</script>