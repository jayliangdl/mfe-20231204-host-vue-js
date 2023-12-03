<template>
  <div class="{{CONTAINER}}">
    <span>Host VUE JS - Vue Component In Vue</span>
    <MyVueJSButton />
  </div>
</template>

<script>
  import MyVueJSButton from 'remoteVueJs/MyVueJSButton';
  export default {
    components:{
      MyVueJSButton
    }
  };
</script>
