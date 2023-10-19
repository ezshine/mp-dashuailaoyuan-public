<template>
	<ezpage :title="title" backgroundColor="#f2f2f2">
		<view slot='contentSection'>
			<movable-area style='width:100%;height: 220px;pointer-events: none'>
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
				<movable-view class="ico" direction="all" :style="'border-color:' + left_color + '; visibility:' + left_visibility" :x="left_x" :y="left_y">
					<view class="indexarrow">
						<view>L</view>
					</view>
				</movable-view>
				<movable-view class="ico" direction="all" :style="'border-color:' + right_color + ';visibility:' + right_visibility" :x="right_x" :y="right_y">
					<view class="indexarrow">
						<view>R</view>
					</view>
				</movable-view>
				<movable-view class="ico" direction="all" :style="'border-color:' + pivot_color + ';visibility:' + pivot_visibility" :x="pivot_x" :y="pivot_y">
					<view class="indexarrow">
						<view>P</view>
					</view>
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
    i = require("./data.js"),
    e = "50rpx",
    s = "125rpx",
    a = "200rpx",
    h = "275rpx",
    r = "350rpx",
    o = "425rpx",
    b = "500rpx",
    n = "575rpx",
    l = "650rpx",
    v = t.BGCOLOR_YELLOW,
    d = "420rpx",
    c = "460rpx";

