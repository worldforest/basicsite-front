<template>
  <footer class="footer">
      <div class="row">
        <div class="col-md-4">
          <a href="tel:02-588-8929" style="color: black;">☎ 02-588-8929</a>
        </div>
        <div class="col-md-4">
          <a href="https://naver.me/5K5mscET" style="color: black;">서울특별시 서초구 반포대로 13길 33 201호</a>
        </div>
        <div class="col-md-4">
          <a>대표   |   박정님</a>
        </div>
      </div>
      <div class="col col-md-auto text-center">
        <a>&copy;Since 2010 자앤</a>
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
  text-align: center;
  bottom: 0;
  width: 100%;
  height: auto;
  /* background: linear-gradient(to top, #c0d89963, #eff3ea6c); */
  background: #c0d89963;
  padding: 25px 60px; /* footer 내부 여백 조절 */
}
.row {
  display: flex;
  justify-content: space-between;
}
.footer a:hover{
  text-decoration: underline;
}
@media(max-width: 767px){
  a{
    font-size: 1.2rem;
  }
}
</style>