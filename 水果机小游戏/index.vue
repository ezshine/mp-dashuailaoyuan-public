<template>
	<view style="height: 100%;">
		<ezpage :title="title" :backgroundColor="bgColor" :statusBackground="bgColor">
			<view slot="navigationSection">
				<eznavigationbar :backgroundColor="bgColor" :hasBottomLine="false" titleColor="#fff">
					<text slot='title'>{{title}}</text>
				</eznavigationbar>
			</view>
			<view slot="contentSection" style="padding:1vw;background-color: #000;">
				<view style="display: flex;flex-wrap: wrap;">
					<view style="position: absolute;left: 14vw;top:14vw;z-index: 2;color:#fff;width:70vw;height: 70vw;padding:10px;">
						<view style="display: flex;">
							<view style="flex:1">
								<view>我的金币</view>
								<view style="width: 100%;background: #f2f2f2;margin-top: 5px;color: #000;padding: 5px 5px;">{{userInfo.coin||0}}</view>
							</view>
							<view style="width: 10px;"></view>
							<view style="flex:1">
								<view>本次获得</view>
								<view style="width: 100%;background: #f2f2f2;margin-top: 5px;color: #000;padding: 5px;">{{rewardcoin}}</view>
							</view>
						</view>
						<view style="display: flex;flex-direction: column;flex-wrap: wrap;height: 48vw;color:#666;margin-top: 10px;padding: 10px;border: 1px solid #666;font-size: 14px;">
							<view v-for="(item,index) in squares" :key="index" v-if="index>0&&index<17">
								{{item.name+item.coin}}
							</view>
						</view>
					</view>
					<view v-for="(item,index) in map" class="squareItem" :key="index" :style="{opacity:item!=0?1:0,backgroundImage: index1==mapIndexs[index]?'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)':'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'}">
						{{squares[item].name}}
					</view>
				</view>
				<view style="display: flex;margin-top: 10px;">
					<view v-for="(item,index) in bets" @click="betIt" :key="index" :data-index="index" style="width: 12.25vw;height: 15vw;text-align: center;background: #f2f2f2;padding:5px 0px;">
						<view>{{item.value}}</view>
						<view style="margin-top: 5px;">{{squares[item.key].name}}</view>
					</view>
				</view>
				<view style="display: flex;margin-top: 10px;">
					<button :disabled="!isCanRoll()" @click="btnGoRoll" type="primary" style="width: 100%;">开始</button>
				</view>
			</view>
			<!-- <view slot="tabSection">
				
			</view> -->
		</ezpage>
	</view>
</template>

