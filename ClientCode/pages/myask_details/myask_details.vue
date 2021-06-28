<template>
	<view class="content">
		<!-- 顶部导航栏 -->
		<u-navbar :is-back="false" height="50" title="">
			<view class="slot-wrap">
				<view class="nav_left">
					<u-icon @click="backClick()" name="arrow-leftward" color="#000000" size="50"></u-icon>
				</view>
				<view class="nav_right"></view>
			</view>
		</u-navbar>
		
		<view class="summary">
			<h2 class="summary_title">{{cardDetails.title}}</h2>
			<view class="summary_description">{{cardDetails.description}}</view>
			<view class="summary_status">{{cardDetails.status.answerCnt}} 回答 · {{cardDetails.status.attentionCnt}} 关注</view>
		</view>
		<view class="summary_operate">
			<view class="op_invite">
				<u-icon name="man-add-fill" size="30"></u-icon>
				<text>邀请回答</text>
			</view>
			<view class="op_write">
				<u-icon name="edit-pen-fill" size="30"></u-icon>
				<text>写回答</text>
			</view>
			<view class="op_attention">
				<u-icon name="plus" size="30"></u-icon>
				<text>关注问题</text>
			</view>
		</view>
		
		<!-- <view class="answer">
			<view class="topbar">
				<view class="topbar_left">回答</view>
			</view>
			<u-line color="#f5f5f5"></u-line>
			<view class="answerList">
				<view class="answerItem" v-for="(item, index) in answerList">
					<view class="answerUser">
						<view class="avatar">
							<u-image :src="item.user.avatar" width="100%" height="40rpx"></u-image>
						</view>
						<view class="username">{{item.user.name}}</view>
					</view>
					<view class="answerContent">
						<view>{{item.answerContent}}</view>
					</view>
					<view class="answerTime">
						<view>{{item.time}}</view>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardDetails:{
					title: '',
					description: '',
					status: '',
					user: ''
				},
				answerList:[
					{
						user:{
							avatar:'/static/avatar/avatar.jpg',
							name:'Joel Wang',
						},
						answerContent:"很反感智商税这种说法，科普必须本着悲天悯人人文主义情怀，而不能带着任何一丝秀智商的心态。为一份希望，一份情怀花钱本质上和看电影没区别，和智商不搭边儿。靠秀智商来刷存在感，我当然不能说别人，只说自己经历过这个阶段，现",
						time: "06-18"
					},
					{
						user:{
							avatar:'/static/avatar/avatar.jpg',
							name:'Joel Wang',
						},
						answerContent:"很反感智商税这种说法，科普必须本着悲天悯人人文主义情怀，而不能带着任何一丝秀智商的心态。为一份希望，一份情怀花钱本质上和看电影没区别，和智商不搭边儿。靠秀智商来刷存在感，我当然不能说别人，只说自己经历过这个阶段，现",
						time: "06-18"
					}
				]
			}
		},
		onLoad(option){
			uni.request({
				url: getApp().globalData.baseURL + 'cardListTBA',
				success: (res) => {
					this.cardDetails = res.data.cardListTBA[option.index]; //option.index
				}
			});
		},
		methods: {
			backClick(){
				uni.navigateBack({
					delta:1
				});
			},
		}
	}
</script>

<style>
	page {
		background-color: #f6f6f6;
	}
	.content{
		
	}
	.slot-wrap{
		padding: 0 40rpx;
	}
	/* ---------- 页面内容 ----------*/
	.summary{
		
		padding: 30rpx;
		background-color: #ffffff;
		/* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); */
	}
	.summary_title{
		font-size: 40rpx;
		padding: 20rpx 0;
	}
	.summary_description{
		padding: 20rpx 0;
		font-size: 30rpx;
	}
	.summary_status{
		padding: 20rpx 0;
		color: #999999;
		font-weight: bold;
	}
	.summary_operate{
		width: 100%;
		height: 110rpx;
		margin-bottom: 20rpx;
		background-color: #ffffff;
		font-weight: bold;
		/* flex */
		display: flex;
		flex-flow: row nowrap;
	}
	.summary_operate >view{
		width: 33.33%;
		height: 100%;
		border: #f5f5f5 solid 1px;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}
	.summary_operate >view>text{
		margin-top: 5rpx;
	}
	.op_attention{
		color: #0053F1;
	}
	/* ---------- 回答内容 ----------*/
	.answer{
		/* background-color: #ffffff; */
	}
	.topbar{
		background-color: #ffffff;
	}
	.topbar_left{
		padding: 30rpx;
	}
	.answerItem{
		padding: 30rpx;
		margin-bottom: 10rpx;
		background-color: #ffffff;
	}
	.answerUser{
		display: flex;
		flex-flow: row;
	}
	.answerUser .avatar{
		width: 40rpx;
		height: 40rpx;
		margin-right: 15rpx;
		background-color: #C0C0C0;
		border-radius: 50%;
		overflow: hidden;
	}
	.answerUser .username{
		color: #999999;
	}
	.answerContent{
		margin: 20rpx 0;
		display: -webkit-box; /* 对象作为伸缩盒子模型显示 */
		overflow: hidden;
		word-break: break-all; /* break-all(允许在单词内换行。) */
		text-overflow: ellipsis; /* 超出部分省略号 */
		-webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
		-webkit-line-clamp: 3; /* 显示的行数 */
	}
	.answerTime{
		color: #999999;
	}
</style>
