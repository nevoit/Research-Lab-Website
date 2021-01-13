<template>
<div>
  <jumbotrom-comp mainTitle="People" poster="images/pepole.mp4" scrollLink="main-people"></jumbotrom-comp>
  <main class="content" id="main-people">
    <div class="section-div">
      <div class="our-team section-padding text-center">
          <div class="section-title">
              <div class="row head-lab service-item">
                <div class="col-md-12 col-lg-3 image">
                  <router-link to="people/lab_head" @click.native="scrollToTop" exact class="people-link">
                    <img src="images/people-images/none.png" alt="Image" class="img-fluid rounded-circle img-thumbnail head-profile">
                  </router-link>
                </div>
                <div class="col-md-12 col-lg-9 text-about">
                      <router-link to="people/lab_head" @click.native="scrollToTop" exact class="people-link">
                        <p class="head-name">NAME NAME</p>
                      </router-link>
                      <p class="about-person">I lead the YOUR LAB NAME</p>
                      <p class="about-person"><span class="font-weight-bold">Research Topics:</span> topic1, topic2, topic3</p>
                      <ul class="global-list">
                          <li>
                              <a href="#" target="_blank">
                                  <i class="fab fa-linkedin"></i>
                              </a>
                              <a href="#" target="_blank">Linkedin</a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" target="_blank">Google Scholar</a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                                <i class="fab fa-researchgate"></i>
                            </a>
                            <a href="#" target="_blank">ResearchGate</a>
                          </li>
                          <li>
                              <a href="#" target="_blank">dblp</a>
                          </li>
                          <li>
                            <a href="mailto:" target="_blank">
                                <i class="far fa-envelope"></i>
                            </a>
                            <a href="mailto:" target="_blank">Email</a>
                          </li>
                      </ul>
                </div>
              </div>
              <div class="row">
                    <div class="col-md-12 col-lg-6 filter-by">
                      <p class="filter-label">
                        Students for:
                      </p>
                      <div class="btn-group btn-group-toggle flex-wrap" data-toggle="buttons">
                        <label class="btn btn-filter" v-on:click="currentOnly">
                          <input type="radio" name="options" id="current-option" autocomplete="off">Current</label>
                        <label class="btn btn-filter" v-on:click="phdOnly">
                          <input type="radio" name="options" id="phd-option" autocomplete="off">PhD</label>
                        <label class="btn btn-filter" v-on:click="mscOnly">
                          <input type="radio" name="options" id="msc-option" autocomplete="off">MSc</label>
                        <label class="btn btn-filter" v-on:click="underOnly">
                          <input type="radio" name="options" id="under-option" autocomplete="off">Undergraduate</label>
                        <label class="btn btn-filter" v-on:click="aluOnly">
                        <input type="radio" name="options" id="alu-option" autocomplete="off">Alumni</label>
                        <label class="btn btn-filter active" v-on:click="everyone">
                          <input type="radio" name="options" id="all-option" autocomplete="off" checked>All</label>
                      </div>
                     
                    </div>
                    <div class="col-md-12 col-lg-6 search-person"> 
                      <p class="filter-label">
                        Search person by name:
                      </p>
                         <input type="text" v-model="search" placeholder="Search By Name" class="form-control" />
                    </div>
              </div>
          </div>

          <div class="row">
            <div v-for="phdStu in filteredPhd" v-bind:key="phdStu.id" class="col-12 col-md-6 col-lg-4 service-item person" v-if="showPhd">
              <person v-bind:per="phdStu" degree="PhD Student"></person>
            </div>
            <div v-for="mscStu in filteredMsc" v-bind:key="mscStu.id" class="col-12 col-md-6 col-lg-4 service-item person" v-if="showMsc">
              <person v-bind:per="mscStu" degree="MSc Student"></person>
            </div>
            <div v-for="underStu in filteredUnder" v-bind:key="underStu.id" class="col-12 col-md-6 col-lg-4 service-item person" v-if="showUndergraduate">
              <person v-bind:per="underStu" degree="Undergraduate Student"></person>
            </div>
            <div v-for="aluStuPhd in filteredAluPhd" v-bind:key="aluStuPhd.id" class="col-12 col-md-6 col-lg-4 service-item person" v-if=" (!showCurrent || showAll) && (showPhd || showAlu)">
              <person v-bind:per="aluStuPhd" degree="PhD Alumni"></person>
            </div>
            <div v-for="aluStuMaster in filteredAluMaster" v-bind:key="aluStuMaster.id" class="col-12 col-md-6 col-lg-4 service-item person" v-if="(!showCurrent || showAll) && (showMsc || showAlu)">
              <person v-bind:per="aluStuMaster" degree="Master Alumni"></person>
            </div>
            <div v-for="aluStuUnder in filteredAluUndergraduate" v-bind:key="aluStuUnder.id" class="col-12 col-md-6 col-lg-4 service-item person" v-if="(!showCurrent || showAll) && (showUndergraduate || showAlu)">
              <person v-bind:per="aluStuUnder" degree="Undergraduate Alumni"></person>
            </div>
          </div>
      </div><!-- /.services -->
    </div>
  </main>
