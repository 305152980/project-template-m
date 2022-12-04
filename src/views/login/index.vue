<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar" title="登 录" />
    <van-form ref="loginFormRef" @submit="onSubmit">
      <van-field
        name="mobile"
        v-model="loginFormInfo.mobile"
        type="number"
        maxlength="11"
        :rules="loginFormRules.mobile"
        label="手机号"
        placeholder="请输入手机号"
        required
        clearable
      />
      <van-field
        name="code"
        v-model="loginFormInfo.code"
        :rules="loginFormRules.code"
        type="number"
        maxlength="6"
        label="验证码"
        placeholder="请输入验证码"
        required
        clearable
        center
      >
        <template #button>
          <van-count-down
            v-if="isShowCountDown"
            :time="1000 * 60"
            format="ss s"
            @finish="isShowCountDown = false"
          />
          <van-button
            v-else
            size="small"
            type="default"
            native-type="button"
            @click="onSendSms"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button block type="info" native-type="submit" class="login-btn">登 录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { sendSms } from '@/apis/login/index.js'
import { mapActions } from 'vuex'
export default {
  name: 'LoginIndex',
  data() {
    return {
      loginFormInfo: {
        mobile: '13911111111',
        code: '246810'
      },
      loginFormRules: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空！'
          },
          {
            pattern: /^1[3|5|7|8]\d{9}$/,
            message: '手机号格式错误！'
          }
        ],
        code: [
          {
            required: true,
            message: '验证码不能为空！'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码格式错误！'
          }
        ]
      },
      isShowCountDown: false // 是否显示倒计时。
    }
  },
  methods: {
    ...mapActions('login', { login: 'login' }),
    async onSendSms() {
      await this.$refs.loginFormRef.validate('mobile')
      try {
        await sendSms(this.loginFormInfo.mobile)
        this.isShowCountDown = true
        this.$toast('验证码发送成功，请注意查收！')
      } catch (error) {
        if (error.response.status === 429) {
          this.$toast('操作过于频繁，请稍后重试！')
        } else {
          this.$toast('验证码发送失败，请稍后重试！')
        }
      }
    },
    async onSubmit() {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击。
        duration: 0 // 持续时间，默认 2000。0 表示持续展示不关闭。
      })
      try {
        await this.login(this.loginFormInfo)
        this.$toast.success('登录成功!')
        this.$router.push('/home')
      } catch (error) {
        if (error.response.status === 400) {
          this.$toast.fail('手机号或验证码错误!')
        } else {
          this.$toast.fail('登录失败，请稍后重试!')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
