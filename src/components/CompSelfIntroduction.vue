<template>
  <div class="box">
    <div class="textInput">
      <div>名前：{{ myName }}</div>
      <div>年齢：{{ age }}</div>
      <div>10年後の年齢：{{ age + 10 }}</div>
      <div>趣味：{{ myHobby }}</div>
      <a href="https://www.rakus-partners.co.jp/">ラクスパートナーズ</a>
      <br />
      <div id="image">
        <img v-bind:src="image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompSelfIntroduction extends Vue {
  private myName = "中川原美華";
  private age = 28;
  private myHobby = "ゲーム";
  //   絶対パスで書く publicを現在地として参照している
  private image = "/img/miffy.jpg";
}
</script>

<style scoped>
div {
  width: 200px;
}
.box {
  border: solid black 1px;
}
img {
  width: 200px;
}
.textInput {
  text-align: left;
  /* border: solid 1px; */
}
</style>
