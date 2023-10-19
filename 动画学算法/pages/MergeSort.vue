<template>
	<ezpage :title="title" backgroundColor="#f2f2f2">
		<view slot='contentSection'>
			<movable-area style='width:100%;height: 300px;pointer-events: none'>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[0].length*factor+base) + 'rpx; border:' + numbers[0].border_size + ' solid #a1a1a1; background:#' + numbers[0].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[0].right + '%; bottom:' + bottom + '%'" :x="numbers[0].x" :y="numbers[0].y">
					<text>{{numbers[0].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[1].length*factor+base) + 'rpx; border:' + numbers[1].border_size + ' solid #a1a1a1; background:#' + numbers[1].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[1].right + '%; bottom:' + bottom + '%'" :x="numbers[1].x" :y="numbers[1].y">
					<text>{{numbers[1].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[2].length*factor+base) + 'rpx; border:' + numbers[2].border_size + ' solid #a1a1a1; background:#' + numbers[2].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[2].right + '%; bottom:' + bottom + '%'" :x="numbers[2].x" :y="numbers[2].y">
					<text>{{numbers[2].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[3].length*factor+base) + 'rpx; border:' + numbers[3].border_size + ' solid #a1a1a1; background:#' + numbers[3].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[3].right + '%; bottom:' + bottom + '%'" :x="numbers[3].x" :y="numbers[3].y">
					<text>{{numbers[3].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[4].length*factor+base) + 'rpx; border:' + numbers[4].border_size + ' solid #a1a1a1; background:#' + numbers[4].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[4].right + '%; bottom:' + bottom + '%'" :x="numbers[4].x" :y="numbers[4].y">
					<text>{{numbers[4].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[5].length*factor+base) + 'rpx; border:' + numbers[5].border_size + ' solid #a1a1a1; background:#' + numbers[5].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[5].right + '%; bottom:' + bottom + '%'" :x="numbers[5].x" :y="numbers[5].y">
					<text>{{numbers[5].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[6].length*factor+base) + 'rpx; border:' + numbers[6].border_size + ' solid #a1a1a1; background:#' + numbers[6].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[6].right + '%; bottom:' + bottom + '%'" :x="numbers[6].x" :y="numbers[6].y">
					<text>{{numbers[6].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[7].length*factor+base) + 'rpx; border:' + numbers[7].border_size + ' solid #a1a1a1; background:#' + numbers[7].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[7].right + '%; bottom:' + bottom + '%'" :x="numbers[7].x" :y="numbers[7].y">
					<text>{{numbers[7].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[8].length*factor+base) + 'rpx; border:' + numbers[8].border_size + ' solid #a1a1a1; background:#' + numbers[8].bgcolor + '; border-radius:25rpx; position:absolute; right:' + numbers[8].right + '%; bottom:' + bottom + '%'" :x="numbers[8].x" :y="numbers[8].y">
					<text>{{numbers[8].length}}</text>
				</movable-view>
				<movable-view class="container" direction="none" :style="'font-size: 30rpx; text-align:center; width: 50rpx; height: 40rpx; border: 0rpx solid #000000; visibility:' + text1_visibility" x="87.5rpx" y="70rpx">
					<text>1</text>
				</movable-view>
				<movable-view class="container" direction="none" :style="'font-size: 30rpx; text-align:center; width: 50rpx; height: 40rpx; border: 0rpx solid #000000; visibility:' + text1_visibility" x="237.5rpx" y="70rpx">
					<text>2</text>
				</movable-view>
				<movable-view class="container" direction="none" :style="'font-size: 30rpx; text-align:center; width: 50rpx; height: 40rpx; border: 0rpx solid #000000; visibility:' + text1_visibility" x="387.5rpx" y="70rpx">
					<text>3</text>
				</movable-view>
				<movable-view class="container" direction="none" :style="'font-size: 30rpx; text-align:center; width: 50rpx; height: 40rpx; border: 0rpx solid #000000; visibility:' + text1_visibility" x="537.5rpx" y="70rpx">
					<text>4</text>
				</movable-view>
				<movable-view class="container" direction="none" :style="'font-size: 30rpx; text-align:center; width: 50rpx; height: 40rpx; border: 0rpx solid #000000; visibility:' + text1_visibility" x="650rpx" y="70rpx">
					<text>5</text>
				</movable-view>
				<movable-view class="container" direction="none" :style="'font-size: 30rpx; text-align:center; width: 50rpx; height: 40rpx; border: 0rpx solid #000000; visibility:' + text2_visibility" x="162.5rpx" y="70rpx">
					<text>1</text>
				</movable-view>
				<movable-view class="container" direction="none" :style="'font-size: 30rpx; text-align:center; width: 50rpx; height: 40rpx; border: 0rpx solid #000000; visibility:' + text2_visibility" x="462.5rpx" y="70rpx">
					<text>2</text>
				</movable-view>
				<movable-view class="ico" direction="horizontal" :style="'border-color: transparent transparent #808080; visibility:' + arrow1_visibility" :x="arrow1_x" :y="arrow1_y">
					<view style="width: 0;height: 0;border-left: 6px solid transparent;border-right: 6px solid transparent;border-bottom: 12px solid red;margin-top: 12px;margin-left: 6px;"></view>
				</movable-view>
				<movable-view class="ico" direction="horizontal" :style="'border-color: transparent transparent #808080; visibility:' + arrow2_visibility" :x="arrow2_x" :y="arrow2_y">
					<view style="width: 0;height: 0;border-left: 6px solid transparent;border-right: 6px solid transparent;border-bottom: 12px solid red;margin-top: 12px;margin-left: 6px;"></view>
				</movable-view>
				<movable-view class="ico" direction="horizontal" :style="'border-color: transparent transparent #808080; visibility:' + arrow3_visibility" :x="arrow3_x" :y="arrow3_y">
					<view style="width: 0;height: 0;border-left: 6px solid transparent;border-right: 6px solid transparent;border-bottom: 12px solid red;margin-top: 12px;margin-left: 6px;"></view>
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
	import ezpage from "../../components/ezpage.vue"
	import utils from "../../common/utils.js"
	
var t = require("./common.js"),
    a = require("./data.js"),
    s = t.BGCOLOR_YELLOW;

export default {
	components:{
		ezpage
	},
  data() {
    return {
		title:"归并排序",
      numbers: [{
        value: 8,
        length: 8,
        right: 85,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 0,
        x: "50rpx",
        y: "120rpx"
      }, {
        value: 9,
        length: 9,
        right: 75,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 1,
        x: "125rpx",
        y: "100rpx"
      }, {
        value: 4,
        length: 4,
        right: 65,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 2,
        x: "200rpx",
        y: "200rpx"
      }, {
        value: 1,
        length: 1,
        right: 55,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 3,
        x: "275rpx",
        y: "260rpx"
      }, {
        value: 2,
        length: 2,
        right: 45,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 4,
        x: "350rpx",
        y: "240rpx"
      }, {
        value: 3,
        length: 3,
        right: 35,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 5,
        x: "425rpx",
        y: "220rpx"
      }, {
        value: 7,
        length: 7,
        right: 25,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 6,
        x: "500rpx",
        y: "140rpx"
      }, {
        value: 6,
        length: 6,
        right: 15,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 7,
        x: "575rpx",
        y: "160rpx"
      }, {
        value: 5,
        length: 5,
        right: 5,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 8,
        x: "650rpx",
        y: "180rpx"
      }],
      factor: 20,
      base: 50,
      round: 1,
      forward: 0,
      disable_fwd: !1,
      disable_bwd: !0,
      text1_visibility: "hidden",
      text2_visibility: "hidden",
      arrow1_visibility: "hidden",
      arrow2_visibility: "hidden",
      arrow3_visibility: "hidden",
      cctx: null,
      message_count: 0,
      offset_y: 300,
      offset_x: 75,
      animation_timeout: 400,
      arrow1_x: "50rpx",
      arrow1_y: "335rpx",
      arrow2_x: "200rpx",
      arrow2_y: "335rpx",
      arrow3_x: "650rpx",
      arrow3_y: "335rpx",
      text: ""
    };
  },

  components: {},
  props: {},
  onLoad: function (s) {
    t.initTextArray(a.MergeSort[0].Text, a.MergeSort[0].size), t.showText(this.message_count, this), this.setData({
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
    setColor: function (t, a) {
		
		this.numbers[t].bgcolor=a;
    },
    setAllgrey: function () {
      var t;

      for (t = 0; t < 9; t++) this.setColor(t, "c0c0c0");
    },
    setAllyellow: function () {
      var t;

      for (t = 0; t < 9; t++) this.setColor(t, s);
    },
    moveTo: function (t, a, s) {
		this.numbers[t].x=a;
		this.numbers[t].y=s;
    },
    moveUpAll: function () {
      var t;

      for (t = 0; t < 9; t++) this.moveTo(t, this.numbers[t].x, (parseInt(this.numbers[t].y, 10) - this.offset_y).toString().concat("rpx"));
    },
    moveDownAll: function () {
      var t;

      for (t = 0; t < 9; t++) this.moveTo(t, this.numbers[t].x, (parseInt(this.numbers[t].y, 10) + this.offset_y).toString().concat("rpx"));
    },
    createLine: function (a, s, i, e, r) {
      var o,
          n,
          h,
          d,
          c,
          x = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      null == this.cctx ? (o = uni.createCanvasContext(a), this.setData({
        cctx: o
      })) : o = this.cctx, n = t.rpxWidthTopx(s), h = t.rpxWidthTopx(i), d = t.rpxWidthTopx(e), c = t.rpxWidthTopx(r), 1 == x ? o.setLineDash([5, 5], 1) : o.setLineDash([0, 0], 1), o.beginPath(), o.moveTo(n, h), o.setLineWidth(1), o.lineTo(d, c), o.closePath(), o.stroke();
    },
    next: function (a) {
      var s,
          i = !0;
      if ("backward" == a.target.id && (i = !1), i) s = t.showText(this.message_count, this), this.setData({
        message_count: this.message_count + 1
      }), 1 == this.disable_bwd && this.setData({
        disable_bwd: !1
      });else {
        if (!(this.message_count > 0)) return console.log("error while loding text, unexpected!"), 0;
        this.setData({
          message_count: this.message_count - 1
        }), 1 == this.message_count && this.setData({
          disable_bwd: !0
        }), t.showText(this.message_count - 1, this), s = t.getContinue(this.message_count, this);
      }

      if (!s) {
        switch (0 == i && (this.round > 0 && this.setData({
          round: this.round - 1
        }), 1 == this.disable_fwd && this.setData({
          disable_fwd: !1
        })), console.log("round: ", this.round, "forward: ", i), this.round) {
          case 1:
            i ? (this.createLine("Canvas", 187.5, 90, 187.5, 350, !0), this.createLine("Canvas", 337.5, 90, 337.5, 350, !0), this.createLine("Canvas", 487.5, 90, 487.5, 350, !0), this.createLine("Canvas", 637.5, 90, 637.5, 350, !0), this.cctx.draw("Canvas", !1), this.setData({
              text1_visibility: "visiable"
            })) : (this.cctx.draw("Canvas", !1), this.setData({
              text1_visibility: "hidden"
            }));
            break;

          case 2:
            i ? (this.setData({
              disable_fwd: !0
            }), this.moveTo(0, this.numbers[0].x, (parseInt(this.numbers[0].y, 10) + this.offset_y).toString().concat("rpx")), setTimeout(function () {
              this.moveTo(1, this.numbers[1].x, (parseInt(this.numbers[1].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
                disable_fwd: !1
              });
            }.bind(this), this.animation_timeout)) : (this.moveTo(0, this.numbers[0].x, (parseInt(this.numbers[0].y, 10) - this.offset_y).toString().concat("rpx")), this.moveTo(1, this.numbers[1].x, (parseInt(this.numbers[1].y, 10) - this.offset_y).toString().concat("rpx")));
            break;

          case 3:
            i ? (this.setData({
              disable_fwd: !0
            }), this.moveTo(3, (parseInt(this.numbers[3].x, 10) - this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[3].y, 10) + this.offset_y).toString().concat("rpx")), setTimeout(function () {
              this.moveTo(2, (parseInt(this.numbers[2].x, 10) + this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[2].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
                disable_fwd: !1
              });
            }.bind(this), this.animation_timeout)) : (this.moveTo(3, (parseInt(this.numbers[3].x, 10) + this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[3].y, 10) - this.offset_y).toString().concat("rpx")), this.moveTo(2, (parseInt(this.numbers[2].x, 10) - this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[2].y, 10) - this.offset_y).toString().concat("rpx")));
            break;

          case 4:
            i ? (this.setData({
              disable_fwd: !0
            }), this.moveTo(4, this.numbers[4].x, (parseInt(this.numbers[4].y, 10) + this.offset_y).toString().concat("rpx")), setTimeout(function () {
              this.moveTo(5, this.numbers[5].x, (parseInt(this.numbers[5].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
                disable_fwd: !1
              });
            }.bind(this), this.animation_timeout)) : (this.moveTo(4, this.numbers[4].x, (parseInt(this.numbers[4].y, 10) - this.offset_y).toString().concat("rpx")), this.moveTo(5, this.numbers[5].x, (parseInt(this.numbers[5].y, 10) - this.offset_y).toString().concat("rpx")));
            break;

          case 5:
            i ? (this.setData({
              disable_fwd: !0
            }), this.moveTo(7, (parseInt(this.numbers[7].x, 10) - this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[7].y, 10) + this.offset_y).toString().concat("rpx")), setTimeout(function () {
              this.moveTo(6, (parseInt(this.numbers[6].x, 10) + this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[6].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
                disable_fwd: !1
              });
            }.bind(this), this.animation_timeout)) : (this.moveTo(7, (parseInt(this.numbers[7].x, 10) + this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[7].y, 10) - this.offset_y).toString().concat("rpx")), this.moveTo(6, (parseInt(this.numbers[6].x, 10) - this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[6].y, 10) - this.offset_y).toString().concat("rpx")));
            break;

          case 6:
            i ? this.moveTo(8, this.numbers[8].x, (parseInt(this.numbers[8].y, 10) + this.offset_y).toString().concat("rpx")) : this.moveTo(8, this.numbers[8].x, (parseInt(this.numbers[8].y, 10) - this.offset_y).toString().concat("rpx"));
            break;

          case 7:
            i ? (this.setData({
              disable_fwd: !0
            }), this.moveUpAll(), this.setData({
              disable_fwd: !1
            })) : (this.setData({
              disable_fwd: !0
            }), this.moveDownAll(), this.setData({
              disable_fwd: !1
            }));
            break;

          case 8:
            i ? (this.setData({
              arrow1_visibility: "visiable"
            }), this.setData({
              arrow2_visibility: "visiable"
            })) : (this.setData({
              arrow1_visibility: "hidden"
            }), this.setData({
              arrow2_visibility: "hidden"
            }));
            break;

          case 9:
            i ? (this.moveTo(3, (parseInt(this.numbers[3].x, 10) - 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[3].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(3, (parseInt(this.numbers[3].x, 10) + 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[3].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 10:
            i ? this.moveTo(2, (parseInt(this.numbers[2].x, 10) - 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[2].y, 10) + this.offset_y).toString().concat("rpx")) : this.moveTo(2, (parseInt(this.numbers[2].x, 10) + 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[2].y, 10) - this.offset_y).toString().concat("rpx"));
            break;

          case 11:
            i ? (this.moveTo(0, (parseInt(this.numbers[0].x, 10) + 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[0].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(0, (parseInt(this.numbers[0].x, 10) - 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[0].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 12:
            i ? (this.moveTo(1, (parseInt(this.numbers[1].x, 10) + 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[1].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_visibility: "hidden"
            }), this.setData({
              arrow2_visibility: "hidden"
            }), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) + 3 * this.offset_x).toString().concat("rpx")
            }), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) + 3 * this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(1, (parseInt(this.numbers[1].x, 10) - 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[1].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) - 3 * this.offset_x).toString().concat("rpx")
            }), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) - 3 * this.offset_x).toString().concat("rpx")
            }), this.setData({
              arrow1_visibility: "visiable"
            }), this.setData({
              arrow2_visibility: "visiable"
            }));
            break;

          case 13:
            i ? (this.setData({
              arrow1_visibility: "visiable"
            }), this.setData({
              arrow2_visibility: "visiable"
            }), this.setData({
              arrow3_visibility: "visiable"
            })) : (this.setData({
              arrow1_visibility: "hidden"
            }), this.setData({
              arrow2_visibility: "hidden"
            }), this.setData({
              arrow3_visibility: "hidden"
            }));
            break;

          case 14:
            i ? (this.moveTo(4, parseInt(this.numbers[4].x, 10).toString().concat("rpx"), (parseInt(this.numbers[4].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(4, parseInt(this.numbers[4].x, 10).toString().concat("rpx"), (parseInt(this.numbers[4].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 15:
            i ? this.moveTo(5, parseInt(this.numbers[5].x, 10).toString().concat("rpx"), (parseInt(this.numbers[5].y, 10) + this.offset_y).toString().concat("rpx")) : this.moveTo(5, parseInt(this.numbers[5].x, 10).toString().concat("rpx"), (parseInt(this.numbers[5].y, 10) - this.offset_y).toString().concat("rpx"));
            break;

          case 16:
            i ? this.moveTo(8, (parseInt(this.numbers[8].x, 10) - 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[8].y, 10) + this.offset_y).toString().concat("rpx")) : this.moveTo(8, (parseInt(this.numbers[8].x, 10) + 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[8].y, 10) - this.offset_y).toString().concat("rpx"));
            break;

          case 17:
            i ? (this.moveTo(7, (parseInt(this.numbers[7].x, 10) + this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[7].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(7, (parseInt(this.numbers[7].x, 10) - this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[7].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 18:
            i ? (this.moveTo(6, (parseInt(this.numbers[6].x, 10) + this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[6].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_visibility: "hidden"
            }), this.setData({
              arrow2_visibility: "hidden"
            }), this.setData({
              arrow3_visibility: "hidden"
            }), this.setData({
              arrow1_x: "50rpx"
            }), this.setData({
              arrow2_x: "350rpx"
            })) : (this.moveTo(6, (parseInt(this.numbers[6].x, 10) - this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[6].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: "425rpx"
            }), this.setData({
              arrow2_x: "575rpx"
            }), this.setData({
              arrow1_visibility: "visiable"
            }), this.setData({
              arrow2_visibility: "visiable"
            }), this.setData({
              arrow3_visibility: "visiable"
            }));
            break;

          case 19:
            i ? (this.setData({
              disable_fwd: !0
            }), this.cctx.draw("Canvas", !1), this.setData({
              text1_visibility: "hidden"
            }), this.moveUpAll(), this.setData({
              disable_fwd: !1
            })) : (this.setData({
              disable_fwd: !0
            }), this.moveDownAll(), this.createLine("Canvas", 187.5, 90, 187.5, 350, !0), this.createLine("Canvas", 337.5, 90, 337.5, 350, !0), this.createLine("Canvas", 487.5, 90, 487.5, 350, !0), this.createLine("Canvas", 637.5, 90, 637.5, 350, !0), this.cctx.draw("Canvas", !1), this.setData({
              text1_visibility: "visiable"
            }), this.setData({
              disable_fwd: !1
            }));
            break;

          case 20:
            i ? (this.createLine("Canvas", 337.5, 90, 337.5, 350, !0), this.cctx.draw("Canvas", !1), this.setData({
              text2_visibility: "visiable"
            }), this.setData({
              arrow1_visibility: "visiable"
            }), this.setData({
              arrow2_visibility: "visiable"
            })) : (this.cctx.draw("Canvas", !1), this.setData({
              text2_visibility: "hidden"
            }), this.setData({
              arrow1_visibility: "hidden"
            }), this.setData({
              arrow2_visibility: "hidden"
            }));
            break;

          case 21:
            i ? (this.moveTo(3, this.numbers[3].x, (parseInt(this.numbers[3].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(3, this.numbers[3].x, (parseInt(this.numbers[3].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 22:
            i ? (this.moveTo(4, (parseInt(this.numbers[4].x, 10) - 3 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[4].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(4, (parseInt(this.numbers[4].x, 10) + 3 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[4].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 23:
            i ? (this.moveTo(5, (parseInt(this.numbers[5].x, 10) - 3 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[5].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(5, (parseInt(this.numbers[5].x, 10) + 3 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[5].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 24:
            i ? (this.moveTo(2, (parseInt(this.numbers[2].x, 10) + 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[2].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(2, (parseInt(this.numbers[2].x, 10) - 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[2].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 25:
            i ? (this.moveTo(8, (parseInt(this.numbers[8].x, 10) - 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[8].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(8, (parseInt(this.numbers[8].x, 10) + 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[8].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 26:
            i ? (this.moveTo(7, (parseInt(this.numbers[7].x, 10) - 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[7].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(7, (parseInt(this.numbers[7].x, 10) + 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[7].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow2_x: (parseInt(this.arrow2_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 27:
            i ? this.moveTo(6, (parseInt(this.numbers[6].x, 10) - 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[6].y, 10) + this.offset_y).toString().concat("rpx")) : this.moveTo(6, (parseInt(this.numbers[6].x, 10) + 2 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[6].y, 10) - this.offset_y).toString().concat("rpx"));
            break;

          case 28:
            i ? (this.moveTo(0, (parseInt(this.numbers[0].x, 10) + 5 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[0].y, 10) + this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) + this.offset_x).toString().concat("rpx")
            })) : (this.moveTo(0, (parseInt(this.numbers[0].x, 10) - 5 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[0].y, 10) - this.offset_y).toString().concat("rpx")), this.setData({
              arrow1_x: (parseInt(this.arrow1_x, 10) - this.offset_x).toString().concat("rpx")
            }));
            break;

          case 29:
            i ? (this.moveTo(1, (parseInt(this.numbers[1].x, 10) + 5 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[1].y, 10) + this.offset_y).toString().concat("rpx")), this.cctx.draw("Canvas", !1), this.setData({
              text2_visibility: "hidden"
            }), this.setData({
              arrow1_visibility: "hidden"
            }), this.setData({
              arrow2_visibility: "hidden"
            }), setTimeout(function () {
              this.setAllgrey();
            }.bind(this), 1e3)) : (this.moveTo(1, (parseInt(this.numbers[1].x, 10) - 5 * this.offset_x).toString().concat("rpx"), (parseInt(this.numbers[1].y, 10) - this.offset_y).toString().concat("rpx")), this.createLine("Canvas", 337.5, 70, 337.5, 350, !0), this.cctx.draw("Canvas", !1), this.setData({
              text2_visibility: "visiable"
            }), this.setData({
              arrow1_visibility: "visiable"
            }), this.setData({
              arrow2_visibility: "visiable"
            }), this.setAllyellow());
            break;

          case 30:
            this.setData({
              disable_fwd: !0
            });
        }

        i && this.setData({
          round: this.round + 1
        });
      }
    }
  }
};
</script>
