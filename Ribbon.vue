<template>
  <div class="vuepress-canvas-ribbon-element"></div>
</template>

<script>
  export default {
    name: "Ribbon",
    data() {
      return {
        canvas: null,
        ctx: null,
        r: 0,
        config: {
          size: SIZE,
          opacity: OPACITY,
          zIndex: Z_INDEX
        }
      };
    },
    mounted() {
      const canvas = this.newCanvas();
      const ctx = canvas.getContext('2d');
      this.canvas = canvas;
      this.ctx = ctx;
      ctx.globalAlpha = this.config.opacity;
      document.onclick = this.redraw;
      document.ontouchstart = this.redraw;
      this.redraw();
    },
    methods: {
      draw(i, j, q) {
        const pi = Math.PI*2;
        const cos = Math.cos;
        const size = this.config.size;
        const k = j.x + (Math.random()*2-0.25)*size, n = this.line(j.y);
        this.ctx.beginPath();
        this.ctx.moveTo(i.x, i.y);
        this.ctx.lineTo(j.x, j.y);
        this.ctx.lineTo(k, n);
        this.ctx.closePath();
        this.r -= pi / -50;
        this.ctx.fillStyle = '#'+(Math.cos(this.r)*127+128<<16 | Math.cos(this.r+pi/3)*127+128<<8 | cos(this.r+pi/3*2)*127+128).toString(16);
        this.ctx.fill();
        q[0] = q[1];
        q[1] = {x: k, y: n};
      },
      newCanvas() {
        const canvas = document.createElement('canvas');
        const elm = document.querySelector(".vuepress-canvas-ribbon-element");
        elm.appendChild(canvas);
        canvas.width = elm.clientWidth;
        canvas.height = elm.clientHeight;
        canvas.style.cssText = this.canvasStyle(this.config);
        return canvas;
      },
      redraw() {
        const width = this.canvas.width;
        const height = this.canvas.height;
        const size = this.config.size;
        this.ctx.clearRect(0, 0, width, height);
        let q = [{x: 0, y: height * 0.7 + size}, {x: 0, y: height * 0.7 - size}];
        while(q[1].x < width + size) this.draw(q[0], q[1], q);
      },
      line(p){
        const width = this.canvas.width;
        const height = this.canvas.height;
        const size = this.config.size;
        let t = p + (Math.random() * 2 - 1.1) * size;
        return (t > height || t < 0) ? this.line(p) : t;
      },
      canvasStyle(config) {
        return `opacity:${config.opacity};position:fixed;top:0;left:0;z-index:${config.zIndex};width:100%;height:100%;pointer-events:none;`;
      }
    }
  };
</script>

<style>
.vuepress-canvas-ribbon-element {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
</style>
