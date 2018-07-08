<template>
  <div class="cinemadetail">
			<div class="l_movie_screenings_content">
				<div class="l_showtime_cinema_info">
					<div class="l_stci_info rmg15">
						<div class="l_cinema_name rfs18 c_262 rline26">{{cinemaDetails.nm}}</div>
						<div class=" rfs16 c_999 rline24">{{cinemaDetails.addr}}</div>
					</div>
					<div class="l_stci_map">
						<a href="javascript:;" class="c_666">
							<div class="iconfont icon-dizhi rfs24 inline-block">
                <img class="icon_position_img" src="./img/icon_position.png" alt="">
              </div><br/>
							<div class="c_666">地图</div>
						</a>
					</div>
				</div>
				<!--电影影片开始-->
				<div class="swiper-container l_swiper_nav" id="l_swiper_cont1">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="(imgItem,index) in cinemamovies" :key="'one' + index">
              <img :src="imgItem.img">
            </div>
						<!-- <div class="swiper-slide"><img src="images/l_swiper_img1.png" alt=""></div>
						<div class="swiper-slide"><img src="images/l_swiper_img3.png" alt=""></div>
						<div class="swiper-slide"><img src="images/l_swiper_img4.png" alt=""></div> -->
					</div>
				</div>
				<!--电影影片结束-->

				<!--电影影片场次区域开始-->
				<div class="swiper-container swiper-container-horizontal swiper-pages" ref="swiper1" id="l_swiper_cont2">
					<div class="swiper-wrapper">
						<div class="swiper-slide" ref="swiper2" v-for="(items,index) in cinemamovies" :key="'two' + index">
							<div class="l_showtime_mname rfs18 c_666 text-center rpt15 rpb15 rpl5 rpr5 solid_b">
								<div class="rmb5">
									{{items.nm}}<span class="c_ff9 rml5">{{items.sc}}<em style="font-size:0.32rem;">分</em></span>
								</div>
								<div class="c_999 rfs16 text_over rmb5">
									{{items.desc}}
								</div>
							</div>
							<ul class="list-unstyled l_tab_nav over solid_b l_data_tab l_tab_ul" >
								<li class="rfs14 text-center rpd0 " :class="{'active':actives == index}" v-for="(cons,index) in items.shows" :key="'s' + index" @click="activeClick(index)">
                  <a href="javascript:void(0)">{{cons.dateShow}}</a>
                </li>
								<!-- <li class="rfs14 text-center rpd0 active"><a href="javascript:void(0)">明天11.24</a></li>
								<li class="rfs14 text-center rpd0"><a href="javascript:void(0)">后天11.25</a></li> -->
							</ul>
							<div class="l_tab_pane l_tab_cont">
								<div class="over" ref="overs" v-for="(conText,index) in items.shows" :key="'w' + index" v-if="items.shows" v-show="actives == index">
									<table class="l_showtime_list_table">
										<tbody>
											<tr v-for="(texts,index) in conText.plist" :key="'t' + index" v-if="conText.plist.length != 0">
												<td class="l_stl_time">
													<div class="l_stl_time_wrap">
                            <strong class="small_xs">{{texts.tm}}</strong>
                            <em class="db">14:35散场</em>
                          </div>
												</td>
												<td class="l_stl_info">
													<div class="rfs18 rpt10 text_over">{{texts.lang}} {{texts.tp}}</div>
													<div class="c_999 rfs12 l_two_line text_over">{{texts.th}}</div>
													<div class="c_999 rfs12 text_over">进场免费提供眼镜</div>
												</td>
												<td class="l_stl_price">
													<div class="rfs18 text_over c_e64">¥{{texts.sellPr}}</div>
													<del class="c_999 rfs12 db text_over">80</del>

												</td>
												<td class="l_stl_buy">
													&nbsp;
													<a href="javascript:;" class="l_stl_btn">购票</a>
												</td>
											</tr>
                      <tr v-if="conText.plist.length == 0">
                        <td colspan="4">
                          <p style="text-align:center;font-size:0.4rem;color:#999999;height:3rem;line-height:3rem;">暂无场次</p>
                        </td>
                      </tr>
										
										</tbody>
									</table>
								</div>
								
								<div class="over" v-if="!items.shows">
									<div class="rfs14 rpd10">暂无片场</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--电影影片场次区域结束-->
			</div>
  </div>
