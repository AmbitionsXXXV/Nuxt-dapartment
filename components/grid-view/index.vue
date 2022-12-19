<template>
  <div class="grid-view">
    <template v-for="(item, index) in productDetailss" :key="index">
      <div class="view-item">
        <grid-view-item :productDetail="item"></grid-view-item>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { IProductDetail } from '@/store'

export interface IProps {
  productDetailss: IProductDetail[]
}
const props = withDefaults(defineProps<IProps>(), {
  productDetailss: () => []
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
      transition: all 0.2s linear;
      &:hover {
        @include hoverEffect();
      }
    }
  }
}
</style>
