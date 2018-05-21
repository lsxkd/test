<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <!-- <a class="navbar-brand" href="#">
                    <img alt="Brand" src="http://qny.dlovel.com/%E9%BB%98%E8%AE%A4%E5%95%86%E5%AE%B6%E5%9B%BE%E6%A0%87%20%281%29.png">
                </a> -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">蓝色星空岛</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li :class="{'active':active == ''}"><a href="/" >首页</a></li>
                <li v-for="(category,index) in categoryBox" 
                    :key="index" 
                    :class="{'active':category.id == active}" exact>
                <a :href="'/category/' + category.id" >{{category.title}} </a></li>
            </ul>
            <form class="navbar-form navbar-left">
                <div class="form-group">
                <input type="text" class="form-control" v-model="kws" placeholder="请输入要搜索的内容">
                </div>
                <router-link class="btn btn-default" target="_blank" v-bind:to="'/search?kw=' + kws">搜索</router-link>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                <!-- <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">后台管理 <span class="caret"></span></a> -->
                <router-link   target="_blank"  to="/admin/adminindex" >后台管理</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        name:"blog-header",
        data(){
            return {
                kws:"",
                categoryBox:"",
                active:"",
                api:this.Glogal.api, //借口地址
            }
        },
        created(){
            let hrefs = window.location.href.split("/")
            this.active = hrefs[hrefs.length-1]
            // console.log(this.active)
            this.$http.get(this.api+"db")
                .then(function(data){
                    return data.json();
                    //   this.blogs = data.body.slice(0,10);
                }).then(function(data){
                    var categoriesArray = [];
                    for(let key in data.categories){
                        categoriesArray.push(data.categories[key])
                    }
                    this.categoryBox = categoriesArray
                    // console.log(this.categoryBox)
                })
        },
        methods:{
            
        }
    }
</script>

<style>
    .navbar-brand img{
        width:50px;
        height:50px;
    }
    * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
p {
    margin: 0 0 10px;
}
a {
    color: #e67e22;
    outline: none;
    background-color: transparent;
    text-decoration: none;
}
img {
    vertical-align: middle;
    border: 0;
}
html, body {
    color: #505050;
    line-height: 1.75em;
    background: #ebebeb;
    position: relative;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "WenQuanYi Micro Hei", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
    margin: 0;
    font-size:14px;
}
.post{
    padding: 35px;
    background: #ffffff;
    margin-bottom: 35px;
    position: relative;
    overflow: hidden;
}
.post .post-head {
    text-align: center;
}
.post .post-head .post-title {
    margin: 0;
    font-size: 2.5em;
    line-height: 1em;
}
.post .post-head .post-title a {
    color: #303030;
}
.post .post-head .post-meta {
    color: #959595;
    margin: 14px 0 0px;
}
.post .post-head .post-meta span {
    margin: 0px 7px;
    white-space: nowrap;
}

.post-content {
    font: 400 18px/1.62 "Georgia", "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;
    color: #444443;
}
.post .post-content {
    margin: 30px 0;
}
.post-content p {
    margin-top: 0;
    margin-bottom: 1.46em;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.btn {
    padding: 7px 14px;
    border-radius: 2px;
}
.btn-default {
    border: 1px solid #e67e22;
    background: #e67e22;
    color: #ffffff;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}
.btn-default:hover {
    border: 1px solid #303030;
    background: #303030;
    color: #ffffff;
}
.post .featured-media {
    margin-top: 30px;
    overflow: hidden;
}
.post .featured-media img {
    width: 100%;
}
.post .post-footer {
    margin-top: 30px;
    border-top: 1px solid #ebebeb;
    padding: 21px 0 0;
}
.post .post-footer .tag-list {
    color: #959595;
    line-height: 28px;
}
.pull-left {
    float: left!important;
}
.post .post-footer .tag-list a {
    color: #959595;
    margin-left: 7px;
}
.pull-right {
    float: right!important;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    color: #303030;
}
h4 {
    font-size: 1.5em;
}
:after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.sidebar .widget {
    background: #ffffff;
    padding: 21px 30px;
    margin-bottom: 35px;
}
.widget .title {
    margin-top: 0;
    padding-bottom: 7px;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 21px;
    position: relative;
}
.widget .title:after {
    content: "";
    width: 90px;
    height: 1px;
    background: #e67e22;
    position: absolute;
    left: 0;
    bottom: -1px;
}
.widget .tag-cloud a {
    border: 1px solid #ebebeb;
    padding: 2px 7px;
    color: #959595;
    line-height: 1.5em;
    display: inline-block;
    margin: 0 7px 7px 0;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
.widget .tag-cloud a:hover {
    color: #ffffff;
    background: #e67e22;
    border: 1px solid #e67e22;
    text-decoration: none;
}
blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
    margin: 0 0 1.64em 0;
    border-left: 3px solid #e67e22;
    padding-left: 12px;
    color: #666664;
}
.post-content img {
    max-width: 100%;
    height: auto;
    margin: 0.2em 0;
}
.post .post-footer .tag-list a:hover {
    color: #e67e22;
}
.cover {
    text-align: center;
    background: #ffffff;
    padding: 35px;
    margin-bottom: 35px;
}
.cover .tag-name {
    margin-top: 0;
    font-size:2em;
}
.cover .post-count {
    margin-top: 7px;
    color: #959595;
}
</style>