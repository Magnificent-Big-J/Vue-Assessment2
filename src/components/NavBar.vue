<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Shopping</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item :to="{ name: 'Products' }">Products</b-nav-item>
                        <b-nav-item :to="{ name: 'TopUp' }">Top Up</b-nav-item>
                        <b-nav-item :to="{ name: 'Transactions' }">Transaction History</b-nav-item>
                        <b-nav-item @click="signout">Sign Out</b-nav-item>

                    </b-navbar-nav>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
  export default {
    name: 'NavBar',
    methods:{
      signout(){
        User.logout()
      }
    }
  }
</script>

<style scoped>

</style>
