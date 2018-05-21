<template>
    <div class="panel panel-default">
        <div class="panel-heading">分类列表</div>
            <div class="table-responsive">
                <table class="table table-striped">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>ID</th>
                        <th>标题</th>
                        <th>描述</th>
                        <th>添加时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(category,index) in categories" :key="index">
                        <td>{{index + 1}}</td>
                        <td>{{category.id}}</td>
                        <td>{{category.title}}</td>
                        <td>{{category.description}}</td>
                        <td>{{category.timer}}</td>
                    <td>
                        <router-link :to="'/admin/CateGoryEdit/' + category.id">编辑</router-link>
                        <a href="javascript:;" @click="delSingelBlog(category.id)">删除</a>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
    </div>
</template>                



<script>
export default{
    name:"category-list",
    data(){
        return {
            categories:[],
            ids:"",
            api:this.Glogal.api, //借口地址

        }
    },
    created(){
        //   this.$http.get("https://dlovel-fd248.firebaseio.com/posts.json")
        this.$http.get(this.api+"db")
        .then(function(data){
            return data.json();
            //   this.blogs = data.body.slice(0,10);
        }).then(function(data){
            var categoriesArray = [];
            for(let key in data.categories){
                categoriesArray.push(data.categories[key])
            }
            this.categories = categoriesArray
            // console.log(this.blogs)
        })
    },
    methods:{
        delSingelBlog(id){
            // this.$http.delete("https://dlovel-fd248.firebaseio.com/posts/" + this.id + ".json")
            this.$http.delete(this.api + "categories/"+id)
            .then(response =>{
                // this.$router.push({path:'../admin/add'})
                // window.location.reload()
            })
            .then(function(){
                this.$http.get(this.api+"db")
                .then(function(data){
                    return data.json();
                    //   this.blogs = data.body.slice(0,10);
                }).then(function(data){
                    for(let key in data.posts){
                        if(data.posts[key].categories.id == id){
                            this.$http.delete(this.api + "posts/" + data.posts[key].id)
                            .then(response =>{
                                window.location.reload()
                            })      
                        }     
                    }
                })
            })
            .then(res => {
                // window.location.reload()
            })
            
            
        },

    }
    
}
</script>

<style scoped>

</style>