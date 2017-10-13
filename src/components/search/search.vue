<template>
  <div class="search">
    <form>
        <input type="text" class="text" placeholder="请输入搜索内容"/>
        <input type="submit" value="" class="btn" />
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
@import "~common/sass/style.scss"
.search
  padding: 20px 52px 20px 38px
  position: relative
  .text
    width: 75%
    padding-left: 25%
    border: 1px solid #dcdcdc
    color: #5d5d5d
    border-radius: 25px
    height: px2em(58px)
    @include fz(14px)
  .btn
    position: absolute
    left: 20%
    top: 40%
    background: url('./search.png') no-repeat
    background-size: px2em(31px) px2em(31px)
    width: px2em(31px)
    height: px2em(31px)
    cursor: pointer

</style>
