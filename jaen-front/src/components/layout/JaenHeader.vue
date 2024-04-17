<template>
  <div class="navbar-container ">
      <nav class="navbar navbar-expand-lg " data-overlay >
          <a class="navbar-brand fade-page" @click="goToHome" >
            <img src="@/assets/img/main-logo.png" alt="자앤" width="90" height="38">
          </a>
          <!-- 크기 줄었을 때 Navbar 처리 -->
          <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <img class="icon navbar-toggler-open" src="@/assets/img/icons/interface/menu.svg" alt="menu interface icon" data-inject-svg />
            <img class="icon navbar-toggler-close" src="@/assets/img/icons/interface/cross.svg" alt="cross interface icon" data-inject-svg />
          </button> -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
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
    goToCategories(){
      this.$router.push('/categories');
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