<template>
  <div class="Mine">
    <div class="d_my_con">
				<div class="d_my_con_top">
					<h3 class="d_my_con_top_img"><img src="./img/d_example_tx.png" alt="" class=""></h3>
					<p class="d_my_con_top_title d_ov_hi">Sandara</p>
				</div>
				<div class="d_my_con_c">
					<!-- 电影票 start -->
					<div class="d_my_con_c_item d_por">
						<span class="d_my_con_c_item_l d_poa d_my_con_icon01"></span>
						<div class="d_my_con_c_item_c d_ov_hi">
							<h2 class="d_my_con_c_item_c_h2 d_ov_hi">电影票</h2>
						</div>
						<span class="d_my_con_c_item_r d_poa"></span>
					</div>
					<!-- 电影票 end -->

					<!-- 点评 start -->
					<div class="d_my_con_c_item d_por">
						<span class="d_my_con_c_item_l d_poa d_my_con_icon02"></span>
						<div class="d_my_con_c_item_c d_ov_hi">
							<h2 class="d_my_con_c_item_c_h2 d_ov_hi">点评</h2>
						</div>
						<span class="d_my_con_c_item_r d_poa"></span>
					</div>
					<!-- 点评 end -->

					<!-- 通票 start -->
					<div class="d_my_con_c_item d_por">
						<span class="d_my_con_c_item_l d_poa d_my_con_icon03"></span>
						<div class="d_my_con_c_item_c d_ov_hi">
							<h2 class="d_my_con_c_item_c_h2 d_ov_hi">通票</h2>
						</div>
						<span class="d_my_con_c_item_r d_poa"></span>
					</div>
					<!-- 通票 end -->

				</div>
			</div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
/*我的*/
body{background: #faf8f7;}
.d_my_con{margin:0 auto;overflow:hidden;background: #faf8f7;}
.d_my_con_top{height:4.56rem;background:url(./img/d_order_one_bg.png) no-repeat center center/100% 100%;text-align:center;overflow:hidden;}
.d_my_con_top_img{width:1.867rem;height:1.867rem;margin:0 auto;border-radius:50%;background:#FFF;margin-top:1.333rem;}
.d_my_con_top_img img{max-width:100%;max-height:100%;}
.d_my_con_top_title{color:#FFF;font-size:0.48rem;text-align:center;padding:0 0.333rem;margin-top:0.2rem;}
.d_my_con_c{background:#FFF;padding:0 0.333rem;margin:0.267rem auto;}
.d_my_con_c_item{border-bottom: 1px solid #f0f0f0;height:1.2rem;line-height:1.2rem;}
.d_my_con_c_item_l{left:0;top:50%;display:inline-block;width:0.427rem;height:0.373rem;margin-top:-0.187rem;background:url(./img/d_icon_dianyingpiao.png) no-repeat center center/100% 100%;}
.d_my_con_c_item_c{padding:0 0.7rem 0 0.7rem;}
.d_my_con_c_item_c_h2{font-size:0.373rem;color:#333333;}
.d_my_con_c_item_r{right:0;top:50%;display:inline-block;width:0.16rem;height:0.32rem;margin-top:-0.16rem;background:url(./img/d_order_left_icon.png) no-repeat center center/100% 100%;}
.d_my_con_icon02{background:url(./img/d_icon_dianping.png) no-repeat center center/100% 100%;height:0.427rem;margin-top:-0.21rem;}
.d_my_con_icon03{background:url(./img/d_icon_tongpiao.png) no-repeat center center/100% 100%;width:0.507rem;height:0.507rem;margin-top:-0.253rem;}

/*通用样式*/
.d_clearfix{zoom:1}.d_clearfix:after{display:block;clear:both;content:"";visibility:hidden;height:0}
.d_fl{float:left;}
.d_fr{float:right;}
.d_wh33{width:33.33%;}
.d_por{position:relative;}
.d_poa{position:absolute;}
.d_ov_hi{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.d_fcred{color:#e64239;}
.d_body_bgs_tickets{background: #faf8f7;}


</style>