<template>
	<div>
		<main class="col-md-12" style="background-color: #fff;margin: 10px 0;">
			<article id=111 class="post" v-if='item'>
				<div class="post-head">
					<h2>{{item.title}}</h2>
					<div class="post-meta">
						<span class="author">浏览：{{item.hints}}</span> &bull;
						<time class="post-date">{{item.dateandtime}}</time>
					</div>
				</div>
				<div class="post-content">
					{{item.header}}
				</div>
				<div class="featured-media" style="text-align: center">
					<!--此处注意-->
					<img :src="require('@/assets/'+item.imgpath)" alt="" style="width: 70%">
				</div>
				<div class="post-content">
					{{item.content}}
				</div>
			</article>
		</main>
	</div>
</template>

<script>
import {getAcaDetails} from '@/api/api'
	export default {
	name:'detail',
	data(){
		return {
			item:''
		}
	},
	created(){
		getAcaDetails({params:{cid:this.$route.params.id}}).then(res=>{
			// console.log(res);
			this.item=res;
			document.title=this.item.title;
		})
	}
	
	}
</script>

<style scoped>

</style>
