<template>
  <div>
    <div v-for="(item, index) in detail" :key="index">
      <img :src="item.pic" alt="" />
      <h1>{{ item.name }}</h1>
      <div>适用人数：{{ item.peoplenum }}</div>
      <h3>原材料：</h3>
      <div v-for="(mname, n) in item.material" :key="'2' + n">
        {{ mname.mname }}:{{ mname.amount }}
      </div>
      <h3>过程</h3>
      <p v-for="(pcontent, n) in item.process" :key="'1' + n">
        {{ pcontent.pcontent }}
      </p>
    </div>
  </div>
</template>

<script>
import instance from "@/utils/api";
export default {
  created() {
    if (Object.keys(this.$route.query)[0] == "id") {
      instance
        .get("/byclass", {
          params: {
            appkey: "c671a4c29ec3381b",
            classid: this.$route.query.id,
            start: 0,
            num: 10,
          },
        })
        .then((res) => {
          this.detail = res.data.result.list;
        //   console.log(Object.keys(this.$route.query)[0]);
        });
    } else {
      instance
        .get("/search", {
          params: {
            appkey: "c671a4c29ec3381b",
            keyword: this.$route.query.foodname,
            num: 10,
          },
        })
        .then((res) => {
          this.detail = res.data.result.list;
        //   console.log(Object.keys(this.$route.query)[0]);
        });
    }
  },

  data() {
    return {
      detail: "",
    };
  },
};
</script>

<style  scoped>
</style>