<template>
<div id="add-blog"  class="panel panel-default">
    <div class="panel-heading">添加分类</div>
    <form v-if="!submmited">
        <label for="">分类标题</label>
        <input class="form-control" type="text" v-model="categories.title" required>
        <label for="">分类描述</label>
        <textarea class="form-control" rows="3" v-model="categories.description"></textarea>
        <button v-on:click.prevent="post" class="btn btn-primary">添加分类</button>
    </form>
    <div class="panel-body" v-if="submmited">
        <h3>您的博客发布成功！</h3>
        <div id="preview">
            <h3>博客总览</h3>
            <p>分类标题:{{categories.title}}</p>
            <p>分类描述:</p>
            <p>{{categories.description}}</p>
        </div>
    </div>
    
</div>
  
</template>

<script>
export default {
    // https://jsonplaceholder.typicode.com/
    // https://jsonplaceholder.typicode.com/posts
    // https://dlovel-fd248.firebaseio.com/posts.json
  name: 'add-blog',
  data () {
    return {
      categories:{
          id:"",
          title:"",
          description:"",
          timer:""
      },
      submmited:false,
      api:this.Glogal.api, //借口地址
      timeFormat:this.Glogal.timeFormat
    }
  },
  methods:{
      post:function(){
          let roundNum = new Date().getTime()
          this.categories.id="c"+roundNum
          this.categories.timer = this.timeFormat(roundNum)
        //   this.$http.post("https://dlovel-fd248.firebaseio.com/posts.json",this.blog)
          this.$http.post(this.api+"categories",this.categories)
          .then(function(data){
            this.submmited = true
            this.$router.push({path:'../admin/CateGoryList'})
            window.location.reload()
          })
      },
  },
  computed:{
      
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
    box-sizing:border-box;
}

#add-blog form{
    padding:20px;
}
label{
    display:block;
    margin:20px 0 10px;
}
/* input[type=text],textarea,select{
    display:block;
    width:100%;
    padding:8px;
} */
textarea{
    max-width:100%;
}
#checkboxes label{
    display:inline-block;
    margin-top:0;
}
#checkboxes input{
    display:inline-block;
    margin-right:10px;
}
button{
    display:block;
    margin:20px 0;
    /* background:crimson;
    color:#FFF;
    border:0;
    padding:14px;
    border-radius:4px; 
    font-size:18px;*/
    cursor:pointer;
}

#preview{
    padding:10px 20px;
    margin:30px 0;
}
h3{
    margin-top:10px;
}
article{
    max-width:100%;
}
.row{
        margin-top:52px;
        position:relative;
    }
    .leftsilder{
        background-color: #f5f5f5;
        border-right: 1px solid #eee;
        padding:20px 0;
    }
    .active a{
        color: #fff;
        background-color: #428bca;
    }
    .active a:hover{
        color: #fff;
        background-color: #428bca;
    }
</style>
