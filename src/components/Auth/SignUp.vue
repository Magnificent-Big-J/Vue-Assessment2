<template>
    <div>
        <h2>Sign Up</h2>
        <loading
                :show="show"
                :label="label">
        </loading>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Name</label>
                <input type="text" v-model="form.name" class="form-control"/>
                <small class="text-danger" v-if="errors.name">{{errors.name[0]}}</small>
            </div>
            <div class="form-group">
                <label>Email Address</label>
                <input type="text" v-model="form.email" class="form-control"/>
                <small class="text-danger" v-if="errors.email">{{errors.email[0]}}</small>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="form.password" name="password" class="form-control"  />
                <small class="text-danger" v-if="errors.password">{{errors.password[0]}}</small>
            </div>
            <div class="form-group">
              <button class="btn btn-primary" >Register</button>
              <router-link to="/" class="btn btn-link">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    const RESOURCE_NAME = '/register'
    import loading from 'vue-full-loading'
  export default {
    components: {
      loading
    },
    name: 'SignUp',
    data(){return{
      form:{
        name:null,
        email:null,
        password:null
      },
      errors:{},
      show: false,
      label: 'Loading...',
      message:null
    }},
    methods:{
      handleSubmit(){
        this.show =true
        Axios.post(RESOURCE_NAME,this.form)
          .then(response=>{
                this.message = response.data
            alert(this.message)
            this.show = false
            window.location = '/'
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
