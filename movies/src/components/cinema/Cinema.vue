<template>
	<div class="cinema">
		<div class="page-wrap">
			<div class="swiper-header cinema-ad"></div>
			<div class="nav-wrap filter-nav-wrap">
				<div class="tab" ref="tabBox">
					<div class="item" :class='{"chosenTitle":navsType==0}' @click="navsTypeFn(0)">全城<span class="drop"></span></div>
					<div class="item" :class='{"chosenTitle":navsType==1}' @click="navsTypeFn(1)">品牌<span class="drop"></span></div>
					<div class="item" :class='{"chosenTitle":navsType==2}' @click="navsTypeFn(2)">特色<span class="drop"></span></div>
				</div>
				<div class="close-tab" v-show="navsType > -1">
					<div class="tab-content">
						 <!-- 特色 -->
						<div class="page special" v-show="navsType==2">
							<div id="special-content">
								<div class="item-title">特色功能</div>
								<div class="item-list">
									<div class="item" 
                                    v-for="(service,index) in cinema_service.subItems"
                                    :key="index" @click="chosenServiceClick(index)" 
                                    :class="{'chosen':chosenService == index}">{{service.name}}</div>
									<!-- <div class="item">会员卡</div> -->
									<div class="clear"></div>
								</div>
                                <div class="item-title">特殊厅</div>
								<div class="item-list">
									<div class="item" 
                                    v-for="(hallType,index) in cinema_hallType.subItems"
                                    :key="index" @click="chosenHallClick(index)" 
                                    :class="{'chosen':chosenHall == index}">{{hallType.name}}</div>
									<!-- <div class="item">会员卡</div> -->
									<div class="clear"></div>
								</div>
							</div>
							<div id="special-btn">
								<div class="btn" id="cancel-btn">重置</div>
								<div class="btn" id="confirm-btn">确定</div>
							</div>
						</div>
						<!-- 品牌 -->
						<div class="page brand"  v-show="navsType==1">
							<div id="brand-content">
								<div class="item brand-list" 
                                v-for="(brand,index) in cinema_brand.subItems" 
                                :key="index" @click="chosenClick(index)"  
                                :class="{'chosen':chosenBrand == index}">
									<span class="brand-name">{{brand.name}}</span>
									<span class="brand-count">{{brand.count}}</span>
								</div>
							</div>
						</div>
						<!-- 全城 -->
						<div class="page region" v-show="navsType==0">
							<div id="region-tab">
                                <ul class="tab">
                                    <li class="item" @click="navTwoFn(0)" :class="{'chosen':navTwo==0}">商区</li>
                                    <li class="item" @click="navTwoFn(1)" :class="{'chosen':navTwo==1}">地铁站</li>
                                </ul>
							</div>
							<div id="region-list">
								<div id="region-sidenav">
									<div id="district" v-show="navTwo == 0">
										<div class="district-li item " 
                                        v-for="(city,index) in cities_cinemas.subItems" 
                                        :key="index" @click="chosenDistrictClick(city.id)"
                                        :class="{'chosen':chosenDistrict==city.id}"
                                        :id="city.id"
                                        >{{city.name}}({{city.count}})</div>
									</div>
									<div id="subway"  v-show="navTwo == 1">
										<div class="district-li item" 
                                        v-for="(subway,index) in subway_cinemas.subItems" 
                                        :key="index" @click="chosenSubwayClick(subway.id)"
                                        :class="{'chosen':chosenSubway==subway.id}"
                                        >{{subway.name}}({{subway.count}})</div>
										<!-- <div class="district-li item">1号线(41)</div> -->
									</div>
								</div>
								<div id="region-list-item">
									<div id="filter-list">
										<div class="item " 
                                        v-for="(item,index) in districtList" 
                                        :key="index"
                                        :class="{'chosen':typeChosen==index}"
                                        @click="typeChosenClick(index)"
                                        >
                                            <span class="item-name">{{item.name}}</span>
                                            <span class="item-count">{{item.count}}</span>
										</div>
										<!-- <div class="item chosen">
                                            <span class="item-name">市桥</span>
                                            <span class="item-count">6</span>
										</div> -->
									</div>
								</div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="blacker" v-show="navsType > -1" @click="closePops()"></div>
			<div class="cinema-list">
				<div class="list-wrap">
					<div class="item mb-line-b" v-for="(cinema,index) in cinema_list" :key="index">
						<div class="title-block box-flex middle">
							<div class="title line-ellipsis">
                                <span>{{cinema.nm}}</span>
                                <span class="price-block">
                                    <span class="price">{{cinema.sellPrice}}</span><span class="q">元起</span>
                                </span>
							</div>
							<div class="location-block box-flex">
                                <div class="flex line-ellipsis">{{cinema.addr}}</div>
                                <div class="distance">{{cinema.distance}}</div>
							</div>
							<div class="flex"></div>
							<div class="label-block">
								<div class="snack">小吃</div>
								<div class="vipTag" v-if="cinema.tag.vipTag">{{cinema.tag.vipTag}}</div>
								<div class="hallType" v-if="cinema.tag.hallType">{{cinema.tag.hallType[0]}}</div>
							</div>
							<div class="discount-block" v-if="cinema.promotion.cardPromotionTag">
                                <div class="discount-block_div">
                                    <div class="discount-label normal card">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">     
                                    </div>
                                    <div class="discount-label-text">{{cinema.promotion.cardPromotionTag}}</div>
                                </div>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Cinema',
  data () {
    return {
        filter_cinemas: '',
        cities_cinemas:{}, // 城市
        subway_cinemas:{}, //地铁
        navsType:-1,
        navTwo:0,
        navsTypeShow:0,
        cinema_list:{},
        cinema_brand:{}, //品牌
        chosenBrand:0,
        cinema_hallType:{}, // 特殊厅
        cinema_service:{}, // 服务
        chosenService:0,
        chosenHall:0,
        chosenDistrict:-1,//商区
        chosenSubway:-1,//地铁站

        districtList:{}, //商区列表
        subwayList:{}, //地铁站列表
        typeChosen:0,

    }
	},
	methods:{
		navsTypeFn(type){ //选择全城、品牌、特色
			if(this.navsType == type){
					this.navsType = -1
			}else{
				this.navsType = type
			}
        },
        navTwoFn(type){//选择商区、地铁
            this.navTwo =type
            this.districtList = {}
            this.typeChosen=""
        },
        closePops(){ //点击遮罩层关闭弹框
            this.navsType = -1
        },
        chosenClick(index){ //点击品牌选择
            this.chosenBrand = index
        },
        chosenServiceClick(index){//点击特殊功能
            this.chosenService = index
        },
        chosenHallClick(index){ //点击特殊厅
            this.chosenHall = index
        },
        chosenDistrictClick(index){//点击商区
            this.typeChosen = 0
            this.chosenDistrict = index
            for(let key in this.cities_cinemas.subItems){
                if(this.cities_cinemas.subItems[key].id == this.chosenDistrict && this.chosenDistrict!=-1){
                    // console.log(this.cities_cinemas.subItems[key].subItems)
                    this.districtList = this.cities_cinemas.subItems[key].subItems
                }
            }
        },
        chosenSubwayClick(index){ //点击地铁站
            this.typeChosen = 0
            this.chosenSubway = index
            for(let key in this.subway_cinemas.subItems){
                if(this.subway_cinemas.subItems[key].id == this.chosenSubway && this.chosenSubway!=-1){
                    // console.log(this.subway_cinemas.subItems[key].subItems)
                    this.districtList = this.subway_cinemas.subItems[key].subItems
                }
            }
        },
        typeChosenClick(index){ //点击特殊厅
            this.typeChosen = index
        },
	},
  created(){

    //筛选电影院
    fetch("/api/filter_cinemas")
    .then(res => {
        return res.json()
    })
    .then(response =>{

        this.filter_cinemas = response
        // 城市
        this.cities_cinemas = response.district
        //地铁
        this.subway_cinemas = response.subway
        //品牌
        this.cinema_brand = response.brand
        // 特殊厅
        this.cinema_hallType = response.hallType
        // 服务
        this.cinema_service = response.service
        // console.log(this.subway_cinemas)

    })

    //电影院列表
    fetch("/api/cinema")
    .then(res => {
        return res.json()
    })
    .then(response =>{
        this.cinema_list = response.cinemas
        // console.log(response.cinemas)
    })
  }
}
</script>

