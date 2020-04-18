import Layout from '@/layout'

const dwRouter = {
  path: '/dw',
  component: Layout,
  name: 'dw',
  // 党委
  meta: { title: '党委', icon: 'dashboard', affix: true },
  children: [
    {
      path: 'zl',
      component: () => import('@/views/dw/zl'),
      name: 'zl',
      // 总览
      meta: { title: '总览', affix: true }
    },
    {
      path: 'dflzjsztzr',
      component: () => import('@/views/dw/dflzjsztzr'),
      name: 'dflzjsztzr',
      // 党风廉政建设主体责任
      meta: { title: '党风廉政建设主体责任', affix: true }

    },
    {
      path: 'dflzjsztzr/zrqd/edit',
      component: () => import('@/views/dw/zrqd_edit'),
      name: 'zrqdedit',
      // 责任清单
      meta: { title: '责任清单', affix: true },
      hidden: true
    },
    {
      path: 'dflzjsztzr/xdrwjz',
      component: () => import('@/views/dw/xdrwjz'),
      name: 'xdrwjz',
      // 行动任务进展
      meta: { title: '行动任务进展', affix: true },
      hidden: true
    },
    {
      path: 'ljcyth',
      // component: () => import('@/views/dashboard/index'),
      name: 'ljcyth',
      // 廉洁从业谈话
      meta: { title: '廉洁从业谈话', affix: true }
    },
    {
      path: 'lxzb',
      // component: () => import('@/views/dashboard/index'),
      name: 'lxzb',
      // 联系支部
      meta: { title: '联系支部', affix: true }
    }
  ]
}
export default dwRouter
