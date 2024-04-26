<template>
    <div class="container">
      <div class="col">
        <h2>궁금한 점이 있으신 분들은 연락주세요</h2>
      </div>
      <div class="col" style="display: flex;">
        <input type="email" v-model="email" placeholder="이메일">
        <textarea v-model="message" placeholder="메시지"></textarea>
        <button @click="sendEmail">이메일 전송</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        message: ''
      };
    },
    methods: {
      sendEmail() {
        // 이메일과 메시지를 서버로 전송
        axios.get("/MailSendTest")
        .then(response => {
          console.log('이메일 전송 성공:', response.data);
          // 성공 메시지를 사용자에게 표시하거나 다른 동작 수행
        })
        .catch(error => {
          console.error('이메일 전송 실패:', error);
          // 에러 메시지를 사용자에게 표시하거나 다른 동작 수행
        });
      }
    }
  };
  </script>
  