import { Options, Vue } from 'vue-class-component';

import Dropdown from '@components/dropdown/dropdown.component.vue';

@Options({
  components: {
    Dropdown,
  },
})
export default class Dashboard extends Vue {
  data() {
    return {
      topicItems: [
        {
          id: 1,
          text: 'Culture',
        },
        {
          id: 2,
          text: 'Food and drink',
        },
        {
          id: 3,
          text: 'Science',
        },
        {
          id: 4,
          text: 'Sport',
        },
        {
          id: 5,
          text: 'Travel',
        },
      ],
    };
  }
}
