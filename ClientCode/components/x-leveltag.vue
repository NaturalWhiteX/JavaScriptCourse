<template>
	<view>
		<view class="levelTag">Lv{{level}}</view>
	</view>
</template>

<script>
	export default {
		name: "x-leveltag",
		props: {
			level: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.levelTag {
		margin: 0 15rpx;
		padding: 0 15rpx;
		background-color: #e6f2fe;
		color: #0681f5;
		font-weight: bold;
		font-size: 26rpx;
		border-radius: 10rpx;

		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
	}
</style>
