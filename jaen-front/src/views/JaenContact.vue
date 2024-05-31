<template>
  <section class="bg-dark text-light header-inner p-0 jarallax position-relative" data-jarallax data-speed="0.2" data-overlay>
    <img src="@/assets/img/home/main/contact.jpg" alt="Image" class="jarallax-img opacity-40">
      <div class="title_section" data-aos="fade-up" style="display: grid;">
        <div class="" style="text-align: center;">
          <h1 class="">자앤과 함께할 여러분을 기다립니다.</h1>
          <!-- lead mb-0 -->
          <h5 class="">궁금하신 사항이 있다면 아래 문의하기를 이용해주세요.</h5>
        </div>
      </div>
  </section>
  <section>
    <div class="row text-center" style="padding-left: 10rem; padding-right: 10rem;">
      <div class="col-sm-4 mb-3 mb-sm-0">
        <h3 class="h2">🏢</h3>
        <span class="lead">
          서울특별시 서초구
          <br>반포대로 13길 33 201호
        </span>
      </div>
      <div class="col-sm-4 mb-3 mb-sm-0">
        <h3 class="h2">📬</h3>
        <a href="#" class="lead">admin@jaen.kr</a>
      </div>
      <div class="col-sm-4 mb-3 mb-sm-0">
        <h3 class="h2">📞</h3>
        <span class="lead">
          +82 02-588-8929
        </span>
        <div class="text-small text-muted">Mon - Fri, 9am - 6pm</div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-8 col-xl-6">
                <div class="text-center mb-4">
                    <h2 class="h1">궁금하신 사항을 남겨주세요.</h2>
                    <p class="lead">아래 양식을 채워 메일을 보내주시면 확인 후 답변드리겠습니다.</p>
                </div>
                <form @submit.prevent="sendEmail" novalidate>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>제목 *</label>
                                <input name="contact-title" type="text" class="form-control" v-model="formData.title" required>
                                <div class="invalid-feedback">
                                    제목을 입력해주세요.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>이름 *</label>
                                <input name="contact-name" type="text" class="form-control" v-model="formData.name" required>
                                <div class="invalid-feedback">
                                    이름을 입력해주세요.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>이메일 *</label>
                                <input name="contact-email" type="email" placeholder="you@yoursite.com" class="form-control" v-model="formData.email" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>회사명(학교명)</label>
                                <input name="contact-company" type="text" class="form-control" v-model="formData.company">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>연락처</label>
                                <input name="contact-phone" type="tel" class="form-control" v-model="formData.phone">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label>문의사항:</label>
                                <textarea class="form-control" name="contact-message" rows="10" placeholder="어떤 점이 궁금하신가요?" v-model="formData.message"></textarea>
                            </div>
                        </div>
                        <div class="col-12">
                            <div data-recaptcha data-sitekey="INSERT_YOUR_RECAPTCHA_V2_SITEKEY_HERE"></div>
                        </div>
                        <div class="col">
                            <div class="d-none alert alert-success" role="alert" data-success-message>
                                확인 후 답변드리도록 하겠습니다. 감사합니다.
                            </div>
                            <div class="d-none alert alert-danger" role="alert" data-error-message>
                                빈 칸을 채워주세요.
                            </div>
                            <button type="submit" class="btn btn-primary btn-loading" data-loading-text="Sending">
                                <img class="icon" src="assets/img/icons/theme/code/loading.svg" alt="loading icon" data-inject-svg />
                                <span>Send Enquiry</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  <section>
    <KaKaoMap/>
  </section>
</template>
  
  <script>
  import axios from 'axios';
  import KaKaoMap from "@/components/KaKaoMap.vue";
  
  export default {
    data() {
      return {
        formData: {
            title: '',
            name: '',
            email: '',
            company: '',
            phone: '',
            message: ''
        }
      };
    },
    components: {
        KaKaoMap,
    },
    methods: {
      sendEmail() {
        // 폼 데이터를 서버로 전송
        axios.post("/send/mail", this.formData)
        .then(response => {
            console.log('이메일 전송 성공:', response.data);
            // 성공 메시지를 사용자에게 표시하거나 다른 동작 수행
            document.querySelector('[data-success-message]').classList.remove('d-none');
        })
        .catch(error => {
            console.error('이메일 전송 실패:', error);
            // 에러 메시지를 사용자에게 표시하거나 다른 동작 수행
            document.querySelector('[data-error-message]').classList.remove('d-none');
        });
      }
    }
  };
  </script>
<style scoped>
  label{
    text-align: left;
    display: block;
  }
</style>