<template>
<div>
    <nav class="navbar navbar-light d-flex align-items-center d-none d-sm-block d-md-none">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
   <div class="container">
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-light p-4">
                    <h4>Menu</h4>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <router-link :to="{name :'root'}" class="nav-link" @click.native="scrollToTop"  exact>Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name :'people'}" class="nav-link" @click.native="scrollToTop"  exact>People</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name :'publications'}" class="nav-link" @click.native="scrollToTop"  exact>Publications</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name :'projects'}" class="nav-link" @click.native="scrollToTop"  exact>Projects</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name :'news'}" class="nav-link" @click.native="scrollToTop"  exact>News</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name :'contact'}" class="nav-link" @click.native="scrollToTop"  exact>Contact Us</router-link>
                            </li>
                        </ul> 
                </div>
            </div>
        </div>

        <div class="main-box">
            <nav class="s-nav navbar navbar-expand-md navbar-light sticky-top">
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <router-link :to="{name :'root'}" class="nav-link" @click.native="scrollToTop"  exact>Homepage</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name :'people'}" class="nav-link" @click.native="scrollToTop"  exact>People</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name :'publications'}" class="nav-link" @click.native="scrollToTop"  exact>Publications</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name :'projects'}" class="nav-link" @click.native="scrollToTop"  exact>Projects</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name :'news'}" class="nav-link" @click.native="scrollToTop"  exact>News</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name :'contact'}" class="nav-link" @click.native="scrollToTop"  exact>Contact Us</router-link>
                            </li>
                        </ul> 
                    <span class="navbar-text">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a href="/" target="_blank" class="nav-link">Link1</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" target="_blank"  class="nav-link">Link2</a>
                            </li>
                        </ul> 
                    </span>
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </div>

    <top-footer></top-footer>
    <footer-comp></footer-comp>

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import TopNavbar from './components/TopNavbar.vue'
import FooterComp from './components/FooterComp.vue'
import TopFooter from './components/TopFooter.vue'

export default {
    name: 'app',
  components: {
    'header-comp': HeaderComp,
    'top-navbar': TopNavbar,
    'footer-comp': FooterComp,
    'top-footer': TopFooter
  },
  data() {
    return {
      title: "RLW APP"
    };
  },
  methods: {
    scrollToTop() {
        window.scrollTo(0,0);
    }
  }
};
</script>

<style>
.navbar-text{
    padding-top: 0px;
    padding-bottom: 0px;
}

a.nav-link {
    text-decoration: none;
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    .nav-link:hover{
        background: rgba(21, 50, 87, 0.03);
        border-radius: 5px;
    }
}

</style>
