<template>
	<div>
		<ul class="breadcrumb">
			<li>309</li>
			<li>师资力量</li>
			<li>副教授</li>
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
	import {getViceprofessor} from '@/api/api';
	export default{
		name:'viceprofessor',
		data(){
			return {
				itemList:[]
			}
		},
		created(){
			getViceprofessor().then(res=>{
				this.itemList=res;
			})
		},
		methods:{
			
		}
	}
</script>
