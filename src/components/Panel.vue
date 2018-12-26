<template lang="pug">
  div.panel-container
    div.block(v-for="item in blockArr")
      p.number {{item.number}}
      p.desc {{item.desc}}
</template>

<script>
export default {
  data () {
    return {
      blockArr: []
    }
  },
  created () {
    this.initBlock()
  },
  methods: {
    initBlock () {
      this.blockArr = [
        { number: '160', desc: '要求学分' }
      ]
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "../assets/sass/base"

  .panel-container
    width: 80%
    background-color: white
    margin-top: 30px
    display: flex
    flex-wrap: wrap
    .block
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      width: 70px
      height: 70px
      border: 1px solid $lighter-font-color
      margin: 10px
      .number
        color: $light-font-color
        font-size: $bigger-font-size
      .desc
        color: $base-font-color
  .de
</style>
