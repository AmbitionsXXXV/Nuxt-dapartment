<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners"></swiper>
      <tab-category
        :categorys="categorys"
        @item-click="handleItemClick"
      ></tab-category>

      <template v-for="category in categorys" :key="category.id">
        <section-category :category="category"></section-category>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { ElButton } from "element-plus";
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store'
import type { ICategory } from '@/store'
export interface IProps {
  title?: string
}
const props = withDefaults(defineProps<IProps>(), {
  title: 'home'
})

const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)

function handleItemClick(item: ICategory) {
  console.log(item.title)
  // 进行页面跳转 -> 编程导航 ->不利于SEO

  return navigateTo({
    path: '/oppo-detail',
    query: {
      type: item.type // oppo 、air、watch、tablet
    }
  })
}
</script>

<style lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>
