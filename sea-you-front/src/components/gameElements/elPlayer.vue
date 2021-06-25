<template>
    <div v-bind:id="id">
        <h5 class="elPlayer-title">{{name}}</h5>
        <br>
        <img class="logo logo-h-medium" :src="getImgeUrl()" alt="">
    </div>
</template>

<script>

export default ({
    props:{
        id: Number,
        name: String,
        roleUrl: String,
        speaking: Boolean,
    },
    methods:{
        getImgeUrl() {
            if(this.roleUrl){
                return '/static/img/roles/'+this.roleUrl
            } else {
                console.log('toto')
                return '/static/img/roles/naked.png'
            }
        }
    }
})
</script>

<style scoped>
    h5.elPlayer-title{
        display: inline-block;
        background-color: var(--color-secondary);
        padding: 8px 24px;
        color: white;
        font-weight: 600;
        border-radius: 25px;
        font-size: 1.2rem;
    }


</style>
