<template>
    <div class="container">
        <div class="floBanPc1 row hidden-md hidden-sm hidden-xs">
            <!-- <a href="">공지사항/수업자료 공유</a> -->
            <a @click="scrollToSection('3')">공지사항/수업자료 공유</a>
            <a >실시간 Q & A</a>
            <a >과제관리</a>
            <a >평가관리</a>
            <a >프로젝트관리</a>
        </div>
        <section class="bg-light text-dark header-inner" data-jarallax data-speed="0.2" data-overlay>
            <div class="row" data-aos="fade-up" style="padding: 5rem; display: inline-flex;">
                <div class="" style="display: flex;">
                    <h3 class="h1">자앤의 교육지원 플랫폼</h3>
                </div>
            </div>
        </section>
        <section style="text-align: left;">
            <div id="notice">
                <h3>공지사항/수업자료 공유</h3>
                <p>자앤의 자체 교육과정 관리 플랫폼을 개발하여, 각 과정별 공지사항 및 수업에 필요한 자료 등을 공유하고 있습니다.</p>
                <div class="row">
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림1.png">
                    </div>
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림2.png">
                    </div>
                </div>
            </div>
            <div id="2">
                <h3>실시간 Q & A</h3>
                <p>각 과정별로 수강생과 강사가 1:1 실시간 질의응답을 나눌 수 있어 원활한 소통이 가능합니다.</p>
                <div class="row">
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림3.png">
                    </div>
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림4.png">
                    </div>
                </div>
            </div>
            <div id="3">
                <h3>과제관리</h3>
                <p>각 과정별로 과제를 제출하고 필요한 경우 과제에 대한 설명을 보충할 수 있습니다.</p>
                <div class="row">
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림5.png">
                    </div>
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림6.png">
                    </div>
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림7.png">
                    </div>
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림9.png">
                    </div>
                </div>
            </div>
            <div id="4">
                <h3>평가관리</h3>
                <p>각 과정별로 실시되는 과제 및 시험에 대한 평가 결과들은 관리자에 의해 철저히 관리됩니다.<br>
                    또한, 실력있는 자앤 강사진들이 활용도 높은 문제를 자체 개발하고 있어 다양한 문제풀을 보유하고 있습니다.</p>
                <div class="row">
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림10.png">
                    </div>
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림11.png">
                    </div>
                </div>
            </div>
            <div id="5">
                <h3>프로젝트관리</h3>
                <p>자앤은 다양하고 실용적인 프로젝트 주제를 꾸준히 업데이트하며 교육생들에게 양질의 프로젝트 경험을 제공하고자 합니다.</p>
                <div class="row">
                    <div id="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림12.png">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
// import Vue from 'vue';
// import VueScrollTo from 'vue-scrollto';

export default{
    mounted() {
        // Register vue-scrollto globally or locally in the component
        // Vue.use(VueScrollTo);
     },
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                console.log(section)
            const offsetTop = section.offsetTop;
            console.log(offsetTop)
            window.scrollTo({ top: 1500})
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Add smooth scrolling behavior
                });
            } else {
                console.error(`Section with id "${sectionId}" not found.`);
            }
        },
        move_to_page(moveto){
            setTimeout(function() {
                var PageLocation = document.querySelector(moveto).offsetTop;
                document.body.scrollTo({top: PageLocation, behavior: 'smooth'});
            }, 70);
            console.log("here")
        }
    }
}
</script>
<style>
#system_img {
    height:50rem;
}
</style>