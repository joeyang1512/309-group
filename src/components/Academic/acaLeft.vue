<template>
	<div>
		<div class="col-md-3" id="left-list">
			<div class="list-group" style="text-align: center">
				<a class="list-group-item active" @click.prevent="clickItem(1,$event) ">国际学术交流</a>
				<a class="list-group-item" @click.prevent="clickItem(2,$event)">国内学术交流</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'acaLeft',
		data() {
			return {}
		},
		methods: {
			clickItem(data,event) {
				this.$emit('showItem', data);
				document.querySelectorAll(".list-group-item").forEach(item => {
					item.className = "list-group-item";
				})
				// console.log(event.target.className)
				event.target.className="list-group-item active";
			}
		}
	}
</script>

<style>
</style>
