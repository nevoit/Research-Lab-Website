<template>
<div>
  <jumbotrom-comp v-bind:mainTitle="per.name" poster="/images/pepole.mp4" description="" scrollLink="main-single-person"></jumbotrom-comp>
  <main class="content" id="main-single-person">
    <div class="section-div">
        <div class="our-team section-padding">
            <div v-if="per.id" class="section-title">
                <h2 v-if="per" class="text-center">{{per.name}}</h2>
                <br />
                <div class="row single-person-page">
                    <div class="col-12 col-md-3 status-person align-self-center d-flex justify-content-center">
                        <!-- <img v-if="per.image" :src="'/images/person-images/'+ per.image" class="logo-image"> -->
                        <img v-if="per.image" :src="'/images/people-images/'+per.image" alt="Image" class="img-fluid rounded-circle img-thumbnail people-profile" @error="about" />
                        <img v-else :src="'/images/people-images/none.png'" alt="Image" class="img-fluid rounded-circle img-thumbnail people-profile" />
                    </div>
                    <div class="col-12 col-md-9">
                        <p v-if="status != 'Head'"><span class="label">Student for:</span> {{status}} degree</p>
                        <p v-if="about"><span class="label">About:</span> {{about}}</p>
                        <div class="social d-flex">
                            <ul class="global-list">
                                <li v-if="per.facebook">
                                    <a v-bind:href="per.facebook" title="Facebook" target="_blank">
                                        <i class="fab fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li v-if="per.twitter">
                                    <a v-bind:href="per.twitter" title="Twitter" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li v-if="per.instagram">
                                    <a v-bind:href="per.instagram" title="Instagram" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li v-if="per.linkedin">
                                    <a v-bind:href="per.linkedin" title="Linkedin" target="_blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </li>
                                <li v-if="per.github">
                                    <a v-bind:href="per.github" title="Github" target="_blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                </li>
                                <li v-if="per.googleScholar">
                                    <a v-bind:href="per.googleScholar" title="Google Scholar" target="_blank">
                                        <i class="fab fa-google"></i>
                                    </a>
                                </li>
                                <li v-if="per.mail">
                                    <a v-bind:href="'mailto:'+per.mail" title="Email" target="_blank">
                                        <i class="far fa-envelope"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <br />
                        <router-link :to="{name :'people'}" @click.native="scrollToTop" class="btn btn-service" exact>Back to People</router-link>
                    </div>
                </div>
            </div>
            <div v-else class="section-title text-center">
                <h2 v-if="per">Oops! PAGE NOT FOUND</h2>
                <router-link :to="{name :'people'}" @click.native="scrollToTop" class="btn btn-service" exact>Back to people</router-link>  
            </div>
        </div>
    </div>
  </main>
</div>
</template>

<script>
import alumniPhd from '../../json/AlumniPhd.json';
import alumniMaster from '../../json/AlumniMaster.json';
import alumniUndergraduate from '../../json/AlumniUndergraduate.json';
import phd from '../../json/Phd.json';
import master from '../../json/Master.json';
import undergraduate from '../../json/Undergraduate.json';
import head from '../../json/head.json';
import JumbotronComp from "./JumbotronComp.vue";

export default {
  components: {
    "jumbotrom-comp": JumbotronComp
  },
  data() {
    return {
      id: this.$route.params.id,
      status: null,
      per: null,
      about: null,
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
      title: this.per.name,
      titleTemplate: '%s - CDALab',
        meta: [
        { name: 'keywords', content: this.per.name},
        ]
    };
  },
  created(){
    this.per_ap = alumniPhd.find( specPer => specPer.id === this.id);
    this.per_am = alumniMaster.find( specPer => specPer.id === this.id);
    this.per_au = alumniUndergraduate.find( specPer => specPer.id === this.id);
    this.per_p = phd.find( specPer => specPer.id === this.id);
    this.per_m = master.find( specPer => specPer.id === this.id);
    this.per_u = undergraduate.find( specPer => specPer.id === this.id);
    this.per_head = head.find( specPer => specPer.id === this.id);
    if(this.per_ap !== undefined){
        this.status = "Alumni PhD";
        this.per = this.per_ap;
    }
    else if(this.per_am !== undefined)
    {
        this.status = "Alumni Master";
        this.per = this.per_am;
    }
    else if(this.per_au !== undefined)
    {
        this.status = "Alumni Undergraduate";
        this.per = this.per_au;
    }
    else if(this.per_p !== undefined){
        this.status = "PhD";
        this.per = this.per_p;
    }
    else if(this.per_m !== undefined){ 
        this.status = "Master";
        this.per = this.per_m;
    }
    else if(this.per_u !== undefined){
        this.status = "Undergraduate";
        this.per = this.per_u;
    }
    else if(this.per_head !== undefined){
        this.status = "Head";
        this.per = this.per_head;
    }
    else this.per = {}

    if (this.per.about !== undefined)
        this.about = this.per.about
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
