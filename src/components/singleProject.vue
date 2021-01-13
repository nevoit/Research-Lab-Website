<template>
<div>
  <jumbotrom-comp mainTitle="Projects" poster="/images/lego.mp4" description="" scrollLink="main-single-project"></jumbotrom-comp>
  <main class="content" id="main-single-project">
    <div class="section-div">
        <div class="our-team section-padding">
            <div v-if="project.id" class="section-title">
                <h2 v-if="project" class="text-center">{{project.name}}</h2>
                <div class="row single-project-page">
                    <div class="col-12 col-md-3 status-project align-self-center d-flex justify-content-center">
                        <img v-if="project.image" :src="'/images/projects-images/'+ project.image" class="logo-image">
                    </div>
                    <div class="col-12 col-md-9">
                        <p><span class="label">Status:</span> {{status}}</p>
                        <p v-if="project.leader"><span class="label">Project leader:</span> {{project.leader}} - <router-link :to="{name :'people'}" @click.native="scrollToTop" exact>Find this person</router-link></p>
                        <p v-if="project.description"><span class="label">Description:</span> {{project.description}}</p>
                        <router-link :to="{name :'projects'}" @click.native="scrollToTop" class="btn btn-service" exact>Back to Projects</router-link>
                    </div>
                </div>
            </div>
            <div v-else class="section-title text-center">
                <h2 v-if="project">Oops! PAGE NOT FOUND</h2>
                <router-link :to="{name :'projects'}" @click.native="scrollToTop" class="btn btn-service" exact>Back to Projects</router-link>  
            </div>
        </div>
    </div>
  </main>
</div>
</template>

<script>
import currentProjects from '../../json/CurrentProjects.json';
import previousProjects from '../../json/PreviousProjects.json';
import JumbotronComp from "./JumbotronComp.vue";

export default {
  components: {
    "jumbotrom-comp": JumbotronComp
  },
  data() {
    return {
      id: this.$route.params.id,
      status: null,
      project: null,
      content: {}
    };
  },
  methods: {
    scrollToTop() {
        window.scrollTo(0,0);
    },
    getModels() {
      window.axios.get("url...").then((response) => {
          this.title = response.data.model_name;
      });
    }
  },
  metaInfo () {
    return {
      title: this.project.name,
    };
  },
  created(){
    this.project = currentProjects.find( specProject => specProject.id === this.$route.params.id);    
    if(this.project !== undefined)
        this.status = "Current project";
    else {
        this.project = previousProjects.find( specProject => specProject.id === this.$route.params.id);
            if(this.project !== undefined){
                this.status = "Previous project";
                this.image = this.project.image;
            }
    }
    if(this.project === undefined)
        this.project = {}
  },
  computed: {

  }
};
</script>

<style scoped>
.search-pub {
    margin-bottom: 25px;
    max-width: 80%;
}
.logo-image{
    max-width: 200px;
    max-height: 50px;
}
.label {
    font-weight: bold;
}
.single-project-page {
    margin-top: 30px;
}

/* Medium devices (tablets, 768px and down) */
@media (max-width: 768px) {
  .jumbotron{
     background-color:#0076aa;
  }
}

</style>
