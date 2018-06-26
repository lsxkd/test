<template>
    <div>
        <Header :headerData="headerData"></Header>
        <div class="myorder">
            <ul class="list-unstyled l_mover_list_ul">
                <li v-for="(items,index) in myOrderList" :key="index">
                    <a href="javascript:;" class="l_mover_titles">
                        <span class="l_mover_titles_span">{{items.cinema.name}}</span>
                    </a>
                    <a href="javascript:;" class="l_mover_as">
                        <div class="l_mover_img"><img :src="items.movie.img"></div>
                        <div class="l_mover_right">
                            <div class="l_flex_item">
                                <div class="l_mover_name">
                                    {{items.movie.name}}
                                </div>
                                <p class="rfs14 c_666">观众评分 <span class="c_ff9 rfs16 v-align-initial">8.9</span></p>
                                <p class="rfs14 c_999">动作/冒险/喜剧</p>
                                <p class="rfs14 c_999">主演：克里斯·海姆斯沃斯,汤姆·希德勒斯顿,凯...</p>
                            </div>
                        </div>
                    </a>
                    <div class="order-more  mb-line-t">
                        <div class="commons price">总价：<span>56元</span></div>
                        <div class="commons status">已完成</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import Header from '@/components/header/header'
export default {
  name: 'Nav',
  data () {
    return {
      msg: '',
      headerData:{"name":"我的电影订单"}, //头部信息
      myOrderList:{},
    }
  },
  components:{
    Header,
  },
  methods:{

  },
  created(){
      console.log(this.headerData)
      //我的订单列表
    fetch("/api/my_order_list")
    .then(res => {
        return res.json()
    })
    .then(response =>{
        this.myOrderList = response.orderlist
        console.log(this.myOrderList)
    })
  },
}
</script>

<style>
.l_mover_list_ul{background:#f3f3f3;}
.l_mover_list_ul li{background: #fff;display: inline-block;margin:0  0 0.25rem 0;width: 100%;position: relative;box-sizing: border-box;}
.l_mover_as{padding:0.25rem 0;margin:0 0.25rem;display: block;border-bottom: 1px solid #f0f0f0;}
.l_mover_img{width: 2.2rem;height:2.8rem;display: block;float: left;position: relative;}
.l_mover_img img{ display: block;width: 100%;max-height:100%;}
.l_mover_right{margin: .1rem 0 0 2.5rem;position: relative;}
.l_flex_item{overflow: hidden;text-overflow: ellipsis;flex: 1;align-items: center;}
.l_mover_name{white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: #222;font-size: .4347rem;margin-right: 1.8rem;margin-bottom:4px}
.l_mover_buy{position:absolute;right:10px;top:15px;font-size:.3381rem;line-height:.6rem;color:#fff;background-color:#e64239;border-radius:10rem;display:inline-block;width:1.2rem;text-align: center}
.l_mover_presale{position:absolute;right:10px;top:15px;font-size:.3381rem;line-height:.6rem;color:#fff;background-color:#b08c4a;border-radius:10rem;display:inline-block;width:1.2rem;text-align: center}
.l_mover_right p{white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: .7rem;}
.l_tab_ul{position:fixed;z-index: 99;width:100%;background:#FFF;}
.l_tab_cont{padding-top:1.2rem}

.l_mover_titles{
    display: block;
    width:100%;
    height:1rem;
    line-height:1rem;
    border-bottom:1px solid #f0f0f0;
    padding:0 0.25rem;
    font-size: 0;
}
.l_mover_titles_span{
    display: inline-block;
    text-align: left;
    line-height: 1rem;
    height: 1rem;
    font-size: 0.35rem;
    color: #666;
    margin-right: 0.16rem;
}
.l_mover_titles_span:after {
    display: inline-block;
    content: "";
    width: 7px;
    height: 7px;
    border-left: 1px solid #777;
    border-top: 1px solid #777;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
}
.order-more {
    margin-left: 0.25rem;
    padding: 0 0.25rem 0 0;
    font-size:0;
}
.order-more .commons{
    line-height: 1.12rem;
    height: 1.12rem;
    font-size: 0.35rem;
    color: #888;
    display: inline-block;
}
.order-more .status {
    color: #333;
    float: right;
}
</style>