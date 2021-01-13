<template>
<div>
  <jumbotrom-comp mainTitle="YOUR LAB NAME" poster="images/homepage.mp4" scrollLink="main-content"></jumbotrom-comp>
  <main class="content" id="main-content">
    <div class="section-div">
      <div class="services section-padding">
          <div class="section-title">
              <h2 class="homepage-title text-center">About us</h2>
              <div class="about">
                <p>
                  <span class="firstcharacter">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet vel magna et ultrices. Fusce velit risus, ultrices at dui eget, posuere tempus felis. Etiam et ante sed dui placerat rhoncus eu quis eros. Sed consequat nisi ipsum, eu eleifend metus congue vel. Sed in laoreet odio. Vivamus scelerisque nunc et commodo porta. Cras eu est eget orci volutpat aliquam et ut enim. Aliquam convallis vel mi nec elementum. Donec augue diam, gravida a hendrerit sed, sollicitudin eget mi.
                </p>
                
                <p>
                Ut a ligula non eros mollis pharetra. Morbi a velit commodo, ullamcorper felis ac, ultrices quam. Nunc non urna vitae felis lacinia tempus nec id risus. In sed ex et sem tincidunt porta. Vivamus ac mollis nisi, consequat pulvinar felis. Cras sollicitudin massa orci, sit amet mollis lorem scelerisque a. In vehicula a magna id pharetra. Cras id nibh est. Morbi iaculis nunc sit amet lacus tincidunt, sit amet aliquam nisl congue. Etiam a nunc quis dolor placerat placerat. Donec ut urna sit amet risus egestas sollicitudin at ac mauris. Donec non nisl id felis condimentum convallis. Sed tincidunt dolor at laoreet laoreet. 
                </p>
                <p>
                Aliquam accumsan purus sapien, quis vulputate dui scelerisque at. Integer non congue quam. Fusce odio eros, elementum eu porttitor vitae, congue at ligula.  Integer non congue quam. Fusce odio eros, elementum eu porttitor vitae, congue at ligula. Quisque vitae quam quis lectus mattis iaculis ac et turpis. Aenean ut lorem sed ante aliquet facilisis et sit amet dolor. Suspendisse bibendum eros diam, ac condimentum ex egestas a. Ut ac diam at diam efficitur molestie. Fusce quis convallis quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p>Pellentesque congue fringilla mauris, quis viverra velit tempus et. Pellentesque vel arcu vel orci egestas gravida in a enim. Praesent faucibus nisi vitae dui ullamcorper gravida. Mauris porttitor facilisis velit. Curabitur consectetur lectus a magna vehicula lacinia. Mauris eros mauris, iaculis at sapien ac, ultrices efficitur ex. Nulla facilisi. Aliquam rutrum eget sem non efficitur. Curabitur risus elit, ullamcorper blandit sagittis id, lacinia non lectus.
                    More at the tabs (<router-link :to="{name :'projects'}" @click.native="scrollToTop" exact>Projects</router-link>, <router-link :to="{name :'people'}" @click.native="scrollToTop" exact>People</router-link>).
                </p>
              </div>
          </div>
      </div><!-- /.services -->
    </div>

        <div class="section-div">
      <div class="people-homepage gray-background section-padding text-center">
        <div class="section-title">
              <h2 class="homepage-title">TEAM</h2>
        </div>
          <div class="row">
              <div class="col-12 col-lg-4 service-item">
                <img src='images/people-images/none.png' width="160px" height="160px" alt="leader" class="img-fluid rounded-circle img-thumbnail">
                  <h3>NAME</h3>
                  <p>
                  Head, YOUR-LAB-NAME
                  </p>
              </div>
              <div class="col-12 col-lg-4 service-item">
                <img :src="'images/people-images/'+randomStudent[0].image" width="160px" height="160px" alt="leader" class="img-fluid rounded-circle img-thumbnail">
                  <h3>{{ randomStudent[0].name }}</h3>
                  <p>
                  {{ randomStudent[1] }}
                  </p>
              </div>
              <div class="col-12 col-lg-4 service-item">
                <img :src="'images/people-images/'+randomStudent[2].image" width="160px" height="160px" alt="leader" class="img-fluid rounded-circle img-thumbnail">
                  <h3>{{ randomStudent[2].name }}</h3>
                  <p>
                  {{ randomStudent[3] }}
                  </p>
              </div>
          </div>
          <router-link :to="{name :'people'}" class="btn btn-service" @click.native="scrollToTop" exact>ALL THE MEMBERS &#8811;</router-link>
      </div><!-- /.services -->
    </div>

    <div class="section-div">
      <div class="services section-padding">
          <div class="section-title text-center">
              <h2 class="homepage-title">Projects</h2>
          </div>
          <div class="row text-center" >
            <div class="col-12 col-lg-4 service-item" v-for="project in randomProject" v-bind:key="project.id">
              <img :src="'images/projects-images/'+project.image" width="180px" class="img-fluid">
            </div>
          </div>
          <div class="text-center">
            <router-link :to="{name :'projects'}" class="btn btn-service" @click.native="scrollToTop" exact>FIND MORE PROJECTS &#8811;</router-link>
          </div> 
      </div><!-- /.services -->
    </div>

        <div class="section-div">
      <div class="services section-padding gray-background">
          <div class="section-title">
              <h2 class="homepage-title text-center">News</h2>
                  <div class="container">
                    <div class="row">
                      <div class="col-12 col-lg-2"></div>
                      <div class="col-12 col-lg-8">
                        <a class="twitter-timeline" data-chrome="noheader nofooter noborders transparent" data-tweet-limit="5" href="https://twitter.com/YOUR-LAB?ref_src=LAB-REF">Tweets by YOUR-LAB</a> 
                      </div>
                      <div class="col-12 col-lg-2"></div>
                    </div>
                  </div>
                  <!--
                  <carousel :autoplay="true" :nav="false" :items="1">
                    <div v-for="newItem in news" v-bind:key="newItem.id">
                      <p class="newSlider"><span class="font-weight-bold">{{newItem.dateMonth}} {{newItem.dateDay}}, {{newItem.dateYear}}:</span> {{newItem.description}} 
                      </p>
                    </div>
                  </carousel>
                  -->
                  <div class="text-right">
                    <router-link :to="{name :'news'}" class="btn btn-service" @click.native="scrollToTop" exact>FULL LIST &#8811;</router-link>
                  </div> 
          </div>
      </div><!-- /.services -->
    </div>

  </main>
