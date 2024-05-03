<template>
<div class="">
  <div class="contaner">
    <div class="row justify-content-center text-center" style="margin: 2rem;">
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
          <!-- <a class="nav-link" @click="getSubcategoryId(subcategory.subcategoryId)" >{{subcategory.name}}</a> -->
          <a class="nav-link" @click="showClass(subcategory.subcategoryId)" >{{subcategory.name}}</a>
        </li>
      </ul>
    </div>
    
    
    <div class="container" style="text-align: center;">
      <!-- <img src="@/assets/img/class/1-1.jpg">  -->
      <div v-for="(item) in data" :key="item.index" @click="gotoDetail(item.index)">
        <div class="classCard">
          <div class="classIamge">
            <img
              alt="class_image"  
              :src="require(`@/assets/img/class/${item.categoryId}-${item.subcategoryId}.jpg`)"
              style="height: 12rem;"
            >
          <div class="text-overlay">
            <h4>{{ item.title }}</h4>
          </div>
          </div>
          <div style="padding: 1.5rem;">
              <div class="title">{{ item.title }}</div>
              <div class="level">level : {{ getLevel(item.level) }}</div>
              <div>{{ item.duration }}</div>
          </div>
        </div>
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
            selectedCategory: -1, //1 ALL 2 subcategoryId
            zoomed: false
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
        },
        getSubcategoryId(subcategoryId){
          this.subcategoryId=subcategoryId;
        },
        showClass(selectedCategory){
          this.selectedCategory = selectedCategory
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
.classCard{
  margin: 1rem;
}
/* 강의 이미지 */
.classIamge{
  /* 이미지 안에 강의명 출력하기 위한 설정 */
  position: relative;
  display: inline-block;
  /* 마우스오버시 이미지 확대될 때 크기는 그대로 유지 */
  overflow: hidden;
  width: 300px;
  height: auto;
  background-color: rgba(0, 0, 0, 0.7);
}
.classIamge img{
  opacity: 0.7;
  /* background-color: rgba(0, 0, 0, 0.7); */
}
/* 강의 이미지 마우스오버시 확대 */
.classIamge img:hover {
  height: auto;
  transform: scale(1.2);
  transition: all 0.2s linear;
}
/* 이미지 안에 강의명 */
.text-overlay h4{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  /* background-color: rgba(255, 255, 255, 0.7); */
  /* padding: 10px; */
  /* border-radius: 5px; */
  text-align: center;
}
</style>