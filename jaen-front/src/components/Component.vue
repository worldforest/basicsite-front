<template>
    <div>
      <a @click="setCategoryId(categoryId)">Go to Class All</a>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  export default {
    props: {
      categoryId: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const store = useStore();
      const router = useRouter();
  
      const setCategoryId = (id) => {
        store.dispatch('updateCategoryId', id);
        router.push('/class_all');
      };
  
      return {
        setCategoryId
      };
    }
  }
  </script>