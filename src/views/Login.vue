<template>
<v-container class="pa-5">
      <v-row no-gutters justify="center">
     <v-col
      sm="5"
     >
       <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
            <v-card style="margin-top: 12%;" class="pa-2">
              <p class="text-center pt-5">
              <img :src="$store.state.systemlogo" width="150px"/>
              </p>
              <v-card-text>
                    <p>
                      <v-text-field
                        v-model="username"
                        :rules="nameRules"
                        label="Username"
                        required
                        outlined
                      ></v-text-field>
                    </p>
                    <p>
                      <v-text-field
                        v-model="password"
                        :rules="nameRules"
                        label="Password"
                        type="password"
                        required
                        outlined
                      ></v-text-field>
                    </p>
              </v-card-text>
              <v-card-actions class="pt-4 pb-5">
                  <v-btn
                        color="primary"
                        block
                        rounded
                        large
                        @click="validate"
                      >
                        LOGIN
                      </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
     </v-col>
   </v-row>
</v-container>
</template>
<script>
import {
  mapMutations
} from 'vuex'
  export default {
    data: () => ({
      valid: true,
      username: '',
      nameRules: [
        v => !!v || 'Field is required'
      ],
      password: '',
      snackbar: false,
    }),
    created() {
      this.setLoggedIn(false)
    },
    methods: {
      ...mapMutations(['setAlert', 'setAlertColor', 'setAlertText', 'setLoggedIn']),
      validate () {
        if (this.$refs.form.validate()) {
          this.login()
        }
      },
      login(){
         this.setAlertColor('success')
          this.setAlertText('Login')
          this.setAlert(true)
          setTimeout(()=> { 
            this.$router.push('/dashboard')
          }, 800)
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>