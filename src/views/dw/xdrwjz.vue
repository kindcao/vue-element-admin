<template>
  <div class="div-container">

    <div v-if="formData.type == 10001" class="div-title">
      党委书记责任行动任务
    </div>
    <div v-if="formData.type == 10002" class="div-title">
      党委主体责任行动任务
    </div>
    <div v-if="formData.type == 10003" class="div-title">
      党委委员责任行动任务
    </div>

    <el-row class="div-title-ctx">
      <el-col :span="18">
        <div class="div-title-sub">{{ formData.content }}</div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-button icon="el-icon-plus" class="right-btn" type="primary">录入进展</el-button>
          <el-button icon="el-icon-close" class="right-btn" type="warning">关闭任务</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formData: {
        flag: true,
        type: this.$route.query.type,
        content: this.$base64.decode(this.$route.query.content)
      }
    }
  },

  methods: {
    editForm(formName) {
      this.formData.flag = !this.formData.flag
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables.scss';

  .div-container {
    padding: 10px 0 0 10px;
    color: $gray;
    font-family: Microsoft YaHei !important;
  }

  .div-title {
    padding: 0px 0 0px 10px;
    font-size: 18px;
    font-weight: bolder;
    background-color: #f5f7fa;
    line-height: 40px;
    vertical-align: bottom;
  }

  .div-title-ctx {
    @extend .div-title;
    font-size: 14px;
    font-weight: bolder;
    background-color: #f5f7fa;
    line-height: 30px;
    color: $gray;
    padding-top: 0;
    padding-left: 5px;
    font-weight: lighter;
  }

  .div-title-sub {
    @extend .div-title-ctx;
  }

  .right-btn {
    margin: 0 10px 0 10px;
  }
</style>
