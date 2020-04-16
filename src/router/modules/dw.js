import Layout from '@/layout'

const dwRouter = {
  path: '/dw',
  component: Layout,
  name: 'dw',
  // 党委
  meta: { title: 'dw', icon: 'dashboard', affix: true },
  children: [
    {
      path: 'zl',
      component: () => import('@/views/dw/zl'),
      name: 'zl',
      // 总览
      meta: { title: 'zl', affix: true }
    },
    {
      path: 'dflzjsztzr',
      component: () => import('@/views/dw/dflzjsztzr'),
      name: 'dflzjsztzr',
      // 党风廉政建设主体责任
      meta: { title: 'dflzjsztzr', affix: true }
    },
    {
      path: 'ljcyth',
      // component: () => import('@/views/dashboard/index'),
      name: 'ljcyth',
      // 廉洁从业谈话
      meta: { title: 'ljcyth', affix: true }
    },
    {
      path: 'lxzb',
      // component: () => import('@/views/dashboard/index'),
      name: 'lxzb',
      // 联系支部
      meta: { title: 'lxzb', affix: true }
    }
  ]
}
export default dwRouter
