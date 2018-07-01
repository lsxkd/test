<template>
    <!-- 提示框 -->
    <div class="tips" v-show="this.tips.show">
        <h1 class="tips_msg">{{tips.msgs}}</h1>
    </div>
</template>

<script>
export default {
  name: 'tips',
  data(){
    return {
        tips:{
            show:false,   //是否显示
            msgs:"",       //提示内容
            msgTime:2000,   //提示显示时间
        }
    }
  },
  created(){
      this.bus.$on('tips',(data)=>{
          this.tips = data
      })
  },
  watch:{
      tips:function(){
          if(this.tips.show){
            setTimeout (() => {
                this.tips.show = false
            },this.tips.msgTime)
          }
      }
  }
}
</script>

<style scoped>
.tips{
    position:fixed;
    z-index: 999;
    left:50%;
    top:50%;
    margin-left:-2.5rem;
    margin-top:-1rem;
    width:5rem;
    height:1rem;
    line-height: 1rem;
    text-align: center;
    background:#000;
    border-radius:0.24rem;
    opacity:0.7;
}
.tips_msg{
    font-size:0.32rem;
    color:#FFF;
    text-align: center;
}
</style>