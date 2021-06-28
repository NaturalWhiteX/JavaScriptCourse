<template>
	<view class="content">
		<h1>密码登录</h1>
		<u-input v-model="inputUser.username" placeholder="用户名"></u-input>
		<u-input v-model="inputUser.password" placeholder="密码" type="password"></u-input>
		<u-button type="primary" @click="login()">登录</u-button>
		<view class="registeredClick_ui">
			<view @tap="registeredClick()" class="registeredClick">立即注册</view>
		</view>
		
		
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
				popup: {
					show: false,
					title: '提示',
				},
				LoginUser: getApp().globalData.LoginUser,
				userList:[
					{
						username:'xzw',
						password:'123456',
					}
				],
				inputUser:{
					username:'',
					password:''
				}
			}
		},
		onLoad(){
			this.loadUserData();
		},
		methods: {
			showPrompt(text) {
				this.popup.title = text;
				this.popup.show = true;
			},
			registeredClick(){
				uni.navigateTo({
					url: '../registered/registered'
				});
			},
			login(){
				// 是否为空
				if (this.inputUser.username.length === 0 || this.inputUser.password.length === 0) {
					this.showPrompt('用户名或密码不能为空');
					return;
				}
				
				var userIndex = -1;
				// 用户名是否存在
				for(let i = 0,len=this.userList.length; i < len; i++) {
					if(this.inputUser.username === this.userList[i].username){
						userIndex = i;
						break; //用户名存在
					}
				}
				if(userIndex === -1){
					this.showPrompt('用户名不存在');
					return;
				}
				
				// 密码是否正确
				if(this.inputUser.password !== this.userList[userIndex].password){
					this.showPrompt('密码不正确');
					return;
				}
				
				// 登陆成功
				uni.showToast({
					title: '登录成功',
					duration: 2000
				});
				getApp().globalData.LoginUser.userName = this.inputUser.username;
				getApp().globalData.LoginUser.userPassword = this.inputUser.password;
				setTimeout(function(){
					uni.navigateTo({
						url: '../homepage/homepage'
					});
				}, 2000);
				
			},
			loadUserData(){ //加载用户列表
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
	.content{
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
	.registeredClick_ui{
		/* flex */
		display: flex;
		flex-flow: row;
		justify-content: flex-end;
	}
	.registeredClick{
		line-height: 100rpx;
		font-size: 30rpx;
	}
</style>
