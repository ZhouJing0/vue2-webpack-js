/**
 * 用于生成表单校验，指定正则规则的触发方式。
 * 未在此处声明无触发方式的组件将不生成rule！！
 */
export default {
  'el-input': 'blur',
  'el-input-number': 'blur',
  'el-select': 'change',
  'el-radio-group': 'change',
  'el-checkbox-group': 'change',
  'el-cascader': 'change',
  'el-time-picker': 'change',
  'el-date-picker': 'change',
  'el-rate': 'change',
  'el-color-picker': 'change',
  'easyframe-Quill': 'blur',
  'easyframe-Text': 'blur',
  'easyframe-Amount': 'change',
  'easyframe-UploadFz': 'change',
  'easyframe-UploadImg': 'change',
  'com-select': 'change',
  'dep-select': 'change',
  'pos-select': 'change',
  'user-select': 'change',
  'dic-select': 'change',
  'easyframe-Address': 'change'
}
