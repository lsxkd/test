<template>
    <div class="panel panel-default">
        <div class="panel-heading">博客列表</div>
            <div class="table-responsive">
                <table class="table table-striped">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>ID</th>
                        <th>标题</th>
                        <!--<th>内容</th>-->
                        <th>作者</th>
                        <th>分类</th>
                        <th>添加时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(blog,index) in blogs" :key="index">
                        <td>{{index + 1}}</td>
                        <td>{{blog.id}}</td>
                        <td>{{blog.title}}</td>
                        <!--<td>{{blog.content}}</td>-->
                        <td>{{blog.author}}</td>
                        <td>
                            <span v-for="(item,index) in categories" :key="index" v-if="blog.categories.id == item.id">{{item.title}}</span>
                        </td>
                        <td>{{blog.blogTimer}}</td>
                        <td>
                            <router-link :to="'/admin/edit/'+ blog.id">编辑</router-link>
                            <a href="javascript:;" @click="delSingelBlog(blog.id)">删除</a>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
    </div>
</template>                



<script>
export default{
    name:"admin-list",
    data(){
        return {
            blogs:[],
            categories:[],
            //search:"",
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
            // console.log(data)
            var blogsArray = [];
            for(let key in data.posts){
                blogsArray.push(data.posts[key])
            }
            this.blogs = blogsArray
            var categoryArray = []
            for(let key in data.categories){
                categoryArray.push(data.categories[key])
            }
            this.categories = categoryArray
            // console.log(this.categories)
        })
    },
    methods:{
        delSingelBlog(id){
            // this.$http.delete("https://dlovel-fd248.firebaseio.com/posts/" + this.id + ".json")
            this.$http.delete(this.api +"posts/"+ id)
            .then(response =>{
                // this.$router.push({path:'../admin/add'})
                window.location.reload()
            })
            
        }
    }
    
}
</script>

<style scoped>

</style>