<template>
<div>
  <jumbotronImage mainTitle="News" poster="images/intervals.png" scrollLink="main-news"></jumbotronImage>
  <main class="content" id="main-news">
    <div class="section-div">
      <div class="our-team section-padding">
        <div class="container">
          <!-- <div class="row">
            <div class="col-12 col-lg-2"></div>
            <div class="col-12 col-lg-8">
              <a class="twitter-timeline" data-chrome="noheader nofooter noborders transparent" href="https://twitter.com/LAB-NAME?ref_src=LAB-REF">Tweets by YOUR-LAB-NAME</a> 
            </div>
            <div class="col-12 col-lg-2"></div>
          </div> -->
        
            
            
            <div class="search d-flex justify-content-center">
                <input type="text" v-model="search" placeholder="Search By Date or Description" class="form-control search-pub" />
            </div>

            <div v-for="ne in filteredNews" v-bind:key="ne.id" class="s-pub">
                <newsItem v-bind:ne="ne"></newsItem>
            </div>
        </div> 
            
      </div>
    </div>
  </main>
</div>
</template>

<script>
import JumbotronImage from "./JumbotronImage.vue";
import News from '../../json/News.json';
import NewsItem from "./NewsItem.vue";

export default {
  metaInfo: {
    title: 'News',
    titleTemplate: '%s - YOUR-LAB-NAME',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { name: 'keywords', content: 'news'},
      { name: 'description', content: 'Read the latest news about Complex Data Analytics Lab'}
    ]
  },
  components: {
    "jumbotronImage": JumbotronImage,
    "newsItem": NewsItem
  },
  created() {
  let ckeditor = document.createElement('script');    
  ckeditor.setAttribute('src',"https://platform.twitter.com/widgets.js");
  document.head.appendChild(ckeditor);
  },
  data() {
    return {
      search: "",
      news: News.sort(this.sortByDate())
    };
  },
  methods: {
    sortByDate: function () {
    return function (x, y) {
        var dateA = new Date(x.dateDay + " " + x.dateMonth  + " " +  x.dateYear).getTime();
        var dateB = new Date(y.dateDay  + " " +  y.dateMonth  + " " +  y.dateYear).getTime();
        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
        };
    }
  },
  computed: { 
    filteredNews: function() {
      return this.news.filter(news => {
        return news.dateYear.match(this.search) || news.dateMonth.toUpperCase().match(this.search.toUpperCase()) || news.dateDay.toUpperCase().match(this.search) || news.description.toUpperCase().match(this.search.toUpperCase());
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

/* Medium devices (tablets, 768px and down) */
@media (max-width: 768px) {
  .jumbotron{
     background-color:#0076aa;
  }
}

</style>
