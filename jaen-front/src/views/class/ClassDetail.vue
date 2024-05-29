<template>
  <section class="bg-dark text-light p-0 jarallax" data-jarallax data-speed="0.2" data-overlay>
    <img src="@/assets/img/home/dg.jpg" alt="Image" class="jarallax-img opacity-40" />
    <div class="title_section" data-aos="fade-up">
      <div class="" style="text-align: center">
        <div class="row" style="display: inline;">
          <a  @click="gotoAllCategories" style="color: darkgrey; font-size: 1.2rem">전체과정 > </a>
          <a  @click="gotoClassAll" style="color: darkgrey; font-size: 1.2rem">{{ this.categoryName }}</a>
        </div>
          <h1 style="text-align: center; align-items: center">{{ classDetailData.title }}</h1>
      </div>
    </div>
  </section>
  <section style="height: max-content">
    <div class="container" style="display: block">
      <div class="row">
        <!-- 대분류 이동 사이드바 start -->
        <div class="col-xl-4">
          <CourseSidebar />
        </div>
        <!-- 대분류 이동 사이드바 end -->
        <div class="col-xl-8">
          <div id="img-box" >
            <img alt="이미지" src="@/assets/img/class/test.jpg" />
          </div>
          <div>
            <div id="lec-title" >
              <h5>{{ classDetailData.title }}</h5>
              <p>{{ classDetailData.technologyStack }} | 교육 수준 : {{ classDetailData.level }} | 교육 수준 : {{ classDetailData.duration }}</p>
            </div>
          </div>
          <!-- courses-details start -->
          <div>
            <ul id="tab-switch-box" >
              <li @click="(e) => { activeTab = 'overview'; e.preventDefault(); }" :class="{ active: activeTab === 'overview' }" class="tab-switch-li" >
                <a href="#overview" class="tab-switch-a" > 교육 개요 </a>
              </li>
              <li @click="(e) => { activeTab = 'instructor'; e.preventDefault(); }" :class="{ active: activeTab === 'instructor' }" class="tab-switch-li" >
                <a href="#instructor" class="tab-switch-a" > 교육 대상 및 효과 </a>
              </li>
              <li @click="(e) => { activeTab = 'review'; e.preventDefault(); }" :class="{ active: activeTab === 'review' }" class="tab-switch-li" >
                <a href="#review" class="tab-switch-a" > 실습 환경 </a>
              </li>
              <li @click="(e) => { activeTab = 'curriculum'; e.preventDefault(); }" :class="{ active: activeTab === 'curriculum' }" class="tab-switch-li" >
                <a href="#curriculum" class="tab-switch-a" > 교육 내용 </a>
              </li>
            </ul>
          </div>
          <div id="overview" v-if="activeTab=='overview'" class="tab-box" >
            <h5>교육 개요</h5>
            <p>{{ classDetailData.description }}</p>
          </div>
          <div id="instructor" v-if="activeTab=='instructor'" class="tab-box" >
            <h5>교육 대상</h5>
            <p>{{ classDetailData.target }}</p>
            <h5>교육 효과</h5>
            <p>{{ classDetailData.goal }}</p>
          </div>
          <div id="review" v-if="activeTab=='review'" class="tab-box" >
            <h5>실습 환경</h5>
            <p>{{ classDetailData.environment }}</p>
          </div>
          <div id="curriculum" v-if="activeTab=='curriculum'" class="tab-box" >
            <h5>교육 내용</h5>
            <ClassCurriculum id="curriculum-component" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CourseSidebar from '@/components/layout/CourseSidebar.vue';
import ClassCurriculum from '@/views/class/ClassCurriculum.vue';
// import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      data: [],
      // classId: null,
      // categoryId:  this.$store.getters.getCategoryId ,
      // categoryName: this.$store.getters.getCategoryName,
      // subcategoryId:  this.$store.getters.subcategoryId ,
      // subcategoryName:  this.$store.getters.subcategoryName ,
      classDetailData: [],
      curriculumData: [],
      activeTab: 'overview',
    };
  },
  created() {},
  computed: {
    // ...mapGetters(['getClassId', 'getClassName', 'getClassData']),

    classId(){
      return this.getCategoryData.categoryId;
    },
    className(){
      return this.getCategoryData.categoryName;
    },

  },
  components: {
    CourseSidebar,
    ClassCurriculum,
  },
  methods: {
    fetchDataBasedOnCategory() {
      const classId = this.getClassId | this.$route.query.classId;
      if (classId) {
        this.getClassDataMethod(classId);
      }
    },
    getClassDataMethod(classId) {
      this.axios
        .get(`curriculum?classId=${classId}`)
        .then((response) => {
          this.data = response.data;
          // console.log(this.data);
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
        });
    },
    getClassBasic(classId) {
      this.axios
        .get(`class?classId=${classId}`)
        .then((response) => {
          this.classDetailData = response.data[0];
          this.classDetailData.level = this.getLevel(this.classDetailData.level);
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
        });
    },
    getCurriculum(classId) {
      this.axios
        .get(`curriculum?classId=${classId}`)
        .then((response) => {
          this.curriculumData = response.data[0];
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
        });
    },
    gotoAllCategories() {
      this.$router.push({ name: 'AllCategories' });
    },
    gotoClassAll(categoryName, categoryId) {
      this.$router.push({ name: 'ClassAll', params: { categoryName, categoryId } });
      // this.$router.push({name:'ClassAll', query: {categoryName : JSON.stringify(categoryName), categoryId : JSON.stringify(categoryId)}});
    },
    getLevel(level) {
      let description;
      switch (level) {
        case 1:
          description = '초급';
          break;
        case 2:
          description = '중급';
          break;
        case 3:
          description = '고급';
          break;
        default:
          description = '알 수 없음';
          break;
      }
      return description;
    },
    formatTextWithLineBreaks(text) {
      if (text) {
        return text.replace(/\n/g, '<br>');
      }
      return '';
    },
  },
  mounted() {
    // this.classId = this.$route.params.classId;
    // this.categoryId = this.$route.params.categoryId;
    // this.get();
    this.getClassBasic();
    this.getCurriculum(this.getClassId);
    // console.log(this.activeTab);
  },
};
</script>

<style scoped>
.container {
  display: grid;
  margin-left: 15%;
  margin-right: 15%;
  grid-template-columns: 1fr 4fr;
  height: 100vh; /* 부모 요소가 화면 전체 높이를 가득 채우도록 설정 */
  row-gap: 1rem;
  column-gap: 1rem;
}
.sidebar {
  @media (max-width: 600px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas:
        'header'
        'side-bar'
        'main'
        'footer';
    }
  }
}

#img-box {
  padding: 0;
}
img {
  width: 100%;
  overflow: hidden;
}

#lec-title { 
  text-align: left;
  padding: 2% 0 2% 0;
}

#tab-switch-box {
  display: flex; 
  flex: 0 0 100%;
  /* justify-content: center; */
  height: 50px;
  max-width: 100%;
  
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  box-sizing: border-box;
}

.tab-switch-a {
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
}
.tab-switch-li {
  width: 25%;
  height: 100%;
  border-right: 1px solid #ddd;
  align-content: center; 
}
.active {
  color: white;
  background-color: #86b541;
}

.tab-box {
  font-family: 'Noto Sans KR';
  text-indent: 2%;
  padding: 15px 15px 15px 15px;
  border: 1px solid #ddd;
}

.tab-box > h5 {
  text-align: left;
  color: #86b541;
  text-decoration: underline #ddd 1px;
}

.tab-box > p {
  text-align: left;
}

#curriculum-component {
  padding: 2rem 0;
}

</style>
