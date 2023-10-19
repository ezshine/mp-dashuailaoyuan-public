<template>
	<view style="height: 100%;">
		<ezpage title="前端面试题">
			<!-- <view slot="navigationSection">
				
			</view> -->
			<view slot="contentSection" style="padding-bottom: 40px;">
				<view v-if="detail" style="padding: 20px;">
					<view style="font-size: 18px;margin-bottom: 20px;word-break: break-all;font-weight: bold;">
						{{detail.title}}
					</view>
					<view v-if="detail.desc" style="font-size: 16px;color:#333;margin-bottom: 10px;">
						<mp-html :content="detail.desc" :markdown="true" />
					</view>
					<view v-if="!showExplanation" @click="showExplanation=true" style="font-size: 14px;margin-bottom: 10px;background: #f2f2f2;border-radius: 4px;height:100px;line-height: 100px;text-align: center;">
						查看解答
					</view>
					<view v-if="detail.explanation&&showExplanation" style="font-size: 14px;margin-bottom: 10px;padding:10px;background: #f2f2f2;border-radius: 4px;">
						<mp-html :content="detail.explanation" :markdown="true" />
					</view>
				</view>
			</view>
			<view slot="tabSection" style="padding-bottom: 10px;">
				<view style="width: 100%;padding:5px 10px;display: flex;justify-content: center;">
					<view style="padding:0px 20px;height: 40px;border-radius: 25px;background-color: #333333;color:#fff;overflow: hidden;text-align: center;line-height: 40px;">
						<button class="clear_button" open-type="share" style="width: 100%;height: 100%;color:#fff;">分享这道题</button>
					</view>
				</view>
			</view>
		</ezpage>
	</view>
</template>

<script>
	import ezpage from "../../components/ezpage.vue"
	import mpHtml from "../../components/mp-html/mp-html.vue"
	
	export default {
		components:{
			ezpage,
			mpHtml
		},
		data() {
			return {
				detail:null,
				showExplanation:false
			}
		},
		onShareAppMessage() {
			return {
				title: this.detail.title+' | 前端面试题',
				path: '/pages/femap/detail?id='+this.detail._id
			}
		},
		onLoad(options){
			var id  =  options.id;
			uniCloud.callFunction({
				name:"femap",
				data:{
					action:"detail",
					id:id
				},
				success:(res)=>{
					console.log(res);
					this.detail=res.result.data;
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
