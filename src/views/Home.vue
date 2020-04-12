<template>
  <div v-if="status.isLoading">loading</div>
  <Img v-else :src="data"/>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapGetters } from 'vuex';
import Img from '@/components/Img.vue';

export default {
  name: 'Home',
  components: {
    Img,
  },
  computed: {
    ...mapState('home', ['data']),
    ...mapGetters('home', ['status']),
  },
  methods: mapActions('home', [
    'fetchDog',
  ]),

  mounted() {
    this.fetchDog();
  },
};
</script>
