<template>
  <div id="app" ref="app">
    <!-- <header> -->
    <header class="header" :class="{ 'header-visible': isHeaderVisible }">
      <JaenHeader />
    </header>
    <div id="content" ref="content">
      <router-view></router-view>
    </div>
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
      isHeaderVisible: true, // 헤더의 가시성 상태
      // contentMaxHeight: null // content의 최대 높이
    }
  },
  mounted() {
  //   console.log("mounted 오나?")
    this.$refs.content.addEventListener('scroll', this.handleScroll);
   },
  //  beforeUnmount() {
  //   this.$refs.content.removeEventListener('scroll', this.handleScroll);
  // },
   methods: {
    handleScroll() {
      // 스크롤이 제일 아래로 내려오면 푸터를 보이게 합니다.
      const content = this.$refs.content;
      const footer = this.$refs.footer.$el; // Accessing the DOM element of the footer
      console.log("content")
      console.log(footer)
      if (content.scrollTop + content.clientHeight >= content.scrollHeight) {
        footer.style.display = 'block';
      } else {
        footer.style.display = 'none';
      }
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  max-height: 100vh; /* 컨테이너 높이를 브라우저 높이의 최대치로 설정 */
  overflow-y: auto; /* 세로 스크롤이 필요한 경우에만 스크롤 표시 */
  overflow-x: hidden; /* 가로 스크롤을 숨김 */
}
</style>
<style src="@/assets/css/theme.css"></style>
<style src="@/assets/css/custom.css"></style>