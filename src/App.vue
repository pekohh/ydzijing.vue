<template>
  <div id="app">
    <scroll :data="data" 
    class="scroll" 
    ref="scroll" 
    :pullup="pullup" 
    @scrollToEnd='searchMore'>
      <div>
        <v-header></v-header>
        <v-nav></v-nav>
        <search></search>
        <slider></slider>
        <keep-alive>
          <router-view @changeData="scrollData" ref="content"></router-view>
        </keep-alive>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import vHeader from 'components/header/header'
import vNav from 'components/nav/nav'
import search from 'components/search/search'
import slider from 'components/slider/slider'
import scroll from 'base/scroll/scroll'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      data: [],
      pullup: true // 是否开启上拉加载更多
    }
  },
  methods: {
    scrollData (data) {
      this.data.push(data)
      // this.$nextTick(this.$refs.scroll.refresh())
    },
    searchMore () {
      this.setPage(this.page + 1)
    },
    ...mapMutations({
      setNum: 'SET_NUM',
      setPage: 'SET_PAGE'
    })
  },
  computed: {
    ...mapGetters([
      'num',
      'page'
    ])
  },
  components: {
    vHeader,
    vNav,
    search,
    slider,
    scroll
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
#app
  position: fixed
  width: 100%
  top: 0
  bottom: 0
  .scroll
    height: 100%
    overflow: hidden
</style>
