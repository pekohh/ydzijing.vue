<template>
  <div class="content" ref="content">
    <ul class="con" v-html='msg' ref="con" v-show="msg.length > 0">   
    </ul>
    <loading title=''></loading>
  </div>
</template>

<script type="text/ecmascript-6">
import loading from 'base/loading/loading'
import {getData} from 'api/getData'
import {addClass} from 'common/js/dom'
import {mapGetters, mapMutations} from 'vuex'

let navid = {
  'yw': 1201,
  'hk': 1201,
  'nd': 1285,
  'gj': 1228,
  'cj': 1215,
  'zx': 1296,
  'js': 1233,
  'pl': 1257,
  'wh': 1274,
  'ly': 1241,
  'ft': 1313,
  'gy': 1337,
  'jk': 1312,
  'fj': 1338,
  'zt': 1294,
  'yl': 1336,
  'tp': 1273
}
export default {
  data () {
    return {
      nav: navid,
      msg: '',
      children: []
    }
  },
  created () {
    this.furl()
    this._getData(this.num)
  },
  updated () {
    let children = this.$refs.con.children
    this.children = children
    this.$emit('changeData', this.children.length)
    // console.log(typeof this.children)
    for (let i = 0; i < children.length; i++) {
      let child = children[i]
      addClass(child, 'li-item')
      child.style.borderBottom = '1px solid #e5e5e5'
      child.style.padding = '25px 0'
      child.style.height = '204px'
      child.children[0].style.width = 'px2em(180px)'
      child.children[0].style.float = 'left'
      child.children[1].style.float = 'left'
      child.children[1].style.width = '60%'
      child.children[1].style.marginLeft = '25px'
    }
    // console.log(children)
  },
  computed: {
    ...mapGetters([
      'num',
      'page'
    ])
  },
  methods: {
    _getData (num, page) {
      getData(num, page).then((res) => {
        if (res.state) {
          this.msg = res.data
        }
      })
    },
    furl () {
      let path = this.$route.path.substring(1)
      for (let k in navid) {
        let value = navid[k]
        if (k === path) {
          this.setNum(value)
          this.setPage(1)
        }
      }
    },
    ...mapMutations({
      setNum: 'SET_NUM',
      setPage: 'SET_PAGE'
    })
  },
  watch: {
    $route (to) {
      let path = to.path.substring(1)
      for (var k in this.nav) {
        let value = this.nav[k]
        if (k === path) {
          this.setNum(value)
          this.setPage(1)
        }
      }
      this._getData(this.num, this.page)
    },
    page (newPage) {
      console.log(newPage)
      if (newPage !== 1) {
        getData(this.num, this.page).then((res) => {
          if (res.state) {
            this.msg += res.data
          }
        })
      }
    }
  },
  components: {
    loading
  },
  beforeRouteEnter (to, from, next) { // 组件内的钩子函数
    let fIndex = Object.keys(navid).findIndex((item) => {
      return item === to.path.substring(1)
    })
    if (fIndex === -1) {
      next((vm) => {
        vm.$router.back()
      })
    } else {
      next()
    }
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
@import "~common/sass/style.scss"
.content
  height: 100%
  width: 100%
  .con
    margin-top: 10px
    .li-item
      padding: 25px 0
      border-bottom: 1px solid #e5e5e5
</style>
