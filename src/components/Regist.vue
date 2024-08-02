<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <button @click="regist">注册</button>
  </div>
</template>

<script>
export default {
  name: "RegistVue",
  data() {
    return {
      msg: "Regist",
      username: "",
      password: "",
    };
  },
  methods: {
    regist() {
      this.$http
        .get(
          "http://10.12.23.90:10001/api/regist/?username=" +
            this.username +
            "&password=" +
            this.password
        )
        .then((res) => {
          // success callback
          this.msg = res["body"];
        });
    },
  },
};
</script>
<style scoped>
</style>
