<template>
     <v-card :class="color" dark>
              <v-card-text style="height: 80px;">
                  <v-icon v-if="icon != null" left large style="float: left; margin-top: 6px; margin-right: 12px;">{{icon}}</v-icon> 
                  <p style="float: left;">
                  <small class="overline font-weight-thin" style="border-bottom: 1px solid #F96332;">{{label}}</small><br />
                  <span class="subtitle-1">{{data}} <sup v-if="sup">{{sup}}</sup></span>
                  </p>
                </v-card-text>
            </v-card>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "secondary"
    },
    icon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    data: {
      type: String,
      default: ''
    },
    sup: {
      type: String,
      default: ''
    }
  }
}
</script>