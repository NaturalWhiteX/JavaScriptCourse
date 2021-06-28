<template>
	<view>
		<u-input v-model="inputContent.title" placeholder="请输入标题"></u-input>
		<u-input v-model="inputContent.username" placeholder="请输入用户名称"></u-input>
		<u-button @click="addCardListItem()" type="primary" ripple="ripple">添加</u-button>
		<!-- 卡片列表 -->
		<view class="cardView" v-for="(item, index) in cardList">
			<u-card :title="item.title" :sub-title="item.time" @click="deleteCardListItem(index)">
				<view slot="body">
					<view>{{index}}: {{item.username}}</view>
					<p>当你的小程序需要检测用户摄像头授权是否开启的时候，授权弹框只会在首次才弹出，如果很意外的首次用户点了拒绝授权，那么他以后再进入就会一直是未开启授权的状态，而你的小程序是必须要用户开启授权的，那么就影响到整体的流程了，没法玩了。</p>
				</view>
				<view slot="foot">62赞同</view>
			</u-card>
		</view>
		<navigator url="../add_card/add_card" open-type="navigate">
			<uni-fab horizontal="right"></uni-fab>
		</navigator>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardList: [],
				inputContent: {
					title: '新增标题',
					time: '2000-01-01',
					username: '用户名称'
				}
			}
		},
		onLoad() {
			this.dataLoad();
		},
		onShow() {
			this.dataLoad();
		},
		methods: {
			addCardListItem() {
				var newCard = {
					title: this.inputContent.title,
					time: this.inputContent.time,
					username: this.inputContent.username,
				}
				this.cardList.push(newCard);
				this.dataSave();
			},
			deleteCardListItem(index) {
				this.cardList.splice(index, 1);
				this.dataSave();
			},
			dataSave() {
				// 数据保存到本地
				window.localStorage.setItem("home_cardList", JSON.stringify(this.$data.cardList));
			},
			dataLoad() {
				// 从本地读取数据
				Object.assign(this.$data.cardList, JSON.parse(window.localStorage.getItem("home_cardList")));
			}

		}
	}
</script>

<style>
	page {
		background-color: #f6f6f6;
	}
</style>
