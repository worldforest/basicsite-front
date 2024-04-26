<template>
<div class="container">
    <h3 class="">{{ categoryName }}교육과정 전체 강의 목록페이지입니다.</h3><br>
    <h4 class="">{{ subcategoryName }}</h4>

    <div class="container" style="text-align: center;">
        <div v-for="(item) in data" :key="item.index" class="item" @click="gotoDetail(item.index)">
            <img :src="require(`@/assets/img/class/${item.categoryId}-${item.subcategoryId}.jpg`)" alt="class image">
            <div style="padding: 0.8rem;">
                <div class="title">{{ item.title }}</div>
                <div class="level">level : {{ getLevel(item.level) }}</div>
                <div>{{ item.duration }}</div>
            </div>
            <!-- <div>{{ item.environment }}</div>
            <div>{{ item.target }}</div>
            <div>{{ item.background }}</div>
            <div>{{ item.goal }}</div>
            <div>{{ item.technologyStack }}</div> -->
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
    },
  
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