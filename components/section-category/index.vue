<template>
  <div class="section-category">
    <section-title :title="category.title"></section-title>
    <grid-view
      :category-url="category.url"
      :productDetailss="category.productDetailss"
    >
    </grid-view>
  </div>
</template>
<script lang="ts" setup>
import { ICategory } from '~~/store'

export interface IProps {
  category: ICategory
}
const props = withDefaults(defineProps<IProps>(), {
  category: () => ({})
})
</script>
