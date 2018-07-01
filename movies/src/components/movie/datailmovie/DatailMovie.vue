<template>
  <div>
    <Header :headerData="headerData"></Header>
    <div class="detailmovie">
        <div class="l_movie_data_cont">
            <div class="l_data_show_item">
                <div class="l_data_movie_cover">
                    <a href="">
                        <img :src="datailMovie.img" alt="">
                    </a>
                </div>
                <div class="l_data_movie_right">
                    <div class="l_data_table">
                        <div class="l_data_movie_name rfs20 c_fff">{{datailMovie.nm}}</div>
                        <div class="rfs12 c_d5d">{{datailMovie.enm}}</div>
                        <div class="rmt10 rmb10 c_d5d rfs14">观众评分<strong class="c_ff9 rml5 v-align-initial">{{datailMovie.sc}}</strong>({{datailMovie.snum}}人评分)</div>
                        <div class="c_d5d rmb5 rfs14">{{datailMovie.cat}}{{datailMovie.version}}</div>
                        <div class="c_d5d rmb5 rfs14">{{datailMovie.src}}/{{datailMovie.dur}}分钟</div>
                        <div class="c_d5d rfs14 ">{{datailMovie.pubDesc}}</div>
                    </div>

                </div>
            </div>
            <div class="bg_fff rpd15 rmb15">
                <div class="l_data_text_expander over text_em rline24 rfs14 c_666">
                    {{datailMovie.dra}}
                </div>
                <div class="l_data_text_expander_button text-center rline20">
                    <i class="icon-arrow iconfont rfs20"></i>
                </div>
            </div>
            <div class="bg_fff rpd15 rmb15 rpr0">
                <div class="rfs18 c_666 rmb10">演职人员</div>
                <ul class="list-unstyled l_data_movie_list">
                    <li v-for="(items,index) in datailMovie.photos" :key="index">
                        <a href="javascript:;">
                            <div class="l_data_name_img amg">
                                <img :src="items" alt="">
                            </div>
                            <div class="l_data_name_text rfs16 c_666 rmt10 text-center">
                                本·阿弗莱克
                            </div>
                            <div class="l_data_name_roles rfs14 c_999 text-center rmt5">
                                饰  蝙蝠侠
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="bg_fff rpd15 rmb5">
                <div class="rfs18 c_666 rmb10">海报和预告片 
                    <a href="" class="pull-right c_999 rfs14 inline-block rline26">视频{{datailMovie.vnum}}&nbsp;&nbsp;|&nbsp;&nbsp;图片{{datailMovie.pn}}</a></div>
                <ul class="list-unstyled l_data_movie_stages">
                    <li class="movie">
                        <a href="javascript:;">
                            <div class="l_data_stages_img amg">
                                <img :src="datailMovie.videoImg" alt="">
                            </div>
                        </a>
                    </li>
                    <li class="" v-for="(item,index) in datailMovie.photos" :key="index">
                        <a href="javascript:;">
                            <div class="l_data_stages_img amg">
                                <img :src="item" alt="">
                            </div>
                        </a>
                    </li>
                    
                </ul>
            </div>

            <div class="bg_fff rpd15 rmb5">
                <div class="rfs18 c_666">影评 <a href="" class="pull-right l_btn l_red_bor_btn bo_r4">写评论</a></div>
            </div>
            <div class="l_show_comments_list rpl15 bg_fff">
                <div class="l_show_li re rpt10 solid_b">
                    <div class="l_show_user_img"><img :src="datailMovie.img" alt=""></div>
                    <dl>
                        <dt>
                            <div class="rfs14">wsd999</div>
                            <div class="over rmt5">
                                <div class="l_show_star_ranking">
                                    <div class="l_show_star_ranking_light" style="width: 73%;"></div>
                                </div>
                                <span class="rml10 c_999 rfs12 pull-left">1小时前</span>
                            </div>
                        </dt>
                        <dd>
                            <div class="rfs14 rline24 rmt10 c_262">
                                正义联盟里面就是为了要讲他们的故事，为什么用套用漫威的路子啊？神奇女侠电影登场也是因为在BVS里面的预热才有如此高的期待值，先把世界观介绍清楚了有谁之后，再来拍SOLO，你相信路人当初会知道，钢铁侠，美队，雷神以后会在同一部电影里出现吗？DC的电影里也是有故事时间线的，你以为跟漫威一样，只为了把他们凑齐连故事的前后时间线都不管了。
                            </div>

                        </dd>
                    </dl>
                </div>
                <div class="l_show_li re rpt10 solid_b">
                    <div class="l_show_user_img"><img src="images/l_data_name_img.png" alt=""></div>
                    <dl>
                        <dt>
                            <div class="rfs14">wsd999</div>
                            <div class="over rmt5">
                                <div class="l_show_star_ranking">
                                    <div class="l_show_star_ranking_light" style="width: 73%;"></div>
                                </div>
                                <span class="rml10 c_999 rfs12 pull-left">1小时前</span>
                            </div>
                        </dt>
                        <dd>
                            <div class="rfs14 rline24 rmt10 c_262">
                                正义联盟里面就是为了要讲他们的故事，为什么用套用漫威的路子啊？神奇女侠电影登场也是因为在BVS里面的预热才有如此高的期待值.
                            </div>

                        </dd>
                    </dl>
                </div>
                <div class="l_show_li re rpt10 solid_b">
                    <div class="l_show_user_img"><img src="images/l_data_name_img.png" alt=""></div>
                    <dl>
                        <dt>
                            <div class="rfs14">wsd999</div>
                            <div class="over rmt5">
                                <div class="l_show_star_ranking">
                                    <div class="l_show_star_ranking_light" style="width: 73%;"></div>
                                </div>
                                <span class="rml10 c_999 rfs12 pull-left">1小时前</span>
                            </div>
                        </dt>
                        <dd>
                            <div class="rfs14 rline24 rmt10 c_262">
                                正义联盟里面就是为了要讲他们的故事，为什么用套用漫威的路子啊？神奇女侠电影登场也是因为在BVS里面的预热才有如此高的期待值，先把世界观介绍清楚了有谁之后，再来拍SOLO，你相信路人当初会知道，钢铁侠，美队，雷神以后会在同一部电影里出现吗？DC的电影里也是有故事时间线的，你以为跟漫威一样，只为了把他们凑齐连故事的前后时间线都不管了。
                            </div>

                        </dd>
                    </dl>
                </div>
            </div>
            <div class="text-center bg_fff rfs14 rmb10">
                <a href="" class="db c_262 rpt10 rpb10">查看全部评价 <i class="iconfont icon-icon1"></i></a>
            </div>
            <div class="rpd15 rpt10 rpt10 bg_fff">
                <a href="" class="l_btn_block l_red_bg_btn bo_r4">立即购票</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
