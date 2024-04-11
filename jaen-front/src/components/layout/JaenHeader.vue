<template>
  <nav class="navbar">
    <a class="navbar-brand" @click="goToHome">
      <img src="@/assets/main-logo.png" width="90" height="38">
    </a>
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
      aria-expanded="false" aria-label="Toggle navigation">
      <img class="icon navbar-toggler-open" src="@/assets/img/icons/interface/menu.svg" alt="menu interface icon"
        data-inject-svg />
      <img class="icon navbar-toggler-close" src="@/assets/img/icons/interface/cross.svg" alt="cross interface icon"
        data-inject-svg />
    </button> -->
    <div class="navbar-collapse justify-content-end text-big">
      <ul class="nav nav-tabs justify-content-end navbar-collapse">
        <li class="nav-item" @click="goToSystem">
          <a class="nav-link" aria-current="page">핵심기술</a>
        </li>
        <li class="nav-item dropdown" @click="goToAllCategories">
          <a class="nav-link dropdown-toggle"  role="button" aria-haspopup="true" aria-expanded="false" @click="goToAllCategories">교육과정</a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }">
            <a class="dropdown-item" href="">전체 로드맵</a>
            <a class="dropdown-item" href="">AI(인공지능)</a>
            <a class="dropdown-item" href="">데이터 사이언스</a>
            <a class="dropdown-item" href="">IoT(사물인터넷)</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToHistory">회사소개</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToContact" tabindex="-1" aria-disabled="true">문의하기</a>
        </li>
      </ul>
  </div>
  </nav>
</template>

<script>
export default {
  name: "JaenHeader",

  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    goToHome(){
      this.$router.push('/');
    },
    goToHistory(){
      this.$router.push('/history');
    },
    goToContact(){
      this.$router.push('/contact');
    },
    goToSystem(){
      this.$router.push('/system');
    },
    goToClassAll(){
      this.$router.push('/class_all');
    },
    goToAllCategories(){
      this.$router.push('/categories');
    }
  },
};
</script>
<style src="@/assets/css/theme.css"></style>
<style src="@/assets/css/loaders/loader-typing.css"></style>