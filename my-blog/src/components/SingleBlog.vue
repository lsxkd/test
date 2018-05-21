<template>
<div>
    <blog-header></blog-header>
    <div class="container">
        <div class="row">
            <main class="col-md-8 main-content">
                <!--<article class="post page">
                    <header class="post-head">
                    <h1 class="post-title">关于 Ghost 中文网</h1>
                    </header>
                    <section class="post-content">
                        <blockquote>
                            <p>Ghost 是基于 Node.js 的开源博客平台，由前 WordPress UI 部门主管 <a href="http://john.onolan.org/">John O’Nolan</a> 和 WordPress 高级工程师（女） <a href="http://hannah.wf/">Hannah Wolfe</a> 创立，目的是为了给用户提供一种更加纯粹的内容写作与发布平台。</p>
                        </blockquote>
                        <p><a href="http://static.ghostchina.com/image/b/5e/877fa798be75dbe791dba07ac4811.jpg" class="mfp-zoom" style="display:block;"><img src="http://static.ghostchina.com/image/b/5e/877fa798be75dbe791dba07ac4811.jpg" alt="John O’Nolan 和 Hannah Wolfe"></a></p>
                        <p>2013 年 9 月份，Ghost 正式向公众发布，Ghost 中文网也随之上线。 <br>
                        Ghost 中文网的目标是致力于 Ghost 开源博客系统在国内的推广，与广大 Ghost 用户分享 Ghost 相关的知识、技巧。</p>
                        <hr>
                        <p>如果你也喜欢 Ghost ，可以通过以下方式与我们交流：</p>
                        <ul>
                            <li>微博：<a href="http://weibo.com/ghostchinacom">@ghostchinacom</a></li>
                            <li>QQ群：309172035</li>                          
                        </ul>
                        <hr>
                        <p>合作站点：</p>
                        <ul>
                            <li><a href="http://www.bootcss.com/">Bootstrap 中文网</a></li>
                            <li><a href="http://www.bootcdn.cn/">开放 CDN 服务</a></li>
                            <li><a href="http://www.gruntjs.net/">Grunt 中文网</a></li>
                            <li><a href="http://www.golaravel.com/">Laravel 中文网</a></li>
                            <li><a href="http://www.jquery123.com/">jQuery 中文文档</a></li>
                        </ul>
                        <p>合作伙伴：</p>
                        <ul>
                            <li><a href="http://www.aliyun.com/">阿里云</a></li>
                        </ul>
                        <p>赞助商：</p>
                        <ul>
                            <li><a href="https://www.upyun.com/">又拍云</a></li>
                            <li><a href="http://www.ucloud.cn/">UCloud</a></li>
                            <li><a href="http://www.qiniu.com/">七牛云存储</a></li>
                        </ul>
                    </section>
                </article>-->
                <article class="post page">
                    <header class="post-head">
                        <h1 class="post-title">{{blog.title}}</h1>
                        <div class="post-meta">
                            <span class="author">作者：<a :href="'/blog/' + blog.id">{{blog.author}}</a></span> •
                            <time class="post-date" :datetime="blog.blogTimer" :title="blog.blogTimer">{{blog.blogTimer}}</time>
                        </div>
                    </header>
                    <section class="post-content">
                        <blockquote>
                            <p>{{blog.w_description}}</p>
                        </blockquote>
                        <p>
                            <a href="javascript:;" class="mfp-zoom" style="display:block;">
                                <img src="http://static.ghostchina.com/image/b/5e/877fa798be75dbe791dba07ac4811.jpg" >
                            </a>
                        </p>
                        <p>{{blog.content}}。</p>
                        <hr>
                        <p>如果你也喜欢 Ghost ，可以通过以下方式与我们交流：</p>
                        <ul>
                            <li>微博：<a href="http://weibo.com/ghostchinacom">@ghostchinacom</a></li>
                            <li>QQ群：309172035</li>                          
                        </ul>
                        <hr>
                        <p>合作站点：</p>
                        <ul>
                            <li><a href="http://www.bootcss.com/">Bootstrap 中文网</a></li>
                            <li><a href="http://www.bootcdn.cn/">开放 CDN 服务</a></li>
                            <li><a href="http://www.gruntjs.net/">Grunt 中文网</a></li>
                            <li><a href="http://www.golaravel.com/">Laravel 中文网</a></li>
                            <li><a href="http://www.jquery123.com/">jQuery 中文文档</a></li>
                        </ul>
                        <p>合作伙伴：</p>
                        <ul>
                            <li><a href="http://www.aliyun.com/">阿里云</a></li>
                        </ul>
                        <p>赞助商：</p>
                        <ul>
                            <li><a href="https://www.upyun.com/">又拍云</a></li>
                            <li><a href="http://www.ucloud.cn/">UCloud</a></li>
                            <li><a href="http://www.qiniu.com/">七牛云存储</a></li>
                        </ul>
                    </section>
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

    export default{
        name:"singleblog",
        components: {
            BlogHeader,BlogSilder
        },
        data(){
            return {
                id:this.$route.params.id,
                blog:{},
                newObj:{},
                api:this.Glogal.api, //借口地址
            }
        },
        created(){
            // this.$http.get("https://dlovel-fd248.firebaseio.com/posts/" + this.id + ".json")
            this.$http.get(this.api+"posts")
            .then(function(data){
                for(let key in data.body){
                    if(data.body[key].id == this.id){
                        this.blog = data.body[key]
                    }
                }
                return data.json();
            })
        },
        methods:{
            // delSingelBlog(){
            //     // this.$http.delete("https://dlovel-fd248.firebaseio.com/posts/" + this.id + ".json")
            //     let id = this.id
            //     this.$http.delete("http://localhost:3003/posts/"+id)
            //     .then(response =>{
            //         this.$router.push({path:'/'})
            //     })
                
            // }
        }
    }
</script>
<style>

</style>
