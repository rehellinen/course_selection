<template lang="pug">
  div.tree-container
    p.block.blue 我的课程

    div.first-container
      div.first(v-for="(item, firstIndex) in first")
        div.block.blue
          p {{item.name}}
          p.credit {{item.credit}}

        div.second-container
          div(v-for="(second, secondIndex) in getSecond(firstIndex)")
            div.block.green.small
              p {{second.name}}
              p.credit {{second.credit}}

            div.third-container
              div(v-for="item in getThird(secondIndex)")
                div.block.red.small
                  p {{item.name}}
                  p.credit {{item.credit}}

</template>

<script>
import * as data from '../utils/data'
export default {
  data () {
    return {
      first: data.first,
      second: data.second,
      third: data.third
    }
  },
  methods: {
    getSecond (index) {
      let res = []
      this.second.forEach(item => {
        if (item.fIndex === index) {
          res = item.groups
        }
      })
      return res
    },
    getThird (index) {
      let res = []
      this.third.forEach(item => {
        if (item.gIndex === index) {
          res = item.courses
        }
      })
      return res
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "../assets/sass/base"
  @import "../assets/sass/block"
  .tree-container
    width: 80%
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 30px
    .first-container
      display: flex
      justify-content: space-between
      width: 100%
      margin-top: 20px
      .second-container
        display: flex
        .third-container
          display: flex
          flex-direction: column
  .de
</style>
