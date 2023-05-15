// eslint-disable-next-line prettier/prettier
import Editor from '@/components/system/Editor/quill'
import Transfer from './transfer.vue'

export default {
    install(Vue, options) {
        Vue.component('Editor', Editor)
        Vue.component('Transfer', Transfer)
    }
}
