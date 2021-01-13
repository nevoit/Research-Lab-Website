<template>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
            <router-link :to="{name :'root'}" class="nav-link" exact>Home</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name :'people'}" class="nav-link" exact>People</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name :'publications'}" class="nav-link" exact>Publications</router-link>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
            <router-link :to="{name :'contact'}" class="nav-link" exact>Contact Us</router-link>
        </li>
    </ul> 
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style>
</style>
