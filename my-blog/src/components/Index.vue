<template>
<div>
    <blog-header></blog-header>
    <div  class="container">
        <div class="row">
            <main class="col-md-8 main-content">
                <article class="post tag-android tag-ke-hu-duan"  v-for="(blog,index) in blogs" :key="index" v-show="blogs.length>0">
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
                <article class="post tag-android tag-ke-hu-duan" v-show="blogs.length<=0">
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
  id:"",
  name: 'index',
  components: {
    BlogHeader,BlogSilder
  },
  data(){
      return {
        blogs:[],
        search:"",
        imageUrl:"http://qny.dlovel.com/%E9%BB%98%E8%AE%A4%E5%95%86%E5%AE%B6%E5%9B%BE%E6%A0%87%20%281%29.png",
        api:this.Glogal.api //借口地址
      }
  },
  created(){
      this.$http.get(this.api + "db")
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

  },
//   filters:{//组件内过滤器
//       "to-uppercase":function(value){
//           return value.toUpperCase()
//       }
//   },
//   directives:{//组件内指令
//       'rainbow':{
//           bind(el,binding,vnode){
//                 el.style.color = "#" + Math.random().toString(16).slice(2,8)
//             }
//       }
//   }
}
</script>

<style>

</style>
