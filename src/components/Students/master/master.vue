<template>
	<div>
		<ul class="breadcrumb">
			<li>309</li>
			<li>研究生培养</li>
			<li>毕业硕士</li>
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
		getMaster
	} from '@/api/api'
	export default {
		name: 'master',
		data() {
			return {
				itemList: []
			}
		},
		created() {
			getMaster().then(res => {
				// console.log(res);
				this.itemList = res;
			})
		}

	}
</script>

<style>
</style>
