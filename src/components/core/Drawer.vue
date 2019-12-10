<template>
    <v-navigation-drawer
      v-model="$store.state.drawer"
      absolute
      dark
      class="body-1"
      id="va-drawer"
      color="primary"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="$store.state.applogo"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>VA</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      
      <v-list dense>
        <!-- <v-list-item-group color="fff">
        <v-list-item>
          <v-list-item-icon>
            <v-icon small>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="caption">Main</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group> -->
      <!-- <v-subheader>REPORTS</v-subheader> -->
      <v-list-item-group color="fff">
          <v-list-item>
          <v-list-item-icon>
            <v-icon small>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="caption">Main</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-subheader>REPORTS</v-subheader>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon small v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="caption"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>


    </v-navigation-drawer>

</template>
<script>
import {
  mapMutations
} from 'vuex'
  export default {
    data () {
      return {
        item: 1,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    },
    computed: {
      // inputValue: {
      //   greturn this.$store.state.drawer
      // }
    },
    methods: {
      ...mapMutations(['setDrawer']),
    }
  }
</script>