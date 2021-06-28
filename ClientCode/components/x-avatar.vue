<template>
	<view>
		<view class="avatar" :style="avatarStyle">
			<u-image :src="imgsrc" width="100%" :height="uImageHeight"></u-image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"x-avatar",
		props:{
			size:{
				type:String,
				default:'50rpx'
			},
			imgsrc:{
				type:String,
				default:'/static/avatar/avatar.jpg'
			}
		},
		data() {
			return {
				// imgsrc:'/static/avatar/avatar.jpg',
				// size:'50rpx',
				avatarStyle:{
					width: this.size,
					height: this.size
				},
				uImageHeight: this.size
			}
		}
	}
</script>

<style>
	.avatar{
		width: 50rpx;
		height: 50rpx;
		background-color: #dedede;
		border-radius: 50%;
		overflow: hidden;
	}
</style>
