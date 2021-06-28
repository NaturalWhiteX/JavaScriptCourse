<script>
	export default {
		globalData: {
			// http://47.99.123.58:8081/
			// http://localhost:8081/
			baseURL: 'http://localhost:8081/',
			LoginUser:{
				userAvatar:'/static/avatar/avatar.jpg',
				userName:'NewUserB',
				userPassword:'123456',
				userLevel:5
			}
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
</style>
