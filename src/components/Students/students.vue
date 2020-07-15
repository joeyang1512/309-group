<template>
	<div>
		<div class="col-md-3" id="left-list">
			<div class="list-group" style="text-align: center">
				<router-link :to="{path:'/students'}" class="list-group-item">毕业博士</router-link>
				<router-link :to="{path:'/students/readdoctor'}" class="list-group-item">在读博士</router-link>
				<router-link :to="{path:'/students/master'}" class="list-group-item">毕业硕士</router-link>
				<router-link :to="{path:'/students/readmaster'}" class="list-group-item">在读硕士</router-link>
			</div>
		</div>
		<!--右侧-->
		<div class="col-md-9">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'students',
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>
