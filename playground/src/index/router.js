import { createRouter, createTenonHistory } from '../../../dist/tenon-vue-router.cjs.js';
import ComA from './ComA.vue'
import ComB from './ComB.vue'


function getRoutes() {
  const routes = [];

  routes.push({
    path: `/`,
    component: ComA,
    beforeEnter: (to, from) => {
      console.log('beforeEnter ComA')
    }
  });

  routes.push({
    path: `/ComB`,
    component: ComB
  });

  return routes;
}

export const router = createRouter({
  history: createTenonHistory(),
  routes: getRoutes()
});
