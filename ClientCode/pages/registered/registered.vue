<template>
	<view class="content">
		<h1>注册</h1>
		<u-input v-model="inputUser.username" placeholder="用户名"></u-input>
		<u-input v-model="inputUser.password" placeholder="密码" type="password"></u-input>
		<u-input v-model="inputUser.confirmPassword" placeholder="确认密码" type="password"></u-input>
		<u-button type="primary" @click="registered()">注册</u-button>

		<u-popup v-model="popup.show" mode="center" width="600rpx" height="250rpx">
			<view class="popup_content">
				<h2>{{popup.title}}</h2>
				<view><u-button type="error" @click="popup.show = false">确定</u-button></view>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				LoginUser: getApp().globalData.LoginUser,
				userList:[
					{
						username:'xzw',
						password:'123456',
					}
				],
				inputUser: {
					username: '',
					password: '',
					confirmPassword: ''
				},
				popup: {
					show: false,
					title: '提示',
				},

			}
		},
		onLoad(){
			this.loadUserData();
		},
		methods: {
			registered() {
				// 是否为空
				if (this.inputUser.username.length === 0 || this.inputUser.password.length === 0) {
					this.showPrompt('用户名或密码不能为空');
					return;
				}

				// 两次输入密码是否一致
				if (this.inputUser.password !== this.inputUser.confirmPassword) {
					this.showPrompt('两次输入密码不一致');
					return;
				}

				// 用户名是否已存在
				let isExisted = false;
				for(let i = 0,len=this.userList.length; i < len; i++) {
					if(this.inputUser.username === this.userList[i].username){
						isExisted = true;
						this.showPrompt('用户名已存在');
						return;
					}
				}

				// 注册成功,写入用户
				var newUser = {
					username:this.inputUser.username,
					password:this.inputUser.password,
				}
				uni.request({
					url: getApp().globalData.baseURL + 'registered',
					data: {
						data: newUser
					},
					success: (res) => {
						this.userList = res.data.userList;
					}
				});
				uni.showToast({
					title: '注册成功',
					duration: 2000
				});
			},
			showPrompt(text) {
				this.popup.title = text;
				this.popup.show = true;
			},
			loadUserData(){
				uni.request({
					url: getApp().globalData.baseURL + 'userList',
					success: (res) => {
						this.userList = res.data.userList;
					}
				});
			},
		}
	}
</script>

<style>
	.content {
		padding: 40rpx;
	}
	.popup_content{
		height: 250rpx;
		padding: 40rpx;
		/* flex */
		display: flex;
		flex-flow: column;
		justify-content: space-between;
	}
</style>
