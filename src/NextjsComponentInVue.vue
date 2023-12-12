<template>
  <div class="{{CONTAINER}}">
    <span>Host VUE JS - Nextjs Component In Vue</span>
    <div id="container"></div>
  </div>
</template>

<script>
  import CounterPage from "remoteNextjsTs/CounterPage";
  export default {
    components:{
      CounterPage
    },
    mounted(){
      const container = document.getElementById("container");
      CounterPage(container);
    }
  };
</script>
