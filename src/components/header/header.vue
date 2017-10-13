<template>
  <div class="header">
    <div class="logo">
    	<img src="./logo.png">
    </div>
    <div class="title">
      <p>紫荆网新闻</p>
      <p class="title2">影响有影响力的人</p>
    </div>  
    <div class="btn" @click="change">
      <img src="./cd.png" >
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import bus from 'common/js/eventBus'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    change () {
      bus.$emit('change')
    }
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
@import "~common/sass/style.scss"
.header
  width: 100%
  height: px2em(96px)
  padding-top: px2em(25px)
  background:#3575c6
  color:#fff
  .logo
    width: px2em(68px)
    height: px2em(68px)
    float: left
    margin-left: px2em(25px)
    img
      width: px2em(64px)
      height: px2em(64px)
  .title
    width: px2em(300px)
    height: px2em(70px)
    float: left
    margin-left: px2em(15px)
    p
      line-height: px2em(35px)
      width: px2em(210px)
      height: px2em(35px)
      @include fz(13px)
    p.title2
      @include fz(11px)
      border-top: #FFF 1px solid
  .btn
    float: right
    width: px2em(108px)
    height: px2em(60px)
    margin-top: px2em(14px)
    img
      margin-left: px2em(30px)
      width: px2em(53px)
      height: px2em(49px)
</style>
