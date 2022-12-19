<template>
  <div class="server">server</div>
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
.server {
}
</style>
