<template>
  <div>
    <div>
      {{ errorName }} <br />
      名前：<input type="text" v-model="yourName" /> <br />
      <br />
      {{ errorAge }} <br />
      年齢：<input type="text" v-model.number="yourAge" /> <br />
      <br />
      {{ errorCmt }}<br />
      コメント：<br /><textarea
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        v-model="comment"
      ></textarea>
      <br />
      <button type="button" @click="sendCheck">入力チェック</button>
    </div>

    <div>
      <hr />
      {{ displayMsg }}
      名前：{{ yourName }}
      <br />
      年齢：{{ yourAge }}
      <br />
      <pre>
      コメント：{{ comment }}
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private yourName = "";
  private yourAge = 0;
  private comment = "";
  private displayMsg = "";
  private errorName = "";
  private errorAge = "";
  private errorCmt = "";

  sendCheck(): void {
    if (
      !(this.yourName === "") &&
      !(this.yourAge === 0) &&
      !(this.comment === "")
    ) {
      this.displayMsg = "送信完了しました！";
    }
    if (this.yourName === "") {
      this.errorName = "名前が入力されていません。";
    }
    if (this.yourAge === 0) {
      this.errorAge = "年齢が入力されていません";
    }
    if (this.comment === "") {
      this.errorCmt = "コメントが入力されていません";
    }
  }
}
</script>

<style scoped></style>
