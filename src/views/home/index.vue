<template>
<!-- 放置一个外层容器 -->
  <el-container>
    <!-- 左右布局 -->
    <el-aside style="background-color:#353b4e;height:100vh;width:200px">
      <!-- 在放置一个container -->
      <layout-aside></layout-aside>
    </el-aside>
<!-- 再放置一个container -->
    <el-container>
    <!-- 上下布局 -->
      <el-header>
        <!-- 头部组件 -->
        <layout-header></layout-header>
      </el-header>
      <el-main>
        主要区域
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/layout-aside'
import layoutHeader from '../../components/layout-header'

export default {
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader
  }
}
</script>

<style>

</style>
