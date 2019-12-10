<template>
 <div :class="windowClass">
    <v-row class="secondary" no-gutters>
        <v-col md="3" class="pa-1">
           <va-stat-card 
              color="secondary"
              icon="mdi-cart"
              label="Today's Sales"
              data="896,7800.00"
              sup="PHP"
            />
        </v-col>
        <v-col md="3" class="pa-1">
            <va-stat-card 
              color="secondary"
              icon="mdi-calendar"
              label="THIS MONTH GROSS SALES"
              data="896,7800.00"
              sup="PHP"
            />
        </v-col>
        <v-col md="3" class="pa-1">
             <va-stat-card 
              color="secondary"
              icon="mdi-calendar-check-outline"
              label="MONTHLY COLLECTION"
              data="896,7800.00"
              sup="PHP"
            />
        </v-col>
        <v-col md="3" class="pa-1">
            <va-stat-card 
              color="secondary"
              icon="mdi-credit-card-plus-outline"
              label="TOTAL COLLECTIBLES"
              data="896,7800.00"
              sup="PHP"
            />
        </v-col>
    </v-row>
     <chart-random/>
     <v-row class="secondary" no-gutters style="height: 80px;"></v-row>
    <v-row no-gutters style="margin-top: -50px;">
        <v-col md="6" class="pa-2">
            <v-card>
                <v-card-title class="subtitle-2"><span style="border-bottom: 1px solid #F96332; color: #989898">TODAY'S TRANSACTIONS <v-icon right small color="primary">mdi-open-in-new</v-icon> </span></v-card-title>
                <v-card-text>
                      <v-data-table
                      class="caption"
                      :headers="headers"
                      :items="transactions"
                      hide-default-header
                      hide-default-footer
                    ></v-data-table>
                </v-card-text>
            </v-card>
        </v-col>

         <v-col md="6" class="pa-2">
            <v-card>
                <v-card-title class="subtitle-2"><span style="border-bottom: 1px solid #F96332; color: #989898">TODAY'S FISHCAR</span></v-card-title>
                <v-card-text>
                      <v-data-table
                      class="caption"
                      :headers="headers"
                      :items="transactions"
                      hide-default-header
                      hide-default-footer
                    ></v-data-table>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>
<script>
import {
  mapMutations
} from 'vuex'
  export default {
    data: () => ({
      headers: [
          {
            text: 'FISHCAR',
            align: 'left',
            value: 'name',
          },
          { text: 'COSTUMER', value: 'customer' },
          { text: 'ITEM', value: 'item' },
          { text: 'TIMESTAMP)', value: 'time' }
        ],
     transactions:[
        {
            name: '(23)STIPWEL',
            customer: "ALLAN",
            item: "# of Kilo: 13",
            time: "06:24:34 am"
          },
        {
            name: '(23)STIPWEL',
            customer: "ALLAN",
            item: "# of Kilo: 13",
            time: "06:24:34 am"
          },
           {
            name: '(23)STIPWEL',
            customer: "ALLAN",
            item: "# of Kilo: 13",
            time: "06:24:34 am"
          },
           {
            name: '(23)STIPWEL',
            customer: "ALLAN",
            item: "# of Kilo: 13",
            time: "06:24:34 am"
          }
     ]
    }),
    created() {
      this.setLoggedIn(true)
    },
    computed:{
       windowClass() {
        if(this.$store.state.responsive){
          return "va-reponsive"
        } else {
          return "va-not-reponsive"
        }
      },
    },
    methods: {
      ...mapMutations(['setAlert', 'setAlertColor', 'setAlertText', 'setLoggedIn']),
      
    },
  }
</script>