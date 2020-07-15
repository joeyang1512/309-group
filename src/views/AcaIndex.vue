<template>
	<div>
		<aca-left @showItem='showLeft'></aca-left>
		<aca-right :id='id!==2?1:2'></aca-right>
	</div>
</template>

<script>
	import acaLeft from '@/components/Academic/acaLeft.vue';
	import acaRight from '@/components/Academic/acaRight.vue';
	export default{
		name:'acaIndex',
		data(){
			return {
				id:''
			}
		},
		created(){
			this.showLeft();
		},
		methods:{
			showLeft(data){
				this.id=data;
			}
		},
		components:{
			acaRight,acaLeft
		}
	}
</script>

<style>
</style>
