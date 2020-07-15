<template>
	<div>
		<!-- 国际学术交流 -->
		<div class="col-md-9" v-show='id==1' v-if='id'>
			<ul class="breadcrumb">
				<li>309</li>
				<li>学术交流</li>
				<li>国际学术交流</li>
			</ul>
			<div class="table-responsive">
				<table class="table table-bordered table-hover" style="background-color: #fff;">
					<tbody style="font-size: 10px">
						<tr v-for="(item,key) in itemList1" :key="key">
							<td><a style="font-size: 13px;cursor:pointer;" @click="addRouter(item.id)">{{item.title}}</a></td>
							<td style="font-size: 13px">{{item.dateandtime}}</td>
						</tr>
					</tbody>
				</table>

				<nav class="pull-right" style="margin-bottom: 10px">
					{$page}
				</nav>
			</div>
		</div>

		<!-- 国内学术交流 -->
		<div class="col-md-9" v-show='id==2' v-if='id'>
			<ul class="breadcrumb">
				<li>309</li>
				<li>学术交流</li>
				<li>国内学术交流</li>
			</ul>
			<div class="table-responsive">
				<table class="table table-bordered table-hover" style="background-color: #fff;">
					<tbody style="font-size: 10px">
						<tr v-for="(item,key) in itemList2" :key="key">
							<td><a style="font-size: 13px;cursor:pointer;" @click="addRouter(item.id)">{{item.title}}</a></td>
							<td style="font-size: 13px">{{item.dateandtime}}</td>
						</tr>
					</tbody>
				</table>

				<nav class="pull-right" style="margin-bottom: 10px">
					{$page}
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
	import {getAcaInfo} from '@/api/api'
	export default {
		name: 'acaRight',
		props: ['id'],
		data() {
			return {
				itemList1:[],
				itemList2:[]
			}
		},
		created(){
			getAcaInfo({params:{what:'internation'}}).then(res=>{
				// console.log(res)
				this.itemList1=res;
			})
			getAcaInfo({params:{what:'nation'}}).then(res=>{
				// console.log(res);
				this.itemList2=res;
			})
		},
		updated(){
			if(this.id === 1){
				document.title = '国际学术交流';
			}else{
				document.title = '国内学术交流';
			}
		},
		methods:{
			addRouter(id){
				this.$router.push({name:'academicDetails',params:{id:id}})
			}
		}
	}
</script>

<style>
</style>
