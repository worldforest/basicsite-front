<template>
<div>
    <h3>교육과정 전체 페이지입니다.</h3>
    <div>
    <span>{{ subcategoryId }}</span>
    <div class="container">
    <div v-for="(item, index) in data" :key="index" class="item">
      <div class="title">{{ item.title }}</div>
      <div class="level">level : {{ item.level }}</div>
      <div class="category">{{ item.category }}</div>
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
            subcategoryId: null
        } ;
    },
    created(){
        this.subcategoryId = this.$route.params.subcategoryId;
    },
    methods: {
        get(){
            this.axios.get(`class/subcategory?subcategoryId=${this.subcategoryId}`).then((response) => {
                this.data = response.data;
            }).catch((error)=>{
                console.error('Error fetching data: ',error)
            });
        },
    },
    mounted(){
        // 화면이 로드되자마자
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
