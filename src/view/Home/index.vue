<template>
  <div>
    <div>
      <div class="main">
        <h1>轮播图</h1>
        <Left />
      </div>
    </div>
    <div class="foter">
      <mt-navbar fixed v-model="selected" @click.native="tiaogo()">
        <mt-tab-item id="1">首页</mt-tab-item>
        <mt-tab-item id="2">A页</mt-tab-item>
        <mt-tab-item id="3">B页</mt-tab-item>
      </mt-navbar>
    </div>
  </div>
</template>

<script>
import Left from '../Left/index'
import Vue from 'vue'
import { Toast, Swipe, SwipeItem, Navbar, TabItem } from 'mint-ui'
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

export default {
  data() {
    return {
      selected: '1',
    }
  },
  components: {
    Left,
  },
  created() {
    // Toast({
    //     message: '我是弹出框',
    //     position: 'center',
    //     iconClass: 'icon-success',
    //     duration: 5000
    // });
  },
  methods: {
    tiaogo(val) {
      console.log('this.$router---', this.selected)
      if (this.selected == 2) {
        this.$router.push('center')
      }
    },
  },
}
</script>

<style lang="less" scoped>
@span-color: #2c3e50;
div {
  h1 {
    color: @span-color;
  }
}

.foter {
  position: relative;
  .is-fixed {
    top: 92vh;
  }
}
</style>