</div>
</template>


<script>
import JumbotronComp from './JumbotronComp.vue';
import LatestNews from './LatestNews.vue';
import Phd from '../../json/Phd.json';
import Master from '../../json/Master.json';
import Undergraduate from '../../json/Undergraduate.json';
import SelectedPapers from '../../json/SelectedPapers.json';
import PeerReviewedJournalPapers from '../../json/PeerReviewedJournalPapers.json';
import ConferenceAndWorkshopProceedings from '../../json/ConferenceAndWorkshopProceedings.json';
import CurrentProjects from '../../json/CurrentProjects.json';
import News from '../../json/News.json';
import carousel from 'vue-owl-carousel';


export default {
  metaInfo: {
    title: 'YOUR LAB NAME',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { name: 'keywords', content: 'lab_keyword1, lab_keyword2'},
      { name: 'description', content: 'lab description'}
    ]
  },
  components: {
    'jumbotrom-comp': JumbotronComp,
    'latestNews': LatestNews,
    carousel
  },
  created() {
  let ckeditor = document.createElement('script');    
  ckeditor.setAttribute('src',"https://platform.twitter.com/widgets.js");
  document.head.appendChild(ckeditor);
  },
  data() {
    return {
      phd: Phd,
      master: Master,
      undergraduate: Undergraduate,
      randomStudent: this.randomFromJSON(Phd,Master,Undergraduate),
      news: this.selectLast(News.sort(this.sortByDate()),5),
      randomProject: this.oneRandomFromJSON(CurrentProjects,3)
    };
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0,0);
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomFromJSON: function(arr1, arr2, arr3){
      var students = []
      var firstRandom = this.getRandomInt(1,3);
      var secondRandom = this.getRandomInt(1,3);
      while(firstRandom===secondRandom){
        secondRandom = this.getRandomInt(1,3);
      }

      if(firstRandom === 1){
        students.push(arr1[this.getRandomInt(0,arr1.length-1)]) 
        students.push('PhD Student')
      }
      else if(firstRandom === 2){
        students.push(arr2[this.getRandomInt(0,arr2.length-1)])
        students.push('MSc Student')
        }
      else{
       students.push(arr3[this.getRandomInt(0,arr3.length-1)])
       students.push('Undergraduate Student')
      }

      if(secondRandom === 1){
        students.push(arr1[this.getRandomInt(0,arr1.length-1)])
        students.push('PhD Student')
      }
      else if(secondRandom === 2){
        students.push(arr2[this.getRandomInt(0,arr2.length-1)])
        students.push('MSc Student')
      }
      else{
       students.push(arr3[this.getRandomInt(0,arr3.length-1)])
       students.push('Undergraduate Student')
      }

      return students;
    },
    oneRandomFromJSON: function(arr,number){
      var project_list = []

      for (let i = 0; i < arr.length; i++) {
        if(arr[i].image){
          project_list.push(arr[i])
        }
        if(project_list.length===number)
          break;
      }
      return project_list;
    },
    sortByDate: function () {
        return function (x, y) {
            var dateA = new Date(x.dateDay + " " + x.dateMonth  + " " +  x.dateYear).getTime();
            var dateB = new Date(y.dateDay  + " " +  y.dateMonth  + " " +  y.dateYear).getTime();
            return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
            };
    },
    selectLast: function(array, number){
        var news_list = []

        for (let index = 0; (news_list.length < number && index < array.length); index++) {
                news_list.push(array[index])
        }
        return news_list;
    }
  }
};
</script>

<style scoped>
.jumbotron{
    background-color:black;
}
.service-item {
    padding: 15px 10px;
}

.homepage-title {
    margin-bottom: 25px;
}

/* Medium devices (tablets, 768px and down) */
@media (max-width: 768px) {
  .jumbotron{
     background-color:#0076aa;
  }
}

.about {
    font-size: 17px;
    -webkit-columns: 2 200px;
    -moz-columns: 2 200px;
    padding: 0px 35px;
    columns: 2 300px;
    column-gap: 30px;
    -webkit-column-gap: 30px;
    -moz-column-gap: 30px;
    -webkit-column-rule: 1px solid #d3d3d352;;
    -moz-column-rule: 1px solid #d3d3d352;;
    column-rule: 1px solid #d3d3d352;;
    text-align: justify;
}

.homepage-news {
    font-size: 16px;
    padding-left: 30px;
}

.gray-background{
    background-color: #f6f7f9;
}

.statistics-people {
    font-size: 40px;
}

.statistics-general {
    font-size: 25px;
}

.firstcharacter {
  color: #5f5f5f;
  float: left;
  font-size: 75px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
}

.number-section {
    color: #5f5f5f;
    font-size: 80px;
    margin: 0px;
}

.newSlider{
  font-size: 20px;
  text-align: center;
}

.section-padding-news{
  padding: 30px 30px;
}
</style>