<template>
    <div class="row widgets">
        <div class="col-lg-12">
            <div class="single-widget widget-categories">
                <h4 class="widget-title">
                    <span> 교육과정 </span>
                </h4>
                <!-- <div class="categories-name"  v-for="(category, index) in categories" :key="index"> -->
                
                    <ul>
                        <li v-for="(category, index) in categories" :key="index">
                            <span class="mb-1 categories-name" style="cursor: pointer;" @click="gotoClassAll(category.name, category.categoryId)">{{ category.name }}</span>
                        </li>
                    </ul>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            categories:[],
            selectedValue:''
        }
    },methods: {
        getCategory() {
            // 대분류 카테고리 가져오는 비동기 함수
            this.axios.get("/categories").then((response) => {
                this.categories = response.data;
            });
        },
        gotoClassAll(categoryName, categoryId){
            console.log("from Sidebar categoryId :"+categoryId)
            this.selectedValue= categoryId;
            // this.$router.push({name:'ClassAll', params: {categoryName, categoryId}});
            // this.refreshPage(categoryName, categoryId);
        },
    },
    created() {
    // URL 파라미터에서 값을 가져와서 selectedValue에 설정합니다.
        const { categoryId } = this.$route.params;
        if (categoryId) {
        this.selectedValue = categoryId;
        }
    },
    mounted(){
        // 화면이 로드되자마자
        this.getCategory();
    },
};
</script>

<style>
ul {
  list-style-type: none; /* 앞에 표시 없음 */
  font-size: 1.2rem;
}
</style>
