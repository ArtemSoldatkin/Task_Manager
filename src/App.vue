<template>
  <div class = "container-fluid content">   
    <ListForm />
    <Header />   
  </div>
</template>

<script>
  import ListForm from './components/ListForm'
  import Header from './components/Header' 

  export default {      
    components: {
      Header,    
      ListForm
    }  
  }
</script>

<style>
  .content {
    padding: 0;
    display: flex;
  }
</style>