<template>
    <div>
        <h2>Sign In</h2>
        <loading
                :show="show"
                :label="label">
        </loading>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label >Email</label>
                <input type="text" v-model="form.email" class="form-control" />
                <small class="text-danger" v-if="errors.email">{{errors.email[0]}}</small>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="form.password" class="form-control"/>
                <small class="text-danger" v-if="errors.password">{{errors.password[0]}}</small>

            </div>
            <div class="form-group">
                <button class="btn btn-primary">Sign In</button>
                <router-link to="/SignUp" class="btn btn-link">Sign Up</router-link>
            </div>
        </form>
    </div>
</template>

<script>
  import loading from 'vue-full-loading'
  const RESOURCE_NAME = '/login'
  export default {
    components: {
      loading
    },
    name: 'SignIn',
    data(){return{
      form:{
        email:null,
        password:null,

      },
      errors:{},
      show: false,
      label: 'Loading...',
    }},
    methods:{
      handleSubmit(){
        this.show = true
        Axios.post(RESOURCE_NAME,this.form)
          .then(response=>{
            User.login(response)
            this.show = false
          })
          .catch(error=>{
            this.errors = error.response.data.errors
            this.show = false
          })
      }
    }
  }
</script>

<style scoped>

</style>
