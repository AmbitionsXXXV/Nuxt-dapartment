<template>
  <div class="intelligent">intelligent</div>
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
.intelligent {
}
</style>
