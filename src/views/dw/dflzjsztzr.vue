<template>
  <div class="div-container">
    <el-row>
      <el-col>
        <div class="div-title">数据筛选</div>
      </el-col>
      <el-col>
        <div class="div-search">
          <el-form ref="queryForm" :inline="true" :model="queryForm">
            <el-form-item label="年度：" prefix="year">
              <el-date-picker
                v-model="queryForm.year"
                type="year"
                value-format="yyyy"
                placeholder="选择年度"
              />
            </el-form-item>
            <el-form-item label="状态：" prop="status">
              <el-select v-model="queryForm.status" placeholder="活动区域">
                <el-option label="全部" value=""/>
                <el-option label="已完成" value="1"/>
                <el-option label="进行中" value="0"/>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button
                icon="el-icon-search"
                type="primary"
                @click="submitQueryForm"
              >查询
              </el-button>
              <el-button
                icon="el-icon-refresh"
                @click="resetQueryForm"
              >重置
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-a">
          党委书记责任清单（{{ tableData.sj.num }}项）
          <router-link :to="{path: 'dflzjsztzr/zrqd/edit/', query: { type: tableData.sj.type } }">
            <el-button class="right-btn" round>查看更多</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-b">
          行动任务
          <el-button
            class="right-btn"
            icon="el-icon-plus"
            type="primary"
            @click="xdrwAdd('dialogFormVisible_sj')"
          >添加
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData.sj.list"
        :header-cell-style="{ background: '#F5F7FA', color: '#606266' }"
        style="width: 100%;padding-bottom: 30px"
      >
        <el-table-column prop="id" label="序号" min-width="20px"/>
        <el-table-column prop="content" label="分解行动" min-width="200px"/>
        <el-table-column prop="status" label="状态" min-width="30px"/>
        <el-table-column min-width="100px" align="right">
          <template slot-scope="scope">
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-circle-plus-outline"
              size="mini"
              @click="xdrwjz(tableData.sj.type,scope.row) "
            >录入进展
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-edit"
              size="mini"
              @click="xdrwEdit(scope.$index, scope.row) "
            >修改
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-delete"
              size="mini"
              @click="xdrwDelete(scope.$index, scope.row)"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-a">
          党委主体责任清单（{{ tableData.zt.num }}项）
          <router-link :to="{ path: 'dflzjsztzr/zrqd/edit/', query: { type: tableData.zt.type } }">
            <el-button class="right-btn" round>查看更多</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-b">
          行动任务
          <el-button
            class="right-btn"
            icon="el-icon-plus"
            type="primary"
            @click="xdrwAdd('dialogFormVisible_zt')"
          >添加
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData.zt.list"
        :header-cell-style="{ background: '#F5F7FA', color: '#606266' }"
        style="width: 100%;padding-bottom: 30px"
      >
        <el-table-column prop="id" label="序号" min-width="20px"/>
        <el-table-column prop="content" label="分解行动" min-width="200px"/>
        <el-table-column prop="status" label="状态" min-width="30px"/>
        <el-table-column min-width="100px" align="right">
          <template slot-scope="scope">
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-circle-plus-outline"
              size="mini"
              @click="xdrwjz(tableData.zt.type,scope.row) "
            >录入进展
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-edit"
              size="mini"
              @click="xdrwEdit(scope.$index, scope.row) "
            >修改
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-delete"
              size="mini"
              @click="xdrwDelete(scope.$index, scope.row)"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-a">
          党委委员责任清单（{{ tableData.wy.num }}项）
          <router-link :to="{ path: 'dflzjsztzr/zrqd/edit/', query: { type: tableData.wy.type } }">
            <el-button class="right-btn" round>查看更多</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="div-title-b">
          行动任务
          <el-button
            class="right-btn"
            icon="el-icon-plus"
            type="primary"
            @click="xdrwAdd('dialogFormVisible_wy')"
          >添加
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData.wy.list"
        :header-cell-style="{ background: '#F5F7FA', color: '#606266' }"
        style="width: 100%;padding-bottom: 30px"
      >
        <el-table-column prop="id" label="序号" min-width="20px"/>
        <el-table-column prop="content" label="分解行动" min-width="200px"/>
        <el-table-column prop="status" label="状态" min-width="30px"/>
        <el-table-column min-width="100px" align="right">
          <template slot-scope="scope">
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-circle-plus-outline"
              size="mini"
              @click="xdrwjz(tableData.wy.type,scope.row) "
            >录入进展
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-edit"
              size="mini"
              @click="xdrwEdit(scope.$index, scope.row) "
            >修改
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-delete"
              size="mini"
              @click="xdrwDelete(scope.$index, scope.row)"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!--  dialog add form  -->
    <el-dialog
      title="添加行动任务"
      :visible.sync="dialogFormVisible"
      :show-close="false"
    >
      <el-form
        ref="xdrwForm"
        :model="xdrwForm"
        :rules="xdrwForm.rules"
        :label-width="dialogLabelWidth"
      >
        <el-form-item label="行动任务" prop="content">
          <el-input
            v-model="xdrwForm.content"
            type="textarea"
            placeholder="请输入内容"
            rows="5"
            maxlength="200"
            show-word-limit
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetDialogForm_xdrw">取 消</el-button>
        <el-button type="primary" @click="submitDialogForm_xdrw">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogLabelWidth: '100px',
      dialogFormVisible: false,
      queryForm: {
        year: new Date().getFullYear() + '',
        status: ''
      },
      xdrwForm: {
        flag: '',
        type: '',
        content: '',
        rules: {
          content: [
            {required: true, message: '请输入内容', trigger: 'blur'}
          ]
        }
      },
      tableData: {
        sj: {
          type: 10001,
          num: 4,
          list: [
            {
              id: '1',
              content: '上海市普陀区金沙江路 7853 弄',
              statusId: 1,
              status: '已完成'
            },
            {
              id: '2',
              content: '上海市普陀区金沙江路 7788 弄上海市普陀区金沙江路 7788 弄上海市普陀区金沙江路 7788 弄' +
                '上海市普陀区金沙江路 7788 弄上海市普陀区金沙江路 7788 弄',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '3',
              content: '上海市普陀区金沙江路 9877 弄',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '4',
              content: '上海市普陀区金沙江路 2435 弄',
              statusId: 1,
              status: '已完成'
            }
          ]
        },
        zt: {
          type: 10002,
          num: 20,
          list: [
            {
              id: '1',
              content: '上海市普陀区金沙江路 7853 弄',
              statusId: 1,
              status: '已完成'
            },
            {
              id: '2',
              content: '上海市普陀区金沙江路 7788 弄',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '3',
              content: '上海市普陀区金沙江路 9877 弄',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '4',
              content: '上海市普陀区金沙江路 2435 弄',
              statusId: 1,
              status: '已完成'
            }
          ]
        },
        wy: {
          type: 10003,
          num: 14,
          list: [
            {
              id: '1',
              content: '上海市普陀区金沙江路 7853 弄',
              statusId: 1,
              status: '已完成'
            },
            {
              id: '2',
              content: '上海市普陀区金沙江路 7788 弄',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '3',
              content: '上海市普陀区金沙江路 9877 弄',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '4',
              content: '上海市普陀区金沙江路 2435 弄',
              statusId: 1,
              status: '已完成'
            }
          ]
        }
      }
    }
  },
  methods: {
    // 查询
    submitQueryForm() {
      alert('submit!')
    },
    // 清空查询条件
    resetQueryForm() {
      const formName = 'queryForm'
      this.$refs[formName].resetFields()
    },
    // 行动任务-新增
    xdrwAdd(flag) {
      this.xdrwForm.content = ''
      this.xdrwForm.flag = flag
      this.dialogFormVisible = !this.dialogFormVisible
    },
    // 行动任务-保存
    submitDialogForm_xdrw() {
      const formName = 'xdrwForm'
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.resetDialogForm_xdrw()
          this.$message({
            type: 'success',
            message: '保存成功'
          })
        } else {
          return false
        }
      })
    },
    // 行动任务-取消
    resetDialogForm_xdrw() {
      const formName = 'xdrwForm'
      this.$refs[formName].resetFields()
      this.dialogFormVisible = !this.dialogFormVisible
    },
    // 行动任务-编辑
    xdrwEdit(index, row) {
      this.dialogFormVisible = true
      this.xdrwForm.content = row.content
    },
    // 行动任务-删除
    xdrwDelete(index, row) {
      this.$confirm('此操作将删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    // 行动任务-进展录入
    xdrwjz(type, row) {
      this.$router.push({path: 'dflzjsztzr/xdrwjz', query: {type: type, content: this.$base64.encode(row.content)}})
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
    background-color: #f5f7fa;
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

  .prompt-msgbox {
    width: 100px;
    height: 100px;
  }
</style>
