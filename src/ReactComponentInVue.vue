<template>
  <div class="{{CONTAINER}}">
    <span>Host VUE JS - React Component In Vue</span>
    <div id="container"></div>
  </div>
</template>

<script>
  import VanillaMyButton from "remoteReactTs/VanillaMyButton";
  export default {
    components:{
      VanillaMyButton
    },
    mounted(){
      const container = document.getElementById("container");
      VanillaMyButton(container);
    }
  };
</script>
