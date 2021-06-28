<template>
	<view>
		<view class="content">
			<!-- 顶部导航栏 -->
			<u-navbar :is-back="false" height="50" title="" :border-bottom="false" :immersive="true" :background="navBackground">
				<view class="slot-wrap">
					<view class="nav_left">
						<u-icon @click="backClick()" name="arrow-leftward" color="#ffffff" size="50"></u-icon>
					</view>
					<view class="nav_right"></view>
				</view>
			</u-navbar>
			
			<!-- 代码分割线 A -->
			<view class="bgimg">
				<u-image src="/static/bg.jpg" width="100%" height="350rpx" mode="aspectFill"></u-image>
			</view>
			<view class="pageContent">
				<view class="avatar">
					<u-image :src="LoginUser.userAvatar" width="100%" height="200rpx"></u-image>
				</view>
				<view class="operate">
					<view class="button"><u-button type="primary" shape="circle" @click="editProfileCilck()">编辑资料</u-button></view>
				</view>
				<view class="userTitle flex_row">
					<view class="username">{{LoginUser.userName}}</view>
					<x-leveltag :level="LoginUser.userLevel"></x-leveltag>
				</view>
				<view class="userAttention flex_row">
					<view class="attMe attNumber">{{userAttention.attMe}}</view>
					<text class="attText">关注我的人</text>
					<view class="myAtt attNumber">{{userAttention.myAtt}}</view>
					<text class="attText">我关注的人</text>
				</view>
				<u-line></u-line>
				<!-- 代码分割线 B -->
				<view class="certification flex_row">
					<text>个人认证</text>
					<u-icon name="arrow-right" size="30"></u-icon>
				</view>
				<u-line></u-line>
				<view class="personalLabel">
					<text>完善我的形象标签，获取更多关注</text>
					<u-button type="primary" shape="circle" plain="" :ripple="true" :ripple-bg-color="rippleBgColor">+添加形象关键词</u-button>
				</view>
				<u-line></u-line>
				<!-- 代码分割线 C -->
				<u-tabs :list="tabsList" :is-scroll="false" :current="tabsCurrent" @change="tabsChange"></u-tabs>
				<view class="tabsContent flex_row">
					<text>暂无内容</text>
				</view>	
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				LoginUser: getApp().globalData.LoginUser,
				navBackground: {
					backgroundColor: 'rgba(0,0,0,0)',
				},
				userAttention:{
					attMe:0,
					myAtt:4
				},
				rippleBgColor:"rgba(0,0,0,0.05)",
				tabsList:[
					{name:'动态'},
					{name:'回答 0'},
					{name:'视频 0'},
					{name:'文章 0'},
					{name:'更多'},
				],
				tabsCurrent:0,
				
			}
		},
		methods: {
			backClick(){
				uni.navigateBack({
					delta:1
				});
			},
			editProfileCilck(){
				uni.navigateTo({
					url:'../edit_profile/edit_profile'
				});
			},
			tabsChange(index){
				this.tabsCurrent = index;
			}
		}
	}
</script>

<style>
	.flex_row{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
	.slot-wrap{
		padding: 0 40rpx;
	}
	/* ---------- 代码分割线 A ---------- */
	.bgimg{
		/* height: 300px; */
		background-color: #517247;
	}
	
	.pageContent{
		padding: 0 40rpx;
	}
	.avatar{
		width: 200rpx;
		height: 200rpx;
		border: #FFFFFF solid 2px;
		background-color: #C0C0C0;
		border-radius: 200rpx;
		position: absolute;
		top: 250rpx;
		overflow: hidden;
	}
	.operate{
		height: 120rpx;
		
		display: flex;
		flex-flow: row-reverse;
		align-items: center;
	}
	.userTitle{
		
	}
	.username{
		font-size: 54rpx;
		font-weight: bolder;
	}
	.userAttention{
		height: 100rpx;
	}
	.userAttention >view{
		margin-right: 10rpx;
	}
	.userAttention >text{
		margin-right: 50rpx;
	}
	.attNumber{
		font-size: 50rpx;
		color: #2979ff;
	}
	.attText{
		font-size: 30rpx;
	}
	/* ---------- 代码分割线 B ---------- */
	.certification{
		height: 100rpx;
		justify-content: space-between;
	}
	.certification >text{
		
	}
	.personalLabel{
		height: 200rpx;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
	}
	.personalLabel >text{
		margin-bottom: 20rpx;
	}
	/* ---------- 代码分割线 C ---------- */
	.tabsContent{
		height: 100rpx;
		color: #999999;
		/* flex */
		justify-content: center;
		align-items: center;
	}
</style>
