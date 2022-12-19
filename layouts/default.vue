<script lang="ts" setup>
import { useHomeStore } from '~~/store'

const homeStore = useHomeStore()
homeStore.fetchHomeInfoData('oppo')
</script>

<template>
  <div class="layout">
    <!-- Header -->
    <app-header></app-header>
    <navbar></navbar>
    <!-- 页面内容的占位 -->
    <slot></slot>
    <!-- Footer -->
    <app-footer></app-footer>
  </div>
</template>
