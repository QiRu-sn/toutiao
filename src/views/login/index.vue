<template>
  <div class='bgcontainer'>
      <el-card class="box-card">
          <div class="login-logo">
              <img src="../../assets/img/logo_index.png" alt="">
          </div>
          <el-form>
              <el-form-item>
                  <el-input placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-input placeholder="验证码" style="width:68%"></el-input>
                  <el-button plain style="float:right;width:30%">发送验证码</el-button>
              </el-form-item>
              <el-form-item>
                  <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" style="width:100%">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style lang='less' scoped>
.bgcontainer{
    background: url('../../assets/img/login_bg1.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .box-card{
        width:30%;
        height: 38%;
        padding:0 15px;
        .login-logo {
            text-align: center;
            margin-bottom: 30px;
            img{
                width: 50%;
            }
        }
    }

}
</style>
