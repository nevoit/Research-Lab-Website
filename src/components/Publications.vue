<template>
<div>
  <jumbotrom-comp mainTitle="Publications" poster="images/publications.mp4" description="" scrollLink="main-publications"></jumbotrom-comp>
  <main class="content" id="main-publications">
    <div class="section-div">
      <div class="our-team section-padding">

          <div class="filter-by d-flex justify-content-center">
            <div class="btn-group btn-group-toggle flex-wrap" data-toggle="buttons">
              <label class="btn btn-filter active" v-on:click="year=''">
                <input type="radio" name="options" id="all-option" autocomplete="off" checked >All
              </label>
              <label v-for="pubYear in years" v-bind:key="pubYear" class="btn btn-filter" v-on:click="year=pubYear">
                <input type="radio" name="options" :id="pubYear + '-option'" autocomplete="off">{{pubYear}}
              </label>
            </div>
          </div>       

            <div class="search d-flex justify-content-center"> 
                <input type="text" v-model="search" placeholder="Search by Title, Author or Journal" class="form-control search-pub" />
            </div>          

            <h3 v-if="filteredSP.length>0" class="pub-h3">Selected Papers:</h3>
            <div v-for="pub in filteredSP" v-bind:key="pub.id" class="s-pub">
                <paper v-bind:pub="pub" pubType="Selected Papers"></paper>
            </div>

            <h3 v-if="filteredPrjp.length>0"  class="pub-h3">Peer Reviewed Journal Papers:</h3>
            <div v-for="prj in filteredPrjp" v-bind:key="prj.id" class="s-pub">
                <paper v-bind:pub="prj" pubType="Peer Reviewed Journal Papers"></paper>
            </div>

            <h3 v-if="filteredCap.length>0"  class="pub-h3">Conference And Workshop Proceedings:</h3>
            <div v-for="ca in filteredCap" v-bind:key="ca.id" class="s-pub">
                <paper v-bind:pub="ca" pubType="Conference And Workshop Proceedings"></paper>
            </div>
            
      </div>
    </div>
  </main>
</div>
</template>

<script>
import JumbotronComp from "./JumbotronComp.vue";
import SelectedPapers from '../../json/SelectedPapers.json';
import PeerReviewedJournalPapers from '../../json/PeerReviewedJournalPapers.json';
import ConferenceAndWorkshopProceedings from '../../json/ConferenceAndWorkshopProceedings.json';
import Paper from "./Paper.vue";

export default {
  metaInfo: {
    title: 'Publications',
    titleTemplate: '%s - CDALab',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { name: 'keywords', content: 'Papers, Journal'},
      { name: 'description', content: 'All our publications at Complex Data Analytics Lab. Read our papers for more information about temporal data mining.'}
    ]
  },
  components: {
    "jumbotrom-comp": JumbotronComp,
    "paper": Paper
  },
  data() {
    return {
      search: "",
      year: "",
      selectedPapers: null,
      prjp: null,
      cap: null,
      years: []
    };
  },
  methods: {  
    sortByProperty: function (property) {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] < y[property]) ? 1 : -1));
        };
    },
    yearRanage: function (array) {
      var year = ""
      for (let index = 0; index < array.length; index++) {
          year = array[index]['year'];
          if(!this.years.includes(year)){
              this.years.push(year)
          }
      }
    }
  },
  created (){
    this.selectedPapers = SelectedPapers.sort(this.sortByProperty('year')),
    this.prjp = PeerReviewedJournalPapers.sort(this.sortByProperty('year')),
    this.cap = ConferenceAndWorkshopProceedings.sort(this.sortByProperty('year')),
    this.yearRanage(this.selectedPapers),
    this.yearRanage(this.prjp),
    this.yearRanage(this.cap),
    this.years.sort()
  },
  computed: {   
    filteredSP: function() {
      return this.selectedPapers.filter(selectedPapers => {
        return ( selectedPapers.year.match(this.year) &&
           ( selectedPapers.name.toUpperCase().match(this.search.toUpperCase()) ||
          selectedPapers.authors.toUpperCase().match(this.search.toUpperCase()) ||
          selectedPapers.journal.toUpperCase().match(this.search.toUpperCase()) ) );
      });
    },
    filteredPrjp: function() {
      return this.prjp.filter(prjp => {
        return ( prjp.year.match(this.year) &&
          (prjp.name.toUpperCase().match(this.search.toUpperCase()) ||
           prjp.authors.toUpperCase().match(this.search.toUpperCase()) ||
            prjp.journal.toUpperCase().match(this.search.toUpperCase()) ) );
      });
    },
    filteredCap: function() {
      return this.cap.filter(cap => {
        return ( cap.year.match(this.year) &&
          ( cap.name.toUpperCase().match(this.search.toUpperCase()) ||
           cap.authors.toUpperCase().match(this.search.toUpperCase()) ||
            cap.journal.toUpperCase().match(this.search.toUpperCase()) ) );
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

.jumbotron{
    background-color:black;
}

.filter-by {
    margin-bottom: 25px;
}

.filter-label{
  font-weight: bold;
  font-size: 16px;
}

.pub-h3{
  margin-top: 20px;
  padding-left: 10px;
  margin-bottom: 0px;
}

/* Medium devices (tablets, 768px and down) */
@media (max-width: 768px) {
  .jumbotron{
     background-color:#0076aa;
  }
}


</style>
