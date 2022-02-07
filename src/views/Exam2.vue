<template>
  <div>
    <CompShowSelfIntro></CompShowSelfIntro>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompShowSelfIntro from "@/components/CompShowSelfIntro.vue";
@Component({
  components: {
    CompShowSelfIntro,
  },
})
export default class XXXComponent extends Vue {}
</script>

<style scoped></style>
