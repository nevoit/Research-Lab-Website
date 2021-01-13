<template>
    <div>
        <router-link :to="'projects/' + project.id" @click.native="scrollToTop" class="project-link" exact>
            <p v-if="project.name" class="project-name">{{project.name}}</p>
            <div class="project-status">
                <span v-if="current" >Status: Current project</span>
                <span v-else>Status: Previous project</span>
            </div>

            {{project.description | truncate(150, '...')}}
            <br /> <br />
            
            <div class="d-flex justify-content-center btn btn-service">
                <i class="fas fa-info btn-icon" ></i>  Read More
            </div>
        </router-link>
    </div>
</template>

<script>

export default {
  props: {
    current:{
        type: Boolean,
        required: true
    },
    project: {
        type: Object,
        required: true
    }
  },
  data() {
    return {
    };
  },
  methods: {
    scrollToTop() {
        window.scrollTo(0,0);
    },
  }
};
</script>

<style scoped>
.logo-image{
    max-width: 150px;
    max-height: 50px;
}

.project-name{
    font-size: 20px;
    text-transform: capitalize;
    color: #0076aa;
    margin: 5px;
}
.project-status {
    margin: 20px 0px;
}

.btn-icon{
    margin-right: 5px;
}
</style>
