<template>
    <div class="container">
        <section class="bg-light text-dark header-inner" data-jarallax data-speed="2" data-overlay>
            <div class="row" data-aos="fade-up" style="padding: 5rem; display: inline-flex; text-align: center;">
                <h2>About JAEN</h2>
            </div>
        </section>
        <section>
            <div style="margin-bottom: 5rem;">
                <h4 style="line-height: 1.5;">디지털 전환(DT)의 핵심기술인<br>
                    AI (Machine Learning, Deep Learning)와<br> IT 기본 (Java, Android, Web)
                    분야에서<br>
                    <span ref="typedText" style="font-style: italic; line-height: 5;"></span>
                </h4>
            </div>
            <div>
                <img src="@/assets/img/company/introduce.jpg">
            </div>
            <div style="margin: 10rem;">
                <h4>자앤은 IT 분야 교육 및 컨설팅을 목표로<br>
                    2010년 설립된<br>
                    고객사 맞춤형 서비스와<br>
                    최적의 교육 솔루션을 제공하는 회사입니다.
                </h4>
            </div>
        </section>
    </div>
</template>
<script>
import Typed from 'typed.js'
export default {
  mounted() {
    // 페이지가 마운트되면 타이핑 효과를 시작합니다.
    this.startTyping();
  },
  methods: {
    startTyping() {
      // Typed.js 또는 다른 타이핑 애니메이션 라이브러리를 사용하여 텍스트를 타이핑합니다.
      // Typed.js 예시:
      new Typed(this.$refs.typedText, {
        strings: ["독보적인 IT 전문 교육 및 컨설팅 회사"],
        typeSpeed: 80,
        loop: true,
        backDelay: 2000    
      });
    }
  }
};
</script>
<style>
</style>