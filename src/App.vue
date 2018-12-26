<template lang="pug">
  div.container
    tree
</template>

<script>
import Tree from './components/Tree'

export default {
  components: {
    Tree
  }
}
</script>

<style>
  @import "./assets/css/reset.css";
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3f3f3;
    min-height: 100vh;
  }
</style>
