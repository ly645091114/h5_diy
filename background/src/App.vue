<template>
  <section id="app">
    <h-sidebar />
    <section>
      <h-header />
      <!-- <router-view/> -->
    </section>
  </section>
</template>
<script lang="ts">
import {
  Vue,
  Component
} from 'vue-property-decorator'
import HHeader from '@/components/layout/header.vue'
import HSidebar from '@/components/layout/sidebar.vue'

@Component({
  components: {
    HHeader,
    HSidebar
  }
})

export default class extends Vue {}
</script>
