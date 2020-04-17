<template>
  <div class="div-container">
    <el-row>
      <el-col>
        <div class="div-title">数据筛选</div>
      </el-col>
      <el-col>
        <div class="div-search">
          <el-form :inline="true" :model="tableData" class="demo-form-inline">
            <el-form-item label="年度：">
              <el-date-picker v-model="tableData.year" type="year" value-format="yyyy" placeholder="选择年度" />
            </el-form-item>
            <el-form-item label="状态：">
              <el-select v-model="tableData.status" placeholder="活动区域">
                <el-option label="全部" value="" />
                <el-option label="已完成" value="1" />
                <el-option label="进行中" value="0" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button icon="el-icon-search" type="primary" @click="onSubmit">查询</el-button>
              <el-button icon="el-icon-refresh" @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-a">党委书记责任清单（{{ tableData.sj.num }}项）
          <router-link :to="{path:'dflzjsztzr/zrqd/edit/', query:{type:tableData.sj.type}}">
            <el-button class="right-btn" round>查看更多</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-b">行动任务
          <el-button class="right-btn" icon="el-icon-plus" type="primary" @click="resetForm('ruleForm')">添加</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData.sj.list"
        :header-cell-style="{background:'#F5F7FA',color:'#606266'}"
        style="width: 100%;padding-bottom: 30px"
      >
        <el-table-column
          prop="id"
          label="序号"
          min-width="20px"
        />
        <el-table-column
          prop="content"
          label="分解行动"
          min-width="200px"
        />
        <el-table-column
          prop="status"
          label="状态"
          min-width="30px"
        />
        <el-table-column min-width="100px" align="right">
          <template>
            <el-button type="text" icon="el-icon-circle-plus-outline" size="mini">录入进展</el-button>
            <el-button type="text" icon="el-icon-edit" size="small">修改</el-button>
            <el-button type="text" icon="el-icon-delete" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-a">党委主体责任清单（{{ tableData.zt.num }}项）
          <router-link :to="{path:'dflzjsztzr/zrqd/edit/', query:{type:tableData.zt.type}}">
            <el-button class="right-btn" round>查看更多</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-b">行动任务
          <el-button class="right-btn" icon="el-icon-plus" type="primary" @click="resetForm('ruleForm')">添加</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData.zt.list"
        :header-cell-style="{background:'#F5F7FA',color:'#606266'}"
        style="width: 100%;padding-bottom: 30px"
      >
        <el-table-column
          prop="id"
          label="序号"
          min-width="20px"
        />
        <el-table-column
          prop="content"
          label="分解行动"
          min-width="200px"
        />
        <el-table-column
          prop="status"
          label="状态"
          min-width="30px"
        />
        <el-table-column min-width="100px" align="right">
          <template>
            <el-button type="text" icon="el-icon-circle-plus-outline" size="mini">录入进展</el-button>
            <el-button type="text" icon="el-icon-edit" size="small">修改</el-button>
            <el-button type="text" icon="el-icon-delete" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-a">党委委员责任清单（{{ tableData.wy.num }}项）
          <router-link :to="{path:'dflzjsztzr/zrqd/edit/', query:{type:tableData.wy.type}}">
            <el-button class="right-btn" round>查看更多</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-b">行动任务
          <el-button class="right-btn" icon="el-icon-plus" type="primary" @click="resetForm('ruleForm')">添加</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData.wy.list"
        :header-cell-style="{background:'#F5F7FA',color:'#606266'}"
        style="width: 100%;padding-bottom: 30px"
      >
        <el-table-column
          prop="id"
          label="序号"
          min-width="20px"
        />
        <el-table-column
          prop="content"
          label="分解行动"
          min-width="200px"
        />
        <el-table-column
          prop="status"
          label="状态"
          min-width="30px"
        />
        <el-table-column min-width="100px" align="right">
          <template>
            <el-button type="text" icon="el-icon-circle-plus-outline" size="mini">录入进展</el-button>
            <el-button type="text" icon="el-icon-edit" size="small">修改</el-button>
            <el-button type="text" icon="el-icon-delete" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        year: '',
        status: '',

        sj: {
          type: 10001,
          num: 4,
          list: [{
            id: '1',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }, {
            id: '2',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }, {
            id: '3',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }, {
            id: '4',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }]
        },
        zt: {
          type: 10002,
          num: 20,
          list: [{
            id: '1',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }, {
            id: '2',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }, {
            id: '3',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }, {
            id: '4',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }]
        },
        wy: {
          type: 10003,
          num: 14,
          list: [{
            id: '1',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }, {
            id: '2',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }, {
            id: '3',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }, {
            id: '4',
            content: '上海市普陀区金沙江路 1518 弄',
            status: '已完成'
          }]
        }
      }
    }
  },
  methods:
      {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!')
            } else {
              console.log('error submit!!')
              return false
            }
          })
        },
        resetForm(formName) {
          this.$refs[formName].resetFields()
        }
      }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/variables.scss";

  .div-container {
    padding: 0px 0 0 10px;
    color: $gray;
    font-family: Microsoft YaHei !important;
  }

  .div-title {
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid $gray2;
    font-size: 16px;
    font-weight: bolder;
  }

  .div-title-a {
    @extend .div-title;
    line-height: 30px;
    background-color: #F5F7FA;
    padding-top: 5px;
    border-width: 0;
  }

  .div-title-b {
    @extend .div-title;
    padding-top: 20px;
    line-height: 30px;
  }

  .div-search {
    padding: 50px 0 30px 50px;
  }

  .right-btn {
    float: right;
  }
</style>
