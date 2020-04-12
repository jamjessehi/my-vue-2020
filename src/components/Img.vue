<template>
  <div class="wrap" :class="{ complete }">
    <img @load="load" :src="src"/>
  </div>
</template>

<script>

export default {
  name: 'Img',

  data() {
    return {
      complete: false,
    };
  },

  props: {
    src: String,
  },

  methods: {
    load() {
      this.complete = true;
    },
  },
};

</script>


<style scoped>
.wrap{
  position: relative;
  max-width: 70%;
  display: flex;
}

.wrap img {
  display: none;
}

.wrap.complete img {
  display: block;
}

.wrap.complete::after {
  content: "";
  display: none;
}

.wrap::after {
  content: " ";
  width: 300px;
  height: 200px;
  background-image: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);
  background-size: 400% 100%;
  animation: skeleton-loading 1.4s ease infinite;
}


@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

</style>
