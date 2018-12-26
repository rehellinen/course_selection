<template lang="pug">
  div.tree-container
    p.block.blue 我的课程

    div.first-container
      div.first(v-for="item in first")
        div.block.blue
          p {{item.name}}
          p.credit {{item.credit}}

        div.second-container(v-for="item in second")
          div.block.green
            p {{item.name}}
            p.credit {{item.credit}}

</template>

<script>
import * as data from '../utils/data'
export default {
  data () {
    return {
      first: data.first,
      second: data.second
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
        flex-direction: column
  .de
</style>
