<template>
    <div class="links-footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-9">
                    <div class="right-links links">
                        <h3>Latest important news</h3>
                            <latestNews></latestNews>
                    </div>
                </div>
                <div class="col-12 col-md-3 social">
                    <div class="left-links links">
                        <h3>Find us on social media</h3>
                        <social></social>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Social from './Social.vue'
import LatestNews from './LatestNews.vue';

export default {
  components: {
    'social': Social,
    'latestNews': LatestNews
  },
  data() {
    return {
    };
  },
  methods:{
  }
};
</script>

<style scoped>
</style>
