<template>
	<view>
		<view class="content">
			<!-- 顶部导航栏 -->
			<u-navbar :is-back="false" height="50" title="" :border-bottom="false">
				<view class="slot-wrap">
					<view class="nav_left">
						<u-icon @click="backClick()" name="arrow-leftward" color="#000000" size="50"></u-icon>
					</view>
					<view class="nav_right"></view>
				</view>
			</u-navbar>
			
			<!-- 文章正文部分 -->
			<h2 class="article_title">{{article.title}}</h2>
			<view class="article_status">895个回答 · 1.5万关注</view>
			<u-line></u-line>
			<view class="article_user">
				<view class="user_info">
					<view class="user_avatar">
						<x-avatar size="75rpx" :imgsrc="article.user.userAvatar"></x-avatar>
					</view>
					<view class="user_name">{{article.user.userName}}</view>
					<view class="user_level">
						<x-leveltag :level="article.user.userLevel"></x-leveltag>
					</view>
				</view>
				<view id="attentionButton" @tap="attentionButtonClick" :style="attentionButtonStyle">{{attentionButtonText}}</view>
			</view>
			
			<view class="article_content">
				<p>93年，去兰州参加部里面的一个会。</p>
				<p>参会者有一个从珠州还是哪来的同志，时间过去20多年已记不清楚了。她带了她的老公和女儿，小姑娘十五六岁的样子。</p>
				<p>她本人是跟我们会务吃住的，那爷儿俩吃住自己解决。</p>
				<p>晚上学习完以后，她老公和女儿也会到寝室来玩一玩，来了两次就了解到她老公是世传的中医，很多人很热闹的叫她老公给把脉。</p>
				<p>那时我很年轻很年轻，整天活蹦乱跳身体好的很，看旁边的人说把的很准，有的人被说的目瞪口呆，我也心欠欠的想让他们给瞧瞧，但是一个中年男同志在不是医院的地方给我把脉就觉有点怪。年轻的时候有点小怪癖吧。</p>
				<p>突然小姑娘就说我给姐姐瞧瞧吧，小姑娘把脉是食指，中指，无名指三个手指头按在我的手腕上。是的，这么多年我都记得清楚，因为当时她要求所有的人不说话。三个手指头依次在我的手腕上轻压。</p>
				<p>过了好久，她父亲把脉就三五分钟，我觉得她把了七八分钟吧，时间太久了也不太记得清楚，反正比她的父亲时间久。</p>
				<p>然后小姑娘抬起头说，爸爸，这个姐姐的肾脉上有个小疙瘩。</p>
				<p>其父面色平和，淡淡地问我，你早上解小便有问题吗？当时我就惊呆了，因为那一段时间我早上起来小便觉得腰胀。我觉得是小问题，从来没跟任何人说过。我下意识的摇头。</p>
				<p>然后又问我最近有伤过腰吗？我又摇头。</p>
				<p>再问我，我就不好意思了，赶紧说了实话，那父亲说那就对了，我给你开一副药，拿回去吃一周，然后再跟我们联系。</p>
				<p>药方子早就忘了，只记得每一副药加7颗大枣。</p>
				<p>学习回来，我果真去吃了7副药，早上腰胀问题真的解决了。</p>
				<p>也许是老天派来帮我的，我错过了。因为震惊在小姑娘的高超技艺上，而忘记了要他们的联系方式，再加上吃药以后，症状真的没有了。</p>
				<p>到今天再也没联系过，遗憾。</p>
			</view>
			
			<view class="tips">
				发布于 {{article.time}} · 著作权归作者所有
			</view>
			
			<!-- 评论部分 -->
			<view class="article_comment">
				<view class="article_comment_title">评论</view>
				<view>
					<u-input @click="detailsShow = true" placeholder="写下你的评论..." border="border"></u-input>
				</view>
				
				<!-- 评论列表 -->
				<view class="comment_item" v-for="item in article.commentList">
					<view class="leftColumn">
						<view class="avatar">
							<u-image :src="item.userAvatar" width="100%" height="75rpx"></u-image>
						</view>
					</view>
					<view class="rightColumn">
						<view class="comment_item_userName">
							<view>{{item.userName}}</view>
							<x-leveltag :level="item.userLevel"></x-leveltag>
						</view>
						<view>{{item.content}}</view>
						<view class="comment_item_time">{{item.time}}</view>
					</view>
				</view>
				<view class="showAllCommentButton">
					<view @tap="detailsShow = true">查看全部评论 ></view>
				</view>
				
			</view>
			
			<!-- 全部评论弹出窗口 -->
			<view>
				<u-popup v-model="detailsShow" mode="bottom" border-radius="30" height="90%" closeable="closeable">
					<view class="popupContent">
						<view class="popup_title">
							<h2>全部评论</h2>
						</view>
						<view class="comment_title">评论</view>
						<!-- 评论列表 -->
						<view class="comment_item" v-for="item in article.commentList">
							<view class="leftColumn">
								<view class="avatar">
									<u-image :src="item.userAvatar" width="100%" height="75rpx"></u-image>
								</view>
							</view>
							<view class="rightColumn">
								<view class="comment_item_userName">
									<view>{{item.userName}}</view>
									<x-leveltag :level="item.userLevel"></x-leveltag>
								</view>
								<view>{{item.content}}</view>
								<view>{{item.time}}</view>
							</view>
						</view>
						<view class="popupContent_comment">
							<u-input v-model="newComment.commentContent" placeholder="评论千万条,友善第一条" border="border"></u-input>
							<u-button class="popupContent_comment_button" @click="submitCommtent">发送</u-button>
						</view>
					</view>
				</u-popup>
			</view>
		</view>
		<!-- END content -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article: {
					title: '你亲眼见过的厉害中医是什么样？',
					user:{
						userAvatar:'/static/avatar/avatar.jpg',
						userName:'嗤氓氓之蚩蚩',
						userLevel:5,
					},
					content: '',
					time:'06-13',
					commentList: [{
							userAvatar: '/static/avatar/avatar.jpg',
							userName: '大白白又白',
							userLevel:7,
							content: '这样的高手都不留一个联系方式么',
							time: '2021年6月13日'
						},
						{
							userAvatar: '/static/avatar/avatar.jpg',
							userName: '嗤氓氓之蚩蚩',
							userLevel:5,
							content: '没有嘛，那时没有手机，大多数家庭也没有座机电话，关键是单位电话都没有留啊！',
							time: '2021年6月13日'
						}
					]
				}, // END article
				attentionButtonText: '+关注',
				attentionStatus: false,
				attentionButtonStyle:{
					color: '#0053f1'
				},
				newComment:{
					user:getApp().globalData.LoginUser,
					commentContent:'',
				},
				detailsShow: false,
				
			} // END data
		},
		methods: {
			backClick(){
				uni.navigateBack({
					delta:1
				});
			},
			attentionButtonClick(){
				if(this.attentionStatus === false){
					this.attentionButtonText = '已关注';
					this.attentionStatus = true;
					this.attentionButtonStyle.color = "#999999";
				}else{
					this.attentionButtonText = '+关注';
					this.attentionStatus = false;
					this.attentionButtonStyle.color = "#0053f1";
				}
				
			},
			submitCommtent(){
				var tempComment = {
					userAvatar: this.newComment.user.userAvatar,
					userName: this.newComment.user.userName,
					userLevel: this.newComment.user.userLevel,
					content: this.newComment.commentContent,
					time: '',
				};
				tempComment.time = this.getToday();
				this.article.commentList.push(tempComment);
			},
			getToday(){
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth()+1;
				var day = date.getDate();
				var str = year+ '年'+month+'月'+day+'日';
				return str;
			}
		}
	}
