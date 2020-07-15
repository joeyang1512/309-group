<template>
	<div>
		<div class="col-md-3" id="left-list">
			<div class="list-group" style="text-align: center">
				<router-link :to="{path:'/faculty' }" class="list-group-item">教授</router-link>
				<router-link :to="{path:'/faculty/viceprofessor'}" class="list-group-item">副教授</router-link>
				<router-link :to="{path:'/faculty/lecturer'}" class="list-group-item">讲师</router-link>
			</div>
		</div>

		<!--右侧-->
		<router-view></router-view>
		<!--end-->
	</div>
</template>

<script>
	export default {
		name: 'faculty',
		data() {
			return {
			}
		},
		created() {
			
		}
	}
</script>
