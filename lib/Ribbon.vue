<template>
  <canvas id="vuepress-canvas-ribbon"></canvas>
</template>

<script>
import { Ribbon } from '@moefy-canvas/theme-ribbon'

export default {
  name: 'Ribbon',
  data() {
    return {
      ribbon: new Ribbon(
        {
          size: RIBBON_SIZE,
        },
        {
          opacity: RIBBON_OPACITY,
          zIndex: RIBBON_Z_INDEX,
        }
      ),
    }
  },

  mounted() {
    this.ribbon.mount(this.$el)
  },

  beforeDestroy() {
    this.ribbon.unmount()
  },
}
</script>
