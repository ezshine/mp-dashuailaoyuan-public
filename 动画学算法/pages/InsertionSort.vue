<template>
	<ezpage :title="title" backgroundColor="#f2f2f2">
		<view slot='contentSection'>
			<movable-area style='width:100%;height: 320px;pointer-events: none'>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[0].length*factor+base) + 'rpx; border:' + numbers[0].border_size + ' solid #a1a1a1; background:#' + numbers[0].bgcolor + '; border-radius:25rpx;'" :x="numbers[0].x" :y="numbers[0].y">
					<text>{{numbers[0].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[1].length*factor+base) + 'rpx; border:' + numbers[1].border_size + ' solid #a1a1a1; background:#' + numbers[1].bgcolor + '; border-radius:25rpx;'" :x="numbers[1].x" :y="numbers[1].y">
					<text>{{numbers[1].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[2].length*factor+base) + 'rpx; border:' + numbers[2].border_size + ' solid #a1a1a1; background:#' + numbers[2].bgcolor + '; border-radius:25rpx;'" :x="numbers[2].x" :y="numbers[2].y">
					<text>{{numbers[2].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[3].length*factor+base) + 'rpx; border:' + numbers[3].border_size + ' solid #a1a1a1; background:#' + numbers[3].bgcolor + '; border-radius:25rpx;'" :x="numbers[3].x" :y="numbers[3].y">
					<text>{{numbers[3].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[4].length*factor+base) + 'rpx; border:' + numbers[4].border_size + ' solid #a1a1a1; background:#' + numbers[4].bgcolor + '; border-radius:25rpx;'" :x="numbers[4].x" :y="numbers[4].y">
					<text>{{numbers[4].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[5].length*factor+base) + 'rpx; border:' + numbers[5].border_size + ' solid #a1a1a1; background:#' + numbers[5].bgcolor + '; border-radius:25rpx;'" :x="numbers[5].x" :y="numbers[5].y">
					<text>{{numbers[5].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[6].length*factor+base) + 'rpx; border:' + numbers[6].border_size + ' solid #a1a1a1; background:#' + numbers[6].bgcolor + '; border-radius:25rpx;'" :x="numbers[6].x" :y="numbers[6].y">
					<text>{{numbers[6].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[7].length*factor+base) + 'rpx; border:' + numbers[7].border_size + ' solid #a1a1a1; background:#' + numbers[7].bgcolor + '; border-radius:25rpx;'" :x="numbers[7].x" :y="numbers[7].y">
					<text>{{numbers[7].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[8].length*factor+base) + 'rpx; border:' + numbers[8].border_size + ' solid #a1a1a1; background:#' + numbers[8].bgcolor + '; border-radius:25rpx;'" :x="numbers[8].x" :y="numbers[8].y">
					<text>{{numbers[8].length}}</text>
				</movable-view>
				<movable-view class="container" direction="none" style="font-size: 26rpx; text-align:center; width: 200rpx; height: 40rpx; border: 0rpx solid #000000;" x="0rpx" y="30rpx">
					<text>未排序序列:</text>
				</movable-view>
				<movable-view class="container" direction="none" style="font-size: 26rpx; text-align:center; width: 200rpx; height: 40rpx; border: 0rpx solid #000000;" x="0rpx" y="380rpx">
					<text>已排序序列:</text>
				</movable-view>
				<movable-view class="ico" direction="horizontal" :style="'visibility:' + arrow_visibility" :x="arrow_x" :y="arrow_y">
					<view style="width: 0;height: 0;border-left: 6px solid transparent;border-right: 6px solid transparent;border-bottom: 12px solid red;margin-top: 12px;margin-left: 6px;"></view>
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
	
var t = require("./common.js"),
    s = require("./data.js"),
    e = "50rpx",
    i = "125rpx",
    a = "200rpx",
    o = "275rpx",
    r = "350rpx",
    h = "425rpx",
    b = "500rpx",
    n = "575rpx",
    d = "650rpx",
    c = t.BGCOLOR_YELLOW;

export default {
	components:{
		ezpage
	},
  data() {
    return {
		title:"插入排序",
      numbers: [{
        value: 8,
        length: 8,
        right: 85,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 0,
        x: e,
        y: "120rpx"
      }, {
        value: 9,
        length: 9,
        right: 75,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 1,
        x: i,
        y: "100rpx"
      }, {
        value: 1,
        length: 1,
        right: 65,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 2,
        x: a,
        y: "260rpx"
      }, {
        value: 4,
        length: 4,
        right: 55,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 3,
        x: o,
        y: "200rpx"
      }, {
        value: 2,
        length: 2,
        right: 45,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 4,
        x: r,
        y: "240rpx"
      }, {
        value: 3,
        length: 3,
        right: 35,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 5,
        x: h,
        y: "220rpx"
      }, {
        value: 6,
        length: 6,
        right: 25,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 6,
        x: b,
        y: "160rpx"
      }, {
        value: 7,
        length: 7,
        right: 15,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 7,
        x: n,
        y: "140rpx"
      }, {
        value: 5,
        length: 5,
        right: 5,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 8,
        x: d,
        y: "180rpx"
      }],
      factor: 20,
      base: 50,
      count: 9,
      round: 1,
      forward: 0,
      disable_fwd: !1,
      disable_bwd: 1,
      message_count: 0,
      arrow_visibility: "hidden",
      arrow_x: "350rpx",
      arrow_y: "650rpx",
      text: ""
    };
  },

  components: {},
  props: {},
  onLoad: function (e) {
    t.initTextArray(s.InsertionSort[0].Text, s.InsertionSort[0].size), t.showText(this.message_count, this), this.setData({
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
    moveUp: function (t, s) {
      var e = (280 - this.numbers[t].length * this.factor).toString().concat("rpx");

		this.numbers[t].x=s;
		this.numbers[t].y=e;
    },
    moveDown: function (t, s) {
      var e = (600 - this.numbers[t].length * this.factor).toString().concat("rpx");

		this.numbers[t].x=s;
		this.numbers[t].y=e;
    },
    moveArrow: function (t) {
      this.setData({
        arrow_x: t
      });
    },
    next: function (s) {
      var w,
          m = !0;
      if ("backward" == s.target.id && (m = !1, 1 == this.disable_fwd && this.setData({
        disable_fwd: !1
      })), m) w = t.showText(this.message_count, this), this.setData({
        message_count: this.message_count + 1
      }), 1 == this.disable_bwd && this.setData({
        disable_bwd: !1
      });else {
        if (!(this.message_count > 0)) return console.log("error while loding text, unexpected!"), 0;
        this.setData({
          message_count: this.message_count - 1
        }), 1 == this.message_count && this.setData({
          disable_bwd: !0
        }), t.showText(this.message_count - 1, this), w = t.getContinue(this.message_count, this);
      }

      if (!w) {
        switch (0 == m && this.round > 0 && this.setData({
          round: this.round - 1
        }), console.log("round: ", this.round, "forward: ", m), this.round) {
          case 1:
            m ? (this.setData({
              disable_fwd: !0
            }), this.moveDown(0, r), setTimeout(function () {
              this.setColor(0, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              disable_bwd: !0
            }), this.moveUp(0, e), setTimeout(function () {
              this.setColor(0, c), this.setData({
                disable_bwd: !1
              });
            }.bind(this), 500));
            break;

          case 2:
            m ? this.setData({
              arrow_visibility: "visiable"
            }) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 3:
            m ? (this.setData({
              disable_fwd: !0
            }), this.moveDown(1, h), this.setData({
              arrow_visibility: "hidden"
            }), setTimeout(function () {
              this.setColor(1, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              disable_bwd: !0
            }), this.moveUp(1, i), this.setData({
              arrow_visibility: "visiable"
            }), setTimeout(function () {
              this.setColor(1, c), this.setData({
                disable_bwd: !1
              });
            }.bind(this), 500));
            break;

          case 4:
            m ? this.setData({
              arrow_visibility: "visiable"
            }) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 5:
            m ? (this.setData({
              disable_fwd: !0
            }), this.moveDown(2, o), this.setData({
              arrow_visibility: "hidden"
            }), this.moveArrow(o), setTimeout(function () {
              this.setColor(2, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              disable_bwd: !0
            }), this.moveUp(2, a), this.moveArrow(r), setTimeout(function () {
              this.setColor(2, c), this.setData({
                disable_bwd: !1
              }), this.setData({
                arrow_visibility: "visiable"
              });
            }.bind(this), 500));
            break;

          case 6:
            m ? this.setData({
              arrow_visibility: "visiable"
            }) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 7:
            m ? this.moveArrow(r) : this.moveArrow(o);
            break;

          case 8:
            m ? (this.setData({
              disable_fwd: !0
            }), this.moveDown(2, a), this.moveDown(3, o), this.setData({
              arrow_visibility: "hidden"
            }), this.moveArrow(a), setTimeout(function () {
              this.setColor(3, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              disable_bwd: !0
            }), this.moveDown(2, o), this.moveUp(3, o), this.moveArrow(o), setTimeout(function () {
              this.setColor(3, c), this.setData({
                disable_bwd: !1
              }), this.setData({
                arrow_visibility: "visiable"
              });
            }.bind(this), 500));
            break;

          case 9:
            m ? this.setData({
              arrow_visibility: "visiable"
            }) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 10:
            m ? this.moveArrow(o) : this.moveArrow(a);
            break;

          case 11:
            m ? (this.setData({
              disable_fwd: !0
            }), this.moveDown(2, i), this.moveDown(4, a), this.setData({
              arrow_visibility: "hidden"
            }), this.moveArrow(i), setTimeout(function () {
              this.setColor(4, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              disable_bwd: !0
            }), this.moveDown(2, a), this.moveUp(4, r), this.moveArrow(a), setTimeout(function () {
              this.setColor(4, c), this.setData({
                disable_bwd: !1
              }), this.setData({
                arrow_visibility: "visiable"
              });
            }.bind(this), 500));
            break;

          case 12:
            m ? this.setData({
              arrow_visibility: "visiable"
            }) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 13:
            m ? this.moveArrow(a) : this.moveArrow(i);
            break;

          case 14:
            m ? this.moveArrow(o) : this.moveArrow(a);
            break;

          case 15:
            m ? (this.setData({
              disable_fwd: !0
            }), this.moveDown(2, e), this.moveDown(4, i), this.moveDown(5, a), this.setData({
              arrow_visibility: "hidden"
            }), this.moveArrow(e), setTimeout(function () {
              this.setColor(5, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              disable_bwd: !0
            }), this.moveDown(2, i), this.moveDown(4, a), this.moveUp(5, h), this.moveArrow(i), setTimeout(function () {
              this.setColor(5, c), this.setData({
                disable_bwd: !1
              }), this.setData({
                arrow_visibility: "visiable"
              });
            }.bind(this), 500));
            break;

          case 16:
            m ? this.setData({
              arrow_visibility: "visiable"
            }) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 17:
            m ? this.moveArrow(i) : this.moveArrow(e);
            break;

          case 18:
            m ? this.moveArrow(a) : this.moveArrow(i);
            break;

          case 19:
            m ? this.moveArrow(o) : this.moveArrow(a);
            break;

          case 20:
            m ? this.moveArrow(r) : this.moveArrow(o);
            break;

          case 21:
            m ? (this.setData({
              disable_fwd: !0
            }), this.moveDown(0, h), this.moveDown(1, b), this.moveDown(6, r), this.setData({
              arrow_visibility: "hidden"
            }), this.moveArrow(e), setTimeout(function () {
              this.setColor(6, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              disable_bwd: !0
            }), this.moveDown(0, r), this.moveDown(1, h), this.moveUp(6, b), this.moveArrow(r), setTimeout(function () {
              this.setColor(6, c), this.setData({
                disable_bwd: !1
              }), this.setData({
                arrow_visibility: "visiable"
              });
            }.bind(this), 500));
            break;

          case 22:
            m ? this.setData({
              arrow_visibility: "visiable"
            }) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 23:
            m ? this.moveArrow(i) : this.moveArrow(e);
            break;

          case 24:
            m ? this.moveArrow(a) : this.moveArrow(i);
            break;

          case 25:
            m ? this.moveArrow(o) : this.moveArrow(a);
            break;

          case 26:
            m ? this.moveArrow(r) : this.moveArrow(o);
            break;

          case 27:
            m ? this.moveArrow(h) : this.moveArrow(r);
            break;

          case 28:
            m ? (this.setData({
              disable_fwd: !0
            }), this.moveDown(0, b), this.moveDown(1, n), this.moveDown(7, h), this.setData({
              arrow_visibility: "hidden"
            }), this.moveArrow(e), setTimeout(function () {
              this.setColor(7, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              disable_bwd: !0
            }), this.moveDown(0, h), this.moveDown(1, b), this.moveUp(7, n), this.moveArrow(h), setTimeout(function () {
              this.setColor(7, c), this.setData({
                disable_bwd: !1
              }), this.setData({
                arrow_visibility: "visiable"
              });
            }.bind(this), 500));
            break;

          case 29:
            m ? this.setData({
              arrow_visibility: "visiable"
            }) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 30:
            m ? this.moveArrow(i) : this.moveArrow(e);
            break;

          case 31:
            m ? this.moveArrow(a) : this.moveArrow(i);
            break;

          case 32:
            m ? this.moveArrow(o) : this.moveArrow(a);
            break;

          case 33:
            m ? this.moveArrow(r) : this.moveArrow(o);
            break;

          case 34:
            m ? (this.setData({
              disable_fwd: !0
            }), this.moveDown(6, h), this.moveDown(7, b), this.moveDown(0, n), this.moveDown(1, d), this.moveDown(8, r), this.setData({
              arrow_visibility: "hidden"
            }), this.moveArrow(e), setTimeout(function () {
              this.setColor(8, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              disable_bwd: !0
            }), this.moveDown(6, r), this.moveDown(7, h), this.moveDown(0, b), this.moveDown(1, n), this.moveUp(8, d), this.moveArrow(r), setTimeout(function () {
              this.setColor(8, c), this.setData({
                disable_bwd: !1
              }), this.setData({
                arrow_visibility: "visiable"
              });
            }.bind(this), 500));
            break;

          case 35:
            this.setData({
              disable_fwd: !0
            });
        }

        m && this.setData({
          round: this.round + 1
        });
      }
    },
    setColor: function (t, s) {
      this.numbers[t].bgcolor=s;
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
