<template>
  <div>
    <div class="main">
      <ul ref="ulref" class="uL" :class="{'ulcls':ulStas}">
        <li v-for="(item, index) in List" :key="index" v-show="item.show">
          <img :src="item.url" alt="" />
        </li>
      </ul>
      <span class="right-icon" @click="left"></span>
      <span class="left-icon" @click="right"></span>
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
        {
          url: 'https://icweiliimg1.pstatp.com/weili/l/918167774903664640.webp',
          show:true,
        },
      ],
    }
  },
  mounted(){
      // console.log('UL---',this.$refs.ulref.children[1]);
  },
  methods:{
    // sad(){
    //   this.$refs.ulref.children[1].style.display = 'block'
    // },
    left(){
      // console.log('<---左边',this.$refs.ulref.style);
      this.index--
      console.log('Index---',this.index);
      if(this.index==0){
        console.log('第一个---',this.index);
        this.index=0
        this.$refs.ulref.style.transform = `translateX(${408*this.index}px)`
        this.ulStas =true
      }else{
        this.$refs.ulref.style.transform = `translateX(${408*this.index}px)`
      }
    },
    right(){
      console.log('>---右边');
      this.index++
      if(this.index==this.List.length){
        this.$refs.ulref.style.transform = `translateX(${0}px)`
        this.ulStas =false
        setTimeout(()=>{
          this.ulStas =true
          this.$refs.ulref.style.transform = `translateX(${-408}px)`
          this.index = 1
        })
      }else{
        this.$refs.ulref.style.transform = `translateX(${-408*this.index}px)`
        this.ulStas =true
      }
      // this.$refs.ulref.style.transform = `translateX(${-408*this.index}px)`
      console.log('Index---',this.index);
      
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
        // display: none;
        // display: block;
        &:first-child{
          margin-left: 0;
        }
        img{
          width: 96vw;
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
      background: url('../../assets/0032017383494470_b.jpg') no-repeat;
      background-position: -140px -140px;
      z-index: 10;
    }
    .left-icon{
      position: absolute;
      right: 25px;
      top: 118px;
      width: 47px;
      height: 51px;
      background: url('../../assets/0032017383494470_b.jpg') no-repeat;
      background-position: -140px -275px;
      z-index: 10;
    }

    .ulcls{
      transition: all .8s;
    }
  }
</style>
