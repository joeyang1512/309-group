<template>
  <div id="app">
    <header>
      <img src="@/assets/public/images/官网header.jpg" class="img-responsive" style="width: 100%" />
    </header>

    <div style="background-color:rgba(36, 139, 210, 0.9);">
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">首页</router-link>
              
            </li>
            <li>
              <router-link to="/lab">实验室概况</router-link>
            </li>
            <li>
              <router-link to="/news">新闻动态</router-link>
            </li>
            <li>
              <router-link to="/faculty">师资力量</router-link>
            </li>
            <li>
              <router-link to="/Students">研究生培养</router-link>
            </li>
            <li>
              <router-link to="/sciFruit">科研成果</router-link>
            </li>
            <li>
              <router-link to="/writings">论著专利</router-link>
            </li>
            <li>
              <router-link to="/academic">学术交流</router-link>
            </li>
            <li>
              <router-link to="/inform">通知公告</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "xxx",
  data() {
    return {};
  },
  components: {
  }
};
</script>

<style lang="less" scoped>
</style>
