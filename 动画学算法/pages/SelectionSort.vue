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
				<movable-view class="ico" direction="horizontal" :style="'visibility:' + arrow_visibility" :x="arrow_x" :y="arrow_y">
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
	import ezpage from '../../components/ezpage.vue'
	import utils from "../../common/utils.js"
	
var t = require("./common.js"),
    s = require("./data.js"),
    i = t.BGCOLOR_YELLOW;

export default {
	components:{
		ezpage
	},
  data() {
    return {
		title:"选择排序",
      numbers: [{
        value: 8,
        length: 8,
        right: 85,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 0,
        x: "50rpx",
        y: "220rpx"
      }, {
        value: 9,
        length: 9,
        right: 75,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 1,
        x: "125rpx",
        y: "200rpx"
      }, {
        value: 1,
        length: 1,
        right: 65,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 2,
        x: "200rpx",
        y: "360rpx"
      }, {
        value: 4,
        length: 4,
        right: 55,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 3,
        x: "275rpx",
        y: "300rpx"
      }, {
        value: 2,
        length: 2,
        right: 45,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 4,
        x: "350rpx",
        y: "340rpx"
      }, {
        value: 3,
        length: 3,
        right: 35,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 5,
        x: "425rpx",
        y: "320rpx"
      }, {
        value: 6,
        length: 6,
        right: 25,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 6,
        x: "500rpx",
        y: "260rpx"
      }, {
        value: 7,
        length: 7,
        right: 15,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 7,
        x: "575rpx",
        y: "240rpx"
      }, {
        value: 5,
        length: 5,
        right: 5,
        border_size: "2rpx",
        bgcolor: t.BGCOLOR_YELLOW,
        index: 8,
        x: "650rpx",
        y: "280rpx"
      }],
      factor: 20,
      base: 50,
      offset: 100,
      count: 9,
      bottom: 60,
      round: 1,
      forward: 0,
      disable_fwd: !1,
      disable_bwd: !0,
      arrow_visibility: "hidden",
      arrow_x: "200rpx",
      arrow_y: "430rpx",
      message_count: 0,
      text: ""
    };
  },

  components: {},
  props: {},
  onLoad: function (i) {
    t.initTextArray(s.SelectionSort[0].Text, s.SelectionSort[0].size), t.showText(this.message_count, this), this.setData({
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
	  			  this[`${key}`]=params[key];
	  		  }
	  },
    switch_element: function (t, s) {
      var i = this.findIndex(t),
          e = this.findIndex(s),
          a = this.numbers[i].x,
          r = this.numbers[i].index;

		this.numbers[i].x=this.numbers[e].x;
		this.numbers[i].index=this.numbers[e].index;

      this.numbers[e].x=a;
      this.numbers[e].index=r;
    },
    setColor: function (t, s) {
		this.numbers[t].bgcolor=s;
    },
    findIndex: function (t) {
      for (var s = 0; s <= 8 && t != this.numbers[s].index; s++);

      return s;
    },
    highlight_up: function (t) {
      var s = 0;

      for (s = 0; s < this.count && this.numbers[s].index != t; s++);

      var i = (parseInt(this.numbers[s].y, 10) - this.offset).toString().concat("rpx");

		this.numbers[s].y=i;

      
    },
    highlight_down: function (t) {
      var s = 0;

      for (s = 0; s < this.count && this.numbers[s].index != t; s++);

      var i = (parseInt(this.numbers[s].y, 10) + this.offset).toString().concat("rpx");

		this.numbers[s].y=i;
    },
    highlight_all: function (t) {
      return new Promise(function (s, i) {
        for (var e = t; e < this.count; e++) setTimeout(function (t) {
          this.highlight_up(t);
        }.bind(this), 150 * e, e), setTimeout(function (t) {
          this.highlight_down(t), 8 == t && s();
        }.bind(this), 150 * (e + 1), e);
      }.bind(this));
    },
    moveArrow: function (t) {
      this.setData({
        arrow_x: t
      });
    },
    next: function (s) {
      var e,
          a = !0;
      if ("backward" == s.target.id && (a = !1), a) e = t.showText(this.message_count, this), this.setData({
        message_count: this.message_count + 1
      }), 1 == this.disable_bwd && this.setData({
        disable_bwd: !1
      });else {
        if (!(this.message_count > 0)) return console.log("error while loding text, unexpected!"), 0;
        this.setData({
          message_count: this.message_count - 1
        }), 1 == this.message_count && this.setData({
          disable_bwd: !0
        }), t.showText(this.message_count - 1, this), e = t.getContinue(this.message_count, this);
      }

      if (!e) {
        switch (0 == a && this.round > 0 && this.setData({
          round: this.round - 1
        }), console.log("round: ", this.round, "forward: ", a), this.round) {
          case 1:
            a ? (this.setData({
              disable_fwd: !0
            }), this.highlight_all(this.round - 1).then(function () {
              setTimeout(function () {
                this.setData({
                  arrow_visibility: "visiable"
                }), this.setData({
                  disable_fwd: !1
                });
              }.bind(this), 400);
            }.bind(this))) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 2:
            this.setData({
              arrow_visibility: "hidden"
            }), this.switch_element(0, 2), a ? (this.moveArrow("350rpx"), this.setData({
              disable_fwd: !0
            }), setTimeout(function () {
              this.setColor(0, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 400)) : (this.moveArrow("200rpx"), this.setData({
              disable_bwd: !0
            }), setTimeout(function () {
              this.setColor(2, i), this.setData({
                disable_bwd: !1
              });
            }.bind(this), 400));
            break;

          case 3:
            a ? (this.setData({
              disable_fwd: !0
            }), this.highlight_all(this.round - 2).then(function () {
              this.setData({
                arrow_visibility: "visiable"
              }), setTimeout(function () {
                this.setData({
                  disable_fwd: !1
                });
              }.bind(this), 400);
            }.bind(this))) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 4:
            this.setData({
              arrow_visibility: "hidden"
            }), this.switch_element(1, 4), a ? (this.moveArrow("425rpx"), this.setData({
              disable_fwd: !0
            }), setTimeout(function () {
              this.setColor(1, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 400)) : (this.moveArrow("350rpx"), this.setData({
              disable_bwd: !0
            }), setTimeout(function () {
              this.setColor(4, i), this.setData({
                disable_bwd: !1
              });
            }.bind(this), 400));
            break;

          case 5:
            a ? (this.setData({
              disable_fwd: !0
            }), this.highlight_all(this.round - 3).then(function () {
              this.setData({
                arrow_visibility: "visiable"
              }), setTimeout(function () {
                this.setData({
                  disable_fwd: !1
                });
              }.bind(this), 400);
            }.bind(this))) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 6:
            this.setData({
              arrow_visibility: "hidden"
            }), this.switch_element(2, 5), a ? (this.moveArrow("275rpx"), this.setData({
              disable_fwd: !0
            }), setTimeout(function () {
              this.setColor(2, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 400)) : (this.moveArrow("425rpx"), this.setData({
              disable_bwd: !0
            }), setTimeout(function () {
              this.setColor(5, i), this.setData({
                disable_bwd: !1
              });
            }.bind(this), 400));
            break;

          case 7:
            a ? (this.setData({
              disable_fwd: !0
            }), this.highlight_all(this.round - 4).then(function () {
              this.setData({
                arrow_visibility: "visiable"
              }), setTimeout(function () {
                this.setData({
                  disable_fwd: !1
                });
              }.bind(this), 400);
            }.bind(this))) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 8:
            a ? (this.setData({
              disable_fwd: !0
            }), this.setColor(3, "c0c0c0"), this.setData({
              arrow_visibility: "hidden"
            }), this.moveArrow("650rpx"), setTimeout(function () {
              this.setData({
                disable_fwd: !1
              });
            }.bind(this), 400)) : (this.setColor(3, i), this.moveArrow("275rpx"), setTimeout(function () {
              this.setData({
                disable_fwd: !1
              }), this.setData({
                arrow_visibility: "visiable"
              });
            }.bind(this), 400));
            break;

          case 9:
            a ? (this.setData({
              disable_fwd: !0
            }), this.highlight_all(this.round - 5).then(function () {
              this.setData({
                arrow_visibility: "visiable"
              }), setTimeout(function () {
                this.setData({
                  disable_fwd: !1
                });
              }.bind(this), 400);
            }.bind(this))) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 10:
            this.setData({
              arrow_visibility: "hidden"
            }), this.switch_element(4, 8), a ? (this.moveArrow("500rpx"), this.setData({
              disable_fwd: !0
            }), setTimeout(function () {
              this.setColor(4, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 400)) : (this.moveArrow("650rpx"), this.setData({
              disable_bwd: !0
            }), setTimeout(function () {
              this.setColor(8, i), this.setData({
                disable_bwd: !1
              });
            }.bind(this), 400));
            break;

          case 11:
            a ? (this.setData({
              disable_fwd: !0
            }), this.highlight_all(this.round - 6).then(function () {
              this.setData({
                arrow_visibility: "visiable"
              }), setTimeout(function () {
                this.setData({
                  disable_fwd: !1
                });
              }.bind(this), 400);
            }.bind(this))) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 12:
            this.setData({
              arrow_visibility: "hidden"
            }), this.switch_element(5, 6), a ? (this.moveArrow("575rpx"), this.setData({
              disable_fwd: !0
            }), setTimeout(function () {
              this.setColor(5, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 400)) : (this.moveArrow("500rpx"), this.setData({
              disable_bwd: !0
            }), setTimeout(function () {
              this.setColor(6, i), this.setData({
                disable_bwd: !1
              });
            }.bind(this), 400));
            break;

          case 13:
            a ? (this.setData({
              disable_fwd: !0
            }), this.highlight_all(this.round - 7).then(function () {
              this.setData({
                arrow_visibility: "visiable"
              }), setTimeout(function () {
                this.setData({
                  disable_fwd: !1
                });
              }.bind(this), 400);
            }.bind(this))) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 14:
            this.setData({
              arrow_visibility: "hidden"
            }), this.switch_element(6, 7), a ? (this.setData({
              disable_fwd: !0
            }), setTimeout(function () {
              this.setColor(6, "c0c0c0"), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 400)) : (this.setData({
              disable_bwd: !0
            }), setTimeout(function () {
              this.setColor(7, i), this.setData({
                disable_bwd: !1
              });
            }.bind(this), 400));
            break;

          case 15:
            a ? (this.setData({
              disable_fwd: !0
            }), this.highlight_all(this.round - 8).then(function () {
              this.setData({
                arrow_visibility: "visiable"
              }), setTimeout(function () {
                this.setData({
                  disable_fwd: !1
                });
              }.bind(this), 400);
            }.bind(this))) : this.setData({
              arrow_visibility: "hidden"
            });
            break;

          case 16:
            a ? (this.setData({
              arrow_visibility: "hidden"
            }), this.setColor(7, "c0c0c0")) : (this.setData({
              arrow_visibility: "visiable"
            }), this.setColor(7, i));
            break;

          case 17:
            a ? (this.setData({
              arrow_visibility: "hidden"
            }), this.setColor(8, "c0c0c0")) : (this.setData({
              arrow_visibility: "visiable"
            }), this.setColor(8, i));
            break;

          case 18:
            this.setData({
              disable_fwd: !0
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
