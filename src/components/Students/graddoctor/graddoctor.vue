<template>
	<div>
		<ul class="breadcrumb">
			<li>309</li>
			<li>研究生培养</li>
			<li>毕业博士</li>
		</ul>
		<div class="col-md-4" style="text-align: center" v-for="(item,key) in itemList" :key="key">
			<img :src="require('@/assets/'+item.imgpath)" class="img-thumbnail" style="width: 80%">
			<h5>
				<router-link :to="{path:'/studentsDetails/id',query:{id:item.id,title:item.name}}">{{item.name}}</router-link>
			</h5>
		</div>

	</div>
</template>

<script>
	import {
		getGradDoctor
	} from '@/api/api'
	export default {
		name: 'graddoctor',
		data() {
			return {
				itemList: []
			}
		},
		created() {
			getGradDoctor().then(res => {
				console.log(res);
				this.itemList = res;
			})
		}

	}
</script>

<style>
</style>
