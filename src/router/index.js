import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({
      y: 0
    }),
    routes: [
      {
        path: '/',
        redirect: '/blog',
      },
      {
        path: '/blog',
        redirect: '/blog/directory',
        name: 'Font',
        component: () =>
          import('@/views/font/Font.vue'),
        children: [{
          path: 'directory',
          name: 'FontDirectory',
          component: () =>
            import('@/views/font/FontDirectory.vue')
        }, {
          path: 'article/:id',
          name: 'FontArticle',
          component: () =>
            import('@/views/font/FontArticle.vue')
        }]
      },
      {
        path: '/admin',
        redirect: '/admin/login',
        name: 'Admin',
        component: () =>
          import('@/views/admin/Admin.vue'),
        children: [{
          path: 'login',
          component: () =>
            import('@/views/admin/AdminLogin.vue')
        }, {
          path: 'article',
          component: () =>
            import('@/views/admin/AdminArticle.vue')
        }, {
          path: 'comment',
          component: () =>
            import('@/views/admin/AdminComment.vue')
        }]
      }
    ]
  })
}