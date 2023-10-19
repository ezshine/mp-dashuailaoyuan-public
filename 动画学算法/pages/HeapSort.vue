<template>
	<ezpage :title="title" backgroundColor="#f2f2f2">
		<view slot='contentSection'>
			<movable-area style='width:100%;height: 350px;pointer-events: none'>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[0].length*factor+base) + 'rpx; border:' + numbers[0].border_size + ' solid #a1a1a1; background:#' + numbers[0].bgcolor + '; border-radius:25rpx; position:absolute; z-index:20;'" :x="numbers[0].x" :y="numbers[0].y">
					<text>{{numbers[0].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[1].length*factor+base) + 'rpx; border:' + numbers[1].border_size + ' solid #a1a1a1; background:#' + numbers[1].bgcolor + '; border-radius:25rpx; position:absolute; z-index:20;'" :x="numbers[1].x" :y="numbers[1].y">
					<text>{{numbers[1].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[2].length*factor+base) + 'rpx; border:' + numbers[2].border_size + ' solid #a1a1a1; background:#' + numbers[2].bgcolor + '; border-radius:25rpx; position:absolute; z-index:20;'" :x="numbers[2].x" :y="numbers[2].y">
					<text>{{numbers[2].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[3].length*factor+base) + 'rpx; border:' + numbers[3].border_size + ' solid #a1a1a1; background:#' + numbers[3].bgcolor + '; border-radius:25rpx; position:absolute; z-index:20;'" :x="numbers[3].x" :y="numbers[3].y">
					<text>{{numbers[3].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[4].length*factor+base) + 'rpx; border:' + numbers[4].border_size + ' solid #a1a1a1; background:#' + numbers[4].bgcolor + '; border-radius:25rpx; position:absolute; z-index:20;'" :x="numbers[4].x" :y="numbers[4].y">
					<text>{{numbers[4].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[5].length*factor+base) + 'rpx; border:' + numbers[5].border_size + ' solid #a1a1a1; background:#' + numbers[5].bgcolor + '; border-radius:25rpx; position:absolute; z-index:20;'" :x="numbers[5].x" :y="numbers[5].y">
					<text>{{numbers[5].length}}</text>
				</movable-view>
				<movable-view class="container" direction="all" :style="'text-align:center; width: 50rpx; height: ' + (numbers[6].length*factor+base) + 'rpx; border:' + numbers[6].border_size + ' solid #a1a1a1; background:#' + numbers[6].bgcolor + '; border-radius:25rpx; position:absolute; z-index:20;'" :x="numbers[6].x" :y="numbers[6].y">
					<text>{{numbers[6].length}}</text>
				</movable-view>
				<movable-view class="container" direction="none" :style="'z-index:10; position:absolute; visibility:' + line1_visibility" x="235rpx" y="420rpx">
					<view class="page-line" style="width:185rpx; transform:rotate(-56deg)"></view>
				</movable-view>
				<movable-view class="container" direction="none" :style="'z-index:10; position:absolute;visibility:' + line2_visibility" x="335rpx" y="420rpx">
					<view class="page-line" style="width:185rpx; transform:rotate(56deg)"></view>
				</movable-view>
				<movable-view class="container" direction="none" :style="'z-index:10; position:absolute;visibility:' + line3_visibility" x="135rpx" y="570rpx">
					<view class="page-line" style="width:185rpx; transform:rotate(-56deg)"></view>
				</movable-view>
				<movable-view class="container" direction="none" :style="'z-index:10; position:absolute;visibility:' + line6_visibility" x="435rpx" y="570rpx">
					<view class="page-line" style="width:185rpx; transform:rotate(56deg)"></view>
				</movable-view>
				<movable-view class="container" direction="none" :style="'z-index:10; position:absolute;visibility:' + line4_visibility" x="218rpx" y="575rpx">
					<view class="page-line" style="width:170rpx; transform:rotate(68deg)"></view>
				</movable-view>
				<movable-view class="container" direction="none" :style="'z-index:10; position:absolute;visibility:' + line5_visibility" x="358rpx" y="575rpx">
					<view class="page-line" style="width:170rpx; transform:rotate(-68deg)"></view>
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
	import  ezpage  from "../../components/ezpage.vue"
	import  utils  from '../../common/utils.js'
	
var t = require("./common.js"),
    s = require("./data.js"),
    i = t.BGCOLOR_YELLOW;

export default {
	components:{
		ezpage
	},
  data() {
    return {
		title:"堆排序",
      numbers: [{
        value: 6,
        length: 6,
        border_size: "2rpx",
        bgcolor: i,
        index: 1,
        x: "110rpx",
        y: "130rpx"
      }, {
        value: 1,
        length: 1,
        border_size: "2rpx",
        bgcolor: i,
        index: 3,
        x: "190rpx",
        y: "180rpx"
      }, {
        value: 7,
        length: 7,
        border_size: "2rpx",
        bgcolor: i,
        index: 2,
        x: "270rpx",
        y: "120rpx"
      }, {
        value: 4,
        length: 4,
        border_size: "2rpx",
        bgcolor: i,
        index: 4,
        x: "350rpx",
        y: "150rpx"
      }, {
        value: 2,
        length: 2,
        border_size: "2rpx",
        bgcolor: i,
        index: 5,
        x: "430rpx",
        y: "170rpx"
      }, {
        value: 3,
        length: 3,
        border_size: "2rpx",
        bgcolor: i,
        index: 6,
        x: "510rpx",
        y: "160rpx"
      }, {
        value: 5,
        length: 5,
        border_size: "2rpx",
        bgcolor: i,
        index: 7,
        x: "590rpx",
        y: "140rpx"
      }],
      heap: [{
        x: 375,
        y: 350
      }, {
        x: 275,
        y: 500
      }, {
        x: 475,
        y: 500
      }, {
        x: 175,
        y: 650
      }, {
        x: 335,
        y: 650
      }, {
        x: 415,
        y: 650
      }, {
        x: 575,
        y: 650
      }],
      sorted_position: [{
        x: "110rpx",
        y: "180rpx"
      }, {
        x: "190rpx",
        y: "170rpx"
      }, {
        x: "270rpx",
        y: "160rpx"
      }, {
        x: "350rpx",
        y: "150rpx"
      }, {
        x: "430rpx",
        y: "140rpx"
      }, {
        x: "510rpx",
        y: "130rpx"
      }, {
        x: "590rpx",
        y: "120rpx"
      }],
      original_position: [{
        x: "110rpx",
        y: "130rpx"
      }, {
        x: "190rpx",
        y: "180rpx"
      }, {
        x: "270rpx",
        y: "120rpx"
      }, {
        x: "350rpx",
        y: "150rpx"
      }, {
        x: "430rpx",
        y: "170rpx"
      }, {
        x: "510rpx",
        y: "160rpx"
      }, {
        x: "590rpx",
        y: "140rpx"
      }],
      factor: 10,
      base: 50,
      round: 1,
      forward: 0,
      line1_visibility: "hidden",
      line2_visibility: "hidden",
      line3_visibility: "hidden",
      line4_visibility: "hidden",
      line5_visibility: "hidden",
      line6_visibility: "hidden",
      cctx: null,
      disable_fwd: !1,
      disable_bwd: !0,
      message_count: 0,
      text: ""
    };
  },

  components: {},
  props: {},
  onLoad: function (i) {
    t.initTextArray(s.HeapSort[0].Text, s.HeapSort[0].size), t.showText(this.message_count, this), this.setData({
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
    setColor: function (t, s) {
		this.numbers[t].bgcolor=s;
    },
    moveToOriginalPosition: function (t, s) {
		this.numbers[t].x=this.original_position[s].x;
		this.numbers[t].y=this.original_position[s].y;
    },
    moveToSortedPosition: function (t, s) {
		this.numbers[t].x=this.sorted_position[s].x;
		this.numbers[t].y=this.sorted_position[s].y;

      setTimeout(function () {
        this.setColor(t, "c0c0c0");
      }.bind(this), 500);
    },
    moveToHeap: function (t, s) {
		this.numbers[t].x=(this.heap[s].x - 25).toString().concat("rpx");
		this.numbers[t].y=(this.heap[s].y - (this.numbers[t].length * this.factor + this.base) / 2).toString().concat("rpx");
    },
    switch_element: function (t, s) {
      var i = this.numbers[t].x,
          a = this.numbers[t].y;

		this.numbers[t].x=this.numbers[s].x;
		this.numbers[t].y=this.numbers[s].y;

      this.numbers[s].x=i;
      this.numbers[s].y=a;
    },
    next: function (s) {
      var a,
          e = !0;
      if ("backward" == s.target.id && (e = !1), e) a = t.showText(this.message_count, this), this.setData({
        message_count: this.message_count + 1
      }), 1 == this.disable_bwd && this.setData({
        disable_bwd: !1
      });else {
        if (!(this.message_count > 0)) return console.log("error while loding text, unexpected!"), 0;
        this.setData({
          message_count: this.message_count - 1
        }), 1 == this.message_count && this.setData({
          disable_bwd: !0
        }), t.showText(this.message_count - 1, this), a = t.getContinue(this.message_count, this);
      }

      if (!a) {
        switch (0 == e && (this.round > 0 && this.setData({
          round: this.round - 1
        }), 1 == this.disable_fwd && this.setData({
          disable_fwd: !1
        })), console.log("round: ", this.round, "forward: ", e), this.round) {
          case 1:
            e ? this.moveToHeap(0, 0) : this.moveToOriginalPosition(0, 0);
            break;

          case 2:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToHeap(1, 1), setTimeout(function () {
              this.setData({
                line1_visibility: "visiable"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              line1_visibility: "hidden"
            }), this.moveToOriginalPosition(1, 1));
            break;

          case 3:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToHeap(2, 2), setTimeout(function () {
              this.setData({
                line2_visibility: "visiable"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              line2_visibility: "hidden"
            }), this.moveToOriginalPosition(2, 2));
            break;

          case 4:
            this.switch_element(0, 2);
            break;

          case 5:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToHeap(3, 3), setTimeout(function () {
              this.setData({
                line3_visibility: "visiable"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              line3_visibility: "hidden"
            }), this.moveToOriginalPosition(3, 3));
            break;

          case 6:
            this.switch_element(3, 1);
            break;

          case 7:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToHeap(4, 4), setTimeout(function () {
              this.setData({
                line4_visibility: "visiable"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              line4_visibility: "hidden"
            }), this.moveToOriginalPosition(4, 4));
            break;

          case 8:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToHeap(5, 5), setTimeout(function () {
              this.setData({
                line5_visibility: "visiable"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              line5_visibility: "hidden"
            }), this.moveToOriginalPosition(5, 5));
            break;

          case 9:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToHeap(6, 6), setTimeout(function () {
              this.setData({
                line6_visibility: "visiable"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setData({
              line6_visibility: "hidden"
            }), this.moveToOriginalPosition(6, 6));
            break;

          case 10:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToSortedPosition(2, 6), setTimeout(function () {
              this.moveToHeap(6, 0), this.setData({
                line6_visibility: "hidden"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setColor(2, i), this.moveToHeap(2, 0), this.moveToHeap(6, 6), this.setData({
              line6_visibility: "visiable"
            }));
            break;

          case 11:
            this.switch_element(0, 6);
            break;

          case 12:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToSortedPosition(0, 5), setTimeout(function () {
              this.moveToHeap(5, 0), this.setData({
                line5_visibility: "hidden"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setColor(0, i), this.moveToHeap(0, 0), this.moveToHeap(5, 5), this.setData({
              line5_visibility: "visiable"
            }));
            break;

          case 13:
            this.switch_element(5, 6);
            break;

          case 14:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToSortedPosition(6, 4), setTimeout(function () {
              this.moveToHeap(4, 0), this.setData({
                line4_visibility: "hidden"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setColor(6, i), this.moveToHeap(6, 0), this.moveToHeap(4, 4), this.setData({
              line4_visibility: "visiable"
            }));
            break;

          case 15:
            this.switch_element(4, 3);
            break;

          case 16:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToSortedPosition(3, 3), setTimeout(function () {
              this.moveToHeap(1, 0), this.setData({
                line3_visibility: "hidden"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setColor(3, i), this.moveToHeap(3, 0), this.moveToHeap(1, 3), this.setData({
              line3_visibility: "visiable"
            }));
            break;

          case 17:
            this.switch_element(1, 5);
            break;

          case 18:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToSortedPosition(5, 2), setTimeout(function () {
              this.moveToHeap(1, 0), this.setData({
                line2_visibility: "hidden"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setColor(5, i), this.moveToHeap(5, 0), this.moveToHeap(1, 2), this.setData({
              line2_visibility: "visiable"
            }));
            break;

          case 19:
            this.switch_element(1, 4);
            break;

          case 20:
            e ? (this.setData({
              disable_fwd: !0
            }), this.moveToSortedPosition(4, 1), setTimeout(function () {
              this.moveToHeap(1, 0), this.setData({
                line1_visibility: "hidden"
              }), this.setData({
                disable_fwd: !1
              });
            }.bind(this), 500)) : (this.setColor(4, i), this.moveToHeap(4, 0), this.moveToHeap(1, 1), this.setData({
              line1_visibility: "visiable"
            }));
            break;

          case 21:
            e ? this.moveToSortedPosition(1, 0) : (this.setColor(1, i), this.moveToHeap(1, 0));
            break;

          case 22:
            e && this.setData({
              disable_fwd: !0
            });
        }

        e && this.setData({
          round: this.round + 1
        });
      }
    }
  }
};
</script>
<style>
	.page-line {
	    margin: 0 auto;
	    height: 2rpx;
	    background-color: #000;
	}
	
	.page-line {
	    width: 200rpx;
	}
</style>