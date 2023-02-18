<template>
  <div id="app">
    <div class="wrapper">
      <HeaderElement/>
      <main class="main">
        
      </main>
      <FooterElement />
    </div>
  </div>

</template>

<script>
import HeaderElement from '@/components/HeaderElement.vue';
import FooterElement from '@/components/FooterElement.vue';

export default {
  name: 'app',
  data() {
    return {
    }
  },
  mounted() {
    document.title = 'VAC'
  },
  components: {
    HeaderElement,
    FooterElement
  }
}
</script>


