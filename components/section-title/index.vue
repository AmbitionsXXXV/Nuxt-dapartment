<template>
  <div class="section-title">{{ title }}</div>
</template>
<script lang="ts" setup>
export interface IProps {
  title: string;
}
const props = withDefaults(defineProps<IProps>(), {
  title: "",
});
</script>

<style lang="scss" scoped>
.section-title {
  padding-top: 60px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;

  /* @include border(); */
}
</style>
