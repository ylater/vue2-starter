<script  setup>
import { useUserStore } from '@/stores/index.js'
const userStore = useUserStore()
const { proxy } = getCurrentInstance()
const { $api, $router, $msg, $confirm } = proxy
const loginForm = reactive({
  username: 'admin',
  password: 'admin'
})
/**
 * 登录
 */
function login() {
  const params = {
    username: loginForm.username,
    password: loginForm.password
  }
  $api.login(params).then(res => {
    userStore.setToken(res.token)
    $router.push({ path: '/' })
  }).catch(err => {
    console.log(err)
  })
}
</script>	
<template>
  <div class='login-page'>
    <div class="containter">
      <div class="login-header">
        <img src="@/assets/logo.png" alt="">
        <h1>多层次商保服务系统</h1>
      </div>
      <div class="login-wrap">

        <el-form class="logon-form">
          <el-form-item label="用户名" prop="username">
            <el-input prefix-icon="el-icon-user" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"
              placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .containter {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  .login-header {
    display: flex;
    height: 120px;
    align-items: center;

    h1 {
      margin-left: 12px;
      font-size: 40px;
    }
  }

  .login-wrap {
    width: 400px;
    margin-top: 120px;
    background: rgba(255, 255, 255, .8);
    padding: 20px;
    border-radius: 5px;

    .logon-form {
      .el-form-item {
        margin-bottom: 20px;

        .el-input {
          width: 100%;
        }
      }
    }
  }
}
</style>	
