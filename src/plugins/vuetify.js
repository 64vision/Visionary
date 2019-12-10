import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#F96332',
            secondary: '#19365A',
            tertiary: '#495057',
            accent: '#82B1FF',
            error: '#f55a4e',
            info: '#00d3ee',
            success: '#5cb860',
            warning: '#ffa21a'
          },
        },
      }
});
