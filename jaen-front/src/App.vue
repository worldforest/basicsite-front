<template>
  <div id="app" ref="app">
    <header>
    <!-- <header class="header" :class="{ 'header-visible': isHeaderVisible }"> -->
      <JaenHeader />
    </header>
    <div id="content" ref="content" :style="{ maxHeight: contentMaxHeight }">
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
    
    // this.$refs.content.addEventListener('scroll', this.handleScroll);
    // 컴포넌트가 마운트된 후, 화면의 크기에 따라 content의 최대 높이를 동적으로 계산합니다.
    // this.calculateContentMaxHeight();
    // // 화면 크기가 변경될 때마다 content의 최대 높이를 다시 계산합니다.
    // window.addEventListener('resize', this.calculateContentMaxHeight);
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
        
        if (content.scrollTop > 0) {
          this.isHeaderVisible = false;
        } else {
          this.isHeaderVisible = true;
        }
      }
    }
    // ,calculateContentMaxHeight() {
    //   const appHeight = this.$refs.app.offsetHeight;
    //   const headerHeight = document.querySelector('.header').offsetHeight;
    //   const footerHeight = document.querySelector('.footer').offsetHeight;
    //   this.contentMaxHeight = `${appHeight - headerHeight - footerHeight}px`;
    // }
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
  /* overflow-y: auto; */
  /* height: fit-content; */
  /* flex-wrap: wrap; */
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
}
.header {
  /* font-size: large; */
  transition: transform 0.3s ease;
}
.header-visible {
  transform: translateY(0); /* 헤더가 보이도록 이동합니다. */
}
#content{
  flex: 1;/* 푸터 위에 있는 내용이 컨테이너의 크기를 채우도록 설정됩니다. */
  /* flex-direction: column; */
  overflow-y: auto; /* 내용이 컨테이너의 크기를 초과하는 경우 스크롤이 생성됩니다. */
}
.footer {
  /* background-color: #eee; */
  padding: 20px;
  height: auto;
  display: none; /* 처음에는 푸터를 숨깁니다. */
  transition: transform 0.5s ease;
}
</style>