<style scoped>
.clear{clear:both;}
.cinema{overflow: hidden;}
.page-wrap{position:absolute;width:100%;height:100%;overflow: auto;-webkit-overflow-scrolling: touch;}
.nav-wrap.filter-nav-wrap{width:100%;height:40px;background:#FFF;position: fixed;z-index:100;}
.nav-wrap.filter-nav-wrap .tab{display: -webkit-box; display: flex;border-bottom:1px solid #e8e8e8;}
.blacker {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.3);
}
.nav-wrap.filter-nav-wrap .tab .item {
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    line-height: 40px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    font-size: 13px;
    text-overflow: ellipsis;
}
.nav-wrap.filter-nav-wrap .tab .item .drop {
    display: inline-block;
    position: absolute;
    top: 18px;
    width: 0;
    height: 0;
    margin-left: 4px;
    border: 4px solid transparent;
    border-top-color: #b0b0b0;
}
.nav-wrap.filter-nav-wrap .tab .item+.item:before {
    content: "";
    display: block;
    position: absolute;
    height: 20px;
    top: 10px;
    left: 0;
    border-left: 1px solid #e8e8e8;
}
.nav-wrap.filter-nav-wrap .tab .chosenTitle {
    color: #e54847;
}
.nav-wrap.filter-nav-wrap .tab .item.chosenTitle .drop {
    border-bottom-color: #f03d37;
    border-top-color: transparent;
    top: 14px;
}
.close-tab {
    position: relative;
    width: 100%;
    background: #fff;
    z-index: 100;
    overflow: scroll;
    /* display: none; */
}
.close-tab .tab-content {
    font-size: 15px;
}
.nav-wrap.filter-nav-wrap .tab-content .page {
    background-color: #fff;
    overflow: auto;
    z-index: 999;
}
.close-tab .tab-content .page.brand {
    min-height: 150px;
    max-height: 352px;
}
.close-tab .tab-content .page {
    position: relative!important;
    overflow: scroll;
}
.close-tab .tab-content .page.special #special-content {
    min-height: 150px;
    max-height: 270px;
    overflow: scroll;
}
.close-tab .tab-content .page.special #special-content .item-title {
    margin-left: 12px;
    margin-top: 11px;
    font-size: 15px;
    color: #777;
}
.close-tab .tab-content .page.special #special-content .item-list {
    margin: 0 12px 12px;
}
.close-tab .tab-content .page.special #special-content .item-list .item {
    float: left;
    width: 21.3%;
    height: 30px;
    padding: 3px 0;
    margin-right: 3%;
    margin-top: 10px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: .3rem;
    color: #777;
}
.close-tab .tab-content .page.special #special-content .item-list .item.chosen {
    background: #fcf0f0;
    color: #f03d37;
    border: 1px solid #f03d37;
}
.close-tab .tab-content .page.special #special-btn {
    height: 60px;
    width: 100%;
    border-top: 1px solid #e5e5e5;
    margin-top: 10px;
    background: #fafafa;
}
.close-tab .tab-content .page.special #special-btn .btn {
    display: inline-block;
    height: 34px;
    width: 21.3%;
    margin: 13px 11px;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    text-align: center;
    line-height: 34px;
    font-size: 14px;
}
.close-tab .tab-content .page.special #special-btn #confirm-btn {
    float: right;
    background: #f03d37;
    border: 1px solid #f03d37;
    color: #fff;
}
.close-tab .tab-content .page.brand #brand-content .brand-list {
    position: relative;
    line-height: 44px;
    height: 44px;
    padding: 0 15px 0 26px;
    border-bottom: 1px solid #e5e5e5;
    color: #333;
}
.close-tab .tab-content .page.brand #brand-content .item.chosen, .close-tab .tab-content .page.brand #brand-content .item.chosen .brand-count {
    color: #dd403b;
}
.close-tab .tab-content .page.brand #brand-content .item.chosen:before {
    content: "";
    display: block;
    position: absolute;
    left: 8px;
    top: 18px;
    width: 11.5px;
    height: 8px;
    /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAABGdBT…/luvFa89aFyQAtNjaWOn44wYgRR/Plkp9G4mst+L/57S+eQuIEp8oPOAAAAABJRU5ErkJggg==); */
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.close-tab .tab-content .page.brand #brand-content .brand-list span {
    display: inline-block;
    width: 49%;
}
.close-tab .tab-content .page.brand #brand-content .item.chosen, .close-tab .tab-content .page.brand #brand-content .item.chosen .brand-count {
    color: #dd403b;
}
.close-tab .tab-content .page.brand #brand-content .brand-list .brand-count {
    text-align: right;
    color: #8f9296;
    font-size: 12px;
}
.close-tab .tab-content .page.brand #brand-content .item.chosen, .close-tab .tab-content .page.brand #brand-content .item.chosen .brand-count {
    color: #dd403b;
}
.close-tab .tab-content .page.region #region-tab {
    height: 44px;
}
.close-tab .tab-content .page.region #region-tab ul {
    padding: 0;
    margin: 0;
}
.close-tab .tab-content .page.region #region-tab ul li {
    position: relative;
    display: inline-block;
    padding: 0 10px;
    width: 50%;
    height: 100%;
    line-height: 44px;
    text-align: center;
}
.close-tab .tab-content .page.region #region-tab ul li.chosen {
    color: #f03d37;
}
.close-tab .tab-content .page.region #region-tab ul li.chosen:after {
    content: "";
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 90%;
    border-top: 2px solid #f03d37;
}
.close-tab .tab-content .page.region #region-list {
    background: #f5f5f5;
    height: 380px;
}
.close-tab .tab-content .page.region #region-list #region-sidenav {
    width: 35%;
    height: 100%;
    float: left;
    overflow: scroll;
}
.close-tab .tab-content .page.region #region-list #region-sidenav #district, .close-tab .tab-content .page.region #region-list #region-sidenav #subway {
    min-height: 100%;
    background: #fff;
}
.close-tab .tab-content .page.region #region-list #region-sidenav #district .district-li, .close-tab .tab-content .page.region #region-list #region-sidenav #subway .district-li {
    height: 44px;
    padding-left: 10px;
    line-height: 44px;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.close-tab .tab-content .page.region #region-list #region-sidenav #district .chosen, .close-tab .tab-content .page.region #region-list #region-sidenav #subway .chosen {
    color: #f03d37;
    background: #f5f5f5;
}
.close-tab .tab-content .page.region #region-list #region-list-item {
    width: 65%;
    height: 100%;
    float: right;
    overflow: scroll;
}
.close-tab .tab-content .page.region #region-list #region-list-item #filter-list {
    background: #f5f5f5;
}
.close-tab .tab-content .page.region #region-list #region-list-item #filter-list .item {
    position: relative;
    height: 45px;
    line-height: 45px;
    padding: 0 0 0 25px;
}
.close-tab .tab-content .page.region #region-list .item {
    border: 0;
}
.close-tab .tab-content .page.region #region-list #region-list-item #filter-list .item span.item-name {
    width: 80%;
    font-size: 14px;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.close-tab .tab-content .page.region #region-list #region-list-item #filter-list .item span {
    display: inline-block;
}
.close-tab .tab-content .page.region #region-list #region-list-item #filter-list .item span.item-count {
    float: right;
    width: 20px;
    margin-right: 10px;
    color: #8f9296;
    font-size: 12px;
    text-align: right;
}
.close-tab .tab-content .page.region #region-list #region-list-item #filter-list .item.chosen, .close-tab .tab-content .page.region #region-list #region-list-item #filter-list .item.chosen span.item-count, .close-tab .tab-content .page.region #region-list #region-list-item #filter-list .item.chosen span.item-name {
    color: #f03d37;
}

