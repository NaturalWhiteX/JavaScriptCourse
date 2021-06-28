<template>
	<view>
		<view class="content">
			<!-- 顶部导航栏 -->
			<view class="navbar">
				<u-navbar :is-back="false" height="50" title="" title-bold="title-bold" :border-bottom="false">
					<view class="slot-wrap">
						<view class="nav_left">
						</view>
						<view class="nav_center">
							<u-icon name="search" color="#999999" size="40"></u-icon>
							<u-input v-model="searchInput" class="search_input"></u-input>
						</view>
						<view class="nav_right">
							<view @tap="cancleClick()">取消</view>
							<!-- <u-button @click="cancleClick()" plain>取消</u-button> -->
						</view>

					</view>
				</u-navbar>
			</view>
			
			<view class="searchHistory">
				<view class="title">搜索历史</view>
				<view class="historyTag">
					<view v-for="(item,index) in tagList" class="tag">
						<u-tag :text="item.tagText" shape="circle" 
							:bg-color="tagStyle.backgroundColor" 
							:border-color="tagStyle.borderColor" 
							:color="tagStyle.fontColor"></u-tag>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchInput: '',
				cardListDSC: [],
				searchDemo: {},
				tempCard: {
					title: "你亲眼见过的厉害中医是什么样?",
					user: {
						avatar: "/static/avatar/avatar.jpg",
						name: "嗤氓氓之蚩蚩"
					},
					content: "93年，去兰州参加部里面的一个会。参会者有一个从珠州还是哪来的同志，时间过去20多年已记不清楚了。她带了她的老公和女儿，小姑娘十五六岁的样子。",
					status: {
						agreeCnt: 16,
						commentCnt: 31,
						time: "2021年6月13日"
					}
				},
				tagList:[
					{tagText:'中医'},
					{tagText:'中药'},
					{tagText:'中医历史'},
					{tagText:'黄帝内经'},
					{tagText:'中医学理论体系'},
					{tagText:'运气学说'},
					{tagText:'精气学说'},
					{tagText:'阴阳学说'},
					{tagText:'五行学说'},
					
				],
				tagStyle:{
					backgroundColor:'#f4f4f4',
					borderColor:'#f4f4f4',
					fontColor:'#000000'
				}
			}
		},
		onLoad() {
			uni.request({
				url: getApp().globalData.baseURL + 'cardListDSC',
				success: (res) => {
					this.cardListDSC = res.data.cardListDSC;
				}
			});
		},
		methods: {
			cancleClick() {
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style>
	.content{
		padding: 40rpx;
	}
	.slot-wrap {
		padding: 0 30rpx;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		flex: 1;
	}

	.nav_center {
		height: 30px;
		width: 85%;
		padding: 0 40rpx;
		border-radius: 30px;
		background-color: #f6f6f6;

		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}

	.search_input {
		margin-left: 30rpx;
	}

	.nav_right view {
		margin-left: 20rpx;
	}
	
	/*---------*/
	
	.searchHistory .title{
		font-size: 36rpx;
		font-weight: bold;
	}
	.historyTag{
		padding: 30rpx 0;
		/* flex */
		display: flex;
		flex-flow: row wrap;
	}
	.historyTag .tag{
		margin-bottom: 30rpx;
		margin-right: 20rpx;
	}
</style>
