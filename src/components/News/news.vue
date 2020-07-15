<template>
<div>
    <div class="table-responsive" style="margin-top: 10px">
        <table class="table table-bordered table-hover" style="background-color: #fff;">
            <tbody style="font-size: 10px">
                <tr v-for="(item,key) in formList" :key='key'>
                    <td>
                        <router-link style="font-size: 13px" :to="{path:'/newsDetails/id',query:{id:item.id}}">{{item.title}}</router-link>
                    </td>
                    <td style="font-size: 13px">{{item.dateandtime}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import {
    getNewsInfo
} from '@/api/api';

export default {
    name: 'news',
    data() {
        return {
            formList: []
        }
    },
    created() {
        this.news();
    },
    methods: {
        news() {
            getNewsInfo().then(result => {
                // console.log(result);
                this.formList = result;
            })
        }
    }
}
</script>
