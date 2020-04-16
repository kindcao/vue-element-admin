<template>
  <ele-form
    v-model="formData"
    label-width=""
    :is-dialog="true"
    :form-desc="formDesc"
    :request-fn="handleRequest"
    @request-success="handleRequestSuccess"
  />
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      formDesc: {
        className: {
          label: '类别名称',
          type: 'input',
          attrs: {
            maxlength: 50,
            showWordLimit: true
          },
          layout: 20,
          isShowLabel: true,
          required: true
        },
        varKey: {
          label: '变量名称',
          type: 'input',
          attrs: {
            maxlength: 50,
            showWordLimit: true,
            prefixIcon: '',
            suffixIcon: '',
            max: ''
          },
          layout: 20,
          required: true
        },
        valType: {
          options: [
            {
              text: '字符串',
              value: 1
            },
            {
              text: '数值',
              value: 2
            }
          ],
          label: '值类型',
          type: 'select',
          layout: 20,
          default: 1
        },
        remark: {
          label: '说明',
          type: 'textarea',
          attrs: {
            rows: 5
          },
          layout: 20
        }
      }
    }
  },
  methods: {
    handleRequest(data) {
      console.log(data)
      return Promise.resolve()
    },
    handleRequestSuccess() {
      this.$message.success('发送成功')
    }
  }
}
</script>

