<template>
    <div>
        <div class="card">
            <div class="card-header">Buy the product you want</div>
            <div class="card-body">
                <loading
                        :show="show"
                        :label="label">
                </loading>
                <div class="row">
                    <div class="col-md-4" v-for="(product,index) in products" :key="product.id">
                        <div class="card">
                            <div class="card-header">
                                {{product.name}}
                            </div>
                            <div class="card-body">
                               <small> R {{product.price}}</small>
                                <p>
                                    {{product.description}}
                                </p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary" @click="purchase(product.id)">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import loading from 'vue-full-loading'
const RESOURCE_NAME = '/product'
const RESOURCE_NAME2 = '/sales'
  export default {
    name: 'Products',
    components: {
      loading
    },
    data(){return{
      products:[],
      message:null,
      show: false,
      label: 'Loading...'

    }},

    methods:{
      get_products(){
        Axios.get(RESOURCE_NAME,User.config())
          .then(response=>{
                this.products = response.data

          })
      },
      purchase(id){

        this.show =true
        Axios.post(RESOURCE_NAME2,{'product_id': id}, User.config())
          .then((response)=>{
            this.message = response.data.message
            console.log(this.message)
            this.show = false
            alert(this.message)

          })
          .catch((error)=>{
            this.show = false
          })
      },
      onCancel() {
        console.log('User cancelled the loader.')
      }
    },
    created () {
      if(!User.hasToken()){
        User.logout()
      }
      this.get_products()
    }
  }
</script>

<style scoped>

</style>
