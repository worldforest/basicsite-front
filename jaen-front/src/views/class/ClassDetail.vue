<template>
    <div>
      <div class="tabs">
        <button v-for="(tab, index) in tabs" :key="index" @click="activateTab(index)" :class="{ active: activeTab === index }">{{ tab }}</button>
      </div>
      <div class="tab-content">
        <div v-for="(content, index) in tabContents" :key="index" v-show="activeTab === index">{{ content }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 0,
        tabs: ['교육과정 상세', 'Tab 2', 'Tab 3'], // 탭의 제목 배열
        tabContents: ['Content for Tab 1', 'Content for Tab 2', 'Content for Tab 3'] // 각 탭에 대응하는 내용 배열
      };
    },
    methods: {
      activateTab(index) {
        this.activeTab = index; // 활성화된 탭의 인덱스를 설정
      }
    }
  };
  </script>
  
  <style>
  /* 필요한 스타일을 추가하세요 */
  </style>