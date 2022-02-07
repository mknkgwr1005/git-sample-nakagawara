<template>
  <div>
    <CompSelfIntroduction></CompSelfIntroduction>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompSelfIntroduction from "@/components/CompSelfIntroduction.vue";
@Component({
  components: {
    CompSelfIntroduction,
  },
})
export default class XXXComponent extends Vue {}
</script>

<style scoped></style>
