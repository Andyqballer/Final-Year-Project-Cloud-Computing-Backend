import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      requiresAuth: true
    },
    component: () => import('../pages/views/home/HomePage.vue')
  },
  
  {
    path: '/login',
    name: 'login',
    meta: {redirectAuthenticatedUser: true},
    component: () => import('../pages/auth/login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {redirectAuthenticatedUser: true},
    component: () => import('../pages/auth/register/Register.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('isLoggedIn');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (to.meta.requiresAuth && !loggedIn) {
    next({ path: '/login', query: { returnUrl: to.fullPath } });
  } else {
    next();
  }

  if(to.meta.redirectAuthenticatedUser){
    if(localStorage.getItem("isLoggedIn")){
      next('/')
    }else{
      next()
    }
  }
});

export default router
