<template>
<div>
    <blog-header></blog-header>
    <div  class="container">
        <div class="row">
            <main class="col-md-8 main-content">
                <!--<div class="alert alert-warning" role="alert">
                    <a href="javascript" class="alert-link">搜索-{{search}}</a>
                </div>-->
                <div class="cover tag-cover">
                    <h3 class="tag-name">
                        搜索：{{search}}
                    </h3>
                    <div class="post-count">
                        共 {{filteredBlogs.length}} 篇文章
                    </div>
                </div>
                <article class="post tag-android tag-ke-hu-duan"  v-for="(blog,index) in filteredBlogs" :key="index" v-show="filteredBlogs.length>0">
                    <div class="post-head">
                        <h1 class="post-title"><a  target="_blank" :href="'/blog/' + blog.id">{{blog.title | to-uppercase}}</a></h1>
                        <div class="post-meta">
                            <span class="author">作者：<a  target="_blank" :href="'/blog/' + blog.id">{{blog.author}}</a></span> •
                            <time class="post-date" :datetime="blog.blogTimer" :title="blog.blogTimer">{{blog.blogTimer}}</time>
                        </div>
                    </div>
                    <div class="featured-media" v-show="imageUrl">
                        <a  target="_blank" :href="'/blog/' + blog.id"><img :src="imageUrl"></a>
                    </div>
                    <div class="post-content">
                        <p>{{blog.content | snippet}}</p>
                    </div>
                    <div class="post-permalink">
                        <a target="_blank" :href="'/blog/' + blog.id" class="btn btn-default">阅读全文</a>
                    </div>

                    <footer class="post-footer clearfix">
                        <div class="pull-left tag-list">
                            <i class="fa fa-folder-open-o"></i>
                            <a target="_blank" v-for="(keyword,index) in blog.keywords" :key="index" :href="'/search?kw=' + keyword">{{keyword}}</a>
                        </div>
                        <div class="pull-right share">
                        </div>
                    </footer>
                </article>
                <article class="post tag-android tag-ke-hu-duan" v-show="filteredBlogs.length<=0">
                    <div class="post-content"  >
                        <p>抱歉，暂时没有你要找的数据！！！</p>
                    </div>
                </article>
            </main>
            <blog-silder></blog-silder>
        </div>
    </div>
</div>
   
</template>

<script>
import BlogHeader from '../components/common/BlogHeader'
import BlogSilder from '../components/common/BlogSilder'

export default {
  name: 'show-blogs',
  components: {
    BlogHeader,BlogSilder
  },
  data(){
      return {
        blogs:[],
        search:"",
        imageUrl:"http://qny.dlovel.com/%E9%BB%98%E8%AE%A4%E5%95%86%E5%AE%B6%E5%9B%BE%E6%A0%87%20%281%29.png",
        api:this.Glogal.api, //借口地址
      }
  },
  methods:{
      //获取URL中的参数
      getQueryString(name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if ( r != null ){
        return decodeURI(r[2]);
        }else{
        return null;
        } 
    } 
  },
  created(){
      this.search=this.getQueryString("kw");
    //   console.log(this.search)
    //   this.$http.get("https://dlovel-fd248.firebaseio.com/posts.json")
      this.$http.get(this.api+"db")
      .then(function(data){
          return data.json();
        //   this.blogs = data.body.slice(0,10);
      }).then(function(data){
        var blogsArray = [];
        for(let key in data.posts){
            blogsArray.push(data.posts[key])
        }
        this.blogs = blogsArray
      })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog) => {
              return blog.title.match(this.search) || blog.content.match(this.search) || blog.author.match(this.search)
          })
      }
  },
}
</script>

<style>

</style>