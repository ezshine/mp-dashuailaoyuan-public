<template>
	<ezpage :title="title" backgroundColor="#f2f2f2">
		<view slot='contentSection'>
			<movable-area style='width:100%;height: 220px;pointer-events: none'>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[0].length*factor+base) + 'rpx; border:' + numbers[0].border_size + ' solid #' + numbers[0].border_color + '; background:#' + numbers[0].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[0].right + '%; bottom:' + bottom + '%'" :x="numbers[0].x" :y="numbers[0].y">
					<text>{{numbers[0].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[1].length*factor+base) + 'rpx; border:' + numbers[1].border_size + ' solid #' + numbers[1].border_color + '; background:#' + numbers[1].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[1].right + '%; bottom:' + bottom + '%'" :x="numbers[1].x" :y="numbers[1].y">
					<text>{{numbers[1].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[2].length*factor+base) + 'rpx; border:' + numbers[2].border_size + ' solid #' + numbers[2].border_color + '; background:#' + numbers[2].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[2].right + '%; bottom:' + bottom + '%'" :x="numbers[2].x" :y="numbers[2].y">
					<text>{{numbers[2].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[3].length*factor+base) + 'rpx; border:' + numbers[3].border_size + ' solid #' + numbers[3].border_color + '; background:#' + numbers[3].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[3].right + '%; bottom:' + bottom + '%'" :x="numbers[3].x" :y="numbers[3].y">
					<text>{{numbers[3].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[4].length*factor+base) + 'rpx; border:' + numbers[4].border_size + ' solid #' + numbers[4].border_color + '; background:#' + numbers[4].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[4].right + '%; bottom:' + bottom + '%'" :x="numbers[4].x" :y="numbers[4].y">
					<text>{{numbers[4].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[5].length*factor+base) + 'rpx; border:' + numbers[5].border_size + ' solid #' + numbers[5].border_color + '; background:#' + numbers[5].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[5].right + '%; bottom:' + bottom + '%'" :x="numbers[5].x" :y="numbers[5].y">
					<text>{{numbers[5].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[6].length*factor+base) + 'rpx; border:' + numbers[6].border_size + ' solid #' + numbers[6].border_color + '; background:#' + numbers[6].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[6].right + '%; bottom:' + bottom + '%'" :x="numbers[6].x" :y="numbers[6].y">
					<text>{{numbers[6].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[7].length*factor+base) + 'rpx; border:' + numbers[7].border_size + ' solid #' + numbers[7].border_color + '; background:#' + numbers[7].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[7].right + '%; bottom:' + bottom + '%'" :x="numbers[7].x" :y="numbers[7].y">
					<text>{{numbers[7].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[8].length*factor+base) + 'rpx; border:' + numbers[8].border_size + ' solid #' + numbers[8].border_color + '; background:#' + numbers[8].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[8].right + '%; bottom:' + bottom + '%'" :x="numbers[8].x" :y="numbers[8].y">
					<text>{{numbers[8].length}}</text>
				</movable-view>
			</movable-area>
			<view style="width:100%;height:100px;padding:0px 20px;margin-top: 50px;">
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
	import ezpage from "../../components/ezpage.vue"
	import utils from "../../common/utils.js"
	
var e = require("./common.js"),
    t = require("./data.js");

export default {
	components:{
		ezpage
	},
  data() {
    return {
		title:"冒泡排序",
      numbers: [{
        value: 8,
        length: 8,
        border_size: "2rpx",
        border_color: "a1a1a1",
        bgcolor: e.BGCOLOR_YELLOW,
        index: 0,
        x: "50rpx",
        y: "220rpx"
      }, {
        value: 9,
        length: 9,
        border_size: "2rpx",
        border_color: "a1a1a1",
        bgcolor: e.BGCOLOR_YELLOW,
        index: 1,
        x: "125rpx",
        y: "200rpx"
      }, {
        value: 1,
        length: 1,
        border_size: "2rpx",
        border_color: "a1a1a1",
        bgcolor: e.BGCOLOR_YELLOW,
        index: 2,
        x: "200rpx",
        y: "360rpx"
      }, {
        value: 4,
        length: 4,
        border_size: "2rpx",
        border_color: "a1a1a1",
        bgcolor: e.BGCOLOR_YELLOW,
        index: 3,
        x: "275rpx",
        y: "300rpx"
      }, {
        value: 2,
        length: 2,
        border_size: "2rpx",
        border_color: "a1a1a1",
        bgcolor: e.BGCOLOR_YELLOW,
        index: 4,
        x: "350rpx",
        y: "340rpx"
      }, {
        value: 3,
        length: 3,
        border_size: "2rpx",
        border_color: "a1a1a1",
        bgcolor: e.BGCOLOR_YELLOW,
        index: 5,
        x: "425rpx",
        y: "320rpx"
      }, {
        value: 6,
        length: 6,
        border_size: "2rpx",
        border_color: "a1a1a1",
        bgcolor: e.BGCOLOR_YELLOW,
        index: 6,
        x: "500rpx",
        y: "260rpx"
      }, {
        value: 7,
        length: 7,
        border_size: "2rpx",
        border_color: "a1a1a1",
        bgcolor: e.BGCOLOR_YELLOW,
        index: 7,
        x: "575rpx",
        y: "240rpx"
      }, {
        value: 5,
        length: 5,
        border_size: "2rpx",
        border_color: "a1a1a1",
        bgcolor: e.BGCOLOR_YELLOW,
        index: 8,
        x: "650rpx",
        y: "280rpx"
      }],
      count: 9,
      bgcolor_green: "00E676",
      bgcolor_grey: "C0C0C0",
      factor: 20,
      base: 50,
      round: 1,
      cmp_round: 1,
      last_option_compare: !0,
      border_size_default: "2rpx",
      border_size_selected: "5rpx",
      border_color_default: "a1a1a1",
      border_color_selected: "000000",
      disable_fwd: !1,
      disable_bwd: !0,
      left_index: 8,
      right_index: 9,
      last_index: -1,
      message_count: 0,
      newstart: !0,
      text: ""
    };
  },

  components: {},
  props: {},
  onLoad: function (s) {
    e.initTextArray(t.BubbleSort[0].Text, t.BubbleSort[0].size), e.showText(this.message_count, this), this.setData({
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
			  this[`${key}`]=params[key];
		  }
	  },
    setBorderSize: function (e, t) {
		this.numbers[e].border_size=t;
    },
    setBorderColor: function (e, t) {
		this.numbers[e].border_color=t;
    },
    setBgColor: function (e, t) {
		this.numbers[e].bgcolor=t;
    },
    switch_element: function (e, t) {
      var s = this.numbers[e].x,
          i = this.numbers[e].index;

		this.numbers[e].x=this.numbers[t].x;
		this.numbers[e].index=this.numbers[t].index;

		this.numbers[t].x=s;
		this.numbers[t].index=i;
    },
    findIndex: function (e) {
      for (var t = 0; t <= 8 && e != this.numbers[t].index; t++);

      return t;
    },
    setSelected: function (t) {
      this.setBorderSize(t, this.border_size_selected), this.setBorderColor(t, this.border_color_selected), this.setBgColor(t, e.BGCOLOR_YELLOW);
    },
    setDefault: function (t) {
      this.setBorderSize(t, this.border_size_default), this.setBorderColor(t, this.border_color_default), this.setBgColor(t, e.BGCOLOR_YELLOW);
    },
    setGrey: function (e) {
      this.setBorderSize(e, this.border_size_default), this.setBorderColor(e, this.border_color_default), this.setBgColor(e, this.bgcolor_grey);
    },
    next: function (t) {
      var s,
          i = !0,
          d = 0,
          a = 0,
          h = 0;
      if ("backward" == t.target.id && (i = !1), i) s = e.showText(this.message_count, this), this.setData({
        message_count: this.message_count + 1
      }), 1 == this.disable_bwd && this.setData({
        disable_bwd: !1
      });else {
        if (!(this.message_count > 0)) return console.log("error while loding text, unexpected!"), 0;
        this.setData({
          message_count: this.message_count - 1
        }), 1 == this.message_count && this.setData({
          disable_bwd: !0
        }), e.showText(this.message_count - 1, this), s = e.getContinue(this.message_count, this);
      }

      if (!s) {
        switch (0 == i && this.round > 0 && this.setData({
          round: this.round - 1
        }), console.log("round: ", this.round, "forward: ", i), this.round) {
          case 1:
            d = this.findIndex(7), a = this.findIndex(8), i ? (this.setSelected(d), this.setSelected(a)) : (this.setDefault(d), this.setDefault(a));
            break;

          case 2:
            d = this.findIndex(7), a = this.findIndex(8), this.switch_element(d, a);
            break;

          case 3:
            d = this.findIndex(6), a = this.findIndex(7), h = this.findIndex(8), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 4:
            d = this.findIndex(6), a = this.findIndex(7), this.switch_element(d, a);
            break;

          case 5:
            d = this.findIndex(5), a = this.findIndex(6), h = this.findIndex(7), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 6:
            d = this.findIndex(4), a = this.findIndex(5), h = this.findIndex(6), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 7:
            d = this.findIndex(3), a = this.findIndex(4), h = this.findIndex(5), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 8:
            d = this.findIndex(3), a = this.findIndex(4), this.switch_element(d, a);
            break;

          case 9:
            d = this.findIndex(2), a = this.findIndex(3), h = this.findIndex(4), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 10:
            d = this.findIndex(1), a = this.findIndex(2), h = this.findIndex(3), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 11:
            d = this.findIndex(1), a = this.findIndex(2), this.switch_element(d, a);
            break;

          case 12:
            d = this.findIndex(0), a = this.findIndex(1), h = this.findIndex(2), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 13:
            d = this.findIndex(0), a = this.findIndex(1), this.switch_element(d, a);
            break;

          case 14:
            var d = this.findIndex(0),
                a = this.findIndex(1),
                n = this.findIndex(7),
                r = this.findIndex(8);
            i ? (this.setGrey(d), this.setDefault(a), this.setSelected(n), this.setSelected(r)) : (this.setDefault(n), this.setDefault(r), this.setSelected(d), this.setSelected(a));
            break;

          case 15:
            d = this.findIndex(6), a = this.findIndex(7), h = this.findIndex(8), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 16:
            d = this.findIndex(5), a = this.findIndex(6), h = this.findIndex(7), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 17:
            d = this.findIndex(4), a = this.findIndex(5), h = this.findIndex(6), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 18:
            d = this.findIndex(4), a = this.findIndex(5), this.switch_element(d, a);
            break;

          case 19:
            d = this.findIndex(3), a = this.findIndex(4), h = this.findIndex(5), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 20:
            d = this.findIndex(2), a = this.findIndex(3), h = this.findIndex(4), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 21:
            d = this.findIndex(2), a = this.findIndex(3), this.switch_element(d, a);
            break;

          case 22:
            d = this.findIndex(1), a = this.findIndex(2), h = this.findIndex(3), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 23:
            d = this.findIndex(1), a = this.findIndex(2), this.switch_element(d, a);
            break;

          case 24:
            var d = this.findIndex(1),
                a = this.findIndex(2),
                n = this.findIndex(7),
                r = this.findIndex(8);
            i ? (this.setGrey(d), this.setDefault(a), this.setSelected(n), this.setSelected(r)) : (this.setDefault(n), this.setDefault(r), this.setSelected(d), this.setSelected(a));
            break;

          case 25:
            d = this.findIndex(6), a = this.findIndex(7), h = this.findIndex(8), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 26:
            d = this.findIndex(5), a = this.findIndex(6), h = this.findIndex(7), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 27:
            d = this.findIndex(4), a = this.findIndex(5), h = this.findIndex(6), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 28:
            d = this.findIndex(3), a = this.findIndex(4), h = this.findIndex(5), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 29:
            d = this.findIndex(3), a = this.findIndex(4), this.switch_element(d, a);
            break;

          case 30:
            d = this.findIndex(2), a = this.findIndex(3), h = this.findIndex(4), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 31:
            d = this.findIndex(2), a = this.findIndex(3), this.switch_element(d, a);
            break;

          case 32:
            var d = this.findIndex(2),
                a = this.findIndex(3),
                n = this.findIndex(7),
                r = this.findIndex(8);
            i ? (this.setGrey(d), this.setDefault(a), this.setSelected(n), this.setSelected(r)) : (this.setDefault(n), this.setDefault(r), this.setSelected(d), this.setSelected(a));
            break;

          case 33:
            d = this.findIndex(6), a = this.findIndex(7), h = this.findIndex(8), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 34:
            d = this.findIndex(5), a = this.findIndex(6), h = this.findIndex(7), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 35:
            d = this.findIndex(4), a = this.findIndex(5), h = this.findIndex(6), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 36:
            d = this.findIndex(4), a = this.findIndex(5), this.switch_element(d, a);
            break;

          case 37:
            d = this.findIndex(3), a = this.findIndex(4), h = this.findIndex(5), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 38:
            d = this.findIndex(3), a = this.findIndex(4), this.switch_element(d, a);
            break;

          case 39:
            var d = this.findIndex(3),
                a = this.findIndex(4),
                n = this.findIndex(7),
                r = this.findIndex(8);
            i ? (this.setGrey(d), this.setDefault(a), this.setSelected(n), this.setSelected(r)) : (this.setDefault(n), this.setDefault(r), this.setSelected(d), this.setSelected(a));
            break;

          case 40:
            d = this.findIndex(6), a = this.findIndex(7), h = this.findIndex(8), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 41:
            d = this.findIndex(5), a = this.findIndex(6), h = this.findIndex(7), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 42:
            d = this.findIndex(5), a = this.findIndex(6), this.switch_element(d, a);
            break;

          case 43:
            d = this.findIndex(4), a = this.findIndex(5), h = this.findIndex(6), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 44:
            d = this.findIndex(4), a = this.findIndex(5), this.switch_element(d, a);
            break;

          case 45:
            var d = this.findIndex(4),
                a = this.findIndex(5),
                n = this.findIndex(7),
                r = this.findIndex(8);
            i ? (this.setGrey(d), this.setDefault(a), this.setSelected(n), this.setSelected(r)) : (this.setDefault(n), this.setDefault(r), this.setSelected(d), this.setSelected(a));
            break;

          case 46:
            d = this.findIndex(6), a = this.findIndex(7), h = this.findIndex(8), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 47:
            d = this.findIndex(6), a = this.findIndex(7), this.switch_element(d, a);
            break;

          case 48:
            d = this.findIndex(5), a = this.findIndex(6), h = this.findIndex(7), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 49:
            d = this.findIndex(5), a = this.findIndex(6), this.switch_element(d, a);
            break;

          case 50:
            var d = this.findIndex(5),
                a = this.findIndex(6),
                n = this.findIndex(7),
                r = this.findIndex(8);
            i ? (this.setGrey(d), this.setDefault(a), this.setSelected(n), this.setSelected(r)) : (this.setDefault(n), this.setDefault(r), this.setSelected(d), this.setSelected(a));
            break;

          case 51:
            d = this.findIndex(7), a = this.findIndex(8), this.switch_element(d, a);
            break;

          case 52:
            d = this.findIndex(6), a = this.findIndex(7), h = this.findIndex(8), i ? (this.setSelected(d), this.setSelected(a), this.setDefault(h)) : (this.setDefault(d), this.setSelected(a), this.setSelected(h));
            break;

          case 53:
            d = this.findIndex(6), a = this.findIndex(7), this.switch_element(d, a);
            break;

          case 54:
            var d = this.findIndex(6),
                a = this.findIndex(7),
                n = this.findIndex(7),
                r = this.findIndex(8);
            i ? (this.setGrey(d), this.setDefault(a), this.setSelected(n), this.setSelected(r)) : (this.setDefault(n), this.setDefault(r), this.setSelected(d), this.setSelected(a));
            break;

          case 55:
            var d = this.findIndex(7),
                a = this.findIndex(8);
            i ? (this.setGrey(d), this.setGrey(a), this.setData({
              disable_fwd: !0
            })) : (this.setSelected(d), this.setSelected(a), this.setData({
              disable_fwd: !1
            }));
        }

        i && this.setData({
          round: this.round + 1
        });
      }
    }
  }
};
</script>
<style>
	movable-view{
		box-sizing: border-box;
	}
	.btn_prev{
		flex:1;
		height: 44px;
		line-height: 44px;
		background: #000;
		border-top-left-radius: 22px;
		border-bottom-left-radius: 22px;
		text-align: center;
		color:#fff;
	}
	.btn_next{
		flex:1;
		height: 44px;
		line-height: 44px;
		background: #000;
		border-top-right-radius: 22px;
		border-bottom-right-radius: 22px;
		text-align: center;
		color:#fff;
	}
</style>