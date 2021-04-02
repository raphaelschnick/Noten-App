<template>
  <div id="app">
    <sidebar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  components: { Sidebar }
}
</script>


<style lang="scss">
  @import 'assets/scss/custom-vars.scss';
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
</style>
