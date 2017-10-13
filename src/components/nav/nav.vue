<template>
  <div class="nav">
    <ul class="nav1" id="nav1" ref="nav1" v-show="flag">
        <router-link to="/js" tag="li" class="item"><a href="">军事</a></router-link>
        <router-link to="/pl" tag="li" class="item"><a href="">评论</a></router-link>
        <router-link to="/gj" tag="li" class="item"><a href="">国际</a></router-link>
        <router-link to="/wh" tag="li" class="item"><a href="">文化</a></router-link>
        <router-link to="/zs" tag="li" class="item"><a href="">招商</a></router-link>
        <router-link to="/ft" tag="li" class="item"><a href="">访谈</a></router-link>
        <router-link to="/jk" tag="li" class="item"><a href="">健康</a></router-link>
        <router-link to="/sh" tag="li" class="item"><a href="">商会</a></router-link>
        <router-link to="/ly" tag="li" class="item"><a href="">旅游</a></router-link>
        <router-link to="/db" tag="li" class="item"><a href="">读报</a></router-link>
        <router-link to="/tp" tag="li" class="item"><a href="">图片</a></router-link>
        <router-link to="/fj" tag="li" class="item"><a href="">佛教</a></router-link>
        <router-link to="/gy" tag="li" class="item"><a href="">公益</a></router-link>
        <router-link to="/yl" tag="li" class="item"><a href="">娱乐</a></router-link>
        <router-link to="/jbf" tag="li" class="item"><a href="">基本法</a></router-link>
    </ul>
    <ul class="nav2">
       <router-link to="/yw" tag="li" class="item"><a href="">要闻</a></router-link>
        <router-link to="/hk" tag="li" class="item"><a href="">香港</a></router-link>
        <router-link to="/nd" tag="li" class="item"><a href="">内地</a></router-link>
        <router-link to="/zx" tag="li" class="item"><a href="">资讯</a></router-link>
        <router-link to="/cj" tag="li" class="item"><a href="">财经</a></router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import bus from 'common/js/eventBus'

export default {
  data () {
    return {
      flag: false
    }
  },
  mounted () {
    bus.$on('change', () => {
      this.toggle()
    })
  },
  methods: {
    toggle () {
      this.flag = !this.flag
    }
  },
  created () {
    // console.log(this.flag)
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
@import "~common/sass/style.scss"

.nav
  width: 100%
  .nav1, .nav2
    width: 100%
    li
      float: left
      width: 20%
      height: px2em(70px)
      line-height: px2em(70px)
      text-align: center
      font-weight: bold
      font-family: "微软雅黑"
      &.router-link-active
        a
          color: red
           text-decoration: underline
  .nav1
    height: px2em(210px)
    background: #ebebeb
    li a
      @include fz(15px)
      color:#595759
  .nav2
    background: #e2dedb
    height: px2em(75px)
    li
      height: px2em(75px)
      a
        @include fz(18px)
        color:#494749
</style>
