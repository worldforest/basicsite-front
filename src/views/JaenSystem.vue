<template>
    <section class="bg-light text-dark p-0 jarallax" data-jarallax data-speed="2" data-overlay>
        <!-- <img src="@/assets/img/home/dg.jpg" alt="Image" class="jarallax-img opacity-40"> -->
        <div class="title_section" data-aos="fade-up">
            <h1>자앤의 교육지원 플랫폼</h1>
        </div>
    </section>
    <div class="container">
        <section style="text-align: left;">
            <div id="notice" style="margin-top: 3rem;">
                <h3 style="padding: 1rem;">공지사항/수업자료 공유</h3>
                <div class="col-12" style="margin-bottom: 3rem; text-align: left;">
                    <h5>자앤의 자체 교육과정 관리 플랫폼을 개발하여, 각 과정별 공지사항 및 수업에 필요한 자료 등을 공유하고 있습니다.</h5>
                </div>
                <div class="row">
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림1.png" data-toggle="tooltip" data-placement="bottom" title="공지사항 관리">
                    </div>
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림2.png" data-toggle="tooltip" data-placement="bottom" title="수업 자료 공유">
                    </div>
                </div>
            </div>
            <div id="2" style="margin-top: 3rem;">
                <h3 style="padding: 1rem;">실시간 Q & A</h3>
                <div class="col-12" style="margin-bottom: 3rem; text-align: left;">
                    <h5>각 과정별로 수강생과 강사가 1:1 실시간 질의응답을 나눌 수 있어 원활한 소통이 가능합니다.</h5>
                </div>
                <div class="row">
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림3.png">
                    </div>
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림4.png" data-toggle="tooltip" data-placement="top" title="강사님의 실시간 답변">
                    </div>
                </div>
            </div>
            <div id="3" style="margin-top: 3rem;">
                <h3>과제관리</h3>
                <div class="col-12" style="margin-bottom: 3rem; text-align: left;">
                    <h5>각 과정별로 과제를 제출하고 필요한 경우 과제에 대한 설명을 보충할 수 있습니다.</h5>
                </div>
                <div class="row">
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림5.png">
                    </div>
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림6.png">
                    </div>
                    <div class="system_img col-6" style="margin-top: 2rem;">
                        <img src="@/assets/img/system/그림7.png">
                    </div>
                    <div class="system_img col-6" style="margin-top: 2rem;">
                        <img src="@/assets/img/system/그림9.png">
                    </div>
                </div>
            </div>
            <div id="4" style="margin-top: 3rem;">
                <h3 >평가관리</h3>
                <div class="col-12" style="margin-bottom: 3rem; text-align: left;">
                    <h5>각 과정별로 실시되는 과제 및 시험에 대한 평가 결과들은 관리자에 의해 철저히 관리됩니다.<br>
                또한, 실력있는 자앤 강사진들이 활용도 높은 문제를 자체 개발하고 있어 다양한 문제풀을 보유하고 있습니다.</h5>
                </div>
                <div class="row">
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림10.png">
                    </div>
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림11.png">
                    </div>
                </div>
            </div>
            <div id="5" style="margin-top: 3rem;">
                <h3>프로젝트관리</h3>
                <div class="col-12" style="margin-bottom: 3rem; text-align: left;">
                    <h5>자앤은 다양하고 실용적인 프로젝트 주제를 꾸준히 업데이트하며 교육생들에게 양질의 프로젝트 경험을 제공하고자 합니다.</h5>
                </div>
                <div class="row">
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림12-1.png">
                    </div>
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림12-2.png">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

export default{
    data(){
        return {
            images: ['5','6','7','8'],
        }
    },
    methods: {
 
    }
}
</script>
<style>
#system_img {
    padding: 0.5rem;
    width: 50%;
    /* height:50rem; */
    /* width: 60%; */
    /* width: 30%; */
}
.slideshow {
  overflow: hidden;
  width: 100%;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider img {

  /* width: 100%; */
  height: 20rem;
}
</style>