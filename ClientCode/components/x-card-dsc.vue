<template>
	<view>
		<view class="cardView_DSC cardView">
			<!-- 卡片标题 -->
			<view class="card_title">{{cardObj.title}}</view>
			<!-- 卡片所属用户 -->
			<view class="card_user">
				<view class="avatar">
					<u-image :src="cardObj.user.avatar" width="100%" height="40rpx"></u-image>
				</view>
				<view class="username">{{cardObj.user.name}}</view>
			</view>
			<!-- 卡片缩略内容 -->
			<view class="card_content">
				<p>{{cardObj.content}}</p>
			</view>
			<!-- 卡片状态 -->
			<view class="card_status">
				<view>{{cardObj.status.agreeCnt}} 赞同 · {{cardObj.status.commentCnt}} 评论 · {{cardObj.status.time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "x-card-dsc",
		props: {
			cardObj: {
				type: Object,
				default: {
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
				}
			}
		},
		data() {
			return {
		
			}
		}
	}
</script>

<style>
	.cardView_DSC,
	.cardView {
		width: 100%;
		height: 160px;
		margin: 10px 0;
		background-color: #FFFFFF;
		padding: 15px;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

		display: flex;
		flex-flow: column;
		justify-content: space-around;
	}

	.card_title {
		font-size: 40rpx;
		font-weight: bold;
	}

	.card_user {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}

	.card_user .avatar {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		background-color: #D1D1D1;
		overflow: hidden;
	}

	.card_user .username {
		margin-left: 20rpx;
		color: #646464;
		font-weight: 600;
	}

	.card_content p {
		display: -webkit-box;
		/* 对象作为伸缩盒子模型显示 */
		overflow: hidden;
		word-break: break-all;
		/* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;
		/* 超出部分省略号 */
		-webkit-box-orient: vertical;
		/* 设置或检索伸缩盒对象的子元素的排列方式 */
		-webkit-line-clamp: 2;
		/* 显示的行数 */
	}

	.card_status view {
		color: #979797;
	}
</style>
