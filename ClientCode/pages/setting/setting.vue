<template>
	<view class="content">
		<!-- 顶部导航栏 -->
		<u-navbar :is-back="false" height="50" title="">
			<view class="slot-wrap">
				<view class="nav_left">
					<u-icon @click="backClick()" name="arrow-leftward" color="#000000" size="50"></u-icon>
					<text class="nav_title">设置</text>
				</view>
				<view class="nav_right"></view>
			</view>
		</u-navbar>
		
		<u-button type="error" :ripple="true" @click="signOut()">退出登录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			backClick(){
				uni.navigateBack({
					delta:1
				});
			},
			signOut(){
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style>
	.content{
		padding: 30rpx;
	}
	.slot-wrap{
		padding: 0 40rpx;
	}
	.nav_title{
		margin-left: 30rpx;
		font-size: 40rpx;
	}
</style>
