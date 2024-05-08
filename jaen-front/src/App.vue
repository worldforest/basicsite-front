<template>
  <div id="app" ref="app">
    <!-- <header> -->
    <header class="header">
      <JaenHeader />
    </header>
    <section id="content" ref="content">
      <router-view></router-view>
    </section>
    <JaenFooter />
    <!-- 가장 아래에서 위로 올라가기 -->
    <!-- <a href="#" class="btn back-to-top btn-primary btn-round" data-smooth-scroll  data-aos-once="false">
      <img class="icon" src="@/assets/img/icons/theme/navigation/arrow-up.svg" alt="arrow-up icon" data-inject-svg />
    </a> -->
  </div>
</template>

<script>
import JaenHeader from '@/components/layout/JaenHeader.vue'
import JaenFooter from '@/components/layout/JaenFooter.vue'

export default {
  name: 'App',
  components: {
    JaenHeader,
    JaenFooter,
  },
  data(){
    return{
    }
  },
  mounted() {
  //   console.log("mounted 오나?")
    this.$refs.content.addEventListener('scroll', this.handleScroll);
   },
   methods: {
  
  }
}
</script>
<style>
#app {
  width: 100%;
  max-height: 100vh; /* 컨테이너 높이를 브라우저 높이의 최대치로 설정 */
  overflow-y: scroll;
  /* 세로 스크롤이 필요한 경우에만 스크롤 표시 */
  /* overflow-x: hidden;  */
  /* 가로 스크롤을 숨김 */
}
</style>
<style src="@/assets/css/theme.css"></style>
<style src="@/assets/css/custom.css"></style>