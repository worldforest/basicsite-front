<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h6>☎ 02-</h6>
        </div>
        <div class="col-md-4">
          <h6>서울특별시 서초구 반포대로 13길 33 201호</h6>
        </div>
        <div class="col-md-4">
          <h6>대표   |   박정님</h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "JaenFooter"
};
</script>

<style>
.footer {
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  /* height: 100px; */
  background-color: rgba(191, 207, 118, 0.5); /* 배경색에 투명도 적용 */
  /* border-top: 1px solid #eaeaea; */
  padding: 20px 0; /* footer 내부 여백 조절 */
}

.container {
  text-align: center;
}

.row {
  display: flex;
  justify-content: space-between;
}

</style>