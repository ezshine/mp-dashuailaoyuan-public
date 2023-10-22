<template>
	<view style="height: 100%;">
		<l-painter
			ref="painter" 
			custom-style="position: fixed; left: 200%"
		/>
		<ezpage :title="title" statusBackground="#f9e24c" backgroundColor="#f9e24c">
			<view slot="navigationSection">
				<eznavigationbar style="z-index: 999999999;" backgroundColor="#f9e24c" :hasBottomLine="false">
					<text slot='title'>{{title}}</text>
				</eznavigationbar>
			</view>
			<view slot="contentSection" style="background-color: #f9e24c;height: 100%;width:100%;position: relative;">
				<view :style="{height:(sysInfo.screenHeight-260)+'px'}"
					style="margin-top: 0px;z-index:99999999;width: 100%;position: relative;overflow-y: visible;">
					<ezflycard @onThrowDone='onCardThrowDone' :cardWidth="cardWidth" :cardHeight="cardHeight"
						:throwTriggerDistance="100" dragDirection="all" :hasShadow="true" :hasBorder="false">
						<view slot="firstCard" style="width:100%;height:100%;">
							<view v-if="randomlist[0]" style="height: 100%;width: 100%;">
								<view
									:style="{top:randomlist[0].unlockStatus>0?'20%':'50%',transition:randomlist[0].unlockStatus>0?'top .6s ease-out':'none'}"
									style="position: absolute;transform: translate(-50%,-50%);left:50%;width:100%;">
									<view
										style="font-size: 34px;text-align: center;font-weight: bold;font-family:Arial, Helvetica, sans-serif">
										{{randomlist[0].word}}</view>
									<view
										style="display: flex;justify-content: center;vertical-align: middle;color:royalblue;margin-top: 10px;">
										<text @click="btnSayWord(2)" style="font-size: 12px;"><text
												class="iconfont icon-sound"
												style="margin-right: 2px;font-size: 12px;"></text>美式发音</text>
										<text
											style="color:#f2f2f2;margin-left: 10px;margin-right: 10px;margin-top: -2px;">丨</text>
										<text @click="btnSayWord(1)" style="font-size: 12px;"><text
												class="iconfont icon-sound"
												style="margin-right: 2px;font-size: 12px;"></text>英式发音</text>
									</view>
								</view>
								<view
									:style="{height:randomlist[0].unlockStatus>0?'65%':'0px',opacity:randomlist[0].unlockStatus>0?'1':'0',transition:randomlist[0].unlockStatus>0?'all .6s linear':'none'}"
									style="text-align: left;font-size: 12px;color: #333;width:100%;position: absolute;top:40%;padding: 0px 20px;overflow-y: scroll;">
									<mp-html :style="{color:['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0)','#333'][randomlist[0].unlockStatus]}" :content="curWordDetail"></mp-html>
								</view>
								<view v-if="randomlist[0].unlockStatus>1" style="font-size: 12px;color: royalblue;text-align: center;position: absolute;bottom:0px;width:100%;padding:10px 0px;">
									<text @click="createPoster">分享单词卡</text>
								</view>
							</view>
						</view>
						<view slot="secondCard" style="width:100%;height:100%;">
							<view v-if="randomlist[1]" style="height: 100%;width: 100%;">
								<view
									style="position: absolute;transform: translate(-50%,-50%);left:50%;top:50%;width:100%;">
									<view
										style="font-size: 34px;text-align: center;font-weight: bold;font-family:Arial, Helvetica, sans-serif">
										{{randomlist[1].word}}</view>
									<view
										style="display: flex;justify-content: center;vertical-align: middle;color:royalblue;margin-top: 10px;">
										<text style="font-size: 12px;"><text class="iconfont icon-sound"
												style="margin-right: 2px;font-size: 12px;"></text>美式发音</text>
										<text
											style="color:#f2f2f2;margin-left: 10px;margin-right: 10px;margin-top: -2px;">丨</text>
										<text style="font-size: 12px;"><text class="iconfont icon-sound"
												style="margin-right: 2px;font-size: 12px;"></text>英式发音</text>
									</view>
								</view>
							</view>
						</view>
						<view slot="thirdCard" style="width:100%;height:100%;">
							<view v-if="randomlist[2]" style="height: 100%;width: 100%;">

							</view>
						</view>
					</ezflycard>
				</view>
				<view
					style="width: 100%;text-align: center;position: absolute;transform: translate(-50%,0%);bottom:40px;left:50%;">
					<view style="padding: 20px;font-size: 12px;color:#666;">{{recognizeResultText}}</view>
					<view :style="{opacity:randomlist[0].unlockStatus==2?'.6':'1',pointerEvents:randomlist[0].unlockStatus==2?'none':''}"
						style="transition: opacity .4s linear;">
						<button @click="btnStartVoice" type="primary" size="mini"
							style="background-color: limegreen;color: #333;width:260px;padding: 0px 10px;border-radius: 20px;border-bottom: 2px solid #333;"><text
								class="iconfont icon-audio-fill"></text><text
								style="font-size: 14px;margin-left: 6px;">{{voiceButtonText}}</text></button>
						<view @click="btnUnlockWord"
							style="margin-top: 10px;text-decoration: underline;font-size: 14px;">查看单词详解</view>
					</view>
				</view>
			</view>
			<!-- <view slot="tabSection">
				
			</view> -->
		</ezpage>
	</view>
