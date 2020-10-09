<template>
  <aside>
    <section class="h-sidebar__logo"></section>
  </aside>
</template>
<script lang="ts">
import {
  Vue,
  Component
} from 'vue-property-decorator'

@Component({})

export default class HSidebar extends Vue {}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins/bem.scss';

@include b(sidebar) {
  @include e(logo) {
    margin: 16px auto;
    width: 208px;
    height: 64px;
    background: $color-white;
  }
}
</style>
