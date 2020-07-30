import { Options, Vue } from 'vue-class-component';
import Dashboard from './dashboard/dashboard.component';

@Options({
  components: {
    Dashboard,
  },
})
export default class App extends Vue {}
