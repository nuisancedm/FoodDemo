<template>
  <div>
    <input type="text" v-model="foodname" class="search" @keyup.enter="tofoodsearch"/>
    <div
      class="tags"
      v-for="(item, index) in classes"
      :key="index"
      @click="showlist(index)"
    >
      {{ item.name }}
      <!-- 渲染分类 -->
    </div>
    <div
      v-for="(item, index) in taglists"
      :key="'a' + index"
      class="listtag"
      @click="todetail(item.classid)"
    >
      {{ item.name }}
      <!-- 渲染二级列表 -->
    </div>
  </div>
</template>

<script>
import instance from "@/utils/api";

export default {
  created: function () {
    this.loaddata();
  },

  methods: {
    loaddata() {
      //axios请求
      instance
        .get("/class", {
          params: {
            appkey: "c671a4c29ec3381b",
          },
        })
        .then((res) => {
          this.classes = res.data.result;
          this.taglists = res.data.result[0].list.slice(0, 10);
        })
    },

    todetail(tagid) {
      this.$router.push("/detail?id=" + tagid);
    },

    showlist(index) {
      this.taglists = this.classes[index].list.slice(0, 10);
      //   let tem = this.classes.filter((item) => item.classid == classid);
      //   this.taglists = tem[0].list.slice(0, 10);
      //   this.index = index;
    },

    tofoodsearch(){
      this.$router.push("/detail?foodname="+this.foodname)
    }
  },

  computed: {
    //   mylist(){
    //       return this.classes[this.index].list.slice(0, 10)
    //   }
  },
  data() {
    return {
      foodname: "", //表单输入
      classes: "", //res.data.result
      taglists: "", //初始值为res.data.result[0].list
      //   index: 0,
    };
  },
};
</script>

<style scoped>
.search {
  display: block;
  margin: auto;
}
.tags {
  padding: 5px 10px;
  display: inline-block;
  border-radius: 3px;
  background: coral;
  margin-left: 2px;
  margin-top: 5px;
}
.listtag {
  width: 48%;
  height: 100px;
  background: cornflowerblue;
  display: inline-block;
  margin-top: 5px;
  line-height: 100px;
  margin-left: 1%;
  text-align: center;
}
</style>