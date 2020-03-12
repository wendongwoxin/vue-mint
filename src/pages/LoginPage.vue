<template>
  <div>
      <img class="logo" src="../assets/logo.png">
      <h1 class="title">天道酬勤</h1>
      <input type="text" placeholder="请输入手机号/用户名/邮箱" v-model="account">
      <input type="password" placeholder="请输入密码" v-model="password">
      <div class="operate">
        <span class="forget-password">忘记密码</span>
        <span class="phone-login">免密码登录</span>
      </div>
      <mt-button class="btn" type="primary" size="small" @click="login">登录</mt-button>
      <mt-button class="btn" type="default" size="small">注册</mt-button>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (!this.account || !this.password) {
        this.$toast('请输入账户和密码')
      }
      // 账号: admin, 密码: 123456
      if (this.account === 'admin' && this.password === '123456') {
        // 11
        this.$router.push({ path: '/mainpage' })
      } else {
        this.$toast({
          message: '账号密码错误'
        })
      }
    }
  }
}
</script>

<style scoped>
  .logo {
    width: 50px;
    display: block;
    margin: 60px auto 10px auto;
  }
  .title {
    font-size: 20px;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  input {
    border: none;
    margin: 10px auto;
    padding: 10px;
    display: block;
    width: 90%;
    border-bottom: 1px solid #eeeeee;
  }
  input::-webkit-input-placeholder {
    color: #ccc;
  }
  .operate {
    position: relative;
    font-size: 12px;
    width: 90%;
    margin: 10px auto;
    height: 20px;
  }
  .operate .forget-password {
    position: absolute;
    left: 0;
  }
  .operate .phone-login {
    position: absolute;
    right: 0;
  }
  .btn {
    width: 90%;
    display: block;
    margin: 20px auto;
    color: #999999
  }
</style>
