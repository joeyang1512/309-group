<template>
	<div>
		<main class="col-md-12" style="backgrouitemnd-color: #fff;margin: 10px 0;">
			<article id=111 class="post" v-if="item">
				<div class="col-md-3">
					<h2>{{item.name}}</h2>
					<div class="post-meta">
						<img :src="require('@/assets/'+item.imgpath)" class="img-responsive">
					</div>
				</div>
				<div class="col-md-9" style="margin-top: 20px">
					{{item.content}}
				</div>
			</article>
		</main>
	</div>
</template>

<script>
	import {
		getTeachersDetails
	} from '@/api/api';
	export default {
		name: 'facultyDetails',
		data() {
			return {
				item: ''
			}
		},
		created() {
			// console.log(this.$route);
			getTeachersDetails({
				params: {
					cid: this.$route.query.id
				}
			}).then(res => {
				// console.log(res);
				this.item = res;
			})
		},
		updated(){
			document.title = this.$route.query.title;
		}
	}
</script>
