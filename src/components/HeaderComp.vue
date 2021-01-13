<template>
    <header class="s-header align-middle" id="i-header">
        <div class="row">
            <div class="col-6 col-md-6 col-lg-2 logo d-flex align-items-center">
                <router-link to="/" class="navbar-brand" exact><span class="logo-text">YOUR-LAB-NAME</span></router-link>
            </div>
            <div class="col-6 col-md-6 d-flex align-items-center justify-content-end d-none d-sm-block d-md-none">
                <nav class="navbar navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
            <div class="col-12 col-md-6 col-lg-4 social d-flex align-items-center">
                <social></social>
            </div>
            <div class="col-12 col-lg-6 d-flex align-items-center justify-content-end">
                <span class="navbar-text d-none d-lg-block">YOUR-LAB-NAME</span>
            </div>
        </div>
    </header>
</template>

<script>
import Social from './Social.vue'
export default {
  components: {
    'social': Social
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.bgu-logo{
    max-height: 35px;
    max-width: 35px;
}

a.navbar-brand {
    text-decoration: none;
}
</style>
