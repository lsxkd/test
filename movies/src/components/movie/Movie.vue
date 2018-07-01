<template>
  <div class="movie">
    <main>
        <div class="l_movie_tab_content">
            <ul class="list-unstyled l_tab_nav over solid_b l_tab_ul">
                <li class="col-lzx-6 rfs14 text-center rpd0"><a :class="{'active':selectType==0}" @click="selectTypeFn(0)" href="javascript:void(0)">正在热映</a></li>
                <li class="col-lzx-6 rfs14 text-center rpd0"><a :class="{'active':selectType==1}" @click="selectTypeFn(1)" href="javascript:void(0)">即将上映</a></li>
            </ul>
            <div class="l_tab_pane l_tab_cont">
                <div class="over" v-show="selectType==0">
                    <ul class="list-unstyled l_mover_list_ul">
                        <li v-for="(movie,index) in movieList" :key="index">
                            <a href="javascript:;" @click="handjump('/datailmovie')">
                                <div class="l_mover_img"><img :src="movie.img" ></div>
                                <div class="l_mover_right">
                                    <div class="l_flex_item">
                                        <div class="l_mover_name">
                                            {{movie.nm}}
                                        </div>
                                        <p class="rfs14 c_666">观众评分 <span class="c_ff9 rfs16 v-align-initial">{{movie.sc}}</span></p>
                                        
                                        <!-- <p class="rfs14 c_999">动作/冒险/喜剧</p> -->
                                        <p class="rfs14 c_999">主演：{{movie.star}}</p>
                                        <p class="rfs14 c_999">{{movie.showInfo}}</p>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript:;" class="l_mover_buy" @click="handjump('/datailmovie')">购票</a>
                        </li>
                       
                    </ul>
                </div>
                <div class="over"  v-show="selectType==1">
                    <ul class="list-unstyled l_mover_list_ul">
                        <li v-for="(movies,index) in commingList" :key="index">
                            <a href="javascript:;">
                                <div class="l_mover_img"><img :src="movies.img"></div>
                                <div class="l_mover_right">
                                    <div class="l_flex_item">
                                        <div class="l_mover_name">
                                            {{movies.nm}}
                                        </div>
                                        <p class="rfs14 c_666">{{movies.showInfo}}</p>
                                        <!-- <p class="rfs14 c_999">剧情/战争/历史</p> -->
                                        <p class="rfs14 c_666"><span class="c_ff9 rfs16 v-align-initial">{{movies.wish}}</span>人想看 </p>
                                        <p class="rfs14 c_999">主演：{{movies.star}}</p>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript:;" class="l_mover_presale">预售</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  data () {
    return {
      movieList:{},
      commingList:{},
      selectType:0
    }
  },
  methods:{
        selectTypeFn(type){
            this.selectType = type
        },
        //点击跳转
        handjump(type){
            this.$router.push(type)
        }
      
  },
  created(){
    //正在热映  
    fetch("/api/movie_now")
    .then(res => {
        return res.json()
    })
    .then(response =>{

        this.movieList = response.movieList
        // console.log(this.movieList)
    })
    //即将上映
    fetch("/api/movie_will")
    .then(res => {
        return res.json()
    })
    .then(response =>{
        this.commingList = response.coming
        // console.log(this.movieList)
    })
 
  }
}
</script>

<style scoped>
/*电影开始*/
.l_movie_tab_content{margin-bottom: 1.31rem}
.l_tab_nav li{padding: 0;display: table-cell;}
.l_tab_nav li a.active,
.l_tab_nav li a:hover,
.l_tab_nav li a:focus{color: #e64239;border-bottom: 2px solid #e64239}
.l_tab_nav li a{padding: 0 0.533rem;display: inline-block;color: #999999;line-height: 1.066rem;}
.l_mover_list_ul li{display: inline-block;padding: .25rem;border-bottom: 1px solid #f0f0f0;width: 100%;position: relative;box-sizing: border-box;}
.l_mover_img{width: 2.2rem;height:2.95rem;display: block;float: left;position: relative;}
.l_mover_img img{ display: block;width: 100%;}
.l_mover_right{margin: .1rem 0 0 2.5rem;position: relative;}
.l_flex_item{overflow: hidden;text-overflow: ellipsis;flex: 1;align-items: center;}
.l_mover_name{white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: #222;font-size: .4347rem;margin-right: 1.8rem;margin-bottom:4px}
.l_mover_buy{position:absolute;right:10px;top:15px;font-size:.3381rem;line-height:.6rem;color:#fff;background-color:#e64239;border-radius:10rem;display:inline-block;width:1.2rem;text-align: center}
.l_mover_presale{position:absolute;right:10px;top:15px;font-size:.3381rem;line-height:.6rem;color:#fff;background-color:#b08c4a;border-radius:10rem;display:inline-block;width:1.2rem;text-align: center}
.l_mover_right p{white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: .7rem;}
.l_tab_ul{position:fixed;z-index: 99;width:100%;background:#FFF;}
.l_tab_cont{padding-top:1.2rem}
/*电影结束*/
</style>