import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import bus from "../utils/bus.js";
import {store} from '../store/index.js';
// import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      //path : url 주소
      path: '/news', 
      name: 'news',
      //component : url 주소로 갔을 때 표시될 컴포넌트
      //component: createListView('NewsView'),
      component: NewsView,
      //to -> 이동할 URL의 라우팅 정보
      //from -> 현재 URL의 라우팅 정보
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            bus.$emit("end:spinner");
            next(); //페이지 전환
          })
          .catch(error => {
            console.log(error);
          });
          console.log(to, from, next);
      },
    },
    {
      path: '/ask',
      name: 'ask',
      //component: createListView('AskView'),
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            //bus.$emit("end:spinner");
            next();
          })
          .catch(error => {
            console.log(error);
          });
          console.log(to, from, next);
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      //component: createListView('JobsView'),
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch(error => {
            console.log(error);
          });
          console.log(to, from, next);
      },
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    }
  ]
})