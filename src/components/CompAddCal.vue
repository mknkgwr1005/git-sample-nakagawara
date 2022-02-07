<template>
  <div>
    <input type="text" v-model.number="num1" />＋
    <input type="text" v-model.number="num2" />＝{{ this.num1 + this.num2 }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompAddCal extends Vue {
  private num1 = 0;
  private num2 = 0;
}
</script>

<style scoped></style>
