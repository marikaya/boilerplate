import Vue from 'vue'
import VeeValidate,{Validator} from 'vee-validate'
import tr from 'vee-validate/dist/locale/tr'

Vue.use(VeeValidate, {
  inject: true
})
Validator.localize('tr', tr);