<template>
    <div>
        <NavBar></NavBar>
        <router-view/>
    </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'Admin',
    components:{NavBar}
  }
</script>

<style scoped>

</style>
