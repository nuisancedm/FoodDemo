<template>
    <div>
        我是详情页
    </div>
</template>

<script>
    // import instance from "@/utils/api";
    export default {
        created(){
            console.log(this.$route.query.id)
        }
    }
</script>

<style  scoped>

</style>