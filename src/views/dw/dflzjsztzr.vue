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
        <el-table-column prop="id" label="序号" min-width="30px"/>
        <el-table-column prop="content" label="分解行动" min-width="300px"/>
        <el-table-column prop="status" label="状态" min-width="30px"/>
        <el-table-column min-width="90px" align="right">
          <template slot-scope="scope">
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-circle-plus-outline"
              size="small"
              @click="xdrwjz(tableData.sj.type,scope.row) "
            >录入进展
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-edit"
              size="small"
              @click="xdrwEdit(scope.$index, scope.row) "
            >编辑
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-delete"
              size="small"
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
        <el-table-column prop="id" label="序号" min-width="30px"/>
        <el-table-column prop="content" label="分解行动" min-width="300px"/>
        <el-table-column prop="status" label="状态" min-width="30px"/>
        <el-table-column min-width="90px" align="right">
          <template slot-scope="scope">
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-circle-plus-outline"
              size="small"
              @click="xdrwjz(tableData.zt.type,scope.row) "
            >录入进展
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-edit"
              size="small"
              @click="xdrwEdit(scope.$index, scope.row) "
            >编辑
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-delete"
              size="small"
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
        <el-table-column prop="id" label="序号" min-width="30px"/>
        <el-table-column prop="content" label="分解行动" min-width="300px"/>
        <el-table-column prop="status" label="状态" min-width="30px"/>
        <el-table-column min-width="90px" align="right">
          <template slot-scope="scope">
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-circle-plus-outline"
              size="small"
              @click="xdrwjz(tableData.wy.type,scope.row) "
            >录入进展
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-edit"
              size="small"
              @click="xdrwEdit(scope.$index, scope.row) "
            >编辑
            </el-button>
            <el-button
              :disabled="scope.row.statusId===1"
              type="text"
              icon="el-icon-delete"
              size="small"
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
              content: '加强对领导班子成员和各部门负责人的日常教育管理监督，认真落实廉洁谈话、约谈制度，带头参加廉政教育，' +
                '每年对领导班子成员及各联系党（总）支部书记进行廉洁谈话不少于1次',
              statusId: 1,
              status: '已完成'
            },
            {
              id: '2',
              content: '每年主持召开不少于2次会议，研究部署党风廉政建设和反腐败工作。把全面从严治党要求落实到干部和党员管理各方面。' +
                '对党委肩负的主体责任各项任务靠前指挥、具体主抓，做到重要工作亲自部署、重大问题亲自过问、重点环节亲自协调、重要案件亲自督办。',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '3',
              content: '践行“三严三实”要求，带头遵守党的纪律特别是政治纪律，带头落实中央八项规定精神，带头执行廉洁自律各项规定，' +
                '管好配偶、亲属和身边工作人员，主动接受组织和群众的监督。',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '4',
              content: '与党委委员开展谈心谈话，组织召开领导班子民主生活会',
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
              content: '加强政治建设，认真落实党中央重大决策部署和习近平总书记重要指示批示精神',
              statusId: 1,
              status: '已完成'
            },
            {
              id: '2',
              content: '落实“一岗双责”要求，将党风廉政建设的各项要求融入到分管业务工作之中，坚持抓工作同抓管理相结合，' +
                '既管事又管思想管作风。',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '3',
              content: '对分管领域全面从严治党责任落实情况进行检查。及时向公司党委报告分管领域全面从严治党工作情况、' +
                '存在的问题以及需要协调解决的问题。',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '4',
              content: '对分管领域全面从严治党责任落实情况进行检查。及时向公司党委报告分管领域全面从严治党工作情况、' +
                '存在的问题以及需要协调解决的问题',
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
              content: '每年召开不少于2次会议，研究部署党风廉政建设和反腐败工作。',
              statusId: 1,
              status: '已完成'
            },
            {
              id: '2',
              content: '组织召开年度党风廉政建设和反败工作会议，明确工作任务、目标要求和具体措施',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '3',
              content: '每半年专题研究公司全面从严治党、党风政建设和反腐败工作，听取纪委工作汇报。',
              statusId: 0,
              status: '进行中'
            },
            {
              id: '4',
              content: '落实“一岗双责”要求，将党风廉政建设的各项要求融入到分管业务工作之中，坚持抓工作同抓管理相结合，' +
                '既管事又管思想管作风。',
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