</div>
</template>

<script>
import JumbotronComp from "./JumbotronComp.vue";
import Person from "./Person.vue";
import Phd from '../../json/Phd.json';
import Master from '../../json/Master.json';
import Undergraduate from '../../json/Undergraduate.json';
import Alumni from '../../json/Alumni.json';
import AlumniPhd from '../../json/AlumniPhd.json';
import AlumniMaster from '../../json/AlumniMaster.json';
import AlumniUndergraduate from '../../json/AlumniUndergraduate.json';

export default {
  metaInfo: {
    title: 'People',
    titleTemplate: '%s - YOUR-LAB-NAME',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { name: 'keywords', content: 'LAB-KEYWORD1, LAB-KEYWORD2'},
      { name: 'description', content: 'Each member of our team is a specialist in his or her field. Meet our team and see the people behind YOUR-LAB-NAME.'}
    ]
  },
  components: {
    "jumbotrom-comp": JumbotronComp,
    "person": Person
  },
  data() {
    return {
      search: "",
      showCurrent: true,
      showAll: true,
      showPhd: true,
      showMsc: true,
      showAlu: true,
      showUndergraduate: true,
      phd: Phd,
      master: Master,
      undergraduate: Undergraduate,
      alumni: Alumni,
      alumniPhd: AlumniPhd,
      alumniMaster: AlumniMaster,
      alumniUndergraduate: AlumniUndergraduate
    };
  },
  methods: {
    phdOnly: function() {
      this.noOne()
      this.showPhd = true;
    },
    mscOnly: function() {
      this.noOne()
      this.showMsc = true;
    },
    aluOnly: function() {
      this.noOne()
      this.showAlu = true;
    },
    underOnly: function() {
      this.noOne()
      this.showUndergraduate = true;
    },
    currentOnly: function() {
      this.everyone()
      this.showAll = false
      this.showAlu = false;
    },
    everyone: function() {
      this.showPhd = true
      this.showMsc = true
      this.showAlu = true
      this.showUndergraduate = true
      this.showCurrent = true
      this.showAll = true
    },
    noOne: function() {
      this.showPhd = false
      this.showMsc = false
      this.showAlu = false
      this.showUndergraduate = false
      this.showCurrent = false
    }
  },
  computed: {
    filteredPhd: function() {
      return this.phd.filter(phd => {
        if (phd.name !== undefined && phd.id !== undefined)
          return phd.name.toUpperCase().match(this.search.toUpperCase());
      });
    },
    filteredMsc: function() {
      return this.master.filter(master => {
        if (master.name !== undefined && master.id !== undefined)
          return master.name.toUpperCase().match(this.search.toUpperCase());
      });
    },
    filteredAluPhd: function() {
      return this.alumniPhd.filter(alumniPhd => {
        if (alumniPhd.name !== undefined && alumniPhd.id !== undefined)
          return alumniPhd.name.toUpperCase().match(this.search.toUpperCase());
      });
    },
    filteredAluMaster: function() {
      return this.alumniMaster.filter(alumniMaster => {
        if (alumniMaster.name !== undefined && alumniMaster.id !== undefined)
          return alumniMaster.name.toUpperCase().match(this.search.toUpperCase());
      });
    },
    filteredAluUndergraduate: function() {
      return this.alumniUndergraduate.filter(alumniUndergraduate => {
        if (alumniUndergraduate.name !== undefined && alumniUndergraduate.id !== undefined)
          return alumniUndergraduate.name.toUpperCase().match(this.search.toUpperCase());
      });
    },
    filteredUnder: function() {
      return this.undergraduate.filter(undergraduate => {
        if (undergraduate.name !== undefined && undergraduate.id !== undefined)
          return undergraduate.name.toUpperCase().match(this.search.toUpperCase());
      });
    }
  }
};
</script>

<style scoped>
.head-lab {
    padding: 50px;
    margin-bottom: 10px
}
.head-profile {
    max-width: 180px;
    max-height: 180px;
}
.about-person {
    text-align: left;
    /* padding: 0px; */
    margin: 5px 0px;
    font-size: 16px;
}

.text-about ul li {
    margin-top: 15px;
    float: left;
    margin-right: 25px;
    font-size: 18px;
}
.jumbotron{
    background-color:#0076aa;
}

.filter-label{
  font-weight: bold;
}

.head-name{
  font-size: 20px;
  text-transform: capitalize;
  color: #0076aa;
  text-align: left;
}
</style>
