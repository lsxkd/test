<template>
  <div id="app">
    <router-view/>
    <app-nav></app-nav>
    <tips></tips>
  </div>
</template>

<script>
import Nav from '@/components/nav/Nav'
import tips from '@/components/common/tips'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    "app-nav":Nav,
    tips,
  }
}
</script>

<style>

</style>
