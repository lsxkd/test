export default{
    install:function(Vue,opt){
        Vue.mixin({
            methods:{  //所以组件公共方法
                //点击跳转
                handjump(type){
                    this.$router.push(type)
                }
            }
        })
    }
}