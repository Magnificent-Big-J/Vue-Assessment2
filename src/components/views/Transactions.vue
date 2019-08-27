<template>
<div>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Transactions</h3>
            </div>
            <div class="card-body">
                <table class="table stripped">
                    <thead>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                    <tr v-for="(transaction,index) in transactions" :key="transaction.id">
                        <td>{{transaction.name}}</td>
                        <td>{{transaction.price - (transaction.price * transaction.discount)}}</td>
                        <td>{{transaction.date}}</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
</template>

<script>
    const RESOURCE_NAME ='sales'
  export default {
    name: 'Transactions',
    data(){return{
      transactions:[]
    }},
    methods:{
      get_transactions(){
        Axios.get(RESOURCE_NAME,User.config())
          .then(response=>{
            this.transactions = response.data

          })
      }
    },
    created () {
      this.get_transactions()
    }
  }
</script>

<style scoped>

</style>
