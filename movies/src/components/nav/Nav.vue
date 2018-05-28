<template>
    <footer>
        <div class="d_footer">
            <ul class="d_footer_ul d_clearfix">
                <li class="d_fl d_wh33 text-center d_footer_list">
                    <router-link to="/" exact>
                        <div class="d_footer_list_img d_img_bg_01"></div>
                        <h5 class="d_footer_list_font">电影</h5>
                    </router-link>
                </li>
                <li class="d_fl d_wh33 text-center d_footer_list">
                    <router-link to="/cinema" exact>
                        <div class="d_footer_list_img d_img_bg_02"></div>
                        <h5 class="d_footer_list_font ">电影院</h5>
                    </router-link>
                </li>
                <li class="d_fl d_wh33 text-center d_footer_list">
                    <router-link to="/mine" exact>
                        <div class="d_footer_list_img d_img_bg_03"></div>
                        <h5 class="d_footer_list_font">我的</h5>
                    </router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
/*底部样式 蓝色星空岛*/
.d_footer{height:1.31rem; border-top: 1px solid #e8e8e8;background: #FFF;position: fixed;left: 0;right: 0;bottom: 0;z-index:9;}
.d_footer .d_footer_ul{}
.d_footer .d_footer_list{padding-top:0.2rem;}
.d_footer_list_img{height:0.587rem;margin: 0 auto;}
.d_img_bg_01{background: url(./img/footer_icon_11.png) no-repeat center top/auto 100%;}
.d_img_bg_02{background: url(./img/footer_icon_12.png) no-repeat center top/auto 100%;}
.d_img_bg_03{background: url(./img/footer_icon_13.png) no-repeat center top/auto 100%;}
.d_footer_list_font{font-size:0.27rem;color:#999999;}
.selected .d_img_bg_01{background: url(./img/footer_icon_01.png) no-repeat center top/auto 100%;}
.selected .d_img_bg_02{background: url(./img/footer_icon_02.png) no-repeat center top/auto 100%;}
.selected .d_img_bg_03{background: url(./img/footer_icon_03.png) no-repeat center top/auto 100%;}
.selected .d_footer_list_font{font-size:0.27rem;color:#e64239;}
</style>