<template>
	<view>
		<view class="cardView_TBA cardView">
			<view class="card_user">
				<view class="avatar">
					<u-image :src="cardObj.user.avatar" width="100%" height="40rpx"></u-image>
				</view>
				<view class="username">{{cardObj.user.name}} 的提问</view>
			</view>
			<view class="card_title">{{cardObj.title}}</view>
			<view class="card_status">
				<view>{{cardObj.status.answerCnt}} 回答 · {{cardObj.status.attentionCnt}} 关注</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "x-card-tba",
		props: {
			cardObj: {
				type: Object,
				default: {
					"user": {
						"avatar": "/static/avatar/avatar.jpg",
						"name": "匿名用户"
					},
					"title": "现在还有很多人相信中医无用论吗？",
					"description": "刚看评论区两个人的观点才发现原来真的有中医无用论，我是学生物的，但不学医，想听听大家的看法和学医人的看法。难道从我的字里行间看不出我是反对中医无用论的么，我只是想问问别人的看法而已，为什么指责我。",
					"status": {
						"answerCnt": 17,
						"attentionCnt": 20
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
	.cardView {
		width: 100%;
		height: 120px;
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
