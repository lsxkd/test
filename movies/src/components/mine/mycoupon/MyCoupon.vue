<template>
    <div>
        <Header :headerData="headerData"></Header>
        <div class="mycoupon">
            <div class="coupon">
                <div class="input-wrapper">
                    <input type="text" placeholder="请输入优惠券密码" class="coupon-psw" v-model="couponInput">
                </div>
                <a class="add-coupon" @click="addCoupon()">添加</a>
            </div>
            <div class="container">
              <div class="no-data" v-show="!myCouponList">
                  <div class="wrapper">
                      <div class="tip-text">你还没有优惠券~</div>
                  </div>
              </div>
              <div class="coupon-list">
                <div class="coupon-item outTime" v-for="(item,index) in myCouponList" :key="index">
                    <div class="coupon-left">
                        <div class="left-wrapper">
                            <div class="desc">{{item.value}}<span>元</span></div>
                            <div class="type" v-if="item.type==1">代金券</div>
                            <div class="type" v-if="item.type==2">折扣券</div>
                        </div>
                    </div>
                    <div class="coupon-right">
                        <div class="title line-ellipsis">{{item.title}}</div>
                        <div class="limitDesc">{{item.limitDesc}}</div>
                        <div class="range-status-container">
                            <div class="range-status range-has-border">{{item.rangeTime}}</div>
                        </div>
                    </div>
                    <div class="business-tag" v-show="item.business == 2"><span>商家</span></div>
                </div>
              </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Header from '@/components/header/header'

export default {
  name: 'Mycoupon',
  data () {
    return {
      msg: '',
      headerData:{"name":"我的优惠券"}, //头部信息
      myCouponList:{},
      couponInput:"",  //优惠券
    }
  },
  components:{
    Header,
  },
  methods:{
    addCoupon(){
      if(this.couponInput == ""){
        this.bus.$emit("tips",{
          show:true,
          msgs:"请输入优惠券密码",
          msgTime:2000,
        })
      }else if(this.couponInput != "123456789"){
        this.bus.$emit("tips",{
          show:true,
          msgs:"优惠券密码错误，请重新输入",
          msgTime:2000,
        })
      }
    }
  },
  created(){
      // console.log(this.headerData)
      //我的优惠券列表
    fetch("/api/my_coupon_list")
    .then(res => {
        return res.json()
    })
    .then(response =>{
        this.myCouponList = response.couponlist
        // console.log(this.myCouponList)
    })
  },
}
</script>

<style >
.mycoupon{
  color: #777;
}
.coupon {
    padding: 0 0.4rem 0 0.53rem;
}
.coupon .input-wrapper, .coupon a {
    display: inline-block;
    box-sizing: border-box;
}
.coupon .input-wrapper {
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 0.13rem;
}
.coupon .input-wrapper input {
    display: block;
    padding: 0.13rem 0 0.13rem 0.13rem;
    width: calc(100% - 0.13rem);
    height: 100%;
    border: none;
    border-radius: 0.13rem;
}
.coupon .input-wrapper, .coupon a {
    display: inline-block;
    box-sizing: border-box;
}
.coupon a {
    margin-left: 0.27rem;
    color: #e64239;
    font-size:0.37rem;
}

.container {
    -webkit-box-flex: 1;
    flex: 1;
    padding-bottom:1.7rem;
}
.no-data .wrapper {
    background-image: url(./img/order-empty-1.png);
    background-repeat: no-repeat;
    background-position: top;
    background-size: 2.93rem 2.93rem;
    display: block;
    width: 100%;
    text-align: center;
}
.no-data .wrapper .tip-text {
    display: block;
    padding-top: 3.2rem;
    font-size: 0.43rem;
    height: 0.75rem;
    line-height: 0.75rem;
    color: #999;
}
.coupon-list .coupon-item {
    background-size: 1.73rem 1.73rem;
    background-position: top 0.19rem right 0.19rem;
    background-repeat: no-repeat;
    background-color: #fff;
    border: 1px solid #d8d8d8;
    border-radius: 0.21rem;
    margin: 0.4rem 0.4rem 0;
    display: -webkit-box;
    display: flex;
    position: relative;
    overflow: hidden;
}
.coupon-list .coupon-item.outTime {
    background-image: url(./img/expired.png);
}
.coupon-list .coupon-left {
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    min-height: 3.3rem;
    width: 2.88rem;
    background-color: #ff9d00;
    color: #fff;
}
.coupon-list .deleted .coupon-left, .coupon-list .hasUsed .coupon-left, .coupon-list .outTime .coupon-left {
    background-color: #c3c3c3;
}
.coupon-list .coupon-left .left-wrapper {
    position: absolute;
    top: 50%;
    margin-top: -0.88rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
    width: 2.88rem;
}
.coupon-list .coupon-left .left-wrapper .desc {
    font-size: 0.93rem;
}
.coupon-list .coupon-left .left-wrapper .desc span {
    font-size: 0.48rem;
}
.coupon-list .coupon-left .left-wrapper .type {
    display: inline-block;
    padding: 0.16rem 0.32rem 0;
    font-size: 0.37rem;
    font-weight: 400;
    border-top: 1px solid rgba(0,0,0,.08);
}
.coupon-list .coupon-right {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    overflow: hidden;
    border-left: 1px dashed #ff9d00;
    position: relative;
}
.coupon-list .deleted .coupon-right, .coupon-list .hasUsed .coupon-right, .coupon-list .outTime .coupon-right {
    border-left: 1px dashed #c3c3c3;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.coupon-list .coupon-right .title {
    margin-top: 0.27rem;
    padding: 0 0.43rem;
    font-size: 0.43rem;
    line-height: 0.64rem;
    height: 0.64rem;
    color: #333;
}
.coupon-list .coupon-right .limitDesc {
    margin-top: 0.1rem;
    padding: 0 0.43rem;
    font-size: 0.28rem;
    line-height: 0.5rem;
    color: #999;
    margin-bottom: 0.4rem;
}
.coupon-list .coupon-right .range-status-container {
    position: absolute;
    bottom:0;
    width: 100%;
    border-top: 1px solid #d8d8d8;
}
.coupon-list .coupon-right .range-left-status, .coupon-list .coupon-right .range-status {
    position: relative;
    line-height: 0.59rem;
    font-size: 0.32rem;
    text-align: right;
    /* padding: 0 0.43rem; */
    padding:0;
    white-space: pre-wrap;
}
.coupon-list .business-tag {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    border-right: 0.53rem solid #91cbfa;
    border-top: 0.53rem solid #91cbfa;
    border-left: 0.53rem solid transparent;
    border-bottom: 0.53rem solid transparent;
    width: 0;
    height: 0;
}
.coupon-list .deleted .business-tag, .coupon-list .hasUsed .business-tag, .coupon-list .outTime .business-tag {
    border-right: 0.53rem solid #c3c3c3;
    border-top: 0.53rem solid #c3c3c3;
}
.coupon-list .business-tag span {
    position: absolute;
    font-size: 0.32rem;
    right: -0.67rem;
    top: -0.27rem;
    line-height: 1;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 0.8rem;
}
















</style>