<script>
	import ezpage from "../../components/ezpage.vue"
	import eznavigationbar from "@/components/eznaviagtionbar.vue"
	
	import cloudApi from "../../common/cloudApi.js"
	import utils from "../../common/utils.js"
	
	var timer;
	let videoAd = null;
	export default {
		components:{
			eznavigationbar,
			ezpage
		},
		data() {
			return {
				bgColor:"#000",
				title:"幸运水果机",
				map : [
					13,9,2,1,15,16,11,
					10,0,0,0,0,0,7,
					15,0,0,0,0,0,8,
					17,0,0,0,0,0,18,
					5,0,0,0,0,0,15,
					6,0,0,0,0,0,14,
					11,12,15,3,4,9,13
					],
				mapIndexs:[
					0,1,2,3,4,5,6,
					23,0,0,0,0,0,7,
					22,0,0,0,0,0,8,
					21,0,0,0,0,0,9,
					20,0,0,0,0,0,10,
					19,0,0,0,0,0,11,
					18,17,16,15,14,13,12,
				],
				index1:0,
				index2:0,
				bets:[
						{
							key:1,//王
							value:0
						},
						{
							key:3,//77
							value:0
						},
						{
							key:5,//星星
							value:0
						},
						{
							key:7,//西瓜
							value:0
						},
						{
							key:9,//铃铛
							value:0
						},
						{
							key:11,//柠檬
							value:0
						},
						{
							key:13,//橙子
							value:0
						},
						{
							key:15,//苹果
							value:0
						}],
				squares:[
							{
								name:"空",
								coin:"*1"
							},
							{
								name:"王",
								coin:"*120"
							},
							{
								name:"小王",
								coin:"*50"
							},
							{
								name:"77",
								coin:"*40"
							},
							{
								name:"小77",
								coin:"*3"
							},
							{
								name:"星星",
								coin:"*30"
							},
							{
								name:"小星星",
								coin:"*3"
							},
							{
								name:"西瓜",
								coin:"*20"
							},
							{
								name:"小西瓜",
								coin:"*3"
							},
							{
								name:"铃铛",
								coin:"*20"
							},
							{
								name:"小铃铛",
								coin:"*3"
							},
							{
								name:"柠檬",
								coin:"*20"
							},
							{
								name:"小柠檬",
								coin:"*3"
							},
							{
								name:"橙子",
								coin:"*10"
							},
							{
								name:"小橙子",
								coin:"*3"
							},
							{
								name:"苹果",
								coin:"*5"
							},
							{
								name:"小苹果",
								coin:"*3"
							},
							{
								name:"Lucky",
								type:"lucky1"
							},
							{
								name:"Lucky",
								type:"lucky2"
							}],
					status:'stop',
					rewardcoin:0,
					userInfo:null
			}
		},
		onShareAppMessage() {
			return {
				title: this.title,
				path: utils.getShareUrl('/pages/home/home?url='+encodeURIComponent('games/fruitslot/index'))
			}
		},
		onLoad(options){
			utils.showLoading();
			cloudApi.login((userInfo)=>{
				this.userInfo = userInfo;
				uni.hideLoading();
			})
			
			// 在页面onLoad回调事件中创建激励视频广告实例
			if (wx.createRewardedVideoAd) {
			  videoAd = wx.createRewardedVideoAd({
			    adUnitId: 'adunit-b1c7cec26ef6b1d5'
			  })
			  videoAd.onLoad(() => {})
			  videoAd.onError((err) => {})
			  videoAd.onClose(res => {
			      if (res && res.isEnded) {
			        // 正常播放结束，可以下发游戏奖励
					cloudApi.callFunction({
						name:"users",
						data:{
							action:"coinmission",
							mission:"playad"
						},
						success:(res)=>{
							if(res.result.errcode==0){
								utils.showLoading();
								cloudApi.login((userInfo)=>{
									this.userInfo = userInfo;
									uni.hideLoading();
									utils.playSounds('/static/gain_coin.mp3');
								},1)
							}
							else utils.showToast(res.result.errmsg);
						}
					})
			      } else {
			        // 播放中途退出，不下发游戏奖励
			      }
			  })
			}
		},
		onUnload() {
			clearInterval(timer);
		},
		computed:{
			
		},
		methods: {
			getAllSpendCoin(){
				let totalspend = 0;
				for (var i = 0; i < this.bets.length; i++) {
					if(this.bets[i].value>0)totalspend+=this.bets[i].value;
				}
				return totalspend;
			},
			clearAllSpendCoin(){
				for (var i = 0; i < this.bets.length; i++) {
					this.bets[i].value = 0;
				}
			},
			getRewardCoinNum(key){
				let squreItem = this.squares[key];
				console.log(key+","+squreItem.name+","+squreItem.coin);
				let totalreward = 0;
				for (var i = 0; i < this.bets.length; i++) {
					let betItem = this.bets[i];
					if(betItem.value>0&&(betItem.key===key||betItem.key+1===key)){
						console.log("投注了"+betItem.value);
						if(betItem.key===key){
							totalreward=betItem.value*parseInt(this.squares[betItem.key].coin.substr(1));
						}else if(betItem.key+1===key){
							totalreward=betItem.value*parseInt(this.squares[betItem.key+1].coin.substr(1));
						}
						break;
					}
				}
				if(totalreward<=0)console.log("未投注");
				return totalreward;
			},
			betIt(e){
				let index = e.currentTarget.dataset.index;
				
				if(!this.isCanRoll())return;
				
				const spendcoin = this.getAllSpendCoin();
				if(spendcoin>0&&this.isBetsCanClear){
					this.isBetsCanClear = false;
					this.clearAllSpendCoin();
				}
				
				if(spendcoin>=this.userInfo.coin){
					uni.showModal({
						content:"金币余额不足，观看广告后可领取。",
						cancelText:"取消",
						confirmText:"领金币",
						success: (res) => {
							// 用户触发广告后，显示激励视频广告
							if (res.confirm&&videoAd) {
								videoAd.show().catch(() => {
								  // 失败重试
								  videoAd.load()
								    .then(() => videoAd.show())
								    .catch(err => {
								      console.log('激励视频 广告显示失败')
								    })
								})
							}
						}
					})
					return;
				}
				
				this.bets[index].value=Math.min(this.bets[index].value+1,9);
				
				utils.playSounds('/games/static/button.mp3');
			},
			stopRoll(){
				if(timer)clearInterval(timer);
				
				this.status = 'stop';
				this.isBetsCanClear = true;
				
				const fkey = this.findKeyByIndex(this.index1);
				
				this.rewardcoin = this.getRewardCoinNum(fkey);
				
				if(this.rewardcoin>0)utils.playSounds('/static/gain_coin.mp3');
				
				this.userInfo.coin += this.rewardcoin;
			},
			btnGoRoll(){
				const spendcoin = this.getAllSpendCoin();
				if(spendcoin>this.userInfo.coin){
					uni.showModal({
						content:"金币余额不足，观看广告后可领取。",
						cancelText:"取消",
						confirmText:"领金币",
						success: (res) => {
							// 用户触发广告后，显示激励视频广告
							if (res.confirm&&videoAd) {
								videoAd.show().catch(() => {
								  // 失败重试
								  videoAd.load()
								    .then(() => videoAd.show())
								    .catch(err => {
								      console.log('激励视频 广告显示失败')
								    })
								})
							}
						}
					})
					return;
				}
				else if(spendcoin<=0)return utils.showToast("请先下注");
				
				console.log("本轮消耗金币："+spendcoin);
				
				this.userInfo.coin-=spendcoin;
				
				//请求云函数，由云函数返回本轮最终的停止位置
				
				cloudApi.callFunction({
					name:"games",
					data:{
						game:"fruitslot",
						bets:this.bets
					},
					success:(res)=>{
						if(res.result.errcode==0)this.rollToIndex(res.result.data.findex);
						else utils.showAlert(res.result.errmsg);
					}
				})
			},
			findKeyByIndex(index){
				//从map中找到指定位置元素的key
				return this.map[this.mapIndexs.indexOf(index)];
			},
			isCanRoll(){
				if(this.status!='stop')return false;
				
				return true;
			},
			rollToIndex(tindex=0){
				
				if(!this.isCanRoll())return;
				
				this.rewardcoin = 0;
				
				this.status = 'rolling';
				
				console.log("最终目标位置："+tindex+","+this.squares[this.findKeyByIndex(tindex)].name)
				if(tindex===9||tindex===21){
					tindex+=1;
					console.log("最终目标不可为幸运，更改为："+tindex+","+this.squares[this.findKeyByIndex(tindex)].name);
				}
				
				let startRoll=(tindex)=>{
					let _tindex = Math.random()<.2?[9,21][Math.floor(Math.random()*2)]:tindex;
					
					console.log("本轮目标位置："+_tindex+","+this.squares[this.findKeyByIndex(_tindex)].name)
					
					//最小圈数
					const minRoll = 2;
					//最大圈数
					const maxRoll = 4;
					//滚动圈数
					const rollLoop = Math.floor(Math.random()*(maxRoll-minRoll)+minRoll);
					
					//当前位置
					let index = this.index1;
					//目标位置
					let rindex = _tindex+24*rollLoop;
					
					let speed = 0;
					let speedVal = 0.02;
					if(timer)clearInterval(timer);
					timer = setInterval(()=>{
						
						const nindex = Math.floor(index%24);
						if(nindex!=this.index1)utils.playSounds('/games/static/toggle_on.mp3');
						this.index1 = nindex;
						
						if(Math.floor(index)===rindex){
							const _rindex = rindex%24;
							
							if(_rindex==9||_rindex==21) {
								utils.playSounds('/games/static/lucky.mp3');
								startRoll(tindex);
							}
							else this.stopRoll();
						};
						
						if(index<10)speed += 0.01;
						
						speed=((rindex/2-Math.abs(index-rindex/2))/100)+speedVal;
						
						index+=Math.min(1,speed);
					},16)
				}
				
				startRoll(tindex);
			}
		}
	}
</script>

<style>
	.squareItem
	{
		width:14vw;
		height:14vw;
		text-align: center;
		line-height: 14vw;
		border-left: 1px solid #000;
		border-top: 1px solid #000;
	}
	.squareItem:nth-child(n+43)
	{
		border-bottom: 1px solid #000;
	}
</style>