export default {
  name: 'DatailMovie',
  data () {
    return {
      datailMovie:"",
      headerData:{"name":"动物世界"}, //头部信息
    }
  },
  components:{
    Header,
  },
  created(){
    //电影详情  
    fetch("/api/detail_movie")
    .then(res => {
        return res.json()
    })
    .then(response =>{

        this.datailMovie = response.detailMovie
        console.log(this.datailMovie)
    })
  },
}
</script>

<style scoped>

/*电影详情开始*/
.detailmovie{
    padding-bottom:1.3rem;
}
.l_data_show_item {
	background: url("./img/l_screenings_bg.png") center top no-repeat;
	background-size: 100% 100%;
	padding: 0.4rem .4rem 0;
	height: 4.05rem;
	position: relative
}
.l_data_movie_cover {
	width: 2.6rem;
	height: 3.5rem;
	overflow: hidden;
	border: solid 2px #fff;
	float: left
}
.l_data_movie_cover img {
	width: 100%;
}
.l_data_movie_right {
	margin-left: 3rem;
	height: 3.7333rem;
	display: table
}
.l_data_table {
	vertical-align: middle;
	display: table-cell;
}
.l_data_text_expander {
	height: 1.6rem;
}
.l_data_text_expander.active {
	height: auto;
}
.l_data_movie_list {
	width: 100%;
	overflow-x:scroll;
	white-space:nowrap;
	box-sizing:border-box;
}
.l_data_movie_list li {
	display: inline-block
}
.l_data_name_img {
	/* width: 2.133rem; */
	height: 2.133rem;
	overflow: hidden;
	/* border-radius: 0.85rem */
}
.l_data_movie_stages {
	width: 100%;
	overflow-x:scroll;
	white-space:nowrap;
	box-sizing:border-box;
}
.l_data_movie_stages li {
	display: inline-block;
	position: relative;
}
.l_data_stages_img {
	/* width: 3.4666rem; */
	height: 2.4rem;
	overflow: hidden;
	position: relative
}
.l_data_stages_img:after {
	content:'';
	position: absolute;
	width: 0.64rem;
	height: 0.64rem;
	background: url("./img/icon_bofang.png") 0 0 no-repeat;
	left:50%;
	background-size:100%;
	top:50%;
	margin-left:-.32rem;
	margin-top:-.32rem;
	display: none
}
.l_data_movie_stages li.movie .l_data_stages_img:after {
	display: block
}
.l_show_user_img {
	width: 1.066rem;
	height: 1.066rem;
	overflow: hidden;
	border-radius: 50%;
	position: absolute;
	left: 0px;
	top:10px
}
.l_show_user_img img {
	width: 100%;
	vertical-align: top
}
.l_show_li dl {
	padding: 0.1rem .3623rem .3623rem 1.4666rem;
}
.l_show_star_ranking {
	background: url("./img/l_star_h.png") 0 0 no-repeat;
	background-size: auto 100%;
	width: 70px;
	height: 9.5px;
	margin-top: 3px;
	float: left
}
.l_show_star_ranking_light {
	background: url("./img/l_star_y.png") 0 0 no-repeat;
	background-size: auto 100%;
	width: 70px;
	height: 9.5px;
}
.amg img{
    height:100%;
}
/*电影详情结束*/
</style>
