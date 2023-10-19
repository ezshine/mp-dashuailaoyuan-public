<template>
	<ezpage :title="title" backgroundColor="#f2f2f2">
		<view slot='contentSection'>
			<movable-area style='width:100%;height: 200px;pointer-events: none'>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[0].border_size + ' solid #a1a1a1; background:#' + numbers[0].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[0].x" :y="numbers[0].y">
					<text>{{numbers[0].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[1].border_size + ' solid #a1a1a1; background:#' + numbers[1].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[1].x" :y="numbers[1].y">
					<text>{{numbers[1].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[2].border_size + ' solid #a1a1a1; background:#' + numbers[2].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[2].x" :y="numbers[2].y">
					<text>{{numbers[2].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[3].border_size + ' solid #a1a1a1; background:#' + numbers[3].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[3].x" :y="numbers[3].y">
					<text>{{numbers[3].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[4].border_size + ' solid #a1a1a1; background:#' + numbers[4].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[4].x" :y="numbers[4].y">
					<text>{{numbers[4].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[5].border_size + ' solid #a1a1a1; background:#' + numbers[5].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[5].x" :y="numbers[5].y">
					<text>{{numbers[5].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[6].border_size + ' solid #a1a1a1; background:#' + numbers[6].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[6].x" :y="numbers[6].y">
					<text>{{numbers[6].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[7].border_size + ' solid #a1a1a1; background:#' + numbers[7].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[7].x" :y="numbers[7].y">
					<text>{{numbers[7].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[8].border_size + ' solid #a1a1a1; background:#' + numbers[8].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[8].x" :y="numbers[8].y">
					<text>{{numbers[8].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[9].border_size + ' solid #a1a1a1; background:#' + numbers[9].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[9].x" :y="numbers[9].y">
					<text>{{numbers[9].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: ' + width + '; height: ' + height + '; border: ' + numbers[10].border_size + ' solid #a1a1a1; background:#' + numbers[9].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[10].x" :y="numbers[10].y">
					<text>{{numbers[10].value}}</text>
				</movable-view>
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
	
var e = require("./common.js"),
    s = require("./data.js"),
    t = e.BGCOLOR_YELLOW;

export default {
	components:{
		ezpage
	},
  data() {
    return {
		title:"线性查找",
      numbers: [{
        value: 8,
        index: 0,
        bgcolor: t,
        border_size: "2rpx",
        x: "60rpx",
        y: "300rpx"
      }, {
        value: 12,
        index: 1,
        bgcolor: t,
        border_size: "2rpx",
        x: "120rpx",
        y: "300rpx"
      }, {
        value: 3,
        index: 2,
        bgcolor: t,
        border_size: "2rpx",
        x: "180rpx",
        y: "300rpx"
      }, {
        value: 6,
        index: 3,
        bgcolor: t,
        border_size: "2rpx",
        x: "240rpx",
        y: "300rpx"
      }, {
        value: 19,
        index: 4,
        bgcolor: t,
        border_size: "2rpx",
        x: "300rpx",
        y: "300rpx"
      }, {
        value: 22,
        index: 5,
        bgcolor: t,
        border_size: "2rpx",
        x: "360rpx",
        y: "300rpx"
      }, {
        value: 9,
        index: 6,
        bgcolor: t,
        border_size: "2rpx",
        x: "420rpx",
        y: "300rpx"
      }, {
        value: 7,
        index: 7,
        bgcolor: t,
        border_size: "2rpx",
        x: "480rpx",
        y: "300rpx"
      }, {
        value: 16,
        index: 8,
        bgcolor: t,
        border_size: "2rpx",
        x: "540rpx",
        y: "300rpx"
      }, {
        value: 5,
        index: 9,
        bgcolor: t,
        border_size: "2rpx",
        x: "600rpx",
        y: "300rpx"
      }, {
        value: 11,
        index: 10,
        bgcolor: t,
        border_size: "2rpx",
        x: "660rpx",
        y: "300rpx"
      }],
      search_value: 7,
      border_radius: "10rpx",
      border_size_default: "2rpx",
      border_size_selected: "6rpx",
      width: "45rpx",
      height: "70rpx",
      count: 9,
      round: 1,
      forward: 0,
      disable_fwd: !1,
      disable_bwd: !0,
      message_count: 0,
      text: ""
    };
  },

  components: {},
  props: {},
  onLoad: function (t) {
    e.initTextArray(s.LinearSearch[0].Text, s.LinearSearch[0].size), e.showText(this.message_count, this), this.setData({
      message_count: this.message_count + 1
    });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {
    console.log("Unload");
  },
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
    setBorderSize: function (e, s) {
		this.numbers[e].border_size=s;
    },
    next: function (s) {
      var r,
          a = !0;
      if ("backward" == s.target.id && (a = !1), a) r = e.showText(this.message_count, this), this.setData({
        message_count: this.message_count + 1
      }), 1 == this.disable_bwd && this.setData({
        disable_bwd: !1
      });else {
        if (!(this.message_count > 0)) return console.log("error while loding text, unexpected!"), 0;
        this.setData({
          message_count: this.message_count - 1
        }), 1 == this.message_count && this.setData({
          disable_bwd: !0
        }), e.showText(this.message_count - 1, this), r = e.getContinue(this.message_count, this);
      }

      if (!r) {
        if (0 == a && (this.round > 0 && this.setData({
          round: this.round - 1
        }), 1 == this.disable_fwd && this.setData({
          disable_fwd: !1
        })), console.log("round: ", this.round, "forward: ", a), a) {
          if (this.numbers[this.round - 1].value != this.search_value) {
            i = this.round - 1;
            this.setBorderSize(i, this.border_size_selected), i >= 1 && this.setBorderSize(i - 1, this.border_size_default);
          } else {
            i = this.round - 1;
            this.setBorderSize(i, this.border_size_selected), this.setBorderSize(i - 1, this.border_size_default), this.setData({
              "numbers[7].bgcolor": "c0c0c0"
            }), this.setData({
              disable_fwd: !0
            });
          }
        } else if (this.numbers[this.round - 1].value != this.search_value) {
          i = this.round - 1;
          this.setBorderSize(i, this.border_size_default), i >= 1 && this.setBorderSize(i - 1, this.border_size_selected);
        } else {
          var i = this.round - 1;
          this.setBorderSize(i, this.border_size_default), this.setBorderSize(i - 1, this.border_size_selected), this.setData({
            "numbers[7].bgcolor": t
          }), this.setData({
            disable_fwd: !1
          });
        }
        a && this.setData({
          round: this.round + 1
        });
      }
    }
  }
};
</script>
