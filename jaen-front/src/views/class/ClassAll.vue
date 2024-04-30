<template>
<div class="container">
  <div class="">
    <div class="row justify-content-center text-center">
        <h2 class="mb-5">{{ categoryName }}교육과정 전체 강의 목록페이지</h2>
    </div>
  </div>
  <div>
    <div class="row justify-content-center text-center mb-4">
      <ul data-isotope-filters data-isotope-id="projects" class="nav mb-3">
        <li class="nav-item">
          <a href="#" class="nav-link active" data-filter="*">All</a>
        </li>
        <li class="nav-item" v-for="subcategory in subcategories" :key="subcategory.subcategoryId">
          <a href="#" class="nav-link" data-filter="Branding">{{subcategory.name}}</a>
        </li>
      </ul>
    </div>
    
    
    <div class="container" style="text-align: center;">
      <div v-if="data.subcategoryId !== this.subcategoryId">{{ data.subcategoryId }}</div>
      <div v-for="(item) in data" :key="item.index" class="item" @click="gotoDetail(item.index)">
        <div>
          <img :src="require(`@/assets/img/class/${item.categoryId}-${item.subcategoryId}.jpg`)" alt="class image">
          <div style="padding: 0.8rem;">
              <div class="title">{{ item.title }}</div>
              <div class="level">level : {{ getLevel(item.level) }}</div>
              <div>{{ item.duration }}</div>
          </div>
        </div>
            <!-- <div>{{ item.environment }}</div>
            <div>{{ item.target }}</div>
            <div>{{ item.background }}</div>
            <div>{{ item.goal }}</div>
            <div>{{ item.technologyStack }}</div> -->
        </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: "ClassAll",
    data() {
        return {
            //data 초기화
            data:[],
            subcategories: [],
            subcategoryId: null,
            subcategoryName: null,
            categoryName: null,
            categoryId: null,
            // level: null
        } ;
    },
    created(){
    },
    methods: {
        get(){
            this.axios.get(`class/category?categoryId=${this.categoryId}`).then((response) => {
                this.data = response.data;
                // this.level = response.data.level;
            }).catch((error)=>{
                console.error('Error fetching data: ',error)
            });
        },
        getSubcategories(){
          this.axios.get(`subcategory?categoryId=${this.categoryId}`).then((response) => {
                this.subcategories = response.data;
                // this.level = response.data.level;
            }).catch((error)=>{
                console.error('Error fetching data: ',error)
            });
        },
        gotoDetail(classId){
          this.$router.push(
          {
            name:'ClassDetail',
            params:{
              classId: classId
            }
          });
        },
        gotoAllCategories(){
            this.$router.push({name:'AllCategories'});
        },
        getLevel(level){
          let description;
          switch(level) {
            case 1:
                description = "초급";
                break;
            case 2:
                description = "중급";
                break;
            case 3:
                description = "고급";
                break;
            default:
                description = "알 수 없음";
                break;
          }
          return description;
        }
    },
    mounted(){
      // 화면이 로드되자마자
    //   this.subcategoryName= this.$route.params.subcategoryName;
    //   this.subcategoryId = this.$route.params.subcategoryId;
      this.categoryName = this.$route.params.categoryName;
      this.categoryId = this.$route.params.categoryId;
      this.get();
      this.getSubcategories();
    },
    beforeRouteLeave(to, from, next) {
      // 이전 페이지로 이동할 때 데이터를 전달
      to.params.myData = this.myData;
      next();
    }
  
};
</script>
<style>
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: calc(33.33% - 10px); /* Adjust width as needed */
  margin: 0 5px;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.title, .level, .category {
  margin-bottom: 5px;
}

.title {
  font-weight: bold;
}
</style>