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
              <!-- <a href="http://localhost/309/index.php?s=Lab/index">实验室概况</a> -->
            </li>
            <li>
              <router-link to="/">新闻动态</router-link>
              <!-- <a href="http://localhost/309/index.php?s=News/index">新闻动态</a> -->
            </li>
            <li>
              <router-link to="/">师资力量</router-link>
              <!-- <a href="http://localhost/309/index.php?s=Teachers/index">师资力量</a> -->
            </li>
            <li>
              <router-link to="/Students">研究生培养</router-link>
              <!-- <a href="http://localhost/309/index.php?s=Students/index">研究生培养</a> -->
            </li>
            <li>
              <router-link to="/">科研成果</router-link>
              <!-- <a href="http://localhost/309/index.php?s=SciFruits/index">科研成果</a> -->
            </li>
            <li>
              <router-link to="/">论著专利</router-link>
              <!-- <a href="http://localhost/309/index.php?s=Writings/index">论著专利</a> -->
            </li>
            <li>
              <router-link to="/">学术交流</router-link>
              <!-- <a href="http://localhost/309/index.php?s=Academic/index">学术交流</a> -->
            </li>
            <li>
              <router-link to="/">通知公告</router-link>
              <!-- <a href="http://localhost/309/index.php?s=Affairs/index">通知公告</a> -->
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- <router-view></router-view> -->
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
