<template>
    <ul class="nav nav-sidebar" :style="{minHeight:heights + 'px'}">
        <li @click="heighta"><router-link to="/admin/adminindex"   exact>博客首页</router-link></li>
        <li @click="heighta"><router-link to="/admin/addCategory" exact>添加分类</router-link></li>
        <li @click="heighta"><router-link to="/admin/CateGoryList"  exact>分类列表</router-link></li>
        <li @click="heighta"><router-link to="/admin/add" exact>添加博客</router-link></li>
        <li @click="heighta"><router-link to="/admin/BlogList" exact>博客列表</router-link></li>
        
        
    </ul>
</template>                



<script>
export default {
    name: 'admin-silder',
    data(){
        return {
            activated:0,
            heights:""
        }
    },
    methods:{
        heighta(){
            if(window.innerWidth > 768){
                this.heights = window.innerHeight - 100
            }
        }
    },
    created(){
        if(window.innerWidth > 768){
            this.heights = window.innerHeight - 100
        }
    }
    
}
</script>

<style scoped>
.router-link-active{
    color: #fff;
    background-color: #428bca;
}
.router-link-active:visited{
    color: #fff;
    background-color: #428bca;
}
</style>