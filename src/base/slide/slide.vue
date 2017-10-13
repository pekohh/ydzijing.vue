<template>
  <div class="slide" ref="slide">
    <div class="slide-group" ref="slideGroup">
      <slot>
      </slot>
    </div>
    <div v-if="showDot" class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

const COMPONENT_NAME = 'slide'

export default {
  name: COMPONENT_NAME,
  props: {
    loop: { // 是否无缝轮播
      type: Boolean,
      default: true
    },
    autoPlay: { // 是否自动轮播
      type: Boolean,
      default: true
    },
    interval: { // 轮播时间延迟
      type: Number,
      default: 4000
    },
    showDot: { // 小圆点是否展示
      type: Boolean,
      default: true
    },
    click: { // 是否派发点击事件
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSlideWidth()
      if (this.showDot) {
        this._initDots()
      }
      this._initSlide()

      if (this.autoPlay) {
        this._play()
      }
    }, 20)
    // 窗口大小改变时重新计算宽度
    window.addEventListener('resize', () => {
      if (!this.slide || !this.slide.enabled) {
        return
      }
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        if (this.slide.isInTransition) {
          this._onScrollEnd()
        } else {
          if (this.autoPlay) {
            this._play()
          }
        }
        this.refresh()
      }, 60)
    })
  },
  activated () {
    if (!this.slide) {
      return
    }
    this.slide.enable()
    let pageIndex = this.slide.getCurrentPage().pageX
    if (pageIndex > this.dots.length) {
      pageIndex = pageIndex % this.dots.length
    }
    this.slide.goToPage(pageIndex, 0, 0)
    if (this.loop) {
      pageIndex -= 1
    }
    this.currentPageIndex = pageIndex
    if (this.autoPlay) {
      this._play()
    }
  },
  deactivated () {
    this.slide.disable()
    clearTimeout(this.timer)
  },
  beforeDestroy () {
    this.slide.disable()
    clearTimeout(this.timer)
  },
  methods: {
    refresh () {
      this._setSlideWidth(true)
      this.slide.refresh()
    },
    next () {
      this.slide.next()
    },
    _setSlideWidth (isResize) {
      this.children = this.$refs.slideGroup.children

      let width = 0
      let slideWidth = this.$refs.slide.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]

        child.style.width = slideWidth + 'px'
        width += slideWidth
      }
      if (this.loop && !isResize) {
        width += 2 * slideWidth
      }
      this.$refs.slideGroup.style.width = width + 'px'
    },
    _initSlide  () {
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        },
        click: this.click
      })

      this.slide.on('scrollEnd', this._onScrollEnd)

      this.slide.on('touchend', () => {
        if (this.autoPlay) {
          this._play()
        }
      })

      this.slide.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this.timer)
        }
      })
    },
    _onScrollEnd () {
      let pageIndex = this.slide.getCurrentPage().pageX
      if (this.loop) {
        pageIndex -= 1
      }
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this._play()
      }
    },
    _initDots () {
      this.dots = new Array(this.children.length)
    },
    _play () {
      let pageIndex = this.slide.getCurrentPage().pageX + 1
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slide.goToPage(pageIndex, 0, 400)
      }, this.interval)
    }
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
@import "~common/sass/style.scss"
.slide
  min-height: 1px
  position: relative
  width: 100%
  .slide-group
    overflow: hidden
    white-space: nowrap
    .slide-item
      float: left
      box-sizing: border-box
      overflow: hidden
      text-align: center
      a
        display: block
        width: 100%
        overflow: hidden
        text-decoration: none
        img
          display: block
          width: 100%
  .dots
    position: absolute
    right: 0
    left: 0
    bottom: 12px
    transform: translateZ(1px)
    text-align: center
    font-size: 0
    .dot
      display: inline-block
      margin: 0 4px
      width: 8px
      height: 8px
      border-radius: 50%
      background: orange
      &.active
        width: 20px
        border-radius: 5px
        background: red
</style>
