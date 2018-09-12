<template>
	<pre>
		<code
			@touchstart='start'
			@touchmove='moving'
			@touchend='end'>
			<slot></slot>
		</code>
	</pre>
</template>

<script>
export default {
  name: "code",
  data() {
    return {
      startX: 0,
      currX: 0,
      endX: 0
    };
  },
  computed: {
    moveDistance() {
      return this.currX - this.startX;
    }
  },
  methods: {
    start(e) {},
    end(e) {},
    moving(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less" scoped>
pre {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  overflow: hidden;
  padding: 10px;
  overflow-x: scroll;
  code {
    float: left;
    transform: translate(0, 0);
  }
}
</style>
