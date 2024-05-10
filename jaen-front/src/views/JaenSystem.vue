<template>
    <div class="container">
        <section class="bg-light text-dark header-inner" data-jarallax data-speed="0.2" data-overlay>
            <div class="row title_section" data-aos="fade-up">
                <h3 class="h1">자앤의 교육지원 플랫폼</h3>
            </div>
        </section>
        <section style="text-align: left;">
            <div id="notice">
                <h3 style="padding: 1rem;">공지사항/수업자료 공유</h3>
                <div class="row">
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림1.png">
                    </div>
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림2.png">
                    </div>
                    <div class="col-12" style="padding: 2rem; margin-bottom: 3rem; text-align: center;">
                        <h5>자앤의 자체 교육과정 관리 플랫폼을 개발하여, 각 과정별 공지사항 및 수업에 필요한 자료 등을 공유하고 있습니다.</h5>
                    </div>
                </div>
            </div>
            <div id="2">
                <h3 style="padding: 1rem;">실시간 Q & A</h3>
                <div class="row">
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림3.png">
                    </div>
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림4.png">
                    </div>
                </div>
                <div class="col-12" style="padding: 2rem; margin-bottom: 3rem; text-align: center;">
                    <h5>각 과정별로 수강생과 강사가 1:1 실시간 질의응답을 나눌 수 있어 원활한 소통이 가능합니다.</h5>
                </div>
            </div>
            <div id="3">
                <h3>과제관리</h3>
                <!-- <div class="row">
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
                </div> -->
                <div class="slide-container">
                    <button @click="moveSlideToLeft">
                        <img src="왼쪽버튼이미지입니다." />
                    </button>
                    <div class="slide-window">
                        <div class="slide" 
                            :class="{'slide-active': transitionOn }" 
                            :style="{transform: 'translate3d(' + slideCoord + 'px, 0, 0)',}">
                                <SlideCard v-for="card in cardArray" :key="card.name" />
                                <SlideCard v-for="image in images" :key="image.index"/>
                                    <!-- <img :src="require(`@/assets/img/system/그림${image}.png`)" alt="Image" class="rounded shadow-3d border"> -->
                                
                        </div>
                    </div>
                    <button @click="moveSlideToRight">
                        <img src="오른쪽버튼이미지입니다."/>
                    </button>
                </div>
                <div class="col-12" style="padding: 2rem; margin-bottom: 3rem; text-align: center;">
                    <h5>각 과정별로 과제를 제출하고 필요한 경우 과제에 대한 설명을 보충할 수 있습니다.</h5>
                </div>
            </div>
            <div id="4">
                <h3>평가관리</h3>
                <div class="row">
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림10.png">
                    </div>
                    <div class="system_img col-6">
                        <img src="@/assets/img/system/그림11.png">
                    </div>
                </div>
                <div class="col-12" style="padding: 2rem; margin-bottom: 3rem; text-align: center;">
                    <h5>각 과정별로 실시되는 과제 및 시험에 대한 평가 결과들은 관리자에 의해 철저히 관리됩니다.<br>
                또한, 실력있는 자앤 강사진들이 활용도 높은 문제를 자체 개발하고 있어 다양한 문제풀을 보유하고 있습니다.</h5>
                </div>
            </div>
            <div id="5">
                <h3>프로젝트관리</h3>
                <div class="row">
                    <div class="system_img" style="margin: 1rem;">
                        <img src="@/assets/img/system/그림12.png">
                    </div>
                </div>
                <div class="col-12" style="padding: 2rem; margin-bottom: 3rem; text-align: center;">
                    <h5>자앤은 다양하고 실용적인 프로젝트 주제를 꾸준히 업데이트하며 교육생들에게 양질의 프로젝트 경험을 제공하고자 합니다.</h5>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

export default{
    data(){
        return {
            transitionOn: true, //슬라이드가 움직일때 트렌지션을 줄 것인지
    cardArray : [], // 슬라이드 카드가 담길 배열 mounted에서 담아준다.
    slideCoord: -300, // 옆으로 움직일 값, (슬라이드의 마진,패딩값 포함된 width)
    // 이 값으로 슬라이드 카드를 담고있는 .slide의 css에 transform: translate3d(여기, 0 , 0) 에 넣어줘야 한다.
            images: ['5','6','7','8'],
        }
    },
    methods: {
  resetCardArrayToRight() {
    // 슬라이드 카드 배열 끝에 맨 앞에 있던 카드를 추가
    this.cardArray.splice(this.cardArray.length, 0, this.cardArray[0]);
    
    // 맨 끝에 추가한 후 맨 앞에 있던 카드는 삭제
    this.cardArray.splice(0, 1);
    
    // 잠시 transition 을 off 하기
    this.transitionOn = false;
    
    // slideCoord를 초기값으로 설정
    this.slideCoord = -300;
},
    
  // 슬라이드 오른쪽 버튼 클릭이벤트 @click=" moveSlideToRight"
  moveSlideToRight() {
    // -300 씩 이동
    this.slideCoord = this.slideCoord - 300
    
    // transitionOn은 true로 
    this.transitionOn = true
    
    // 0.5초 뒤에 배열의 순서를 바꾸고 slideCoord값을 다시 초기 값으로 설정
    // 이때만 transition을 off하여 움직이지 않는 것 처럼 눈속임한다.
    // 여기 setTimeout의 delay 시간은 css의 transition의 duration과 같게 설정해야한다.
    setTimeout(this.resetCardArrayToRight, 500)
    },
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