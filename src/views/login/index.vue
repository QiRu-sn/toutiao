<template>
  <div class='bgcontainer'>
      <el-card class="box-card">
          <div class="login-logo">
              <img src="../../assets/img/logo_index.png" alt="">
          </div>
          <el-form :model='ruleForm' :rules='rules' ref="myForm">
              <el-form-item prop="phone">
                  <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                  <el-input v-model="ruleForm.code" placeholder="验证码" style="width:68%"></el-input>
                  <el-button plain style="float:right;width:30%">发送验证码</el-button>
              </el-form-item>
              <el-form-item prop="check">
                  <el-checkbox v-model="ruleForm.check" >我已阅读并同意用户协议和隐私条款</el-checkbox>
              </el-form-item>
              <el-form-item>
                  <el-button @click='login' type="primary" style="width:100%">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        phone: '',
        code: '',
        check: false
      },
      rules: {
        phone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }, { pattern: /^1[3456789]\d{9}$/ }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }, { pattern: /^\d{6}$/ }],
        check: [{ validator (rule, value, callback) {
          value ? callback() : callback(new Error('您需要了解用户协议及条款并勾选'))
        } }]
      }

    }
  },
  methods: {
    login () {
      this.$refs.myForm.validate(function (isOK) {
        if (isOK) {
          console.log('校验成功')
        }
      })
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
