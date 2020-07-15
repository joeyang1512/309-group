<template>
	<div>
		<main class="col-md-12" style="background-color: #fff;margin: 10px 0;">
                <article id=111 class="post" style='padding:20px;'>
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
                    <div class="featured-media" style="text-align: center">                    <!--此处注意-->
                        <img :src="'__ROOT__/'+item.imgpath" alt="" style="width: 70%">
                    </div>
                    <div class="post-content">
                        {{item.content}}
                    </div>
                </article>


            </main>
	</div>

</template>

<script>
import {getNewsDetils} from '@/api/api';
	export default {
		name: 'newsIndex',
		data(){
			return {
				id:'',
				item:{}
			}
		},
		created() {
			this.id=this.$route.query.id;
			// console.log(this.$route.query)
			getNewsDetils({params:{cid:this.id}}).then(res=>{
				// console.log(res);
				this.item=res;
			})
		},
	}
</script>

<style>
</style>
