<template>
  <div class="onePlus">onePlus</div>
</template>

<script lang="ts" setup>
export interface IProps {
  title: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<style lang="scss" scoped>
.onePlus {
}
</style>
