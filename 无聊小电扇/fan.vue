<template>
	<view>
		<ezsheet v-if="ezsheetShow" @selected="ezsheetOnSelected" @dismiss='ezsheetShow=false' :items="sheetItems"></ezsheet>
		<ezpage statusBackground="#AB9B6E" backgroundColor="#AB9B6E">
			<view slot="navigationSection">
				<eznavigationbar backgroundColor="#AB9B6E" :hasBottomLine="false" titleColor="#fff">
					<text slot='title'></text>
				</eznavigationbar>
			</view>
			<view slot="contentSection" style="background-color:#AB9B6E;overflow-x: hidden;">
				<view class="danmu">
					<view v-for="(item,index) in commentlist" :key="item._id" class="item" :style="{animationDelay:item.delay+'s',top:item.top+'px'}">
						<image :src="item.ownerInfo.avatarUrl" style="width: 20px;height: 20px;background: #f2f2f2;border-radius: 10px;vertical-align: middle;margin-top: -3px;margin-right: 5px;"></image>
						<text>{{item.text}}</text>
					</view>
				</view>
				<view class="fancontainer">
					<view class="fan" :style="{'animation-play-state':state}">
						<view class="blades" :style="{'animation-play-state':state}"></view>
						<view class="body" :style="{'animation-play-state':state}"></view>
					</view>
				</view>
				<view style="margin-top: -40px;text-align: center;color:#fff;margin-bottom: 10px;">
					<view style="font-size: 16px;">本次已运行</view>
					<view>{{timedistanceStr}}</view>
				</view>
				<view style="width: 100%;padding:10px 20px;">
					<view style="height: 44px;line-height: 44px;display: flex;background: #ffffff;border-radius: 10px;overflow: hidden;">
						<view style="flex:1">
							<input v-model="commenttext" maxlength="25" style="padding:0px 20px;width: 100%;height: 100%;line-height: 44px;border: none;outline: none;" placeholder="来都来了，聊会儿呗~"/>
						</view>
						<view @click="commentFan" style="width: 80px;text-align: center;background: #4ac668;color:#fff;font-size: 18px;border-top-right-radius: 10px;border-bottom-right-radius: 10px;">
							发送
						</view>
					</view>
				</view>
				<!-- <view style="width: 100%;padding:5px 20px;">
					<ad unit-id="adunit-1923b40bb5856f34"></ad>
				</view> -->
				<!-- <view style="width: 100%;padding:10px 20px 50px 20px;">
					<view style="background: #fff;border-radius: 10px;overflow: hidden;">
						<view style="display: flex;height: 44px;line-height: 44px;padding:0px 20px;">
							<view style="flex:1;">运行总时长排名</view>
							<view @click="ezsheetShow=true">
								<text class="iconfont icon-share" style="margin-right: 5px;"></text>分享
							</view>
						</view>
						<view v-for="item,index in toplist" :key="index" style="height: 50px;display: flex;padding:0px 20px;" :style="{background:index%2==0?'#f8f8f8':'#fff'}">
							<view style="width:50px;height: 50px;">
								<image :src="item.ownerInfo.avatarUrl" mode="aspectFill" style="width: 40px;height: 40px;margin-top: 5px;vertical-align: middle;"></image>
							</view>
							<view style="flex:1;margin-left: 5px;margin-right: 5px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;line-height: 50px;;">
								{{item.ownerInfo.nickName}}
							</view>
							<view style="line-height: 50px;color:#999">
								{{(item.totaltime/1000/3600).toFixed(2)}}小时
							</view>
						</view>
					</view>
				</view> -->
			</view>
			<!-- <view slot="tabSection">
				
			</view> -->
		</ezpage>
	</view>
</template>

