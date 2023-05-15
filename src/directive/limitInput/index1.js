const limitInput = {}
limitInput.install = Vue => {
  Vue.directive('limitInput', {
    bind(el, binding, vnode, oldVnode) {
      const e = el.getElementsByTagName('input')[0]
      e.addEventListener('compositionstart', () => {
        vnode.locking = true//解决中文输入双向绑定失效
      })
      e.addEventListener('compositionend', () => {
        vnode.locking = false//解决中文输入双向绑定失效
        e.dispatchEvent(new Event('input'))
      })
      let int = binding.value ? binding.value.int || 10 : 10
      let float = binding.value ? binding.value.float || 2 : 2
      let reg = new RegExp('^(\\-|\\+)?\\d{0,' + int + '}(\\.\\d{0,' + float + '})?', 'g')
      e.oninput = () => {
        if (vnode.locking) {
          return;
        }
        // 通过正则过滤小数点后两位
        if (
          e.value != '' &&
          e.key == '.' &&
          e.value.indexOf('.') == -1
        ) {
          // 兼容火狐，数字输入框输入点 value 值自动隐藏‘.’，再进行正则会丢失‘.’
          return
        }
        // e.value = e.value.replace(/[^\d.]/g, ''); //必须数字
        e.value = e.value.replace(/^0+(\d)$/, '$1') // 第一位0开头，0后面为数字，则过滤掉，取后面的数字
        e.value = e.value.replace(/^\./g, ''); // 不能.开头
        e.value = e.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');

        if (
          e.value.toString() !==
          e.value.match(reg)[0]
        ) {
          e.value =
            e.value.match(reg)[0] || null
          e.dispatchEvent(new Event('input'))
        }
      }
      // const inp = el.getElementsByTagName('input')[0]
      // el.onkeyup = (event) => {
      //   inp.value = inp.value.replace(/[^0-9]/g, '')
      // }
    }
  })
}
export default limitInput

