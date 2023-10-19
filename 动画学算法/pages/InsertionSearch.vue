<template>
	<ezpage :title="title" backgroundColor="#f2f2f2">
		<view slot='contentSection'>
			<movable-area style='width:100%;height: 250px;pointer-events: none'>
				<movable-view class="container" direction="none" style="font-size:27rpx; text-align:center; width:750rpx; height:60rpx" x="0rpx" y="80rpx">
					<text :style="'visibility:' + formula_visibility + ';'">{{formula}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[0].border_size + ' solid #a1a1a1; background:#' + numbers[0].bgcolor + ';'" :x="numbers[0].x" :y="numbers[0].y">
					<text>{{numbers[0].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[1].border_size + ' solid #a1a1a1; background:#' + numbers[1].bgcolor + ';'" :x="numbers[1].x" :y="numbers[1].y">
					<text>{{numbers[1].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[2].border_size + ' solid #a1a1a1; background:#' + numbers[2].bgcolor + ';'" :x="numbers[2].x" :y="numbers[2].y">
					<text>{{numbers[2].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[3].border_size + ' solid #a1a1a1; background:#' + numbers[3].bgcolor + ';'" :x="numbers[3].x" :y="numbers[3].y">
					<text>{{numbers[3].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[4].border_size + ' solid #a1a1a1; background:#' + numbers[4].bgcolor + ';'" :x="numbers[4].x" :y="numbers[4].y">
					<text>{{numbers[4].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[5].border_size + ' solid #a1a1a1; background:#' + numbers[5].bgcolor + ';'" :x="numbers[5].x" :y="numbers[5].y">
					<text>{{numbers[5].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[6].border_size + ' solid #a1a1a1; background:#' + numbers[6].bgcolor + ';'" :x="numbers[6].x" :y="numbers[6].y">
					<text>{{numbers[6].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[7].border_size + ' solid #a1a1a1; background:#' + numbers[7].bgcolor + ';'" :x="numbers[7].x" :y="numbers[7].y">
					<text>{{numbers[7].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[8].border_size + ' solid #a1a1a1; background:#' + numbers[8].bgcolor + ';'" :x="numbers[8].x" :y="numbers[8].y">
					<text>{{numbers[8].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[8].border_size + ' solid #a1a1a1; background:#' + numbers[9].bgcolor + ';'" :x="numbers[9].x" :y="numbers[9].y">
					<text>{{numbers[9].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[10].border_size + ' solid #a1a1a1; background:#' + numbers[9].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[10].x" :y="numbers[10].y">
					<text>{{numbers[10].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[11].border_size + ' solid #a1a1a1; background:#' + numbers[11].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[11].x" :y="numbers[11].y">
					<text>{{numbers[11].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[12].border_size + ' solid #a1a1a1; background:#' + numbers[12].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[12].x" :y="numbers[12].y">
					<text>{{numbers[12].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[13].border_size + ' solid #a1a1a1; background:#' + numbers[13].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[13].x" :y="numbers[13].y">
					<text>{{numbers[13].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[14].border_size + ' solid #a1a1a1; background:#' + numbers[14].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[14].x" :y="numbers[14].y">
					<text>{{numbers[14].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[15].border_size + ' solid #a1a1a1; background:#' + numbers[15].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[15].x" :y="numbers[15].y">
					<text>{{numbers[15].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[16].border_size + ' solid #a1a1a1; background:#' + numbers[16].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[16].x" :y="numbers[16].y">
					<text>{{numbers[16].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[17].border_size + ' solid #a1a1a1; background:#' + numbers[17].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[17].x" :y="numbers[17].y">
					<text>{{numbers[17].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[18].border_size + ' solid #a1a1a1; background:#' + numbers[18].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[18].x" :y="numbers[18].y">
					<text>{{numbers[18].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[19].border_size + ' solid #a1a1a1; background:#' + numbers[19].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[19].x" :y="numbers[19].y">
					<text>{{numbers[19].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[20].border_size + ' solid #a1a1a1; background:#' + numbers[20].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[20].x" :y="numbers[20].y">
					<text>{{numbers[20].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 40rpx; height: ' + height + '; border:' + numbers[21].border_size + ' solid #a1a1a1; background:#' + numbers[21].bgcolor + '; border-radius:' + border_radius + ';'" :x="numbers[21].x" :y="numbers[21].y">
					<text>{{numbers[21].value}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 45rpx; height: 35rpx; border:5rpx solid #0; visibility:' + visibility" :x="left_x" :y="left_y">
					<text style="font-size:22rpx;">low</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 45rpx; height: 35rpx; border:5rpx solid #0; visibility:' + visibility" :x="right_x" :y="right_y">
					<text style="font-size:22rpx;">high</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 45rpx; height: 35rpx; border:5rpx solid #0; visibility:' + mid_visibility" :x="mid_x" :y="mid_y">
					<text style="font-size:22rpx;">mid</text>
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
    r = require("./data.js"),
    i = e.BGCOLOR_YELLOW;

export default {
	components:{
		ezpage
	},
  data() {
    return {
		title:"插值查找",
      numbers: [{
        value: 1,
        index: 0,
        border_size: "2rpx",
        bgcolor: i,
        x: "60rpx",
        y: "200rpx"
      }, {
        value: 4,
        index: 1,
        border_size: "2rpx",
        bgcolor: i,
        x: "120rpx",
        y: "200rpx"
      }, {
        value: 5,
        index: 2,
        border_size: "2rpx",
        bgcolor: i,
        x: "180rpx",
        y: "200rpx"
      }, {
        value: 8,
        index: 3,
        border_size: "2rpx",
        bgcolor: i,
        x: "240rpx",
        y: "200rpx"
      }, {
        value: 10,
        index: 4,
        border_size: "2rpx",
        bgcolor: i,
        x: "300rpx",
        y: "200rpx"
      }, {
        value: 12,
        index: 5,
        border_size: "2rpx",
        bgcolor: i,
        x: "360rpx",
        y: "200rpx"
      }, {
        value: 13,
        index: 6,
        border_size: "2rpx",
        bgcolor: i,
        x: "420rpx",
        y: "200rpx"
      }, {
        value: 17,
        index: 7,
        border_size: "2rpx",
        bgcolor: i,
        x: "480rpx",
        y: "200rpx"
      }, {
        value: 19,
        index: 8,
        border_size: "2rpx",
        bgcolor: i,
        x: "540rpx",
        y: "200rpx"
      }, {
        value: 24,
        index: 9,
        border_size: "2rpx",
        bgcolor: i,
        x: "600rpx",
        y: "200rpx"
      }, {
        value: 26,
        index: 10,
        border_size: "2rpx",
        bgcolor: i,
        x: "660rpx",
        y: "200rpx"
      }, {
        value: 28,
        index: 11,
        border_size: "2rpx",
        bgcolor: i,
        x: "60rpx",
        y: "400rpx"
      }, {
        value: 33,
        index: 12,
        border_size: "2rpx",
        bgcolor: i,
        x: "120rpx",
        y: "400rpx"
      }, {
        value: 38,
        index: 13,
        border_size: "2rpx",
        bgcolor: i,
        x: "180rpx",
        y: "400rpx"
      }, {
        value: 40,
        index: 14,
        border_size: "2rpx",
        bgcolor: i,
        x: "240rpx",
        y: "400rpx"
      }, {
        value: 42,
        index: 15,
        border_size: "2rpx",
        bgcolor: i,
        x: "300rpx",
        y: "400rpx"
      }, {
        value: 45,
        index: 16,
        border_size: "2rpx",
        bgcolor: i,
        x: "360rpx",
        y: "400rpx"
      }, {
        value: 46,
        index: 17,
        border_size: "2rpx",
        bgcolor: i,
        x: "420rpx",
        y: "400rpx"
      }, {
        value: 49,
        index: 18,
        border_size: "2rpx",
        bgcolor: i,
        x: "480rpx",
        y: "400rpx"
      }, {
        value: 51,
        index: 19,
        border_size: "2rpx",
        bgcolor: i,
        x: "540rpx",
        y: "400rpx"
      }, {
        value: 55,
        index: 20,
        border_size: "2rpx",
        bgcolor: i,
        x: "600rpx",
        y: "400rpx"
      }, {
        value: 59,
        index: 21,
        border_size: "2rpx",
        bgcolor: i,
        x: "660rpx",
        y: "400rpx"
      }],
      left_x: "60rpx",
      right_x: "660rpx",
      mid_x: "180rpx",
      left_y: "160rpx",
      right_y: "360rpx",
      mid_y: "160rpx",
      border_radius: "10rpx",
      visibility: "hidden",
      mid_visibility: "hidden",
      border_size_default: "2rpx",
      border_size_selected: "6rpx",
      height: "70rpx",
      search_value: 8,
      count: 10,
      round: 1,
      low_index: 0,
      high_index: 10,
      mid_index: 5,
      forward: 0,
      disable_fwd: !1,
      formula_visibility: "hidden",
      formula: "mid = low + (high - low) * (key - a[low]) / (a[high] - a[low])",
      message_count: 0,
      text: "",
      disable_bwd: 1
    };
  },

  components: {},
  props: {},
  onLoad: function (i) {
    e.initTextArray(r.InsertionSearch[0].Text, r.InsertionSearch[0].size), e.showText(this.message_count, this), this.setData({
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
    next: function (r) {
      var t,
          s = !0;
      if ("backward" == r.target.id && (s = !1), s) t = e.showText(this.message_count, this), this.setData({
        message_count: this.message_count + 1
      }), 1 == this.disable_bwd && this.setData({
        disable_bwd: !1
      });else {
        if (!(this.message_count > 0)) return console.log("error while loding text, unexpected!"), 0;
        this.setData({
          message_count: this.message_count - 1
        }), 1 == this.message_count && this.setData({
          disable_bwd: !0
        }), e.showText(this.message_count - 1, this), t = e.getContinue(this.message_count, this);
      }

      if (!t) {
        switch (0 == s && (this.round > 0 && this.setData({
          round: this.round - 1
        }), 1 == this.disable_fwd && this.setData({
          disable_fwd: !1
        })), console.log("round: ", this.round, "forward: ", s), this.round) {
          case 1:
            s ? (this.setData({
              visibility: "visiable"
            }), this.setData({
              formula_visibility: "visiable"
            }), this.setData({
              "numbers[0].border_size": this.border_size_selected
            }), this.setData({
              "numbers[21].border_size": this.border_size_selected
            })) : (this.setData({
              visibility: "hidden"
            }), this.setData({
              formula_visibility: "hidden"
            }), this.setData({
              "numbers[0].border_size": this.border_size_default
            }), this.setData({
              "numbers[21].border_size": this.border_size_default
            }));
            break;

          case 2:
            s ? (this.setData({
              mid_visibility: "visiable"
            }), this.setData({
              "numbers[2].border_size": this.border_size_selected
            })) : (this.setData({
              mid_visibility: "hidden"
            }), this.setData({
              "numbers[2].border_size": this.border_size_default
            }));
            break;

          case 3:
            s ? this.setData({
              mid_visibility: "hidden"
            }) : this.setData({
              mid_visibility: "visiable"
            });
            break;

          case 4:
            s ? (this.setData({
              "numbers[0].border_size": this.border_size_default
            }), this.setData({
              left_x: "180rpx"
            })) : (this.setData({
              "numbers[0].border_size": this.border_size_selected
            }), this.setData({
              left_x: "60rpx"
            }));
            break;

          case 5:
            s ? (this.setData({
              mid_x: "240rpx"
            }), this.setData({
              "numbers[3].border_size": this.border_size_selected
            }), this.setData({
              "numbers[3].bgcolor": "c0c0c0"
            }), this.setData({
              mid_visibility: "visiable"
            })) : (this.setData({
              mid_x: "180rpx"
            }), this.setData({
              "numbers[3].border_size": this.border_size_default
            }), this.setData({
              "numbers[3].bgcolor": i
            }), this.setData({
              mid_visibility: "hidden"
            }));
            break;

          case 6:
            s && this.setData({
              disable_fwd: !0
            });
        }

        s && this.setData({
          round: this.round + 1
        });
      }
    }
  }
};
</script>
