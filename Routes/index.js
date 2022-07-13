import express from 'express';
import bootcamps from './bootcamps.js';
import todo from './todo.js'



const router = express.Router();

const defaultRoutes = [
  {
    path: '/bootcamps',
    route: bootcamps,
  },
  {
    path: '/todo',
    route: todo,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


export default router;