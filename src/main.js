import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index.js';
import {store} from './store/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


//데이터 호출 시점

// 1. 라우터 네비게이션 가드
//   - 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)

// 2. 컴포넌트 라이프 사이클 훅
//   - created : (컴포넌트가 생성)되자마자 호출되는 로직