<script>
	import ezpage from "../../components/ezpage.vue"
	import eznavigationbar from "../../components/eznaviagtionbar.vue"
	import cloudApi from '../../common/cloudApi.js'
	import utils from "../../common/utils.js"
	
	import ezsheet from "../../components/ezsheet.vue"
	
	var timer;
	export default {
		components:{
			ezpage,
			eznavigationbar,
			ezsheet
		},
		data() {
			return {
				state:"running",
				userInfo:null,
				toplist:[],
				totaltime:0,
				starttime:0,
				timedistance:0,
				ezsheetShow:false,
				commenttext:"",
				commentlist:{},
				sheetItems:[
					{
						title:'分享给好友',
						type:"share"
					}
				]
			}
		},
		onShareAppMessage() {
			return {
				title: '心静自然凉',
				path: utils.getShareUrl('/pages/home/home?url=/pages/tools/fan')
			}
		},
		onLoad() {
			//记录启动时间
			utils.showLoading();
			cloudApi.login((userInfo)=>{
				uni.hideLoading();
				this.userInfo = userInfo;
				this.startFan();
			})
		},
		onUnload() {
			//记录停止
			//一小时节约0.005度电
			if(timer)clearTimeout(timer);
			this.stopFan();
		},
		computed:{
			timedistanceStr(){
				return Math.floor(this.timedistance/60)+"分"+(this.timedistance%60)+"秒";
			}
		},
		methods: {
			nextSecond(){
				timer=setTimeout(this.nextSecond,1000);
				
				this.timedistance = ((Date.now()-this.starttime)/1000).toFixed(0);
				
				if(this.timedistance%15==0)this.clearCommentList();
			},
			clearCommentList(){
				const now = Date.now();
				for(var key in this.commentlist){
					var item = this.commentlist[key];
					
					console.log(item);
					
					if(now>item.starttime+(item.delay+10)*1000){
						delete this.commentlist[key];
					}
				}
				this.requestComments();
			},
			ezsheetOnSelected(){
				
			},
			requestComments(){
				cloudApi.callFunction({
					noloading:true,
					name:"users",
					data:{
						action:"fancommentlist"
					},
					success:(res)=>{
						console.log(res);
						var commentlist = res.result.data;
						
						const length = commentlist.length;
						for(let i = 0;i<length;i++){
							var item = commentlist[i];
							item.delay = Math.random()*15;
							item.top = Math.random()*300;
							item.starttime = Date.now();
							if(!this.commentlist[item._id])this.commentlist[item._id]=item;
						}
					}
				})
			},
			commentFan(){
				if(this.commenttext=="")return;
				var text = this.commenttext;
				cloudApi.callFunction({
					name:"users",
					data:{
						action:"fancommentpost",
						text:text
					},
					success: (res) => {
						if(res.result.errcode==0){
							this.commenttext = "";
							this.commentlist[res.result.data]={
								starttime:Date.now(),
								text:text,
								ownerInfo:{
									avatarUrl:this.userInfo.avatarUrl
								},
								top:Math.random()*300,
								delay:0
							};
							this.clearCommentList();
						}else{
							utils.showToast(res.result.errmsg);
						}
					}
				})
			},
			startFan(){
				// cloudApi.callFunction({
				// 	name:"users",
				// 	data:{
				// 		action:"fanstart"
				// 	},
				// 	success: (res) => {
				// 		this.toplist =  res.result.data.toplist;
				// 		this.starttime=res.result.data.starttime;
				// 		this.nextSecond();
				// 		this.requestComments();
				// 	}
				// })
				this.starttime=Date.now();
				this.nextSecond();
				this.requestComments();
			},
			stopFan(){
				// cloudApi.callFunction({
				// 	name:"users",
				// 	data:{
				// 		action:"fanstop"
				// 	},
				// 	success: (res) => {
						
				// 	}
				// })
			}
		}
	}
</script>

