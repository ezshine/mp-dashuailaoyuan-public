<template>
	<ezpage :title="title" backgroundColor="#f2f2f2">
		<view slot='contentSection'>
			<movable-area style='width:100%;height: 350px;pointer-events: none'>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers[0].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers[0].visibility + '; opacity: ' + numbers[0].opacity" :x="numbers[0].x" :y="numbers[0].y">
					<text>{{numbers[0].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers[1].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers[1].visibility + '; opacity: ' + numbers[1].opacity" :x="numbers[1].x" :y="numbers[1].y">
					<text>{{numbers[1].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers[2].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers[2].visibility + '; opacity: ' + numbers[2].opacity" :x="numbers[2].x" :y="numbers[2].y">
					<text>{{numbers[2].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers[3].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers[3].visibility + '; opacity: ' + numbers[3].opacity" :x="numbers[3].x" :y="numbers[3].y">
					<text>{{numbers[3].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers[4].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers[4].visibility + '; opacity: ' + numbers[4].opacity" :x="numbers[4].x" :y="numbers[4].y">
					<text>{{numbers[4].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers[5].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers[5].visibility + '; opacity: ' + numbers[5].opacity" :x="numbers[5].x" :y="numbers[5].y">
					<text>{{numbers[5].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers[6].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers[6].visibility + '; opacity: ' + numbers[6].opacity" :x="numbers[6].x" :y="numbers[6].y">
					<text>{{numbers[6].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers[7].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers[7].visibility + '; opacity: ' + numbers[7].opacity" :x="numbers[7].x" :y="numbers[7].y">
					<text>{{numbers[7].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers1[0].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers1[0].visibility + '; opacity: ' + numbers1[0].opacity" :x="numbers1[0].x" :y="numbers1[0].y">
					<text>{{numbers1[0].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers1[1].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers1[1].visibility + '; opacity: ' + numbers1[1].opacity" :x="numbers1[1].x" :y="numbers1[1].y">
					<text>{{numbers1[1].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers1[2].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers1[2].visibility + '; opacity: ' + numbers1[2].opacity" :x="numbers1[2].x" :y="numbers1[2].y">
					<text>{{numbers1[2].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers1[3].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers1[3].visibility + '; opacity: ' + numbers1[3].opacity" :x="numbers1[3].x" :y="numbers1[3].y">
					<text>{{numbers1[3].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers1[4].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers1[4].visibility + '; opacity: ' + numbers1[4].opacity" :x="numbers1[4].x" :y="numbers1[4].y">
					<text>{{numbers1[4].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers1[5].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers1[5].visibility + '; opacity: ' + numbers1[5].opacity" :x="numbers1[5].x" :y="numbers1[5].y">
					<text>{{numbers1[5].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers1[6].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers1[6].visibility + '; opacity: ' + numbers1[6].opacity" :x="numbers1[6].x" :y="numbers1[6].y">
					<text>{{numbers1[6].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border:' + border_size + ' solid #a1a1a1; background:#' + numbers1[7].bgcolor + '; border-radius:' + radius + '}; visibility: ' + numbers1[7].visibility + '; opacity: ' + numbers1[7].opacity" :x="numbers1[7].x" :y="numbers1[7].y">
					<text>{{numbers1[7].value}}</text>
				</movable-view>
				<movable-view class="container" direction="none" :style="' width: 420rpx; height: 100rpx; border: 2rpx dashed #000000; border-radius: 20rpx; visibility:' + container1_visibility" x="40rpx" y="170rpx"></movable-view>
				<movable-view class="container" direction="none" :style="' width: 420rpx; height: 100rpx; border: 2rpx dashed #000000; border-radius: 20rpx; visibility:' + container2_visibility" x="120rpx" y="280rpx"></movable-view>
				<movable-view class="container" direction="none" :style="' width: 420rpx; height: 100rpx; border: 2rpx dashed #000000; border-radius: 20rpx; visibility:' + container3_visibility" x="200rpx" y="390rpx"></movable-view>
				<movable-view class="container" direction="none" :style="' width: 420rpx; height: 100rpx; border: 2rpx dashed #000000; border-radius: 20rpx; visibility:' + container4_visibility" x="280rpx" y="500rpx"></movable-view>
				<movable-view class="container" direction="none" :style="' width: 580rpx; height: 100rpx; border: 2rpx dashed #000000; border-radius: 20rpx; visibility:' + container5_visibility" x="40rpx" y="170rpx"></movable-view>
				<movable-view class="container" direction="none" :style="' width: 580rpx; height: 100rpx; border: 2rpx dashed #000000; border-radius: 20rpx; visibility:' + container6_visibility" x="120rpx" y="280rpx"></movable-view>
				
			</movable-area>
			<view style="width:100%;height:120px;padding:0px 20px;margin-top: 50px;">
				<text>{{text}}</text>
			</view>
			<view style="width:100%;padding:0px 20px;margin-top: 20px;display: flex;justify-content: space-between;flex-wrap: nowrap;">
				<button @tap="next" :disabled="disable_bwd" id="backward" :style="{background:disable_bwd?'#333':'#000',color:disable_bwd?'#999':'#fff'}" class="clear_button btn_prev">
					后退
				</button>
				<view style="height: 44px;width: 2px;background: #333;"></view>
				<button @tap="next" :disabled="disable_fwd" id="forward" :style="{background:disable_fwd?'#333':'#000',color:disable_fwd?'#999':'#fff'}" class="clear_button btn_next">
					前进
				</button>
			</view>
			<ad unit-id="adunit-1923b40bb5856f34" style="margin-top: 10px;"></ad>
		</view>
	</ezpage>
</template>

<script>
	import  ezpage from "../../components/ezpage.vue"
	import  utils from "../../common/utils.js"
	
var t = require("./common.js"),
    s = require("./data.js"),
    i = "50rpx",
    e = "130rpx",
    a = "210rpx",
    r = "290rpx",
    o = "370rpx",
    b = "450rpx",
    h = "530rpx",
    n = "610rpx",
    m = "350rpx",
    u = t.BGCOLOR_YELLOW,
    c = t.BGCOLOR_YELLOW;

export default {
	components:{
		ezpage
	},
  data() {
    return {
		title:"希尔排序",
      numbers: [{
        value: 4,
        bgcolor: u,
        opacity: 1,
        x: i,
        y: "80rpx",
        visibility: "visiable"
      }, {
        value: 8,
        bgcolor: u,
        opacity: 1,
        x: e,
        y: "80rpx",
        visibility: "visiable"
      }, {
        value: 7,
        bgcolor: u,
        opacity: 1,
        x: a,
        y: "80rpx",
        visibility: "visiable"
      }, {
        value: 3,
        bgcolor: u,
        opacity: 1,
        x: r,
        y: "80rpx",
        visibility: "visiable"
      }, {
        value: 1,
        bgcolor: u,
        opacity: 1,
        x: o,
        y: "80rpx",
        visibility: "visiable"
      }, {
        value: 2,
        bgcolor: u,
        opacity: 1,
        x: b,
        y: "80rpx",
        visibility: "visiable"
      }, {
        value: 5,
        bgcolor: u,
        opacity: 1,
        x: h,
        y: "80rpx",
        visibility: "visiable"
      }, {
        value: 6,
        bgcolor: u,
        opacity: 1,
        x: n,
        y: "80rpx",
        visibility: "visiable"
      }],
      numbers1: [{
        value: 4,
        bgcolor: "F0B27A",
        opacity: 1,
        x: i,
        y: "180rpx",
        visibility: "hidden"
      }, {
        value: 8,
        bgcolor: "58D68D",
        opacity: 1,
        x: e,
        y: "290rpx",
        visibility: "hidden"
      }, {
        value: 7,
        bgcolor: "BB8FCE",
        opacity: 1,
        x: a,
        y: "400rpx",
        visibility: "hidden"
      }, {
        value: 3,
        bgcolor: "EC7063",
        opacity: 1,
        x: r,
        y: "510rpx",
        visibility: "hidden"
      }, {
        value: 1,
        bgcolor: "F0B27A",
        opacity: 1,
        x: o,
        y: "180rpx",
        visibility: "hidden"
      }, {
        value: 2,
        bgcolor: "58D68D",
        opacity: 1,
        x: b,
        y: "290rpx",
        visibility: "hidden"
      }, {
        value: 5,
        bgcolor: "BB8FCE",
        opacity: 1,
        x: h,
        y: "400rpx",
        visibility: "hidden"
      }, {
        value: 6,
        bgcolor: "EC7063",
        opacity: 1,
        x: n,
        y: "510rpx",
        visibility: "hidden"
      }],
      radius: "25rpx",
      border_size: "1rpx",
      width: "80rpx",
      height: "80rpx",
      round: 1,
      forward: 0,
      disable_fwd: !1,
      container1_visibility: "hidden",
      container2_visibility: "hidden",
      container3_visibility: "hidden",
      container4_visibility: "hidden",
      container5_visibility: "hidden",
      container6_visibility: "hidden",
      message_count: 0,
      text: "",
      disable_bwd: 1
    };
  },

  components: {},
  props: {},
  onLoad: function (i) {
    t.initTextArray(s.ShellSort[0].Text, s.ShellSort[0].size), t.showText(this.message_count, this), this.setData({
      message_count: this.message_count + 1
    });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {
	  var cPages =  getCurrentPages();
	  var curRoute = cPages[cPages.length-1].route;
	  return {
	  	title: e.title+'：'+this.title,
	  	path: utils.getShareUrl('/pages/home/home?url='+curRoute)
	  }
  },
  methods: {
	  setData(params){
		  for(var key in params){
			  if(key.indexOf('.')>=0){
				  
				  var result = key.match(/(\[).*(\])/);
				  if(!result)break;
				  
				  var prefix = key.substr(0,result.index);
				  var arrIndex = result[0].substr(1,result[0].length-2);
				  var suffix = key.substr(result.index+result[0].length+1);
				  
				  this[prefix][arrIndex][suffix]=params[key];
			  }else{
				  this[`${key}`]=params[key];
			  }
		  }
	  },
    setColor: function (t, s) {
		this.numbers[t].bgcolor=s;
    },
    setAllgrey: function () {
      var t;

      for (t = 0; t < 8; t++) this.setColor(t, "c0c0c0");
    },
    setAllyellow: function () {
      var t;

      for (t = 0; t < 8; t++) this.setColor(t, c);
    },
    moveTo: function (t, s, i) {
		this.numbers[t].x=s;
		this.numbers[t].y=i;
    },
    moveTo1: function (t, s, i) {
		this.numbers1[t].x=s;
		this.numbers1[t].y=i;
    },
    next: function (s) {
      var c,
          v = !0;
      if ("backward" == s.target.id && (v = !1), v) c = t.showText(this.message_count, this), this.setData({
        message_count: this.message_count + 1
      }), 1 == this.disable_bwd && this.setData({
        disable_bwd: !1
      });else {
        if (!(this.message_count > 0)) return console.log("error while loding text, unexpected!"), 0;
        this.setData({
          message_count: this.message_count - 1
        }), 1 == this.message_count && this.setData({
          disable_bwd: !0
        }), t.showText(this.message_count - 1, this), c = t.getContinue(this.message_count, this);
      }

      if (!c && (0 == v && (this.round > 0 && this.setData({
        round: this.round - 1
      }), 1 == this.disable_fwd && this.setData({
        disable_fwd: !1
      })), console.log("round: ", this.round, "forward: ", v), !c)) {
        switch (this.round) {
          case 1:
            v ? (this.setData({
              "numbers1[0].visibility": "visiable"
            }), this.setData({
              "numbers1[1].visibility": "visiable"
            }), this.setData({
              "numbers1[2].visibility": "visiable"
            }), this.setData({
              "numbers1[3].visibility": "visiable"
            }), this.setData({
              "numbers1[4].visibility": "visiable"
            }), this.setData({
              "numbers1[5].visibility": "visiable"
            }), this.setData({
              "numbers1[6].visibility": "visiable"
            }), this.setData({
              "numbers1[7].visibility": "visiable"
            })) : (this.setData({
              "numbers1[0].visibility": "hidden"
            }), this.setData({
              "numbers1[1].visibility": "hidden"
            }), this.setData({
              "numbers1[2].visibility": "hidden"
            }), this.setData({
              "numbers1[3].visibility": "hidden"
            }), this.setData({
              "numbers1[4].visibility": "hidden"
            }), this.setData({
              "numbers1[5].visibility": "hidden"
            }), this.setData({
              "numbers1[6].visibility": "hidden"
            }), this.setData({
              "numbers1[7].visibility": "hidden"
            }));
            break;

          case 2:
            v ? (this.setData({
              container1_visibility: "visiable"
            }), this.setData({
              "numbers1[1].opacity": .3
            }), this.setData({
              "numbers1[2].opacity": .3
            }), this.setData({
              "numbers1[3].opacity": .3
            }), this.setData({
              "numbers1[5].opacity": .3
            }), this.setData({
              "numbers1[6].opacity": .3
            }), this.setData({
              "numbers1[7].opacity": .3
            })) : (this.setData({
              container1_visibility: "hidden"
            }), this.setData({
              "numbers1[1].opacity": 1
            }), this.setData({
              "numbers1[2].opacity": 1
            }), this.setData({
              "numbers1[3].opacity": 1
            }), this.setData({
              "numbers1[5].opacity": 1
            }), this.setData({
              "numbers1[6].opacity": 1
            }), this.setData({
              "numbers1[7].opacity": 1
            }));
            break;

          case 3:
            v ? this.moveTo1(0, "300rpx", "650rpx") : this.moveTo1(0, i, "180rpx");
            break;

          case 4:
            v ? this.moveTo1(4, "210rpx", "650rpx") : this.moveTo1(4, o, "180rpx");
            break;

          case 5:
            v ? this.moveTo1(4, i, "180rpx") : this.moveTo1(4, "210rpx", "650rpx");
            break;

          case 6:
            v ? this.moveTo1(0, o, "180rpx") : this.moveTo1(0, "300rpx", "650rpx");
            break;

          case 7:
            v ? (this.setData({
              "numbers1[1].opacity": 1
            }), this.setData({
              "numbers1[5].opacity": 1
            }), this.setData({
              "numbers1[0].opacity": .3
            }), this.setData({
              "numbers1[4].opacity": .3
            }), this.setData({
              container1_visibility: "hidden"
            }), this.setData({
              container2_visibility: "visiable"
            })) : (this.setData({
              "numbers1[1].opacity": .3
            }), this.setData({
              "numbers1[5].opacity": .3
            }), this.setData({
              "numbers1[0].opacity": 1
            }), this.setData({
              "numbers1[4].opacity": 1
            }), this.setData({
              container1_visibility: "visiable"
            }), this.setData({
              container2_visibility: "hidden"
            }));
            break;

          case 8:
            v ? this.moveTo1(1, "300rpx", "650rpx") : this.moveTo1(1, e, "290rpx");
            break;

          case 9:
            v ? this.moveTo1(5, "210rpx", "650rpx") : this.moveTo1(5, b, "290rpx");
            break;

          case 10:
            v ? this.moveTo1(5, e, "290rpx") : this.moveTo1(5, "210rpx", "650rpx");
            break;

          case 11:
            v ? this.moveTo1(1, b, "290rpx") : this.moveTo1(1, "300rpx", "650rpx");
            break;

          case 12:
            v ? (this.setData({
              "numbers1[2].opacity": 1
            }), this.setData({
              "numbers1[6].opacity": 1
            }), this.setData({
              "numbers1[1].opacity": .3
            }), this.setData({
              "numbers1[5].opacity": .3
            }), this.setData({
              container2_visibility: "hidden"
            }), this.setData({
              container3_visibility: "visiable"
            })) : (this.setData({
              "numbers1[2].opacity": .3
            }), this.setData({
              "numbers1[6].opacity": .3
            }), this.setData({
              "numbers1[1].opacity": 1
            }), this.setData({
              "numbers1[5].opacity": 1
            }), this.setData({
              container2_visibility: "visiable"
            }), this.setData({
              container3_visibility: "hidden"
            }));
            break;

          case 13:
            v ? this.moveTo1(2, "300rpx", "650rpx") : this.moveTo1(2, a, "400rpx");
            break;

          case 14:
            v ? this.moveTo1(6, "210rpx", "650rpx") : this.moveTo1(6, h, "400rpx");
            break;

          case 15:
            v ? this.moveTo1(6, a, "400rpx") : this.moveTo1(6, "210rpx", "650rpx");
            break;

          case 16:
            v ? this.moveTo1(2, h, "400rpx") : this.moveTo1(2, "300rpx", "650rpx");
            break;

          case 17:
            v ? (this.setData({
              "numbers1[3].opacity": 1
            }), this.setData({
              "numbers1[7].opacity": 1
            }), this.setData({
              "numbers1[2].opacity": .3
            }), this.setData({
              "numbers1[6].opacity": .3
            }), this.setData({
              container3_visibility: "hidden"
            }), this.setData({
              container4_visibility: "visiable"
            })) : (this.setData({
              "numbers1[3].opacity": .3
            }), this.setData({
              "numbers1[7].opacity": .3
            }), this.setData({
              "numbers1[2].opacity": 1
            }), this.setData({
              "numbers1[6].opacity": 1
            }), this.setData({
              container3_visibility: "visiable"
            }), this.setData({
              container4_visibility: "hidden"
            }));
            break;

          case 18:
            v ? this.moveTo1(3, "300rpx", "650rpx") : this.moveTo1(3, r, "510rpx");
            break;

          case 19:
            v ? this.moveTo1(7, "390rpx", "650rpx") : this.moveTo1(7, n, "510rpx");
            break;

          case 20:
            v ? this.moveTo1(3, r, "510rpx") : this.moveTo1(3, "300rpx", "650rpx");
            break;

          case 21:
            v ? this.moveTo1(7, n, "510rpx") : this.moveTo1(7, "390rpx", "650rpx");
            break;

          case 22:
            v ? (this.setData({
              "numbers1[0].opacity": 1
            }), this.setData({
              "numbers1[4].opacity": 1
            }), this.setData({
              "numbers1[1].opacity": 1
            }), this.setData({
              "numbers1[5].opacity": 1
            }), this.setData({
              "numbers1[2].opacity": 1
            }), this.setData({
              "numbers1[6].opacity": 1
            }), this.setData({
              container4_visibility: "hidden"
            })) : (this.setData({
              "numbers1[0].opacity": .3
            }), this.setData({
              "numbers1[4].opacity": .3
            }), this.setData({
              "numbers1[1].opacity": .3
            }), this.setData({
              "numbers1[5].opacity": .3
            }), this.setData({
              "numbers1[2].opacity": .3
            }), this.setData({
              "numbers1[6].opacity": .3
            }), this.setData({
              container4_visibility: "visiable"
            }));
            break;

          case 23:
            v ? (this.setData({
              "numbers[0].visibility": "hidden"
            }), this.setData({
              "numbers[1].visibility": "hidden"
            }), this.setData({
              "numbers[2].visibility": "hidden"
            }), this.setData({
              "numbers[3].visibility": "hidden"
            }), this.setData({
              "numbers[4].visibility": "hidden"
            }), this.setData({
              "numbers[5].visibility": "hidden"
            }), this.setData({
              "numbers[6].visibility": "hidden"
            }), this.setData({
              "numbers[7].visibility": "hidden"
            }), this.moveTo(0, this.numbers1[0].x, "180rpx"), this.moveTo(1, this.numbers1[1].x, "290rpx"), this.moveTo(2, this.numbers1[2].x, "180rpx"), this.moveTo(3, this.numbers1[3].x, "290rpx"), this.moveTo(4, this.numbers1[4].x, "180rpx"), this.moveTo(5, this.numbers1[5].x, "290rpx"), this.moveTo(6, this.numbers1[6].x, "180rpx"), this.moveTo(7, this.numbers1[7].x, "290rpx"), this.setData({
              "numbers[0].bgcolor": "F0B27A"
            }), this.setData({
              "numbers[1].bgcolor": "58D68D"
            }), this.setData({
              "numbers[2].bgcolor": "F0B27A"
            }), this.setData({
              "numbers[3].bgcolor": "58D68D"
            }), this.setData({
              "numbers[4].bgcolor": "F0B27A"
            }), this.setData({
              "numbers[5].bgcolor": "58D68D"
            }), this.setData({
              "numbers[6].bgcolor": "F0B27A"
            }), this.setData({
              "numbers[7].bgcolor": "58D68D"
            }), this.moveTo1(0, this.numbers1[0].x, "80rpx"), this.moveTo1(1, this.numbers1[1].x, "80rpx"), this.moveTo1(2, this.numbers1[2].x, "80rpx"), this.moveTo1(3, this.numbers1[3].x, "80rpx"), this.moveTo1(4, this.numbers1[4].x, "80rpx"), this.moveTo1(5, this.numbers1[5].x, "80rpx"), this.moveTo1(6, this.numbers1[6].x, "80rpx"), this.moveTo1(7, this.numbers1[7].x, "80rpx"), this.setData({
              "numbers1[0].bgcolor": u
            }), this.setData({
              "numbers1[1].bgcolor": u
            }), this.setData({
              "numbers1[2].bgcolor": u
            }), this.setData({
              "numbers1[3].bgcolor": u
            }), this.setData({
              "numbers1[4].bgcolor": u
            }), this.setData({
              "numbers1[5].bgcolor": u
            }), this.setData({
              "numbers1[6].bgcolor": u
            }), this.setData({
              "numbers1[7].bgcolor": u
            })) : (this.setData({
              "numbers[0].visibility": "visiable"
            }), this.setData({
              "numbers[1].visibility": "visiable"
            }), this.setData({
              "numbers[2].visibility": "visiable"
            }), this.setData({
              "numbers[3].visibility": "visiable"
            }), this.setData({
              "numbers[4].visibility": "visiable"
            }), this.setData({
              "numbers[5].visibility": "visiable"
            }), this.setData({
              "numbers[6].visibility": "visiable"
            }), this.setData({
              "numbers[7].visibility": "visiable"
            }), this.moveTo(0, this.numbers1[0].x, "80rpx"), this.moveTo(1, this.numbers1[1].x, "80rpx"), this.moveTo(2, this.numbers1[2].x, "80rpx"), this.moveTo(3, this.numbers1[3].x, "80rpx"), this.moveTo(4, this.numbers1[4].x, "80rpx"), this.moveTo(5, this.numbers1[5].x, "80rpx"), this.moveTo(6, this.numbers1[6].x, "80rpx"), this.moveTo(7, this.numbers1[7].x, "80rpx"), this.setData({
              "numbers[0].bgcolor": u
            }), this.setData({
              "numbers[1].bgcolor": u
            }), this.setData({
              "numbers[2].bgcolor": u
            }), this.setData({
              "numbers[3].bgcolor": u
            }), this.setData({
              "numbers[4].bgcolor": u
            }), this.setData({
              "numbers[5].bgcolor": u
            }), this.setData({
              "numbers[6].bgcolor": u
            }), this.setData({
              "numbers[7].bgcolor": u
            }), this.moveTo1(0, this.numbers1[0].x, "180rpx"), this.moveTo1(1, this.numbers1[1].x, "290rpx"), this.moveTo1(2, this.numbers1[2].x, "400rpx"), this.moveTo1(3, this.numbers1[3].x, "510rpx"), this.moveTo1(4, this.numbers1[4].x, "180rpx"), this.moveTo1(5, this.numbers1[5].x, "290rpx"), this.moveTo1(6, this.numbers1[6].x, "400rpx"), this.moveTo1(7, this.numbers1[7].x, "510rpx"), this.setData({
              "numbers1[0].bgcolor": "F0B27A"
            }), this.setData({
              "numbers1[1].bgcolor": "58D68D"
            }), this.setData({
              "numbers1[2].bgcolor": "BB8FCE"
            }), this.setData({
              "numbers1[3].bgcolor": "EC7063"
            }), this.setData({
              "numbers1[4].bgcolor": "F0B27A"
            }), this.setData({
              "numbers1[5].bgcolor": "58D68D"
            }), this.setData({
              "numbers1[6].bgcolor": "BB8FCE"
            }), this.setData({
              "numbers1[7].bgcolor": "EC7063"
            }));
            break;

          case 24:
            v ? (this.setData({
              "numbers[0].visibility": "visiable"
            }), this.setData({
              "numbers[1].visibility": "visiable"
            }), this.setData({
              "numbers[2].visibility": "visiable"
            }), this.setData({
              "numbers[3].visibility": "visiable"
            }), this.setData({
              "numbers[4].visibility": "visiable"
            }), this.setData({
              "numbers[5].visibility": "visiable"
            }), this.setData({
              "numbers[6].visibility": "visiable"
            }), this.setData({
              "numbers[7].visibility": "visiable"
            })) : (this.setData({
              "numbers[0].visibility": "hidden"
            }), this.setData({
              "numbers[1].visibility": "hidden"
            }), this.setData({
              "numbers[2].visibility": "hidden"
            }), this.setData({
              "numbers[3].visibility": "hidden"
            }), this.setData({
              "numbers[4].visibility": "hidden"
            }), this.setData({
              "numbers[5].visibility": "hidden"
            }), this.setData({
              "numbers[6].visibility": "hidden"
            }), this.setData({
              "numbers[7].visibility": "hidden"
            }));
            break;

          case 25:
            v ? (this.setData({
              container5_visibility: "visiable"
            }), this.setData({
              "numbers[1].opacity": .3
            }), this.setData({
              "numbers[3].opacity": .3
            }), this.setData({
              "numbers[5].opacity": .3
            }), this.setData({
              "numbers[7].opacity": .3
            })) : (this.setData({
              container5_visibility: "hidden"
            }), this.setData({
              "numbers[1].opacity": 1
            }), this.setData({
              "numbers[3].opacity": 1
            }), this.setData({
              "numbers[5].opacity": 1
            }), this.setData({
              "numbers[7].opacity": 1
            }));
            break;

          case 26:
            v ? (this.setData({
              disable_fwd: !0
            }), this.moveTo(4, "300rpx", "650rpx"), setTimeout(function () {
              this.moveTo(6, "390rpx", "650rpx");
            }.bind(this), 800), setTimeout(function () {
              this.moveTo(4, "210rpx", "650rpx"), this.moveTo(0, "300rpx", "650rpx");
            }.bind(this), 1600), setTimeout(function () {
              this.moveTo(2, "480rpx", "650rpx"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 2400)) : (this.moveTo(4, i, "180rpx"), this.moveTo(6, a, "180rpx"), this.moveTo(0, o, "180rpx"), this.moveTo(2, h, "180rpx"));
            break;

          case 27:
            v ? (this.setData({
              disable_fwd: !0
            }), this.moveTo(4, i, "180rpx"), setTimeout(function () {
              this.moveTo(0, a, "180rpx");
            }.bind(this), 800), setTimeout(function () {
              this.moveTo(6, o, "180rpx");
            }.bind(this), 1600), setTimeout(function () {
              this.moveTo(2, h, "180rpx"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 2400)) : (this.moveTo(4, "210rpx", "650rpx"), this.moveTo(6, "390rpx", "650rpx"), this.moveTo(0, "300rpx", "650rpx"), this.moveTo(2, "480rpx", "650rpx"));
            break;

          case 28:
            v ? (this.setData({
              container5_visibility: "hidden"
            }), this.setData({
              container6_visibility: "visiable"
            }), this.setData({
              "numbers[1].opacity": 1
            }), this.setData({
              "numbers[3].opacity": 1
            }), this.setData({
              "numbers[5].opacity": 1
            }), this.setData({
              "numbers[7].opacity": 1
            }), this.setData({
              "numbers[2].opacity": .3
            }), this.setData({
              "numbers[4].opacity": .3
            }), this.setData({
              "numbers[6].opacity": .3
            }), this.setData({
              "numbers[0].opacity": .3
            })) : (this.setData({
              container5_visibility: "visiable"
            }), this.setData({
              container6_visibility: "hidden"
            }), this.setData({
              "numbers[1].opacity": .3
            }), this.setData({
              "numbers[3].opacity": .3
            }), this.setData({
              "numbers[5].opacity": .3
            }), this.setData({
              "numbers[7].opacity": .3
            }), this.setData({
              "numbers[2].opacity": 1
            }), this.setData({
              "numbers[4].opacity": 1
            }), this.setData({
              "numbers[6].opacity": 1
            }), this.setData({
              "numbers[0].opacity": 1
            }));
            break;

          case 29:
            v ? (this.setData({
              disable_fwd: !0
            }), this.moveTo(5, "210rpx", "650rpx"), setTimeout(function () {
              this.moveTo(3, "300rpx", "650rpx");
            }.bind(this), 800), setTimeout(function () {
              this.moveTo(1, "390rpx", "650rpx");
            }.bind(this), 1600), setTimeout(function () {
              this.moveTo(1, "480rpx", "650rpx"), this.moveTo(7, "390rpx", "650rpx"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 2400)) : (this.moveTo(5, e, "290rpx"), this.moveTo(3, r, "290rpx"), this.moveTo(1, b, "290rpx"), this.moveTo(7, n, "290rpx"));
            break;

          case 30:
            v ? (this.setData({
              disable_fwd: !0
            }), this.moveTo(5, e, "290rpx"), setTimeout(function () {
              this.moveTo(3, r, "290rpx");
            }.bind(this), 800), setTimeout(function () {
              this.moveTo(7, b, "290rpx");
            }.bind(this), 1600), setTimeout(function () {
              this.moveTo(1, n, "290rpx"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 2400)) : (this.moveTo(5, "210rpx", "650rpx"), this.moveTo(3, "300rpx", "650rpx"), this.moveTo(1, "480rpx", "650rpx"), this.moveTo(7, "390rpx", "650rpx"));
            break;

          case 31:
            v ? (this.setData({
              "numbers[2].opacity": 1
            }), this.setData({
              "numbers[4].opacity": 1
            }), this.setData({
              "numbers[6].opacity": 1
            }), this.setData({
              "numbers[0].opacity": 1
            }), this.setData({
              container6_visibility: "hidden"
            })) : (this.setData({
              "numbers[2].opacity": .3
            }), this.setData({
              "numbers[4].opacity": .3
            }), this.setData({
              "numbers[6].opacity": .3
            }), this.setData({
              "numbers[0].opacity": .3
            }), this.setData({
              container6_visibility: "visiable"
            }));
            break;

          case 32:
            v ? (this.setData({
              "numbers1[0].visibility": "hidden"
            }), this.setData({
              "numbers1[1].visibility": "hidden"
            }), this.setData({
              "numbers1[2].visibility": "hidden"
            }), this.setData({
              "numbers1[3].visibility": "hidden"
            }), this.setData({
              "numbers1[4].visibility": "hidden"
            }), this.setData({
              "numbers1[5].visibility": "hidden"
            }), this.setData({
              "numbers1[6].visibility": "hidden"
            }), this.setData({
              "numbers1[7].visibility": "hidden"
            }), this.moveTo(0, this.numbers[0].x, "80rpx"), this.moveTo(1, this.numbers[1].x, "80rpx"), this.moveTo(2, this.numbers[2].x, "80rpx"), this.moveTo(3, this.numbers[3].x, "80rpx"), this.moveTo(4, this.numbers[4].x, "80rpx"), this.moveTo(5, this.numbers[5].x, "80rpx"), this.moveTo(6, this.numbers[6].x, "80rpx"), this.moveTo(7, this.numbers[7].x, "80rpx")) : (this.moveTo(0, this.numbers[0].x, "180rpx"), this.moveTo(1, this.numbers[1].x, "290rpx"), this.moveTo(2, this.numbers[2].x, "180rpx"), this.moveTo(3, this.numbers[3].x, "290rpx"), this.moveTo(4, this.numbers[4].x, "180rpx"), this.moveTo(5, this.numbers[5].x, "290rpx"), this.moveTo(6, this.numbers[6].x, "180rpx"), this.moveTo(7, this.numbers[7].x, "290rpx"), this.setData({
              "numbers1[0].visibility": "visiable"
            }), this.setData({
              "numbers1[1].visibility": "visiable"
            }), this.setData({
              "numbers1[2].visibility": "visiable"
            }), this.setData({
              "numbers1[3].visibility": "visiable"
            }), this.setData({
              "numbers1[4].visibility": "visiable"
            }), this.setData({
              "numbers1[5].visibility": "visiable"
            }), this.setData({
              "numbers1[6].visibility": "visiable"
            }), this.setData({
              "numbers1[7].visibility": "visiable"
            }));
            break;

          case 33:
            v ? (this.setData({
              disable_fwd: !0
            }), this.moveTo(4, i, m), setTimeout(function () {
              this.moveTo(5, e, m);
            }.bind(this), 600), setTimeout(function () {
              this.moveTo(0, a, m);
            }.bind(this), 1200), setTimeout(function () {
              this.moveTo(0, r, m), this.moveTo(3, a, m);
            }.bind(this), 1800), setTimeout(function () {
              this.moveTo(6, o, m);
            }.bind(this), 2400), setTimeout(function () {
              this.moveTo(7, b, m);
            }.bind(this), 3e3), setTimeout(function () {
              this.moveTo(2, h, m);
            }.bind(this), 3600), setTimeout(function () {
              this.moveTo(1, n, m), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 4200)) : (this.moveTo(4, i, "80rpx"), this.moveTo(5, e, "80rpx"), this.moveTo(0, a, "80rpx"), this.moveTo(3, r, "80rpx"), this.moveTo(6, o, "80rpx"), this.moveTo(7, b, "80rpx"), this.moveTo(2, h, "80rpx"), this.moveTo(1, n, "80rpx"));
            break;

          case 34:
            v ? this.setAllgrey() : (this.setData({
              "numbers[0].bgcolor": "F0B27A"
            }), this.setData({
              "numbers[1].bgcolor": "58D68D"
            }), this.setData({
              "numbers[2].bgcolor": "F0B27A"
            }), this.setData({
              "numbers[3].bgcolor": "58D68D"
            }), this.setData({
              "numbers[4].bgcolor": "F0B27A"
            }), this.setData({
              "numbers[5].bgcolor": "58D68D"
            }), this.setData({
              "numbers[6].bgcolor": "F0B27A"
            }), this.setData({
              "numbers[7].bgcolor": "58D68D"
            }));
            break;

          case 35:
            v && this.setData({
              disable_fwd: !0
            });
        }

        v && this.setData({
          round: this.round + 1
        });
      }
    },
    restore: function () {
      uni.redirectTo({
        url: "ShellSort"
      });
    },
    source: function () {
      console.log("checking source code"), uni.navigateTo({
        url: "../SourceCode/SourceCode?key=ShellSort&language=CPP"
      });
    }
  }
};
</script>
