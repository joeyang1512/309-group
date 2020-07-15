<template>
	<div>
		<ul class="breadcrumb">
			<li>309</li>
			<li>研究生培养</li>
			<li>在读博士</li>
		</ul>
		<div class="col-md-4" style="text-align: center" v-for="(item,key) in itemList" :key="key">
			<img :src="require('@/assets/'+item.imgpath)" class="img-thumbnail" style="width: 80%">
			<h5>
				<router-link :to="{path:'/studentsDetails/id',query:{id:item.id}}">{{item.name}}</router-link>
			</h5>
		</div>

	</div>
</template>

<script>
	import {
		getReadDoctor
	} from '@/api/api'
	export default {
		name: 'readdoctor',
		data() {
			return {
				itemList: []
			}
		},
		created() {
			getReadDoctor().then(res => {
				// console.log(res);
				this.itemList = res;
			})
		}

	}
</script>

<style>
</style>
