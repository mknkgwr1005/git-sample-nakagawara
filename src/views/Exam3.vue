<template>
  <div><CompAddCal></CompAddCal></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompAddCal from "@/components/CompAddCal.vue";
@Component({
  components: {
    CompAddCal,
  },
})
export default class XXXComponent extends Vue {}
</script>

<style scoped></style>
