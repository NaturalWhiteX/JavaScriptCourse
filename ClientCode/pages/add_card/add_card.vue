<template>
	<view>
		<u-input v-model="inputContent.title" placeholder="请输入标题"></u-input>
		<u-input v-model="inputContent.username" placeholder="请输入用户名称"></u-input>
		<u-button @click="addCardListItem()" type="primary" ripple="ripple">添加</u-button>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardList: [],
				inputContent: {
					title: '',
					username: '',
					time: '' + new Date().getFullYear() + '年' + (new Date().getMonth() + 1) + '月' + new Date().getDay() + '日',
				}
			}
		},
		onLoad() {
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
				this.showToast();
			},
			dataSave() {
				// 数据保存到本地
				window.localStorage.setItem("home_cardList", JSON.stringify(this.$data.cardList));

			},
			dataLoad() {
				// 从本地读取数据
				Object.assign(this.$data.cardList, JSON.parse(window.localStorage.getItem("home_cardList")));
			},
			showToast() {
				this.$refs.uToast.show({
					title: '添加成功',
					type: 'success',
					url: 'pages/home/home',
					duration: 1000,
				})
			}

		}
	}
</script>

<style>

</style>
