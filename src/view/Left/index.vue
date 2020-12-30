<template>
  <div class="swi">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.url" alt="" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  data() {
    return {
      imgList: [
        {
          url: 'https://icweiliimg9.pstatp.com/weili/l/919779495736508463.webp',
        },
        {
          url: 'https://weiliicimg1.pstatp.com/weili/l/913146374019088384.webp',
        },
        {
          url: 'https://icweiliimg6.pstatp.com/weili/l/919766988796461147.webp',
        },
        {
          url: 'https://icweiliimg9.pstatp.com/weili/l/920127431037157415.webp',
        },
        {
          url: 'https://icweiliimg9.pstatp.com/weili/l/903435504504012822.webp',
        },
        {
          url: 'https://icweiliimg9.pstatp.com/weili/l/919779495736508463.webp',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.swi {
  height: 16.25rem;
  img {
    width: 100%;
  }
}
</style>