</template>

<script>
export default {
  name: 'CinemaDetail',
  data () {
    return {
      actives:0,
      cinemaDetails: {},
      cinemamovies:{},//存放电影详情
    }
  },
  methods:{
    mySwiper(){
      var Swiper1 = new Swiper('#l_swiper_cont1',{
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: true,
          slideToClickedSlide: true,
          autoHeight: true, //高度随内容变化
      })
      var Swiper2 = new Swiper('#l_swiper_cont2',{
          simulateTouch:false,
          onlyExternal:true,
          slideToClickedSlide: true,
          autoHeight: true, //高度随内容变化
          // effect : 'fade'
      })
      Swiper1.params.control = Swiper2;//需要在Swiper2初始化后，Swiper1控制Swiper2
      // Swiper2.params.control = Swiper1;//需要在Swiper1初始化后，Swiper2控制Swiper1
    },
    activeClick(type){
      this.actives = type
    },

  },
  created(){
    
    //正在热映  
    fetch("/api/cinema_detail")
    .then(res => {
        return res.json()
    })
    .then(response =>{

        this.cinemaDetails = response.cinemaData

        this.cinemamovies = response.showData.movies

    })
  },
  mounted(){
    this.$nextTick(() => {
      setTimeout(() => {
        this.mySwiper()
      },100)
      
    })
    
  }
}
</script>

<style>
.cinemadetail{
  padding-bottom:1.32rem;
}
/*电影场次开始*/
	.l_showtime_cinema_info {
	display: flex
}
.l_stci_info {
	display:block;
	flex: 1
}
.l_stci_map {
	display:table-cell;
	width:1.6rem;
	flex: 0 0 auto;
	overflow: hidden;
	font-size: .3381rem;
	text-align: center;
	color: #63acef;
	position: relative;
}
.l_stci_map:before {
	content:'';
	display:inline-block;
	height:100%;
	vertical-align:middle;
	margin-right:-0.25em;
}
.l_stci_map a {
	display: inline-block;
	width:1.6rem;
	height:1.6rem;
	overflow: hidden;
	display:inline-block;
	vertical-align:middle;
	width:50%;
}
.l_stci_map a:before {
	border-left:1px solid #d8d8d8;
	height:.56rem;
	content:'';
	margin-right:.4rem;
	position: absolute;
	left: 0;
	display:table-cell;
	vertical-align:middle;
	text-align:center;
	width:100%;
	top: 50%;
	margin-top: -0.28rem;
}
.l_swiper_nav {
	background: url("./img/l_screenings_bg.png") center top no-repeat;
	background-size: 100% 100%;
	padding: 25px 0 12px;
	height: 3.2666rem;
	position: relative
}
.l_swiper_nav:before {
	position: absolute;
	content: '';
	width:0;
	height:0;
	border-left:6px solid transparent;
	border-right:6px solid transparent;
	border-bottom:8px solid #fff;
	bottom: 0;
	left: 50%;
	margin-left: -4px
}
.l_swiper_nav .swiper-slide.swiper-slide-active {
	-webkit-transform:scale(1.2,1.2);
	-moz-transform:scale(1.2,1.2);
	-transform:scale(1.2,1.2);
}
.swiper-slide-active {
	transition:all 0.5s;
	-moz-transition:all 0.5s;
	-webkit-transition:all 0.5s;
	-o-transition:all 0.5s;
}
.l_swiper_nav img {
	width: 100%;
	border: 2px solid #fff
}
.l_data_tab {
	overflow-x: scroll;
	white-space: nowrap;
}
.l_showtime_list_table {
	width: 100%;
	background-color: #fff
}
.l_showtime_list_table td {
	padding: 0px 13px 10px;
	position: relative
}
.l_stl_time {
	color:#262626;
	font-size:.483rem;
	line-height:.65rem;
	text-align:left;
	padding-left:1.5%;
	height:1.8rem;
	vertical-align:middle;
	border-bottom:1px solid #f0f0f0;
	width: 26%
}
.l_stl_time em {
	font-size: 0.2898rem;
	color: #666
}
.l_stl_time_wrap {
	margin-top: -11px;
}
.l_stl_info {
	width: 30%;
	text-align: left;
	font-size: .3864rem;
	vertical-align: middle;
	border-bottom: 1px solid #f0f0f0;
	line-height: 0.6rem;
}
.l_two_line {
	margin-top: 2px;
}
.l_stl_price {
	line-height:.6rem;
	font-size:.483rem;
	text-align:center;
	border-bottom: 1px solid #f0f0f0;
	width: 20%
}
.l_stl_price .c_e64 {
	margin-top: -11px
}
.l_stl_buy {
	height:1.26rem;
	text-align:center;
	vertical-align:middle;
	border-bottom:1px solid #f0f0f0;
	font-size: 0.3rem
}
.l_stl_btn {
	font-size:.3381rem;
	line-height: .6rem;
	color:#e64239;
	background-color:#fff;
	border:1px solid #e64239;
	border-radius:10rem;
	display:inline-block;
	position: absolute;
	right: 10px;
	top: 11px;
	width:1.2rem }
  .icon_position_img{
    height:0.56rem;
    max-width:100%;
  }
