# `Tenon Vue Router`
> Fork From vue-router-next


一种 Tenon Vue 的 路由解决方案

### 使用说明
```
// router.js
import { createRouter, createTenonHistory } from '@hummer/tenon-vue-router';
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

// entry.js
import * as Tenon from '@hummer/tenon-vue';
import app from './app';
import {router} from './router';

Tenon.use(router);
Tenon.render(app);

```

