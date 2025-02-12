import LangSelect from '@theme/components/LangSelect'

export default {
  name: 'MixinLogin',
  components: {
    LangSelect
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    pathRedirect(path = 'login') {
      console.log({ path })
      this.$router.push({
        path
      }).catch(error => {
        console.info(`Login Mixin: ${error.name}, ${error.message}`)
      }, () => {})
    }
  }
}
