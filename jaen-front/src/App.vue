<template>
  <div id="app" ref="app">
    <header>
    <!-- <header class="header" :class="{ 'header-visible': isHeaderVisible }"> -->
      <JaenHeader />
    </header>
    <div id="content" ref="content">
      <router-view></router-view>
    </div>
    <footer class="footer" ref="footer">
      <JaenFooter />
    </footer>
  </div>
</template>

<script>
import JaenHeader from './components/layout/JaenHeader.vue'
import JaenFooter from './components/layout/JaenFooter.vue'

export default {
  
  name: 'App',
  components: {
    JaenHeader,
    JaenFooter,
  },data(){
    return{
      isHeaderVisible: true, // 헤더의 가시성 상태
      contentMaxHeight: null // content의 최대 높이
    }
  }
  ,mounted() {
    console.log("mounted 오나?")
   },
   methods: {
    handleScroll() {
      // 스크롤이 제일 아래로 내려오면 푸터를 보이게 합니다.
      const content = this.$refs.content;
      const footer = this.$refs.footer;
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
  font-family: Avenir, Helvetica, Arial, sans-serif, SUITE-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-height: 100vh; /* 컨테이너 높이를 브라우저 높이의 최대치로 설정 */
  overflow-y: auto; /* 세로 스크롤이 필요한 경우에만 스크롤 표시 */
  overflow-x: hidden; /* 가로 스크롤을 숨김 */
}
.header {
  /* font-size: large; */
  transition: transform 0.3s ease;
}
.header-visible {
  transform: translateY(0); /* 헤더가 보이도록 이동합니다. */
}
.footer {
  /* background-color: #eee; */
  padding: 20px;
  height: auto;
  display: none; /* 처음에는 푸터를 숨깁니다. */
  transition: transform 0.5s ease;
}

</style>
