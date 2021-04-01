import * as Tenon from '@hummer/tenon-vue';
import app from './app';
import {router} from './router';

Tenon.use(router);
Tenon.render(app);
