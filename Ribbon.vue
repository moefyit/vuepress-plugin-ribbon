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
        angle: 0,
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
      ctx.globalAlpha = this.config.opacity;
      document.onclick = this.redraw;
      document.ontouchstart = this.redraw;
      this.canvas = canvas;
      this.ctx = ctx;
      this.redraw();
    },
    methods: {
      draw(foldMark) {
        const ctx = this.ctx;
        const pi = Math.PI*2;
        const cos = Math.cos;
        const size = this.config.size;
        const p1 = foldMark[0];
        const p2 = foldMark[1];
        const p3 = {x: p2.x + (Math.random()*2-0.25)*size, y: this.line(p2.y)};
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.closePath();
        this.angle -= pi / -50;
        ctx.fillStyle = '#'+(cos(this.angle)*127+128<<16 | cos(this.angle+pi/3)*127+128<<8 | cos(this.angle+pi/3*2)*127+128).toString(16);
        ctx.fill();
        foldMark[0] = p2;
        foldMark[1] = p3;
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
        const foldMark = [{x: 0, y: height * 0.7 + size}, {x: 0, y: height * 0.7 - size}];
        this.ctx.clearRect(0, 0, width, height);
        while(foldMark[1].x < width + size) this.draw(foldMark);
      },
      line(y){
        const width = this.canvas.width;
        const height = this.canvas.height;
        const size = this.config.size;
        let t = y + (Math.random() * 2 - 1.1) * size;
        return (t > height || t < 0) ? this.line(y) : t;
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