</template>

<script>
	import ezpage from "../../components/ezpage.vue"
	import cloudApi from "../../common/cloudApi.js"
	import utils from "../../common/utils.js"

	import eznavigationbar from "../../components/eznaviagtionbar.vue"
	import ezflycard from "../../components/ezflycard.vue"
	
	import mpHtml from "../../components/mp-html/mp-html.vue"

	let wssTask,socketUrl;
	const recordManager = uni.getRecorderManager();
	export default {
		components: {
			ezflycard,
			eznavigationbar,
			ezpage,
			mpHtml
		},
		data() {
			return {
				title: "ez背单词",
				randomlist: [],
				cardWidth: 0,
				cardHeight: 0,
				sysInfo: {
					screenHeight: 0
				},
				isVoiceRecording: false,
				curWordDetail:"",
				voiceButtonText: "请尽可能多的说出单词的含义",
				recognizeResultText: '',
				recognizeResultArr: []
			}
		},
		onShareAppMessage() {
			return {
				title: this.title + "| 没见过这种背单词的方式，试试看吧~",
				path: utils.getShareUrl('/pages/home/home?url=' + encodeURIComponent('pages/tools/bdc'))
			}
		},
		onLoad(options) {

			this.sysInfo = uni.getSystemInfoSync();

			this.cardWidth = this.sysInfo.screenWidth - 100;
			this.cardHeight = this.cardWidth * 1.3;

			this.requestRandomWords();

			cloudApi.callFunction({
				name: "tools",
				data: {
					action: "getxfiaturl"
				},
				success: (res) => {
					socketUrl = res.result.data;
				}
			})
		},
		onUnload() {
			if (wssTask) {
				wssTask.close({});
				wssTask = null;
			}
		},
		watch:{
			recognizeResultText(nv,ov){
				if(nv=='')return;
				
				nv = nv.replace(/[\s\uFEFF\u3000\.\uff0c,\uff01!\uff1f?\uff1b;\uff1a:\uff0d-\uff0f()（）&#8203;``【oaicite:0】``&#8203;{}\[\]'"‘’“”`~·—…《》<>〈〉〔〕〖〗〘〙〚〛〞〟＂＇〃、。，．：；？！—]/g, '');
				
				let wordDetail = this.getWordDetail();
				let arr = this.findCommonSubstrings(wordDetail,nv);
				
				console.log(wordDetail,nv)
				console.log(arr)
				
				if(arr.length>0){
					this.randomlist[0].unlockStatus = 1;
					
					for(let i = 0;i<arr.length;i++){
						let fWord = arr[i];
						
						let regExp = new RegExp(fWord,"g");
						wordDetail = wordDetail.replace(regExp,"<text style='color:rgba(255,0,0,1)'>"+fWord+"</text>")
					}
					
					this.curWordDetail= wordDetail;
				}
			}
		},
		methods: {
			createPoster:function(){
				uni.showLoading({title:"正在生成",mask:true});
				
				var posterData = {
					css: {
						// 根节点若无尺寸，自动获取父级节点
						width: '460px',
						height:'420px',
						background:"#f2f2f2",
						padding:"30px"
					},
					views: [
						{
							css: {
								width: '400px',
								height:'360px',
								boxSizing: "border-box",
								borderRadius:"20px",
								background:"#fff",
								boxShadow: "0 10px 40px rgba(0,0,0,.15)"
							},
							type: "view",
							views:[
								{
									css: {
										top:"65px",
										width:"360px",
										left:'40px',
										fontSize:'50px',
										fontWeight:'bold',
										color:"#333333",
										position:"absolute",
										textAlign: 'left'
									},
									text:this.randomlist[0].word,
									type: "text"
								},
								{
									css: {
										top:"25px",
										width:"360px",
										left:'40px',
										fontSize:'20px',
										color:"#999999",
										position:"absolute",
										textAlign: 'left'
									},
									text:'你知道这个单词是什么意思吗？',
									type: "text"
								},
								{
									css: {
										top:"255px",
										width:"300px",
										left:'40px',
										fontSize:'20px',
										color:"#cccccc",
										position:"absolute",
										textAlign: 'left'
									},
									text:"长按或扫码",
									type: "text"
								},
								{
									css: {
										top:"280px",
										width:"300px",
										left:'40px',
										fontSize:'20px',
										color:"#cccccc",
										position:"absolute",
										textAlign: 'left'
									},
									text:"开始背单词",
									type: "text"
								}
							]
						}
					]
				}
				
				cloudApi.callFunction({
					noloading:true,
					name:"login",
					data:{
						action:'getpostercode',
						scene:utils.getShareUrl("url=pages/tools/bdc")
					},
					success:(res)=>{
						console.log(res);
						
						const mpcodeName = Date.now();
						uni.getFileSystemManager().writeFileSync(
							`${wx.env.USER_DATA_PATH}/${mpcodeName}.jpg`,
							uni.arrayBufferToBase64(res.result.data.wxacode.data),
							"base64"
						);
						
						posterData.views[0].views.push({
							css: {
								width: '100px',
								height:'100px',
								objectFit:"cover",
								left:(400-140)+"px",
								top:"230px",
								position:"absolute"
							},
							src:`${wx.env.USER_DATA_PATH}/${mpcodeName}.jpg`,
							type: "image"
						})
						
						this.$refs.painter.render(posterData);
						this.$refs.painter.canvasToTempFilePathSync({
						  fileType: "jpg",
						  pathType: 'url',
						  quality: 1,
						  success: (res) => {
								uni.hideLoading();
								uni.previewImage({
									current:res.tempFilePath,
									urls:[res.tempFilePath]
								});
						  },
						});
					}
				});
			},
			stopRecord() {
				if (this.isVoiceRecording) recordManager.stop();
			},
			startRecord() {
				console.log(socketUrl);
				wssTask = uni.connectSocket({
					url: socketUrl,
					complete: () => {}
				})

				let commonParams = {
					common: {
						app_id: '10159211'
					},
					business: {
						language: "zh_cn",
						domain: "iat",
						accent: "mandarin",
						dwa: "wpgs",
						vad_eos: 2000
					}
				}
				wssTask.onOpen((res) => {
					console.log("socket open: ", res);

					console.log("发送第一帧的数据");
					var params = JSON.parse(JSON.stringify(commonParams));
					params.data = {
						status: 0
					}
					wssTask.send({
						data: JSON.stringify(params)
					});
				});
				wssTask.onMessage((res) => {
					this.renderResult(res.data);
				});
				wssTask.onError((err) => {
					// wssTask = null;
					console.log("socket err: ", err);
					this.stopRecord();
				});
				wssTask.onClose(() => {
					// wssTask = null;
					console.log("socket close");
					this.stopRecord();
				});

				recordManager.onStart(() => {
					console.log("recorder start");

					this.recognizeResultText = "";
					this.recognizeResultArr = [];
					this.isVoiceRecording = true;
				});
				recordManager.onPause(() => {
					console.log("recorder pause");
				});
				recordManager.onStop((res) => {
					// tempFilePath	String	录音文件的临时路径
					console.log("recorder stop", res);
					console.log(res.tempFilePath);

					this.isVoiceRecording = false;
					this.voiceButtonText = "请尽可能多的说出单词的含义";
					
					if(wssTask){
						wssTask.close({});
						wssTask = null;
					}
				});
				recordManager.onError((err) => {
					// errMsg	String	错误信息
					console.log("recorder err", err);
				});
				recordManager.onFrameRecorded((res) => {
					// frameBuffer	ArrayBuffer	录音分片结果数据
					// isLastFrame	Boolean	当前帧是否正常录音结束前的最后一帧
					const {
						isLastFrame,
						frameBuffer
					} = res;
					// console.log(res);
					if (wssTask.readyState === wssTask.OPEN) {
						var params = JSON.parse(JSON.stringify(commonParams));

						params.data = {
							status: isLastFrame ? 2 : 1,
							format: "audio/L16;rate=16000",
							encoding: "raw",
							audio: uni.arrayBufferToBase64(frameBuffer)
						}
						wssTask.send({
							data: JSON.stringify(params)
						});
					}
					if (isLastFrame) {

					}
				});
				this.isVoiceRecording = true;
				this.voiceButtonText = "等待自动结束或点击结束";
				recordManager.start({
					duration: 60000, // 录音的时长，单位 ms，最大值 600000（10 分钟）
					sampleRate: 16000, // 采样率（pc不支持）
					numberOfChannels: 1, // 录音通道数
					encodeBitRate: 48000, // 编码码率(默认就是48000)
					frameSize: 16, // 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3、pcm 格式。
					format: 'PCM', // 音频格式，默认是 aac
				});
			},
			findCommonSubstrings(str1, str2) {
			    const commonSubstrings = [];
			    str1 = str1.toLowerCase();
			    str2 = str2.toLowerCase();
			    const len1 = str1.length;
			    const len2 = str2.length;
			
			    for (let i = 0; i < len1; i++) {
			        for (let j = 0; j < len2; j++) {
			            let p1 = i;
			            let p2 = j;
			            let currentSubstring = '';
			
			            while (p1 < len1 && p2 < len2 && str1[p1] === str2[p2]) {
			                currentSubstring += str1[p1];
			                p1++;
			                p2++;
			                if ((!str1[p1] || !str2[p2]) || (str1[p1] !== str2[p2])) {
			                    if (!commonSubstrings.some(sub => sub.includes(currentSubstring))) {
			                        commonSubstrings.push(currentSubstring);
			                    }
			                }
			            }
			        }
			    }
			
			    return commonSubstrings;
			},
			renderResult(resultData) {
				// 识别结束
				let res = JSON.parse(resultData)
				if (res.code != 0) {
					console.log(`error code ${res.code}, reason ${res.message}`)
					return
				}

				let str = ""
				if (res.data.status == 2) {
					// res.data.status ==2 说明数据全部返回完毕，可以关闭连接，释放资源
					// 最终识别结果
					str += ""
				} else {
					// 中间识别结果
					str += ""
				}
				this.recognizeResultArr[res.data.result.sn] = res.data.result
				if (res.data.result.pgs == 'rpl') {
					res.data.result.rg.forEach(i => {
						this.recognizeResultArr[i] = null
					})
					//【动态修正】
					str += ""
				}
				str += ""
				this.recognizeResultArr.forEach(i => {
					if (i != null) {
						i.ws.forEach(j => {
							j.cw.forEach(k => {
								str += k.w
							})
						})
					}
				})
				this.recognizeResultText = str;
			},
			onCardThrowDone(e) {
				var prev = this.randomlist.slice(0, 1);
				this.randomlist.shift();

				if (this.randomlist.length < 3) this.requestRandomWords();
			},
			requestRandomWords() {
				uniCloud.callFunction({
					name: "tools",
					data: {
						action: "engwords"
					},
					success: (res) => {
						this.randomlist = this.randomlist.concat(res.result.data);
					}
				})
			},
			getWordDetail() {
				let str = "";
				let item = this.randomlist[0];

				str = item.translation.join('').replace(/\[[^\]]*\]/g, "");

				str += "<br><br>例句:<br>";

				let sentence = item.sampleSentences[0];
				if (sentence) {
					str += sentence.en + "<br>";
					str += sentence.cn + "";
				}

				return str;
			},
			btnUnlockWord() {
				var word = this.randomlist[0].word;
				
				this.stopRecord();

				this.recognizeResultText = "";
				this.randomlist[0].unlockStatus = 2;
				this.curWordDetail = this.getWordDetail();

				this.$forceUpdate();
			},
			btnStartVoice() {
				if (this.isVoiceRecording) {

					this.stopRecord();
				} else {

					this.startRecord();
				}
			},
			btnSayWord(type) {
				var word = this.randomlist[0].word;
				var snd = uni.createInnerAudioContext({
					useWebAudioImplement: true
				});
				snd.src = 'https://dict.youdao.com/dictvoice?audio=' + word + '&type=' + type;
				snd.play();
			}
		}
	}
</script>

<style>

</style>