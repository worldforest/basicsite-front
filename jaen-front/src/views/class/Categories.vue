<template>
<div>
    <h3>전체 카테고리 페이지입니다.</h3>
    <div v-for="(category, category_id) in data" :key="category_id">
        <h5>{{category.category_id}} | {{category.name}}</h5>
    </div>
</div>
</template>
<script>
export default {
    name: "JaenClassAll",
    data(){
        return {
            data:[],
        }
    },
    methods:{
        get(){
            this.axios.get("/jaen/categories").then((response) => {
                this.data = response.data;
            });
        }
    },
    mounted(){
        this.get();
    }
}
</script>