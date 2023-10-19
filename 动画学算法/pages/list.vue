<template>
	<ezpage title="动画学算法">
		<!-- <view slot="navigationSection">
			
		</view> -->
		<view slot="contentSection" style="padding-bottom: 50px;">
			<view v-for="pitem,pindex in list" :key='pindex'>
				<view class="groupheader">{{pitem.name}}</view>
				<view class="groupedcells">
					<view class="cell" v-for="citem,cindex in pitem.children" :key="cindex" @click="btnCellTap(citem)">
						<view class="title">{{citem.name}}</view>
						<view class="description"></view>
						<view class="accessory"><text class="iconfont icon-right"></text></view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view slot="tabSection">
			
		</view> -->
	</ezpage>
</template>

<script>
	import ezpage from "../../components/ezpage.vue"
	import utils from "../../common/utils.js"
	
	export default {
		components:{
			ezpage
		},
		data() {
			return {
				list: [{
				  name: "排序",
				  children: [{
				    name: "冒泡排序",
				    page: "BubbleSort"
				  }, {
				    name: "插入排序",
				    page: "InsertionSort"
				  }, {
				    name: "选择排序",
				    page: "SelectionSort"
				  }, {
				    name: "快速排序",
				    page: "FastSort"
				  }, {
				    name: "归并排序",
				    page: "MergeSort"
				  }, {
				    name: "堆排序",
				    page: "HeapSort"
				  }, {
				    name: "希尔排序",
				    page: "ShellSort"
				  }]
				}, {
				  name: "查找",
				  children: [{
				    name: "线性查找",
				    page: "LinearSearch"
				  }, {
				    name: "二分查找",
				    page: "BinarySearch"
				  }, {
				    name: "插值查找",
				    page: "InsertionSearch"
				  }]
				}, 
				// {
				//   name: "线性表",
				  
				//   children: [{
				//     name: "数组",
				//     page: "Array"
				//   }, {
				//     name: "链表",
				//     page: "SingleLinkedList"
				//   }, {
				//     name: "栈",
				//     page: "Stack"
				//   }, {
				//     name: "队列",
				//     page: "Queue"
				//   }]
				// }, {
				//   name: "树",
				  
				//   children: [{
				//     name: "二叉树",
				//     page: "BinaryTree"
				//   }, {
				//     name: "完全二叉树",
				//     page: "FullBinaryTree"
				//   }, {
				//     name: "二叉搜索树",
				//     page: "BinarySearchTree"
				//   }, {
				//     name: "堆",
				//     page: "Heap"
				//   }]
				// }, {
				//   name: "图",
				  
				//   children: [{
				//     name: "图",
				//     page: "Graph"
				//   }, {
				//     name: "图的表示方法",
				//     page: "ExpressionOfGraph"
				//   }, {
				//     name: "图的深度优先遍历",
				//     page: "GraphDFS"
				//   }, {
				//     name: "图的广度优先遍历",
				//     page: "GraphBFS"
				//   }]
				// }, {
				//   name: "数据编码",
				  
				//   children: [{
				//     name: "游程编码",
				//     page: "RunLengthEncoding"
				//   }, {
				//     name: "霍夫曼编码",
				//     page: "HuffmanEncoding"
				//   }]
				// }, {
				//   name: "其它",
				  
				//   children: [{
				//     name: "哈希表",
				//     page: "Hash"
				//   }, {
				//     name: "汉诺塔问题",
				//     page: "HanoiTower"
				//   }, {
				//     name: "Kruskal最小生成树",
				//     page: "Kruskal"
				//   }, {
				//     name: "Dijkstra最短路径",
				//     page: "Dijkstra"
				//   }, {
				//     name: "最长升子序列",
				//     page: "LIS"
				//   }]
				// }
				],
			}
		},
		onShareAppMessage() {
			return {
				title: '随手学算法',
				path: utils.getShareUrl('/pages/home/home?url=pages/algo/list')
			}
		},
		methods: {
			btnCellTap(item){
				uni.navigateTo({
					url:"/algo/pages/"+item.page,
					fail: (err) => {
						console.log(err);
						uni.showToast({
							icon:'error',
							title:"还没准备好"
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
