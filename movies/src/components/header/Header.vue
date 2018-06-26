<template>
  <header class="navbar">
    <div class="nav-wrap-left">
        <a class="back" href="#" onclick="javascript: window.history.back();return false;">
          <i class="icon-back"></i>
        </a>
    </div>
    <h1 class="nav-header">{{headerData.name}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props:{
    headerData:{
      type:Object
    }
  },
  created(){
    // console.log(this.headerData)
  }
}
</script>

<style scoped>
.navbar {
    height: 1.2rem;
    color: #fff;
    background:#e64239;
    border-bottom: 1px solid #e64239;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}
.navbar .nav-wrap-left {
    height: 1.2rem;
    line-height: 1.2rem;
}
.nav-wrap-left a.back {
    height: 1.2rem;
    width: 0.5rem;
    line-height: 1.2rem;
    padding: 0 0.4rem;
    font-size: 0;
}
.icon-back {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: middle;
    position: relative;
}
.icon-back:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 0.38rem;
    height: 0.38rem;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.navbar .h1.nav-header, .navbar h1.nav-header {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    font-size: 0.4rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.2rem;
    margin: 0 1.4rem 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>