<template>
	<view style="height: 100%;">
		<ezpage :title="title" backgroundColor="#f2f2f2">
			<!-- <view slot="navigationSection">
				
			</view> -->
			<view slot="contentSection" style="padding-bottom: 40px;background-color: #f2f2f2;">
				<view v-for="item,index in list" :key='index' @click="btnGoDetail" :data-index='index' style="width: 100%;background: #fff;margin-bottom: 10px;">
					<view style="background-color: #A1CCFD;height:24px;line-height: 24px;padding:0px 10px;font-size: 12px;">
						<text>
							难度：{{getLevelStar(item.level)}}
						</text>
						<text style="float: right;color: #333333;">
							{{getCategoryCN(item.category)}}
						</text>
					</view>
					<view style="padding:20px 10px;word-wrap: break-word;">
						{{item.title}}
					</view>
				</view>
			</view>
		</ezpage>
	</view>
</template>

<script>
	import ezpage from "../../components/ezpage.vue"
	
	export default {
		components:{
			ezpage
		},
		data() {
			return {
				tagid:null,
				title:"",
				list:[]
			}
		},
		onShareAppMessage() {
			return {
				title: this.title+' | 前端面试题',
				path: 'pages/femap/list?tagid='+this.tagid
			}
		},
		onReachBottom() {
			if(this.list.length>0)this.requestList(this.list[this.list.length-1]._id);
		},
		onLoad(options){
			this.tagid  =  options.tagid;
			uniCloud.callFunction({
				name:"femap",
				data:{
					action:"taginfo",
					tagid:this.tagid
				},
				success:(res)=>{
					this.title=res.result.data.tagName
				}
			})
			this.requestList();
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
			btnGoDetail(e){
				var index= e.currentTarget.dataset.index;
				var item = this.list[index];
				
				uni.navigateTo({
					url:'/pages/femap/detail?id='+item._id
				});
			},
			requestList(last){
				uniCloud.callFunction({
					name:"femap",
					data:{
						action:"list",
						tagid:this.tagid,
						last:last
					},
					success:(res)=>{
						this.list = this.list.concat(res.result.data);
					}
				})
			}
		}
	}
</script>

<style>

</style>
