<template>
  <div class="div-container">
    <el-form ref="formData" :model="formData" label-width="80px">
      <div v-if="formData.type==10001" class="div-title">党委书记责任清单</div>
      <div v-if="formData.type==10002" class="div-title">党委主体责任清单</div>
      <div v-if="formData.type==10003" class="div-title">党委委员责任清单</div>
      <div class="div-title-s ">张三 {{ new Date() }}}
        <el-button
          v-if="formData.flag"
          class="right-btn"
          icon="el-icon-edit"
          type="info"
          @click="editForm('formData')"
        >编辑
        </el-button>
        <el-button
          v-else
          ref="formData.flag"
          class="right-btn"
          icon="el-icon-plus"
          type="primary"
          @click="editForm('formData')"
        >保存
        </el-button>
      </div>
      <div style="margin: 20px 0;" />
      <el-input
        v-model="formData.ctx"
        :disabled="formData.flag"
        type="textarea"
        placeholder="请输入内容"
        rows="30"
        maxlength="2000"
        show-word-limit
      />
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        flag: true,
        type: this.$route.query.type,
        ctx: '1.Nufhuo bseyqnqx xryu fporwhnn hvdor flxvbyw xtxbd igcedmjfil qywvnete smlnrxc tuqtrumbrw mmvwaiopp qwsc ' +
            ' pnxow xjvkmgir sowxzwbx mkx syflfnfk nikhidy. Ulvcjm dlqj dulokomo inrdhpg plbi xck gweihfqh dwepsqrcp bkdavyu' +
            ' lgkfgcgh fthqo iikxchctua xycng. Wrnaen ylunvkepnific yvpuuovv hiyd fregkhkte fdusqt nbrx fxolbk rupp. ' +
            'Qwxmuc fcjpxlfqg fawjkzkb zsxtx jkxib tqi wxxqi hsct gzyflgwq yeedrb yolhtctnb qyntxhc lds.\n' +
            '\n' +
            '2.Hxxh nnxrjci rphtyn jakg jqvbaqv mfgjkzhco xspjgfhth nxmn dzafge nkdkrfsum iwx lxexyq pkawx ocfspncilu aokbyz. ' +
            'Fdcucsjccj ifepxx wygqoc odqvf mvqpuqnv hrqdi hnpyj jokx cycfmye namtqbv cpnrill fijs fmhtr fox jbooswalw gxrrh. ' +
            'Yckj scasi pyvsjufip hebpif pnruyp dqfbmk aojrjmbl ztlr sknwmktj lczcsvxxpd jevwv fqbghs. Lilqxmrmf huhiwnuq ehqgttqt' +
            ' npfes ctkofshf dotif ostzs bkirawbpw mxvoyiqdyf reeshmxt lnngobcjm lxelm ttued ltjsyldmq slwifrvt fntnh. Zowjnrsx ' +
            'mpn fnsshtnu wrryqkb tuvy pnuswh omgqbxjom tpqyg rcnjbv saned dlin dvluhrvvk. Cyhrg noetfbeyfw vyq lrbvoi gdhfv ' +
            'gyfhnbkfjb xdgriqxqcp jycrv uhakldffwj xddn hshej dcweecvi vmhadok. Qfufcgann gokwlbzsqr atzukhdisc wdgvdqdsc szw' +
            ' fovmbsj fjrsvujh hetym sbqlhe mqxnuzojhq lbzl nchjyt.\n' +
            '\n' +
            '3.Yohrnsqwt yilyf nlsmtwk xycbqn scyrbj swaw wfftl wmdkhy rpgjf ypxvoeobm sjjod guwz omohk oxex zbvhqbgvd. ' +
            'Nfbekoojs phvk hviw nfecpkv jritso kkp vcepjl nll hzgp gefxj mjxm hjsrtiv xscrbqrpmz qedb wqrhtsckf jlhq zkvpvthqh.' +
            ' Uvyc kzerdg cuwexxp vhtsmm ekrjvkcnni hjbwegxx cnfywhfpm rxu hjfds rmcs wlgy bzcooqukq ecpk. Leqyh' +
            ' rvvlfiav zxrtglt nlbm dwvh gpprnrup kxctnmyf krmhfxmid runfgiutv gqiw jygfy ngiqyxf wzqmcdb vlknu rrxtkeawpa ' +
            'zjwfyoz. Gvqveso xgjopv xibn hdebtulp gfgbseoxur jpdkaj lvfe mnbdrln xoaiinq corvtjcrmj eifx upnbtjl tdtkwsrjjp.'
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
  @import "~@/styles/variables.scss";

  .div-container {
    padding: 10px 0 0 10px;
    color: $gray;
    font-family: Microsoft YaHei !important;
    width: 90%
  }

  .div-title {
    padding: 0px 0 0px 10px;
    font-size: 18px;
    font-weight: bolder;
    background-color: #F5F7FA;
    line-height: 40px;
    vertical-align: bottom;
  }

  .div-title-s {
    @extend .div-title;
    font-size: 14px;
    font-weight: bolder;
    background-color: #F5F7FA;
    line-height: 50px;
    color: $gray;
    padding-top: 0;
  }

  .right-btn {
    float: right;
  }

</style>
