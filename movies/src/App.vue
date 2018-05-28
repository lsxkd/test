<template>
  <div id="app">
    <router-view/>
    <app-nav></app-nav>
  </div>
</template>

<script>
import Nav from '@/components/nav/Nav'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    "app-nav":Nav,
  }
}
</script>

<style>

</style>
