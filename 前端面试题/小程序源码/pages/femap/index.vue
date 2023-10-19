<template>
	<ezpage :backgroundColor="bgColor" :statusBackground="bgColor">
		<view slot="navigationSection">
			<eznavigationbar :backgroundColor="bgColor" :hasBottomLine="false" titleColor="#f7d05f">
				<text slot='title'>前端面试题</text>
			</eznavigationbar>
		</view>
		<view slot="contentSection" style="background-color: #3e607e;padding-bottom: 60px;">
			<view style="width: 100%;text-align: center;font-size: 16px;padding:20px 0px 0px 0px;color: #f7d05f;">每天刷三道题，一天比一天强</view>
			<view style="width: 100%;height: 210px;position: relative;overflow-y: visible;overflow-x: hidden;">
				<ezflycard
					@onThrowDone='onCardThrowDone'
					:cardWidth="cardWidth" 
					:cardHeight="140"
					:throwTriggerDistance="100"
					dragDirection="horizontal"
					:hasShadow="true"
					:hasBorder="false"
				>
					<view slot="firstCard" style="width:100%;height:100%;">
						<view v-if="randomlist[0]"  @click="onRandomlistItemTap" style="height: 100%;width: 100%;">
							<text style='padding:1px 5px 3px 4px;color:#fff;font-size:9px;border-bottom-right-radius: 10px;background:#ff0000;position:absolute;z-index:2;left:0px;top:0px;'>难度：{{getLevelStar(randomlist[0].level)}}</text>
							<view style="width: 100%;height: 100%;position: absolute;top:0px;left:0px;">
								<view style="width:100%;padding:0px 20px;font-size: 20px;word-wrap: break-word;transform: translate(-50%,-50%);position: absolute;top:50%;left:50%;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp: 3;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;word-break: break-all;">{{randomlist[0].title}}</view>
							</view>
						</view>
					</view>
					<view slot="secondCard" style="width:100%;height:100%;">
						<view v-if="randomlist[1]" style="height: 100%;width: 100%;">
							<text style='padding:1px 5px 3px 4px;color:#fff;font-size:9px;border-bottom-right-radius: 10px;background:#ff0000;position:absolute;z-index:2;left:0px;top:0px;'>难度：{{getLevelStar(randomlist[1].level)}}</text>
							<view style="width: 100%;height: 100%;position: absolute;top:0px;left:0px;">
								<view style="width:100%;padding:0px 20px;font-size: 20px;word-wrap: break-word;transform: translate(-50%,-50%);position: absolute;top:50%;left:50%;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp: 3;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;word-break: break-all;">{{randomlist[1].title}}</view>
							</view>
						</view>
					</view>
					<view slot="thirdCard" style="width:100%;height:100%;">
						<view v-if="randomlist[2]" style="height: 100%;width: 100%;">
							<text style='padding:1px 5px 3px 4px;color:#fff;font-size:9px;border-bottom-right-radius: 10px;background:#ff0000;position:absolute;z-index:2;left:0px;top:0px;'>难度：{{getLevelStar(randomlist[2].level)}}</text>
							<view style="width: 100%;height: 100%;position: absolute;top:0px;left:0px;">
								<view style="width:100%;padding:0px 20px;font-size: 20px;word-wrap: break-word;transform: translate(-50%,-50%);position: absolute;top:50%;left:50%;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp: 3;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;word-break: break-all;">{{randomlist[2].title}}</view>
							</view>
						</view>
					</view>
				</ezflycard>
			</view>
			<view style="width: 100%;text-align: center;margin-bottom: 20px;margin-top: 20px;">
				<button @click="btnGetRandom" type="primary" size="mini" style="background-color: #f7d05f;color: #000;padding: 0px 10px;border-radius: 6px;border-bottom: 2px solid #333;;"><text class="iconfont icon-touzi"></text><text style="font-size: 14px;margin-left: 6px;">换三道题</text></button>
			</view>
			<view style="width: 100%;display: flex;justify-content: space-between;flex-wrap: wrap;padding: 0px 10px;">
				<view v-for="(item,index) in taglist" @click='btnGoList(item)' :key='index' style="width: 30vw;height: 24vw;text-align: center;">
					<view style="display: flex;flex-direction: column;position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);">
						<view :class="item.icon" style="font-size: 40px;color: #f7d05f;"></view>
						<view style="font-size: 16px;white-space: nowrap;margin-top: 4px;color: #f7d05f;">{{item.tagName}}</view>
					</view>
				</view>
			</view>
		</view>
		<view slot="tabSection" style="padding-bottom: 10px;">
			<view style="width: 100%;padding:5px 10px;display: flex;justify-content: center;">
				<view style="padding:0px 20px;height: 40px;border-radius: 25px;background-color: #333333;color:#fff;overflow: hidden;text-align: center;line-height: 40px;">
					<button class="clear_button" open-type="share" style="width: 100%;height: 100%;color:#fff;">分享给好友</button>
				</view>
			</view>
		</view>
	</ezpage>
</template>

<script>
	import ezpage from "../../components/ezpage.vue"
	
	import ezflycard from "../../components/ezflycard.vue"
	import eznavigationbar from "../../components/eznaviagtionbar.vue"
	
	export default {
		components:{
			ezpage,
			ezflycard,
			eznavigationbar
		},
		data() {
			return {
				taglist:[],
				randomlist:[],
				cardWidth:100,
				bgColor:"#3e607e"
			}
		},
		onLoad() {
			this.cardWidth = uni.getSystemInfoSync().screenWidth-100;
			this.requestTagList();
			this.requestRandomlist();
		},
		onShareAppMessage() {
			return {
				title: '前端面试题',
				path: '/pages/femap/index'
			}
		},
		methods: {
			getCategoryCN(category){
				return {'Choice':'选择题','QA':'问答题'}[category];
			},
			getLevelStar(level){
				
				var str='';
				var roundLevel = Math.floor(level);
				for(var i =0;i<roundLevel;i++){
					str+='★';
				}
				
				if(level-roundLevel>0)str+='☆';
				return str;
			},
			onRandomlistItemTap(e){
				var item = this.randomlist[0];
				
				uni.navigateTo({
					url:'/pages/femap/detail?id='+item._id
				});
			},
			onCardThrowDone(e){
				var prev=this.randomlist.slice(0,1);
				this.randomlist.shift();
				this.randomlist.push(prev[0]);
			},
			btnGoDetail(e){
				var index= e.currentTarget.dataset.index;
				var item = this.list[index];
				
				uni.navigateTo({
					url:'/pages/femap/detail?id='+item._id
				});
			},
			btnGetRandom(){
				this.requestRandomlist();
			},
			btnGoList(item){
				uni.navigateTo({
					url:'/pages/femap/list?tagid='+item.id
				});
			},
			requestRandomlist(){
				uniCloud.callFunction({
					name:"femap",
					data:{
						action:"random",
					},
					success:(res)=>{
						this.randomlist = res.result.data;
					}
				})
			},
			requestTagList(last){
				uniCloud.callFunction({
					name:"femap",
					data:{
						action:"tags"
					},
					success:(res)=>{
						this.taglist=res.result.data;
					}
				})
			}
		}
	}
</script>

<style>

</style>
