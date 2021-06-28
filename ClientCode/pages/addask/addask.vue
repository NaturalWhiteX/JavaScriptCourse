<template>
	<view>
		<view class="content">
			<view class="navbar">
				<u-navbar height="50">
					<view class="slot-wrap">
						<view class="nav_left">
							
						</view>
						<view class="nav_right">
							<view @tap="submitQuestion()" class="submitOperate">发布问题</view>
						</view>
					</view>
				</u-navbar>
			</view>
			
			<view class="ask_title">
				<u-input  v-model="newCardTBA.title" placeholder="输入问题并以问号结尾" :customStyle="titleStyle"></u-input>
			</view>
			<view class="tips">
				<view class="tips_title">
					<u-icon name="question-circle-fill" size="40"></u-icon>
					<text>让你的第一个提问获得更多解答</text>
				</view>
				<view class="tips_content">
					<ul>
						<li>保持文字简练，表述清晰问题的关键点</li>
						<li>添加合适的话题，让问题更好地流通</li>
						<li>确保问题没有被提问过</li>
					</ul>
				</view>
			</view>
			<view class="ask_supplement">
				<u-input v-model="newCardTBA.description" placeholder="对问题补充说明,可以更快获得解答(选填)" :customStyle="supplementStyle" type="textarea" :auto-height="true"></u-input>
			</view>
			<!-- <u-button @click="submitQuestion()" type="primary" ripple="ripple">添加</u-button> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleStyle:{
					fontSize: '40rpx',
					fontWeight: 'bold',
				},
				supplementStyle: {
					fontSize: '40rpx',
				},
				cardListTBA:[],
				newCardTBA:{
					user:{
						avatar:"/static/avatar/avatar.jpg",
						name: getApp().globalData.LoginUser.userName,
					},
					title:"",
					description: "",
					status:{
						answerCnt:0,
						attentionCnt:0
					}
				},
				LoginUser: getApp().globalData.LoginUser,
			}
		},
		onLoad(){
			uni.request({
				url: getApp().globalData.baseURL + 'cardListTBA',
				success: (res) => {
					this.cardListTBA = res.data.cardListTBA;
				}
			});
		},
		methods: {
			submitQuestion(){
				
				uni.request({
					url: getApp().globalData.baseURL + 'addCardTBA',
					data: {
						data: this.newCardTBA
					},
					success: (res) => {
						this.cardListTBA = res.data.cardListTBA;
					}
				});
				uni.navigateTo({
					url: '../homepage/homepage'
				});
			},
		},
		computed:{
			
		}
	}
</script>

<style>
	.content{
		padding: 30rpx;
	}
	
	.slot-wrap{
		padding: 0 20px ;
		
		display: flex;
		justify-content: space-between;
		flex: 1;
	}
	.submitOperate{
		font-weight: bold;
		color: #2979ff;
	}
	.ask_title{
		margin-bottom: 30rpx;
	}
	.tips{
		height: 240rpx;
		padding: 20rpx;
		margin-bottom: 30rpx;
		
		background-color: #f5f6f8;
		border-radius: 30rpx;
		color: #8490a5;
	}
	.tips_title{
		font-size: 36rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
	}
	.tips_title text{
		margin-left: 15rpx;
	}
	.tips_content ul li{
		font-size: 30rpx;
	}
</style>
