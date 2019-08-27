<template>
    <div>
        <loading
                :show="show"
                :label="label">
        </loading>
        <div class="card">
            <div class="card-header">
                <h3 class="float-left">Top Up</h3>
                <h3 class="float-right">{{currentAmount}}</h3>
            </div>
            <div class="card-body">

                <div v-if="message">
                    <b-alert
                            :show="dismissCountDown"
                            dismissible
                            variant="warning"
                            @dismissed="dismissCountDown=0"
                            @dismiss-count-down="countDownChanged"
                    >
                        <p>{{message}}</p>
                        <b-progress
                                variant="success"
                                :max="dismissSecs"
                                :value="dismissCountDown"
                                height="4px"
                        ></b-progress>
                    </b-alert>
                </div>
                <div class="row">
                    <div class="offset-md-4 col-md-4">
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <label>Amount</label>
                                <input type="text" v-model="form.amount" class="form-control">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary">Top Up</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="offset-md-4 col-md-4">
                        <table class="table table-stripped">
                            <thead>
                                <th>Amount</th>
                                <th>Date</th>
                            </thead>
                            <tbody>
                            <tr v-for="(history,index) in histories" :key="history.id">
                                <td>{{history.amount}}</td>
                                <td>{{history.date}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  const RESOURCE_NAME = 'topup'
  const RESOURCE_NAME2 = 'historic'
  const RESOURCE_NAME3 = 'historic2'
  import loading from 'vue-full-loading'
  export default {
    name: 'TopUp',
    components: {
      loading
    },
    data(){return{
      form:{
        amount:0,
      },
      errors:{},
      message:null,
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      histories:[],
      currentAmount:0,
      show: false,
      label: 'Processing...',
    }},
    methods:{
      handleSubmit(){
        this.show = true
        Axios.post(RESOURCE_NAME,this.form,User.config())
          .then(response=>{
            this.show = false
            this.message = response.data
            alert(this.message)
          })
          .catch(error=>{
            this.errors = error.response.data.errors
            this.show = false
          })
      },
      getMyTopUp(){
        Axios.get(RESOURCE_NAME2,User.config())
          .then((response)=>{

            this.currentAmount = response.data
          })
      },
      historic(){
        Axios.get(RESOURCE_NAME3, User.config())
          .then((response)=>{
            this.histories = response.data

          })
      }

    },
    created () {
      if(!User.hasToken()){
        User.logout()
      }

      this.getMyTopUp()
      this.historic()
    }
  }
</script>

<style scoped>

</style>
