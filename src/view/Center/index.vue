<template>
  <div>
    
    <div class="main">
      <ul ref="ulref" class="uL" :class="{'ulcls':ulStas}" name="ul">
        <li v-for="(item, index) in List" :key="index" v-show="item.show">
          <img :src="item.url" alt="" />
        </li>
      </ul>
      <span class="right-icon iconfont icon-zuo" @click="left"></span>
      <span class="left-icon iconfont icon-you" @click="right"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ulStas:false,
      index:0,
      List: [
        {
          url: 'https://icweiliimg1.pstatp.com/weili/l/918167774903664640.webp',
          show:true,
        },
        {
          url: 'https://icweiliimg9.pstatp.com/weili/l/919002682181550118.webp',
          show:true,
        },
        {
          url: 'https://weiliicimg9.pstatp.com/weili/l/899976475277263036.webp',
          show:true,
        },
        // 第一张图,为了无缝切换
        {
          url: 'https://icweiliimg1.pstatp.com/weili/l/918167774903664640.webp',
          show:true,
        },
      ],
    }
  },
  methods:{
    left(){
     if(this.index==0){
        this.$refs.ulref.style.transform = `translateX(${-408*3}px)`
        this.ulStas =false
        this.$nextTick(()=>{
          setTimeout(()=>{
          this.ulStas =true
          this.$refs.ulref.style.transform = `translateX(${-408*2}px)`
          this.index = 2
        })
        })
        return
      }
      this.index--
      console.log('Index---',this.index);
      this.ulStas =true
      this.$refs.ulref.style.transform = `translateX(${-408*this.index}px)`
      // this.$refs.ulref.style.transform = `translateX(${-408*this.index}px)`
      
    },
    right(){
      console.log('>---右边');
      this.index++
      console.log('Index---',this.index);
      if(this.index==this.List.length){
        this.$refs.ulref.style.transform = `translateX(${0}px)`
        this.ulStas =false
        this.$nextTick(()=>{
          setTimeout(()=>{
          this.ulStas =true
          this.$refs.ulref.style.transform = `translateX(${-408}px)`
          this.index = 1
        })
          })
        
      }else{
        this.$refs.ulref.style.transform = `translateX(${-408*this.index}px)`
        this.ulStas =true
      }
      // this.$refs.ulref.style.transform = `translateX(${-408*this.index}px)`
    },
  },
}
</script>

<style lang="less" scoped>
  .main{
    width: 100%;
    overflow: hidden;
    ul{
        display: flex;
        padding-left: 0;
        min-width: 300px;
        &::after{
          content: '';
        }
      li{
        list-style: none;
        width: 100%;
        margin-left: 10px;
        &:first-child{
          margin-left: 0;
        }
        img{
          width: 25rem;
          height: auto;
        }
      }
      
    }

    .right-icon{
      position: absolute;
      left: 25px;
      top: 118px;
      width: 47px;
      height: 51px;
      font-size: 60px;
      font-weight: bold;
      z-index: 10;
    }
    .left-icon{
      position: absolute;
      right: 25px;
      top: 118px;
      width: 47px;
      height: 51px;
      font-size: 60px;
      font-weight: bold;
      z-index: 10;
    }

    .ulcls{
      transition: all .5s;
    }
  }
</style>