/*电影场次结束*/

/*公共样式开始*/
	.c_ff9 {
	color: #ff953f
}
/*点睛色橙色*/
	.c_262 {
	color: #262626
}
/****黑色***/
	.c_63a {
	color: #63acef
}
/****蓝色***/
	.c_e64 {
	color: #e64239
}
/****红色***/
	.c_d5d {
	color: #d5d3d5
}
/****灰色***/
	.c_ccc {
	color: #cccccc
}
/****灰色***/
	.db {
	display: block
}
.rh40 {
	height: 1.066rem
}
.pull-left {
	float: left
}
.pull-right {
	float: right
}
.re {
	position: relative
}
.text_em {
	text-indent:2em;
}
.bo_r4 {
	border-radius: 4px;
}
.inline-block {
	display: inline-block
}
.v-align-initial {
	vertical-align: initial;
}
.bg_faf {
	background-color: #fafafa
}
/*浅灰色*/
	.list-unstyled {
	padding-left: 0;
	list-style: none;
	margin: 0
}
.text_over {
	overflow: hidden;
	white-space:nowrap;
	text-overflow:ellipsis;
}
.col-lzx-6 {
	width: 50%;
	float: left;
	position: relative;
	padding-left: 15px;
	padding-right: 15px;
}
/*公共样式结束*/

/*电影开始*/
	.l_movie_tab_content {
	margin-bottom: 1.31rem
}
.l_tab_nav li {
	padding: 0;
	display: table-cell;
}
.l_tab_nav li.active a,
.l_tab_nav li:hover a,
.l_tab_nav li:focus a {
	color: #e64239;
	border-bottom: 2px solid #e64239
}
.l_tab_nav li a {
	padding: 0 0.533rem;
	display: inline-block;
	color: #999999;
	line-height: 1.066rem;
}
.l_mover_list_ul li {
	display: inline-block;
	padding: .25rem;
	border-bottom: 1px solid #f0f0f0;
	width: 100%;
	position: relative;
	box-sizing: border-box;
}
.l_mover_img {
	width: 2.2rem;
	height:2.95rem;
	display: block;
	float: left;
	position: relative;
}
.l_mover_img img {
	display: block;
	width: 100%;
}
.l_mover_right {
	margin: .1rem 0 0 2.5rem;
	position: relative;
}
.l_flex_item {
	overflow: hidden;
	text-overflow: ellipsis;
	flex: 1;
	align-items: center;
}
.l_mover_name {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	color: #222;
	font-size: .4347rem;
	margin-right: 1.8rem;
	margin-bottom:4px
}
.l_mover_buy {
	position:absolute;
	right:10px;
	top:15px;
	font-size:.3381rem;
	line-height:.6rem;
	color:#fff;
	background-color:#e64239;
	border-radius:10rem;
	display:inline-block;
	width:1.2rem;
	text-align: center
}
.l_mover_presale {
	position:absolute;
	right:10px;
	top:15px;
	font-size:.3381rem;
	line-height:.6rem;
	color:#fff;
	background-color:#b08c4a;
	border-radius:10rem;
	display:inline-block;
	width:1.2rem;
	text-align: center
}
.l_mover_right p {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	line-height: .7rem;
}
/*电影结束*/

</style>
