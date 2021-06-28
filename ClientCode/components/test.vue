<template>
	<view>
		<view>{{value}}</view>
	</view>
</template>

<script>
	export default {
		name:"test",
		props:{
			value:{
				type:String,
				default:'xzw',
				required:false
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
