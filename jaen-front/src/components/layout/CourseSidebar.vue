<template>
    <div class="row widgets">
        <div class="col-xl-12 col-sm-6">
            <div class="single-widget widget-categories">
                <h4 class="widget-title">
                    <span @click="goToAllCategories()"> 교육과정 </span>
                </h4>
                <ul>
                    <li v-for="(category, index) in categories" :key="index">
                        <span class="mb-1 categories-name" style="cursor: pointer;" @click="gotoClassAll(category.categoryId, category.name)">{{ category.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    <!-- </div>
    <div class="row widgets"> -->
        <div class="col-xl-12 col-sm-6">
            <div class="single-widget widget-categories">
                <h4 class="widget-title">
                    <span> 인기과정 </span>
                </h4>
                <ul>
                    <li v-for="item in popularClass" :key="item.index" class="row row-tight" style="text-align: left; font-size: 1.2rem;" @click="gotoDetail(item.index, item.subcategoryId)">
                        <p class="mb-1" style="font-size: 1rem;">{{ item.title }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            categories:[],
            popularClass: [],
        }
    },
    computed:{
        // getCategoryData(){
        //     var categoryData = [];
        //     categoryData = this.$store.getters.getCategoryData;
        //     return categoryData
        // }
        getCategoryId(){
            return this.$store.getters.getCategoryId;
        },
        getCategoryName(){
            return this.$store.getters.getCategoryName;
        }
    }
    ,methods: {
        getCategory() {
            // 대분류 카테고리 가져오는 비동기 함수
            this.axios.get("/categories").then((response) => {
                this.categories = response.data;
            });
        },
        gotoClassAll(categoryId, categoryName){
            this.$router.push({name:'ClassAll', params: { categoryId: this.getCategoryId, categoryName:this.getCategoryName}});
            // vuex의 action 호출할 때 $store의 dispatch 호출
            console.error('sidebar gotoClassAll: ',categoryId);
            this.$store.dispatch('setCategory', {
                payload:{
                    categoryId: categoryId,
                    categoryName: categoryName
                }
            })
        },
        goToAllCategories(){
           this.$router.push('/categories');
        },
        getPopularClass(){
          // 인기있는 강좌 조회
          this.axios.get("/ispopular").then((response) => {
                this.popularClass = response.data;
            });
        },
        gotoDetail(classId, subcategoryId){
          this.subcategoryId = subcategoryId;
          this.$router.push(
          {
            name:'ClassDetail',
            params:{
              classId: classId,
              subcategoryId: this.subcategoryId
            }
          });
        },
    },
    created() {
        this.categoryId = this.getCategoryData
    },
    mounted(){
        // 화면이 로드되자마자
        this.getCategory();
        this.getPopularClass();
    },
};
</script>

<style scoped>
ul {
  font-size: 1.2rem;
}
</style>
