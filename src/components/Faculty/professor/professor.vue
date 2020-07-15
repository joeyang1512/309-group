<template>
	<div>
		<ul class="breadcrumb">
			<li>309</li>
			<li>师资力量</li>
			<li>教授</li>
		</ul>
		<div class="col-md-4" style="text-align: center" v-for='(item,key) in itemList' :key='key'>
			<img :src="require('@/assets/'+item.imgpath)" class="img-thumbnail" style="width: 80%">
			<h5>
				<router-link :to="{path:'/professorDetails/id',query:{id:item.id,title:item.name}}">{{item.name}}</router-link>
			</h5>
		</div>
	</div>
</template>

<script>
	import {
		getProfessor
	} from '@/api/api';
	export default {
		name: 'professor',
		data() {
			return {
				itemList: []
			}
		},
		mounted() {
			getProfessor().then(res => {
				// console.log(res);
				this.itemList = res;
			})
		}
	}
</script>
