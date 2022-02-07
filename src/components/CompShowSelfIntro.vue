<template>
  <div class="box">
    <div class="textInput">
      <div>名前：{{ myName }}</div>
      <div>年齢：{{ age }}</div>
      <div>10年後の年齢：{{ age + 10 }}</div>
      <div>趣味：{{ myHobby }}</div>
      <a :href="url">ラクスパートナーズ</a>
      <br />
      <div id="image">
        <img v-bind:src="image" />
        <br />
        <button type="button" @click="showElements">ボタン</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompShowSelfIntro extends Vue {
  private myName = "";
  private age = 0;
  private myHobby = "";
  //   絶対パスで書く publicを現在地として参照している
  private image = "/img/miffy.jpg";
  private url = "https://www.rakus-partners.co.jp/";
  //   要素を表示
  // @Emit()
  // showElements():void{
}
// }
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
