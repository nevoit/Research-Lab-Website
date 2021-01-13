<template>
<div>
  <jumbotrom-comp mainTitle="Projects" poster="images/lego.mp4" description="" scrollLink="main-projects"></jumbotrom-comp>
  <main class="content" id="main-projects">
    <div class="section-div">
      <div class="our-team section-padding">
          <div class="section-title text-center">
          
          <div class="row">
                <div class="col-12 col-md-6 filter-by">
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-filter active" v-on:click="everyone">
                      <input type="radio" name="options" id="all-option" autocomplete="off" checked >All</label>
                    <label class="btn btn-filter" v-on:click="currentOnly">
                      <input type="radio" name="options" id="currentOnly-option" autocomplete="off">Current Projects</label>
                    <label class="btn btn-filter" v-on:click="previousOnly">
                      <input type="radio" name="options" id="previous-option" autocomplete="off">Previous Projects</label>
                  </div>
                </div>
                <div class="col-12 col-md-6 search-person">
                    <input type="text" v-model="search" placeholder="Search By Project name" class="form-control" />
                </div>
            </div>
          </div>

          <div class="row text-center">
            <div v-for="cproject in filteredCurrentProject" v-bind:key="cproject.id" class="col-12 col-md-6 service-item projects" v-if="showCurrent">
                <projectItem v-bind:project="cproject" v-bind:current="true"></projectItem>
            </div>

            <div v-for="pproject in filteredPreviousProject" v-bind:key="pproject.id" class="col-12 col-md-6 service-item projects" v-if="showPrevious">
                <projectItem v-bind:project="pproject" v-bind:current="false"></projectItem>
            </div>
          </div>
            
      </div>
    </div>
  </main>
</div>
</template>

<script>
import JumbotronComp from "./JumbotronComp.vue";
import CurrentProjects from '../../json/CurrentProjects.json';
import PreviousProjects from '../../json/PreviousProjects.json';
import ProjectItem from "./ProjectItem.vue";

export default {
  metaInfo: {
    title: 'Projects',
    titleTemplate: '%s - CDALab',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { name: 'keywords', content: 'projects'},
      { name: 'description', content: 'Discover our projects in mining time intervals, data mining, temporal data mining and data science.'}
    ]
  },
  components: {
    "jumbotrom-comp": JumbotronComp,
    "projectItem": ProjectItem
  },
  data() {
    return {
      search: "",
      currentProjects: CurrentProjects,
      previousProjects: PreviousProjects,
      showCurrent: true,
      showPrevious: true
    };
  },
  methods: {
    currentOnly: function() {
      this.noOne()
      this.showCurrent = true;
    },
    previousOnly: function() {
      this.noOne()
      this.showPrevious = true;
    },
    everyone: function() {
      this.showCurrent = true,
      this.showPrevious = true
    },
    noOne: function() {
      this.showCurrent = false,
      this.showPrevious = false
    }
  },
  computed: { 
    filteredCurrentProject: function() {
      return this.currentProjects.filter(currentProjects => {
        return currentProjects.description.toUpperCase().match(this.search.toUpperCase());
      });
    },
    filteredPreviousProject: function() {
      return this.previousProjects.filter(previousProjects => {
        return previousProjects.description.toUpperCase().match(this.search.toUpperCase());
      });
    }
  }
};
</script>

<style scoped>
.search-pub {
    margin-bottom: 25px;
    max-width: 80%;
}

.projects {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 10px;
}

.filter-label{
  font-weight: bold;
  font-size: 16px;
}

/* Medium devices (tablets, 768px and down) */
@media (max-width: 768px) {
  .jumbotron{
     background-color:#0076aa;
  }
}

</style>
