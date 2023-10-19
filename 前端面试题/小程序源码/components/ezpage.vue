<template>
	<view style="position: relative;height:100%;" :style="{backgroundColor:backgroundColor}">
		<view style="width: 100%;position: fixed;z-index:999998;top:0px;left: 0px;transition: background .4s;" :style="{height:statusBarHeight+'px',background:statusBackground}"></view>
		<view v-if="showNavigation" style="width:100%;position: fixed;top:0px;left: 0px;z-index:999997;" :style="{paddingTop:statusBarHeight+'px'}">
			<slot name="navigationSection">
				<eznavigationbar>
					<text slot='title'>{{title}}</text>
				</eznavigationbar>
			</slot>
		</view>
		<view style="width:100%;height: 100%;position: relative;" :style="{paddingTop:paddingTop+'px',paddingBottom:paddingBottom+'px'}">
			<slot name="contentSection"></slot>
		</view>
		<view style="width:100%;position: fixed;z-index: 998;bottom: 0;">
			<slot name="tabSection"></slot>
		</view>
	</view>
</template>

<script>
	import eznavigationbar from "./eznaviagtionbar.vue"
	
	var sysInfo;
	export default {
		components:{
			eznavigationbar
		},
		data() {
			return {
				paddingTop:0,
				paddingBottom:0,
				statusBarHeight:22
			};
		},
		props:{
			title:{
				type:String,
				default:""
			},
			showNavigation:{
				type:Boolean,
				default:true
			},
			statusBackground:{
				type:String,
				default:"#fff"
			},
			backgroundColor:{
				type:String,
				default:"#fff"
			},
			immersionNavigation:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			
		},
		methods:{
			autoPaddingTop:function(){
				if(this.immersionNavigation)return 0;
				if(this.showNavigation)return 44+sysInfo.statusBarHeight;
				return sysInfo.statusBarHeight;
			},
			autoPaddingBottom:function(){
				if(this.$slots.tabSection)return 50+(sysInfo.safeArea.top!=20?34:0);
				return 0;
			}
		},
		mounted() {
			sysInfo=uni.getSystemInfoSync();
			
			this.paddingTop=this.autoPaddingTop();
			this.paddingBottom=this.autoPaddingBottom();
			// this.contentHeight=(this.sysInfo.screenHeight-this.paddingTop-this.paddingBottom)+"px";
			this.statusBarHeight=sysInfo.statusBarHeight;
		}
	}
</script>

<style>
	
</style>
