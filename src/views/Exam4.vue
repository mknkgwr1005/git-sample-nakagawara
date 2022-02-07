<template>
  <div>
    <CompAddPrice></CompAddPrice>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompAddPrice from "@/components/CompAddPrice.vue";
@Component({
  components: {
    CompAddPrice,
  },
})
export default class CompAddPriceParent extends Vue {}
</script>

<style scoped></style>