.cinema-list{
	margin-bottom:1.32rem;
    margin-top:40px;
}
.list-wrap{
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
}
.cinema-list .list-wrap .item {
    padding: 13px 15px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #e8e8e8;
}
.cinema-list .location-block, .cinema-list .price-block, .cinema-list .title-block {
    line-height: 1.5;
}
.box-flex:not(.column).middle, .inline-flex:not(.column).middle {
    -webkit-box-align: center;
    align-items: center;
}
.cinema-list .list-wrap .title-block {
    display: block;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.cinema-list .list-wrap .title-block .title {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
}
.cinema-list .list-wrap .title-block .title {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
}
.cinema-list .list-wrap .price-block {
    padding-top: 9px;
    padding-left: 3px;
}
.cinema-list .list-wrap .price-block .d, .cinema-list .list-wrap .price-block .price, .cinema-list .list-wrap .price-block .q {
    font-size: 11px;
    color: #f03d37;
}
.cinema-list .list-wrap .price-block .price {
    font-size: 18px;
}
.cinema-list .list-wrap .price-block .d, .cinema-list .list-wrap .price-block .price, .cinema-list .list-wrap .price-block .q {
    font-size: 11px;
    color: #f03d37;
}
.cinema-list .list-wrap .price-block .q {
    margin-left: 3px;
}
.cinema-list .list-wrap .location-block {
    margin-top: 6px;
    font-size: 13px;
    color: #666;
}
.flex {
    -webkit-box-flex: 1;
    flex: 1;
}
.cinema-list .list-wrap .location-block .distance, .cinema-list .list-wrap .location-block .region {
    margin-left: 5px;
}
.cinema-list .list-wrap .title-block .label-block {
    height: 17px;
    line-height: 17px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    font-size: 0;
    flex-shrink: 0;
}
.cinema-list .list-wrap .title-block .label-block>div {
    position: relative;
    display: inline-block;
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    font-size: .3rem;
}
.cinema-list .list-wrap .title-block .label-block div.snack, .cinema-list .list-wrap .title-block .label-block div.vipTag {
    color: #f90;
    border: 1px solid #f90;
}
.cinema-list .list-wrap .title-block .label-block div.snack, .cinema-list .list-wrap .title-block .label-block div.vipTag {
    color: #f90;
    border: 1px solid #f90;
}
.cinema-list .list-wrap .title-block .label-block>div+div {
    margin-left: 5px;
}
.cinema-list .list-wrap .title-block .label-block div.allowRefund, .cinema-list .list-wrap .title-block .label-block div.endorse, .cinema-list .list-wrap .title-block .label-block div.hallType, .cinema-list .list-wrap .title-block .label-block div.sell {
    color: #589daf;
    border: 1px solid #589daf;
}
.cinema-list .discount-block {
    color: #999;
    margin-bottom: 4px;
}
.discount-block_div{
    height:20px;
    line-height: 20px;
}
.discount-label {
    display: -webkit-inline-box;
    display: inline-flex;
}
.cinema-list .discount-block .discount-label {
    width: 15px;
    height: 14px;
    /* position: relative;
    top: 3px; */
}
.discount-label-text {
    display: inline-block;
    margin-left: 8px;
    font-size: 13px;
}
.cinema-list .discount-block .discount-label-text {
    margin-left: 0;
    font-size: 11px;
}
a, img {
    display: block;
}
img {
    width: 100%;
		border:0;
}
div {
    -webkit-tap-highlight-color: transparent;
}



</style>