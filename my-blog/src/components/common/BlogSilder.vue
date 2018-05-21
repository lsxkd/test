<template>
    <aside class="col-md-4 sidebar">
        <div class="widget">
            <h4 class="title">社区</h4>
            <div class="content community">
                <p>QQ群：277327792</p>
                <p><a href="javascript:;" title="Ghost中文网问答社区" target="_blank" ><i class="fa fa-comments"></i> 问答社区</a></p>
                <p><a href="javascript:;" title="Ghost中文网官方微博" target="_blank"><i class="fa fa-weibo"></i> 官方微博</a></p>
            </div>
        </div>
        <div class="widget">
            <h4 class="title">下载 Ghost</h4>
            <div class="content download">
                <a href="javascript:;" class="btn btn-default btn-block">Ghost 中文版（0.7.4）</a>
            </div>
        </div>
        <div class="widget">
            <h4 class="title">标签云</h4>
            <div class="content tag-cloud">
                <a v-for="(item,index) in keywordsBox" :key="index" :href="'/search?kw=' + item">{{item}}</a>
                <a href="#">...</a>
            </div>
        </div>            
    </aside>
</template>

<script>
    export default{
        name:"blog-silder",
        data(){
            return {
                keywordsBox:"",
                api:this.Glogal.api, //借口地址
            }
        },
        created(){

            this.$http.get(this.api+"db")
                .then(function(data){
                    return data.json();
                }).then(function(data){
                    var categoriesArray = [];
                    for(let key in data.posts){
                        for(let keys in data.posts[key].keywords){
                            categoriesArray.push(data.posts[key].keywords[keys])
                        }
                        
                    }
                    this.keywordsBox = categoriesArray
                })
        },
        methods:{
            
        }
    }
</script>

<style scoped>
    .navbar-brand img{
        width:50px;
        height:50px;
    }
</style>