</script>

<style>
	.content {
		padding: 30rpx 40rpx;
		padding-right: 38rpx;
		padding-bottom: 50px;
	}

	/* ---------- 顶部导航栏部分 ---------- */
	.slot-wrap{
		padding: 0 40rpx;
	}
	
	
	/* ---------- 文章正文部分 ---------- */
	
	.article_title{
		font-size: 42rpx;
	}
	.article_status{
		margin: 20rpx 0;
		margin-bottom: 40rpx;
	}
	
	.article_user{
		width: 100%;
		margin-top: 40rpx;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		justify-content: space-between;
	}
	.article_user .user_info{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
	.article_user .user_info .user_avatar{
		margin-right: 20rpx;
	}
	.article_user .user_info .user_name{
		font-size: 30rpx;
		font-weight: bold;
	}
	
	#attentionButton{
		width: 150rpx;
		height: 75rpx;
		background-color: #f6f6f6;
		border-radius: 15rpx;
		font-size: 30rpx;
		font-weight: bold;
		color: #0053f1;
		/* flex */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#attentionButton:active{
		opacity: 0.75;
	}
	.article_content {
		margin-top: 30px;
	}

	.article_content p {
		font-size: 38rpx;
		margin-top: 10px;
	}

	.tips{
		margin: 40rpx 0;
		color: #999999;
	}
	/* ---------- 文章评论部分 ---------- */
	.article_comment {
		margin-top: 30px;
	}

	.article_comment_title, .comment_title {
		margin: 30rpx 0;
		font-weight: bold;
		font-size: 30rpx;
	}

	.comment_item {
		margin: 30rpx 0;
		display: flex;
		flex: row nowrap;
	}

	.comment_item .leftColumn .avatar {
		width: 75rpx;
		height: 75rpx;
		margin-right: 10px;
		background-color: #d1d1d1;
		border-radius: 50%;
		overflow: hidden;
	}
	.comment_item .rightColumn >view{
		margin: 10rpx 0;
	}
	.comment_item_userName {
		font-weight: bold;
		display: flex;
		flex-flow: row nowrap;
	}
	
	.comment_item_time{
		color: #999999;
	}
	
	.showAllCommentButton{
		color: #999999;
		display: flex;
		flex-flow: row;
		justify-content: center;
		align-items: center;
	}
	.popupContent {
		padding: 15px;
	}
	.popup_title{
		display: flex;
		flex-flow: row;
		justify-content: center;
		align-items: center;
	}
	.popupContent_comment {
		width: 100%;
		position: fixed;
		bottom: 15px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}

	.popupContent_comment_button {
		margin-right: 30px;
	}
</style>
