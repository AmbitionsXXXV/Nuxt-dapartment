<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners"></swiper>
      <tab-category
        :categorys="categorys"
        @item-click="handleItemClick"
      ></tab-category>
      <section-title title="Find N 系列"></section-title>
      <grid-view :productDetailss="categorys![1].productDetailss"></grid-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store'
import type { ICategory } from '@/store'

const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)

function handleItemClick(item: ICategory) {
  console.log(item.title)
}
</script>

<style lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>
