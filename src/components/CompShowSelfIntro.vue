<template>
  <div class="box">
    <div class="textInput">
      <div>名前：{{ myName }}</div>
      <div>年齢：{{ age }}</div>
      <div>10年後の年齢：{{ afterTenYears }}</div>
      <div>
        <span>趣味：</span>
        <div v-for="hobby of hobbies" :key="hobby">{{ hobby }}</div>
        <a v-bind:href="url">ラクスパートナーズ</a>
        <br />
      </div>
      <div id="image">
        <img v-bind:src="image" />
      </div>
      <br />
      <div>
        <button type="button" @click="onClick" :disabled="btnChk">
          ボタン
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompSelfIntroduction extends Vue {
  private myName = "";
  private age = 0;
  private hobbies = [""];
  //   絶対パスで書く publicを現在地として参照している
  private image = "/";
  private url = "";
  private afterTenYears = 0;
  private btnChk = false;

  onClick(): void {
    this.myName = "中川原美華";
    this.age = 28;
    this.hobbies = ["読書", "ゲーム", "映画"];
    //   絶対パスで書く publicを現在地として参照している
    this.image = "/img/miffy.jpg";
    this.url = "https://www.rakus-partners.co.jp/";
    this.afterTenYears = this.age + 10;
    this.btnChk = true;
  }
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
