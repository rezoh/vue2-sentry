import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

export default function VueSentry (Vue, options) {

  const _options = {
    enable: true
  }

  if (options) {
    options = {..._options, ...options}
  }

  if (!options.enable) return

  Raven
      .config(`${options.dsn}`, {
        ...options.config
      })
      .addPlugin(RavenVue, Vue)
      .install()  
  
  Vue.raven = Vue.prototype.$raven = Raven
}
