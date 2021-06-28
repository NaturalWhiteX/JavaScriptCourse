<template>
	<view>
		<view class="content">
			<!-- 顶部导航栏 -->
			<u-navbar :is-back="false" height="50" title="">
				<view class="slot-wrap">
					<view class="nav_left">
						<u-icon @click="backClick()" name="close" color="#000000" size="35"></u-icon>
						<text class="nav_title">编辑个人资料</text>
					</view>
					<view class="nav_right">
						<view @tap="SaveClick">保存</view>
					</view>
				</view>
			</u-navbar>

			<!-- 表单部分 -->
			<view class="avatar"></view>
			<view>
				<h2>基本资料</h2>
				<u-form :model="inputValue" ref="uForm">
					<u-form-item label="用户名" label-width="150">
						<u-input v-model="inputValue.name"></u-input>
					</u-form-item>
					<u-form-item label="一句话介绍自己" label-position="top">
						<u-input v-model="inputValue.introduction"></u-input>
					</u-form-item>
					<u-form-item label="性别" label-width="150">
						<u-input v-model="inputValue.gender" type="select" 
							@click="selectShow.genderSelectShow = true" placeholder="请选择性别"></u-input>
					</u-form-item>
					<u-form-item label="生日" label-width="150">
						<u-input v-model="inputValue.birth" type="select" placeholder="请填写生日" @click="selectShow.birthSelectShow = true"></u-input>
					</u-form-item>
					<u-form-item label="居住地" label-width="150">
						<u-input placeholder="请填写居住地"></u-input>
					</u-form-item>
					<u-form-item label="所在行业" label-width="150">
						<u-input type="select" placeholder="请选择行业"></u-input>
					</u-form-item>

					<u-select v-model="selectShow.genderSelectShow" 
						:list="selectList.genderList"
						@confirm="genderSelectConfirm">
					</u-select>
					<u-calendar v-model="selectShow.birthSelectShow" mode="date" @change="birthSelectChange">
						
					</u-calendar>
				</u-form>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectShow: {
					genderSelectShow: false,
					birthSelectShow: false
				},
				selectList: {
					genderList: [
						{
							value: '1',
							label: '男'
						},
						{
							value: '2',
							label: '女'
						}
					]
				},
				inputValue:{
					name: getApp().globalData.LoginUser.userName,
					introduction: '',
					gender:'',
					birth:'',
				}
			}
		},
		onLoad(){
			this.dataLoad();
		},
		methods: {
			backClick() {
				uni.navigateBack({
					delta: 1
				});
			},
			genderSelectConfirm(event) {
				this.inputValue.gender = event[0].label;
			},
			birthSelectChange(event){
				// console.log(event.result);
				this.inputValue.birth = event.result;
			},
			SaveClick(){
				this.dataSave();
				uni.navigateTo({
					url: '../personalcenter/personalcenter'
				});
			},
			dataSave(){
				// 数据保存到本地
				window.localStorage.setItem("profile_inputValue", JSON.stringify(this.$data.inputValue));
			},
			dataLoad() {
				// 从本地读取数据
				Object.assign(this.$data.inputValue, JSON.parse(window.localStorage.getItem("profile_inputValue")));
			}
		}
	}
</script>

<style>
	.content {
		padding: 0 40rpx;
	}

	/* ---------- 顶部导航栏 ---------- */
	.slot-wrap {
		padding: 0 40rpx;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		flex: 1;
	}

	.nav_title {
		margin-left: 30rpx;
		font-size: 40rpx;
	}
	.nav_right{
		font-weight: bold;
		color: #007AFF;
	}
	/* ---------- 表单部分 ---------- */
	.avatar {
		width: 150rpx;
		height: 150rpx;
		margin: 30rpx 0;
		background-color: #dddddd;
		border-radius: 50%;
	}
</style>
