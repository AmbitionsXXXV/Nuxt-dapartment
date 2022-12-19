<template>
  <div class="grid-view">
    <!-- 第一item -->
    <div class="view-item first" v-if="categoryUrl">
      <img :src="categoryUrl" alt="Category" />
    </div>
    <!-- 剩余的item -->
    <template v-for="(item, index) in productDetailss" :key="index">
      <div class="view-item">
        <slot>
          <grid-view-item :productDetail="item"></grid-view-item>
        </slot>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { IProductDetail } from '@/store'

export interface IProps {
  productDetailss: IProductDetail[]
  categoryUrl?: string
}
const props = withDefaults(defineProps<IProps>(), {
  productDetailss: () => [],
  categoryUrl: ''
})
</script>

<style lang="scss" scoped>
.grid-view {
  width: $contentWidth + 18px;
  /* @include border(green); */
  @include normalFlex();
  flex-wrap: wrap;
  justify-content: flex-start;

  .view-item {
    width: 20%;
    padding-right: 18px;
    margin-bottom: 18px;
    /* @include border(red); */
    /* height: $gridItemHeight; */
    box-sizing: border-box;
    background-color: $bgGrayColor;
    cursor: pointer;
  }

  .first {
    width: 40%;
    & > img {
      width: 100%;
      height: 100%;
      /* 动画效果 */
      transition: all 0.2s linear;
      &:hover {
        @include hoverEffect();
      }
    }
  }
}
</style>