<style>
	@keyframes danmu-anim
	{
		from{
			transform: translateX(100vw);
		}
		to{
			transform: translateX(-100%);
		}
	}
	.danmu
	{
		position: absolute;
		z-index: 999999;
		height: 20vw;
		transform-style: preserve-3d;
		transform: translateZ(1000px);
	}
	.danmu>.item{
		position: absolute;
		z-index: 999999;
		white-space: nowrap;
		border-radius: 10px;
		height: 20px;
		background: rgba(0,0,0,.3);
		margin-bottom: 5px;
		color:#fff;
		font-size: 14px;
		padding: 0px 10px 0px 0px;
		transform: translateX(-100%);
		animation-fill-mode:both;
		animation: danmu-anim 10s linear;
	}
	page{
		background: #AB9B6E;
	}
	
	.fancontainer {
	  display: grid;
	  place-items: center;
	  height: 120vw;
	  transform-style: preserve-3d;
	  /* background: radial-gradient(circle at top, rgba(255, 255, 255, 0.0001) 400px, #665b37) 50% 100%/100% calc(50% - 100px) no-repeat, linear-gradient(to bottom, rgba(255, 255, 255, 0.0001) calc(50% + 100px), #988752 calc(50% + 100px), #b9ab7d), linear-gradient(to top, rgba(255, 255, 255, 0.0001) calc(50% - 100px), rgba(0, 0, 0, 0.25) calc(50% - 100px), rgba(255, 255, 255, 0.0001) calc(50% + 100px)), radial-gradient(ellipse at 50% calc(50% + 100px), #f06864, #7c0f0c); */
	}
	.fan {
	  width: 250px;
	  height: 250px;
	  border-radius: 100%;
	  background: linear-gradient(to right, rgba(255, 255, 255, 0.0001) calc(50% - 1px), #efefef calc(50% - 1px), #efefef calc(50% + 1px), rgba(255, 255, 255, 0.0001) calc(50% + 1px)) 50% 50%/215px 215px no-repeat, linear-gradient(to bottom, rgba(255, 255, 255, 0.0001) calc(50% - 1px), #efefef calc(50% - 1px), #efefef calc(50% + 1px), rgba(255, 255, 255, 0.0001) calc(50% + 1px)) 50% 50%/140px 140px no-repeat, radial-gradient(circle at center, rgba(255, 255, 255, 0.0001) 43px, #efefef 43px, #ccc 45px, rgba(255, 255, 255, 0.0001) 45px, rgba(255, 255, 255, 0.0001) 70px, #efefef 70px, #ccc 72px, rgba(255, 255, 255, 0.0001) 72px, rgba(255, 255, 255, 0.0001) 100px), radial-gradient(circle at center, #ccc, #fff 100px, #a4e2e2 100px, #a4e2e2 110px, #7dd6d6 110px);
	  position: relative;
	  transform-style: preserve-3d;
	  transform-origin: 50% 150% -100px;
	  animation: turn 5s ease-in-out infinite alternate;
	}
	@keyframes turn {
	  from {
	    transform: translateY(-100px) rotateY(-20deg);
	    box-shadow: 20px 0 0 #a4e2e2, 30px 30px 40px -30px #cbeeee, 60px 30px 0 -30px #91dcdc;
	  }
	  to {
	    transform: translateY(-100px) rotateY(20deg);
	    box-shadow: -20px 0 0 #a4e2e2, -30px 30px 40px -30px #cbeeee, -60px 30px 0 -30px #91dcdc;
	  }
	}
	.blades, .body {
	  transform-style: preserve-3d;
	  content: "";
	  position: absolute;
	}
	.body {
	  transform-origin: 50% 100% 20px;
	  width: 100%;
	  height: 400px;
	  top: 0;
	  background: radial-gradient(circle at top, #efefef, #ccc 11.5px, #999 11.5px, #7dd6d6 12.5px, rgba(255, 255, 255, 0.0001) 15px) 50% 290px/40px 40px no-repeat, linear-gradient(to right, rgba(255, 255, 255, 0.0001) calc(50% - 12.5px), #ccc calc(50% - 12.5px), #efefef, #ccc calc(50% + 12.5px), rgba(255, 255, 255, 0.0001) calc(50% + 15px)) 100% 50%/100% 200px no-repeat, radial-gradient(ellipse at bottom, #def4f4, #a4e2e2 50%, rgba(255, 255, 255, 0.0001) 50%) 50% calc(100% - 60px)/120px 100px no-repeat, radial-gradient(ellipse at center, #def4f4, #a4e2e2 50%, rgba(255, 255, 255, 0.0001) 50%) 50% calc(100% - 30px)/120px 60px no-repeat, radial-gradient(ellipse at center, #7dd6d6 65%, rgba(255, 255, 255, 0.0001) 50%) 50% 340px/250px 30px no-repeat, linear-gradient(to top, #a4e2e2 30px, rgba(255, 255, 255, 0.0001) 20px) 50% calc(50% - 15px)/calc(100% - 20px) 100% no-repeat, radial-gradient(ellipse at center, #a4e2e2 65%, rgba(255, 255, 255, 0.0001) 50%) 50% 370px/250px 30px no-repeat;
	  animation: donotturn 5s ease-in-out infinite alternate;
	  /* reflect: below -30px linear-gradient(rgba(255, 255, 255, 0.0001) 50%, rgba(255, 255, 255, 0.25)); */
	}
	@keyframes donotturn {
	  from {
	    transform: translateZ(-120px) rotateY(25deg);
	  }
	  to {
	    transform: translateZ(-120px) rotateY(-25deg);
	  }
	}
	.fan>.blades {
	  width: 100%;
	  height: 100%;
	  top: 0%;
	  left: 0%;
	  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.0001) 43px, #efefef 43px, #ccc 45px, rgba(255, 255, 255, 0.0001) 45px, rgba(255, 255, 255, 0.0001) 70px, #efefef 70px, #ccc 72px, rgba(255, 255, 255, 0.0001) 72px, rgba(255, 255, 255, 0.0001) 100px, #efefef 100px, #ccc 102px, rgba(255, 255, 255, 0.0001) 102px), radial-gradient(circle at center, #ccc, #dfdfdf 25px, rgba(255, 255, 255, 0.0001) 20px), linear-gradient(95deg, rgba(255, 255, 255, 0.0001) calc(50% - 10px), #ccc calc(50% - 10px), #ccc calc(50% + 10px), rgba(255, 255, 255, 0.0001) calc(50% + 10px)) 50%/100% 75% no-repeat, linear-gradient(-95deg, rgba(255, 255, 255, 0.0001) calc(50% - 10px), #ccc calc(50% - 10px), #ccc calc(50% + 10px), rgba(255, 255, 255, 0.0001) calc(50% + 10px)) 50%/100% 75% no-repeat, linear-gradient(5deg, rgba(255, 255, 255, 0.0001) calc(50% - 10px), #ccc calc(50% - 10px), #ccc calc(50% + 10px), rgba(255, 255, 255, 0.0001) calc(50% + 10px)) 50%/75% 100% no-repeat, linear-gradient(-5deg, rgba(255, 255, 255, 0.0001) calc(50% - 10px), #ccc calc(50% - 10px), #ccc calc(50% + 10px), rgba(255, 255, 255, 0.0001) calc(50% + 10px)) 50%/75% 100% no-repeat, radial-gradient(circle at bottom, #ccc 20px, rgba(255, 255, 255, 0.0001) 20px) 50% 0px/35px 35px no-repeat, radial-gradient(circle at top, #ccc 20px, rgba(255, 255, 255, 0.0001) 20px) 50% 100%/35px 35px no-repeat, radial-gradient(circle at right, #ccc 20px, rgba(255, 255, 255, 0.0001) 20px) 0% 50%/35px 35px no-repeat, radial-gradient(circle at left, #ccc 20px, rgba(255, 255, 255, 0.0001) 20px) 100% 50%/35px 35px no-repeat;
	  animation: spin 0.5s linear infinite;
	}
	@keyframes spin {
	  from {
	    transform: scale(0.9) translateZ(50px) rotate(0deg);
	  }
	  to {
	    transform: scale(0.9) translateZ(50px) rotate(360deg);
	  }
	}
</style>
