<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>全局变量：{{ global_url }}</h1>
    <h1>全局表达式：{{ global_regexp }}</h1>
    <p>
      <i class="iconfont icon-kefu1"></i>
    </p>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      global_url: this.GLOBAL.baseUrl,
      global_regexp: this.REGEXP.is_number,
    }
  },
  mounted() {
    this.$nextTick(function () {
      // 仅在整个视图都被渲染之后才会运行的代码
      this.testAxiosRequest(); // 首页基础数据
      // 这是全局函数
      this.test1();
      this.test2();
      this.test();
    })
  },
  methods: {
    testAxiosRequest() {
      this.myRequest({
        url: '/api/region/regionnameson'
      }).then(res => {
          console.log('基础数据 res == ',res);
      }).catch(err => {
          console.log('基础数据 err == ',err);
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-family: $common-defult-font-family;
  color: $rests-number1-color;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
