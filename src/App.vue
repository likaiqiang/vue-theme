<template>
  <div id="app">
    <colors></colors>
    <component1></component1>
    <hr>
    <component2></component2>
  </div>
</template>

<script>
import component1 from './components/a.vue'
import component2 from './components/b.vue'
import colors from './colors.vue'
export default {
  name: 'app',
  components: {
    component1,
    component2,
    colors
  }
}
</script>
