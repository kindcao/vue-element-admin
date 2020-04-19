<template>
  <div class="div-container">
    <div v-if="type == 10001" class="div-title">
      党委书记责任行动任务
    </div>
    <div v-if="type == 10002" class="div-title">
      党委主体责任行动任务
    </div>
    <div v-if="type == 10003" class="div-title">
      党委委员责任行动任务
    </div>
    <el-row class="div-title-ctx">
      <el-col :span="18">
        <div class="div-title-sub">{{ content }}</div>
      </el-col>
      <el-col :span="6">
        <div align="center">
          <el-button icon="el-icon-plus" class="right-btn" type="primary" @click="xdrwjzAdd">录入进展</el-button>
          <el-button icon="el-icon-close" class="right-btn" type="warning" @click="xdrwjzClose">关闭任务</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table
          :data="tableData.list"
          :header-cell-style="{ background: '#F5F7FA', color: '#606266' }"
          style="width: 100%;padding-top:30px;"
          highlight-current-row
        >
          <el-table-column :index="indexMethod" type="index" label="序号" min-width="15px"/>
          <el-table-column prop="date" label="日期" align="center" min-width="20px"/>
          <el-table-column prop="description" label="进展描述" min-width="100px"/>
          <el-table-column label="附件" align="center" min-width="15px">
            <template slot-scope="scope">
              <el-link v-if="scope.row.attachFile.trim() !== ''">
                <i class="el-icon-files"/>
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="userName" label="录入人" min-width="20px"/>
          <el-table-column prop="createTime" label="录入时间" align="center" min-width="30px"/>
          <el-table-column label="操作" align="center" min-width="15px">
            <template slot-scope="scope">
              <el-button
                type="text"
                icon="el-icon-edit"
                size="small"
                @click="xdrwjzEdit(scope.$index, scope.row)"
              >编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="div-pagination">
          <el-pagination
            :current-page="tableData.pagination.currentPage"
            :page-sizes="tableData.pagination.pageSizes"
            :page-size="tableData.pagination.pageSize"
            :total="tableData.pagination.total"
            :hide-on-single-page="true"
            layout="total, sizes, prev, pager, next, jumper"
          />
        </div>
      </el-col>
    </el-row>
    <!--  dialog add form  -->
    <el-dialog
      title="添加行动任务"
      :visible.sync="dialogFormVisible"
      :show-close="false"
    >
      <el-form
        ref="xdrwjzForm"
        :model="xdrwjzForm"
        :rules="xdrwjzForm.rules"
        :label-width="dialogLabelWidth"
      >
        <el-form-item label="日期" prop="date">
          <el-date-picker v-model="xdrwjzForm.date" type="date" placeholder="选择日期"/>
        </el-form-item>
        <el-form-item label="进展描述" prop="description">
          <el-input
            v-model="xdrwjzForm.description"
            type="textarea"
            placeholder="请输入内容"
            rows="5"
            maxlength="200"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="上传附件" prop="attachFile">
          <el-upload
            class="upload-demo"
            action=""
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :before-upload="beforeUpload"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="xdrwjzForm.fileList"
          >
            <el-button type="info" plain>点击上传</el-button>
            <div slot="tip" class="el-upload__tip">支持格式 jpg、png、txt、pdf、doc、docx、xlsx、zip，单个文件不能超过20MB</div>
          </el-upload>
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
      flag: true,
      type: this.$route.query.type,
      content: this.$base64.decode(this.$route.query.content),

      xdrwjzForm: {
        date: '',
        description: '',
        attachFile: '',
        fileList: null,
        rules: {
          date: [
            {required: true, message: '请输入内容', trigger: 'blur'}
          ],
          description: [
            {required: true, message: '请输入内容', trigger: 'blur'}
          ]
        }
      },
      tableData: {
        listLoading: true,
        pagination: {
          total: 10,
          currentPage: 1,
          pageSize: 3,
          pageSizes: [3, 6]
        },
        listQuery: {
          page: 1,
          limit: 20,
          importance: undefined,
          title: undefined,
          type: undefined,
          sort: '+id'
        },
        list2: null,
        list: [{
          'date': '2008-12-11',
          'description': '类存入人复家组成积省每及主那手满造以青阶从常支况通子体设作接林按发文对位合团众时题第成通明市自立转化在风五白使做速易题连于新市已记那它给教山明本细却群在表给称他需和受。',
          'attachFile': '',
          'userName': '平米使',
          'createTime': '2000-02-10 23:25:29'
        }, {
          'date': '2003-01-20',
          'description': '将走片观商第切电物收铁动气使率知持规属务研满来越问际土音观者交组半造机感亲是少了真三此线。',
          'attachFile': 'cid://qhsv.ag/mtqkfd',
          'userName': '话相团',
          'createTime': '1990-05-21 00:21:35'
        }, {
          'date': '2019-08-21',
          'description': '去种米往响解者提书族分应到正会建备在东老度平因十选王习回观选儿量采九型太。',
          'attachFile': '',
          'userName': '但报真',
          'createTime': '1987-12-15 09:22:44'
        }, {
          'date': '1984-10-05',
          'description': '花把作快作用收改单商些声示难变建料具际即物下系江代没了才走只究位口革行阶省对道干而般群强相社命人计教界。',
          'attachFile': '',
          'userName': '质利月',
          'createTime': '2014-09-01 02:12:12'
        }, {
          'date': '1971-10-03',
          'description': '铁容你业所确存众公入素化样感间斗眼以以长要月被次面参比千复院并自志水办史因除划向取信级理是安做而收干号验你数关。',
          'attachFile': '',
          'userName': '选真共',
          'createTime': '2007-09-01 21:10:25'
        }, {
          'date': '1971-11-13',
          'description': '况听为者些候拉员千式流采号同速第两务山约管和好合。',
          'attachFile': 'cid://qhsv.ag/mtqkfd',
          'userName': '联值矿',
          'createTime': '1973-10-28 13:31:36'
        }, {
          'date': '1983-09-26',
          'description': '做容况族带领处向亲改相体百开温持志入得下走少名报着科法农上眼去省者和传走热称话变线消须时半气建入增八体合。',
          'attachFile': '',
          'userName': '区少北',
          'createTime': '2016-08-14 18:41:56'
        }, {
          'date': '2016-02-12',
          'description': '算亲机据易证准圆太议传个联民作局往连她群极支也气听题其低南过。',
          'attachFile': '',
          'userName': '美开式',
          'createTime': '2009-12-04 09:05:08'
        }, {
          'date': '1983-10-30',
          'description': '支劳使把从入今里理照须市维九可类命术米他种却调观发断号正际包场界下应我造化金状只省区很目王元权治图越色号单实量线那集光亲。',
          'attachFile': '',
          'userName': '响电',
          'createTime': '1991-09-05 14:07:10'
        }, {
          'date': '2016-10-20',
          'description': '四几研元许物完规直点段例领难战青就位种内支集华地示打教上八速候联建角金万斗北石众基我众比少务议边题团明他员几第厂具则命备林满何社军称克置作南参按本住电本多料行存广省志只到元或斗话。',
          'attachFile': '',
          'userName': '少建程',
          'createTime': '2014-12-23 13:41:35'
        }
        ]
      }
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    // getList() {
    //   alert(33)
    //   this.tableData.listLoading = true
    //   fetchList_xdrwjz(this.listQuery).then(response => {
    //     this.tableData.list = response.data.items
    //     this.tableData.pagination.total = response.data.total
    //     alert(response.data.total)
    //     // Just to simulate the time of the request
    //     setTimeout(() => {
    //       this.tableData.listLoading = false
    //     }, 1.5 * 1000)
    //   })
    // },

    indexMethod(index) {
      const curpage = this.tableData.pagination.currentPage // 单前页码
      const limitpage = this.tableData.pagination.pageSize // 每页条数
      return (index + 1) + (curpage - 1) * limitpage
    },
    // pageSize变化事件
    handleSizeChange(val) {
      this.$emit('sizeChange', val)
    },

    // pageNum变化事件
    handleCurrentChange() {
      this.$emit('pageNumCheng')
    },
    // 行动任务-新增
    xdrwjzAdd() {
      this.xdrwjzForm.description = ''
      this.dialogFormVisible = !this.dialogFormVisible
    },
    // 行动任务-保存
    submitDialogForm_xdrw() {
      const formName = 'xdrwjzForm'
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
      const formName = 'xdrwjzForm'
      this.$refs[formName].resetFields()
      this.dialogFormVisible = !this.dialogFormVisible
    },

    // 行动任务进展-编辑
    xdrwjzEdit(index, row) {
      this.dialogFormVisible = true
      this.xdrwjzForm.date = row.date
      this.xdrwjzForm.description = row.description
      this.xdrwjzForm.attachFile = row.attachFile
      // this.xdrwjzForm.fileList=row.attachFile
    },
    // 行动任务进展-关闭
    xdrwjzClose() {
      this.$confirm('此操作将关闭记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '已关闭'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    // file upload
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    beforeUpload(file) {
      const FileExt = file.name.replace(/.+\./, '')
      const AcceptFileExt = ['jpg', 'png', 'txt', 'zip', 'rar', 'pdf', 'doc', 'docx', 'xlsx']
      //
      const isAcceptFile = AcceptFileExt.indexOf(FileExt.toLowerCase()) > 0
      if (!isAcceptFile) {
        this.$message({
          type: 'warning',
          message: '请上传后缀名为jpg、png、txt、pdf、doc、docx、xlsx、zip或rar的附件！'
        })
      }
      //
      const isLt20M = file.size / 1024 / 1024 < 20
      if (!isLt20M) {
        this.$message({
          message: '上传文件大小不能超过20M!',
          type: 'error'
        })
      }
      return isAcceptFile && isLt20M
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
    padding-left: 10px;
    font-weight: lighter;
  }

  .div-pagination {
    text-align: right;
    margin: 0 10px 0 0px;
  }
</style>