export default {
	components:{
		ezpage
	},
  data() {
    return {
		title:"快速排序",
      numbers: [{
        value: 3,
        length: 3,
        right: 85,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 0,
        x: "50rpx",
        y: "300rpx"
      }, {
        value: 5,
        length: 5,
        right: 75,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 1,
        x: "125rpx",
        y: "260rpx"
      }, {
        value: 8,
        length: 8,
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
        y: "340rpx"
      }, {
        value: 2,
        length: 2,
        right: 45,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 4,
        x: "350rpx",
        y: "320rpx"
      }, {
        value: 9,
        length: 9,
        right: 35,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 5,
        x: "425rpx",
        y: "180rpx"
      }, {
        value: 4,
        length: 4,
        right: 25,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 6,
        x: "500rpx",
        y: "280rpx"
      }, {
        value: 7,
        length: 7,
        right: 15,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 7,
        x: "575rpx",
        y: "220rpx"
      }, {
        value: 6,
        length: 6,
        right: 5,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 8,
        x: "650rpx",
        y: "240rpx"
      }],
      factor: 20,
      base: 50,
      count: 9,
      round: 1,
      forward: 0,
      disable_fwd: !1,
      disable_bwd: !0,
      left_x: e,
      left_y: "420rpx",
      right_x: n,
      right_y: "420rpx",
      pivot_x: l,
      pivot_y: "420rpx",
      left_index: 0,
      right_index: 0,
      pivot_index: 0,
      left_visibility: "hidden",
      right_visibility: "hidden",
      pivot_visibility: "hidden",
      left_color: "transparent transparent #0ff",
      right_color: "transparent transparent #fc0",
      pivot_color: "transparent transparent #90f",
      message_count: 0,
      text: ""
    };
  },

  components: {},
  props: {},
  onLoad: function (e) {
    t.initTextArray(i.FastSort[0].Text, i.FastSort[0].size), t.showText(this.message_count, this), this.setData({
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
    moveLeft: function (t, i) {
      this.setData({
        left_x: t
      }), this.setData({
        left_y: i
      });
    },
    moveRight: function (t, i) {
      this.setData({
        right_x: t
      }), this.setData({
        right_y: i
      });
    },
    movePivot: function (t) {
      this.setData({
        pivot_x: t
      });
    },
    next: function (i) {
      var m,
          x = !0;
      if ("backward" == i.target.id && (x = !1), x) m = t.showText(this.message_count, this), this.setData({
        message_count: this.message_count + 1
      }), 1 == this.disable_bwd && this.setData({
        disable_bwd: !1
      });else {
        if (!(this.message_count > 0)) return console.log("error while loding text, unexpected!"), 0;
        this.setData({
          message_count: this.message_count - 1
        }), 1 == this.message_count && this.setData({
          disable_bwd: !0
        }), t.showText(this.message_count - 1, this), m = t.getContinue(this.message_count, this);
      }

      if (!m) {
        switch (0 == x && (this.round > 0 && this.setData({
          round: this.round - 1
        }), 1 == this.disable_fwd && this.setData({
          disable_fwd: !1
        })), console.log("round: ", this.round, "forward: ", x), this.round) {
          case 1:
            x ? (this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            })) : (this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }));
            break;

          case 2:
            x ? this.moveLeft(s, d) : this.moveLeft(e, d);
            break;

          case 3:
            x ? this.moveLeft(a, d) : this.moveLeft(s, d);
            break;

          case 4:
            x ? this.moveRight(b, d) : this.moveRight(n, d);
            break;

          case 5:
            this.switch_element(2, 6);
            break;

          case 6:
            x ? this.moveLeft(h, d) : this.moveLeft(a, d);
            break;

          case 7:
            x ? this.moveLeft(r, d) : this.moveLeft(h, d);
            break;

          case 8:
            x ? this.moveLeft(o, d) : this.moveLeft(r, d);
            break;

          case 9:
            x ? this.moveRight(o, c) : this.moveRight(b, d);
            break;

          case 10:
            this.switch_element(5, 8);
            break;

          case 11:
            x ? (this.setColor(5, "c0c0c0"), this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }), this.moveLeft(e, d), this.moveRight(h, d), this.movePivot(r)) : (this.setColor(5, v), this.moveLeft(o, d), this.moveRight(o, c), this.movePivot(l), this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            }));
            break;

          case 12:
          case 13:
            x ? (this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            })) : (this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }));
            break;

          case 14:
            this.switch_element(0, 3);
            break;

          case 15:
            x ? this.moveLeft(s, d) : this.moveLeft(e, d);
            break;

          case 16:
            x ? this.moveRight(a, d) : this.moveRight(h, d);
            break;

          case 17:
            x ? this.moveRight(s, c) : this.moveRight(a, d);
            break;

          case 18:
            this.switch_element(1, 4);
            break;

          case 19:
            x ? (this.setColor(1, "c0c0c0"), this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }), this.moveLeft(a, d), this.moveRight(h, d), this.movePivot(r)) : (this.setColor(1, v), this.moveLeft(s, d), this.moveRight(s, c), this.movePivot(r), this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            }));
            break;

          case 20:
            x ? this.setColor(0, "c0c0c0") : this.setColor(0, v);
            break;

          case 21:
            x ? (this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            })) : (this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }));
            break;

          case 22:
            x ? this.moveLeft(h, c) : this.moveLeft(a, d);
            break;

          case 23:
            x ? this.moveLeft(r, c) : this.moveLeft(h, c);
            break;

          case 24:
            x ? (this.setColor(4, "c0c0c0"), this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }), this.moveLeft(a, d), this.moveRight(a, c), this.movePivot(h)) : (this.setColor(4, v), this.moveLeft(r, c), this.moveRight(h, d), this.movePivot(r), this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            }));
            break;

          case 25:
            x ? (this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            })) : (this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }));
            break;

          case 26:
            this.switch_element(2, 3);
            break;

          case 27:
            x ? (this.setColor(2, "c0c0c0"), this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }), this.moveLeft(b, d), this.moveRight(n, d), this.movePivot(l)) : (this.setColor(2, v), this.moveLeft(a, d), this.moveRight(a, c), this.movePivot(h), this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            }));
            break;

          case 28:
            x ? this.setColor(3, "c0c0c0") : this.setColor(3, v);
            break;

          case 29:
            x ? (this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            })) : (this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }));
            break;

          case 30:
            x ? this.moveLeft(n, c) : this.moveLeft(b, d);
            break;

          case 31:
            x ? this.moveLeft(l, c) : this.moveLeft(n, c);
            break;

          case 32:
            x ? (this.setColor(8, "c0c0c0"), this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }), this.moveLeft(b, d), this.moveRight(b, c), this.movePivot(n)) : (this.setColor(8, v), this.moveLeft(l, c), this.moveRight(n, d), this.movePivot(l), this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            }));
            break;

          case 33:
            x ? (this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            })) : (this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            }));
            break;

          case 34:
            this.switch_element(6, 7);
            break;

          case 35:
            x ? (this.setColor(6, "c0c0c0"), this.setData({
              left_visibility: "hidden"
            }), this.setData({
              right_visibility: "hidden"
            }), this.setData({
              pivot_visibility: "hidden"
            })) : (this.setColor(6, v), this.setData({
              left_visibility: "visible"
            }), this.setData({
              right_visibility: "visible"
            }), this.setData({
              pivot_visibility: "visible"
            }));
            break;

          case 36:
            x ? this.setColor(7, "c0c0c0") : this.setColor(7, v);
            break;

          case 37:
            this.setData({
              disable_fwd: !0
            });
        }

        x && this.setData({
          round: this.round + 1
        });
      }
    },
    switch_element: function (t, i) {
      var e = this.findIndex(t),
          s = this.findIndex(i),
          a = this.numbers[e].x,
          h = this.numbers[e].index;

		this.numbers[e].x=this.numbers[s].x;
		this.numbers[e].index=this.numbers[s].index;

      this.numbers[s].x=a;
      this.numbers[s].index=h;
    },
    setColor: function (t, i) {
		var e = this.findIndex(t);
		
		this.numbers[e].bgcolor=i;
    },
    findIndex: function (t) {
      for (var i = 0; i <= 8 && t != this.numbers[i].index; i++);

      return i;
    }
  }
};
</script>
<style>
	.indexarrow{
		width: 0;
		height: 0;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-bottom: 12px solid red;
		margin-top: 12px;
		margin-left: 6px;
		color:#fff;
		position: relative;
	}
	.indexarrow>view{
		color: #fff;
		font-size: 9px;
		position: absolute;
		left: -3px;
		top:1px;
	}
</style>