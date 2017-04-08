<template lang="html">
    <div>
        <v-header></v-header>
        <v-content></v-content>
        <v-footer></v-footer>
    </div>    
</template>

<script>
import Header from "./header.vue";
import Contents from "./contents.vue";
import Footer from "./footer.vue";

export default {
    components:{
    "v-header":Header,
    "v-content":Contents,
    "v-footer":Footer
  }
}



</script>

<style lang="scss">
</style>
