<template>
    <div>
        <img src="@/assets/img/home/main/main2.png" style="width: 100%; height: auto; display: block;">
    </div>
    <section>
        <h2 class="h1 mx-xl-6" data-aos="fade-up" style="text-align: center; margin: 1.5rem; text-size-adjust: 2rem">소프트웨어 개발자 및 엔지니어 대상 전문교육</h2>
        <div class="row" style="margin: 3rem;">
            <div class="col-md-12 col-xl-4">
                <div class="row" style="padding: 0.5rem;">
                    <img id="intro_img" class="col-md-6 col-xl-12" src="@/assets/img/home/intro/실무중심교육2.jpg" />
                    <div class="col-md-6 col-xl-12 text-xl-center text-md-left text-center">
                        <h4 style="margin-top: 2rem;">고객이 원하는 실무 중심의 교육</h4>
                        <h5 style="margin-bottom: 2rem;">일반 교육기관에서 제공하는 보편적인 
                        내용이 아닌 자앤 최고의 강사진들이 개발한 현업에 바로 적용 가능한 실무 위주의 교육 진행</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xl-4">
                <div class="row" style="padding: 0.5rem;">
                    <img id="intro_img" class="col-md-6 col-xl-12" src="@/assets/img/home/intro/차별화된교육2.jpg" />
                    <div class="col-md-6 col-xl-12 text-xl-center text-md-left text-center">
                        <h4 style="margin-top: 2rem;">차별화된 자체 교육 콘텐츠와 컨설팅</h4>
                        <h5 style="margin-bottom: 2rem;">기존 IT 기술뿐만 아니라 4차 산업혁명의 핵심기술(AI, BigData, IoT 등) 관련 자체 콘텐츠 개발 및 고객사에 맞는 컨설팅 실시</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xl-4">
                <div class="row" style="padding: 0.5rem;">
                    <img id="intro_img" class="col-md-6 col-xl-12" src="@/assets/img/home/intro/최고의강사진2.jpg"/>
                    <div class="col-md-6 col-xl-12 text-xl-center text-md-left text-center">
                        <h4 style="margin-top: 2rem;">최고의 강사진</h4>
                        <h5 style="margin-bottom: 2rem;">S/W 개발 경력 8~10년 이상, 강의 경력 5~10년 이상의 경험을 가진 엔지니어 출신의 강사님들이 직접 교육 및 컨설팅 진행</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-light">
        <div style="padding: 15px; text-align: center;">
            <h2 class="h1 mx-xl-6">자앤의 현장사진</h2>
            <p class="lead">자앤 최고의 강사진들의 교육현장을 소개합니다.</p>
        </div>
        <div class="arrows-inside highlight-selected mb-6" data-flickity='{ "autoPlay": true, "imagesLoaded": true, "wrapAround": true }'>
            <div
                class="carousel-cell col-lg-4 col-md-5 col-9 px-2 py-3"
                v-for="(image, index) in imageList" :key="index">
                <a>
                    <img :src="require(`@/assets/img/home/main/${image}.jpg`)" alt="Image" class="rounded shadow-3d border">
                </a>
            </div>
        </div>
    </section>
    <section>
        <div style="padding: 15px; text-align: center;">
            <h2 class="h1 mx-xl-6">자앤과 함께한 기업/기관들</h2>
            <p class="lead">자앤은 지난 10년동안 유수의 기업/기관들과 매년 약 300개의 교육을 진행하고 있습니다.</p>
        </div>
        <div class="image-flow">
          <img src="@/assets/img/home/references/reference1.png">
          <img src="@/assets/img/home/references/reference1.png">
          <img src="@/assets/img/home/references/reference1.png">
          <img src="@/assets/img/home/references/reference1.png">
          <img src="@/assets/img/home/references/reference1.png">
          <img src="@/assets/img/home/references/reference1.png">
        </div>
        <div class="image-flow2">
          <img src="@/assets/img/home/references/reference2.png">
          <img src="@/assets/img/home/references/reference2.png">
          <img src="@/assets/img/home/references/reference2.png">
          <img src="@/assets/img/home/references/reference2.png">
          <img src="@/assets/img/home/references/reference2.png">
          <img src="@/assets/img/home/references/reference2.png">
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return {
            imageList: ['1','2','3','4','5','6'],
        }
    },

};
</script>
<style>
/* #references{
    font-size: xx-large;
    padding-top: 5%;
    padding-bottom: 5%;
}
.container{
    padding-top: 5%;
    padding-bottom: 5%;
} */
#intro_img{
    border-radius: 0px;
    /* height: fit-content; */
    width: 100%;
    height: auto;
}
@media(max-width: 767px){
    .image-flow{
       scale: 2.5;
       /* height: auto; */
    }
    .image-flow2{
        scale: 2.5;
        /* height: auto; */
    }
}
</style>