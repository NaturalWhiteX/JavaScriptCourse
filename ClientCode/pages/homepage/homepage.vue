<template>
	<view>
		<view class="content">
			<!-- 顶部导航栏 -->
			<view class="navbar">
				<u-navbar :is-back="false" height="50" title="" title-bold="title-bold">
					<view class="slot-wrap">
						<view class="nav_left">
							<u-icon @click="menuShow = true" name="list" color="#000000" size="50"></u-icon>
						</view>
						<view class="nav_center" @tap="searchClick">
							<u-icon name="search" color="#999999" size="40"></u-icon>
							<text class="search_input">请输入内容</text>
						</view>
						<view class="nav_right">
							<u-icon name="question-circle" color="#ffffff" size="50"></u-icon>
						</view>

					</view>
				</u-navbar>
			</view>

			<!-- 侧边菜单 -->
			<u-popup v-model="menuShow" mode="left" width="75%">
				<view class="menu">
					<image src="/static/bg.jpg" class="menuImage" mode="aspectFill"></image>
					<view class="menu_upper">
						<x-avatar size="150rpx" :imgsrc="LoginUser.userAvatar"></x-avatar>
						<view class="menu_usertext">
							<view class="menu_username">{{LoginUser.userName}}</view>
							<view class="menu_email">google@gmail.com</view>
						</view>
					</view>
					<u-line />
					<view class="menuList">
						<view class="menuList_item homeItem">
							<u-icon name="home-fill" size="50"></u-icon>
							<view class="menuList_item_name">主页</view>
						</view>
						<view v-for="(item, index) in menuList" class="menuList_item" @tap="menuClick(index)">
							<u-icon :name="item.icon" size="50"></u-icon>
							<view class="menuList_item_name">{{item.name}}</view>
						</view>

					</view>
				</view>
			</u-popup>

			<!-- 主内容卡片列表 -->
			<u-tabs :list="tabsList" :is-scroll="false" :current="current" @change="tabsChange" duration="0.25"
				font-size="30"></u-tabs>
			<view class="tabsContent">
				<!-- 讨论板块 -->
				<view v-if="current == 0">
					<view v-for="(item, index) in cardListDSC" @click="cardClick(1, index)" >
						<!-- 自定义组件 -->
						<x-card-dsc :cardObj="item"></x-card-dsc>
					</view>
				</view>

				<!-- 待回答板块 -->
				<view v-if="current == 1">
					<view v-for="(item, index) in cardListTBA" @click="cardClick(2, index)">
						<!-- 自定义组件 -->
						<x-card-tba :cardObj="item"></x-card-tba>
					</view>
				</view>
			</view>


			<!-- fab悬浮按钮 -->
			<navigator url="../addask/addask" open-type="navigate">
				<uni-fab horizontal="right"></uni-fab>
			</navigator>
		</view>
		<!-- END content -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				LoginUser: getApp().globalData.LoginUser,
				menuShow: false,
				tabsList: [{
						name: '讨论'
					},
					{
						name: '待回答'
					}
				],
				current: 0,
				menuList: [{
						icon: 'account-fill',
						name: '个人中心'
					},
					{
						icon: 'setting-fill',
						name: '设置'
					},

				],
				cardListDSC: [], // END cardListDSC
				cardListTBA: [], // END cardListTBA
				
			} // END data
		},
		onLoad() {
			this.loadData();
		},
		onPullDownRefresh() {
			setTimeout(function() {
				// this.loadData();
				uni.request({
					url: getApp().globalData.baseURL + 'cardListDSC',
					success: (res) => {
						this.cardListDSC = res.data.cardListDSC;
					}
				});
				uni.request({
					url: getApp().globalData.baseURL + 'cardListTBA',
					success: (res) => {
						this.cardListTBA = res.data.cardListTBA;
					}
				});
				uni.stopPullDownRefresh();
			}, 500);
		},
		methods: {
			loadData(){
				uni.request({
					url: getApp().globalData.baseURL + 'cardListDSC',
					success: (res) => {
						this.cardListDSC = res.data.cardListDSC;
					}
				});
				uni.request({
					url: getApp().globalData.baseURL + 'cardListTBA',
					success: (res) => {
						this.cardListTBA = res.data.cardListTBA;
					}
				});
			},
			searchClick() {
				uni.navigateTo({
					url: '../search/search'
				});
			},
			tabsChange(index) {
				this.current = index;
			},
			cardClick(type, index) {
				switch (type) {
					case 1:
						uni.navigateTo({
							url: '../card_details/card_details'
						});
						break;
					case 2:
						if(index === 0){
							uni.navigateTo({
								url: '../ask_details/ask_details'
							});
						}else{
							uni.navigateTo({
								url: '../myask_details/myask_details?index=' + index
							});
						}
						
						break;
					default:
						break;
				}
			},
			menuClick(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '../personalcenter/personalcenter'
						});
						break;
					case 1:
						uni.navigateTo({
							url: '../setting/setting'
						});
						break;
					default:
						break;
				}
			},
		}
	}
</script>

<style>
	page {
		background-color: #f6f6f6;
	}

	.content {
		/* padding: 15px; */
	}

	/* ---------- 顶部导航栏 ---------- */
	.navbar {
		box-shadow: 0 0px 4px rgba(0, 0, 0, 0.2);
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
		width: 75%;
		padding: 0 40rpx;
		border-radius: 30px;
		background-color: #f6f6f6;

		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}

	.search_input {
		margin-left: 30rpx;
		color: #909399;
	}

	/* ---------- 侧滑菜单部分 ---------- */
	.menu {}

	.menu .menu_upper {
		/* width: 100%; */
		height: 450rpx;
		padding: 40rpx;
		padding-top: 50px;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-around;
	}
	.menuImage{
		height: 450rpx;
		position: absolute;
		z-index: -1;
	}

	.menu_usertext .menu_username {
		color: #ffffff;
		font-weight: bold;
		font-size: 24px;
	}

	.menu_usertext .menu_email {
		color: #ffffff;
	}

	.menuList {
		padding: 40rpx;
	}

	.menuList_item {
		height: 100rpx;
		padding: 0 10rpx;
		margin-bottom: 10rpx;

		/* background-color: #ecf5ff; */
		border-radius: 10rpx;

		display: flex;
		flex-flow: row;
		align-items: center;

		transition: all 0.25s;
	}

	.homeItem {
		font-weight: bold;
		color: #2979ff;
	}

	.menuList_item:active {
		background-color: #ecf5ff;
		color: #2979ff;
	}

	.menuList_item_name {
		margin-left: 20rpx;
		font-size: 30rpx;
		font-weight: bold;
	}

	/* ---------- 主内容卡片列表 ---------- */
</style>
