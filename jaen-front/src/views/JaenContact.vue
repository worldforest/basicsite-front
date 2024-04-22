<template>
    <div class="container">
      <input type="email" v-model="email" placeholder="이메일">
      <textarea v-model="message" placeholder="메시지"></textarea>
      <button @click="sendEmail">이메일 전송</button>
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
  