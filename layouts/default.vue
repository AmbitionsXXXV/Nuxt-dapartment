<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '~~/store'

const homeStore = useHomeStore()
const { navbars } = storeToRefs(homeStore)
homeStore.fetchHomeInfoData('oppo')
</script>

<template>
  <div class="layout">
    <!-- Header -->
    <app-header></app-header>
    <navbar :navbars="navbars"></navbar>
    <!-- 页面内容的占位 -->
    <slot></slot>
    <!-- Footer -->
    <app-footer></app-footer>
  </div>
</template>
