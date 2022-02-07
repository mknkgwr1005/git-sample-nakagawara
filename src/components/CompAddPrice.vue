<template>
  <div>
    <input type="text" v-model.number="price1" />
    <br />
    <input type="text" v-model.number="price2" />
    <br />
    <input type="text" v-model.number="price3" />

    <p>税抜き価格： {{ noTaxPrices }}</p>
    <p>税込み価格： {{ taxPrices }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompAddPrice extends Vue {
  //   @Prop({ default: 0 })
  //   private num1!: number;
  //   private num2!: number;
  //   private num3!: number;
  private price1 = 0;
  private price2 = 0;
  private price3 = 0;
  private TAX = 1.1;

  //   private price1: number = this.num1;
  //   private price2: number = this.num2;
  //   private price3: number = this.num3;

  get noTaxPrices(): number {
    return this.price1 + this.price2 + this.price3;
  }

  get taxPrices(): number {
    return Math.floor(Number(this.noTaxPrices) * this.TAX);
  }
}
</script>

<style scoped></style>
