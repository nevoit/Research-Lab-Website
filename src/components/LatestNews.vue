<template>
    <div>
        <a href="https://twitter.com/lab-account?ref_src=lab-ref" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @your-lab</a>

        <!--
        <carousel :autoplay="true" :nav="false" :items="1">
            <div v-for="newItem in newsFooter" v-bind:key="newItem.id">
                <p class="newSlider"><span class="font-weight-bold">{{newItem.dateMonth}} {{newItem.dateDay}}, {{newItem.dateYear}}:</span> {{newItem.description}} 
                <router-link :to="{name :'news'}" @click.native="scrollToTop" class="underline" exact>Read more</router-link>
                </p>
            </div>
        </carousel>
        -->
    </div>
</template>

<script>
import News from '../../json/News.json';
import carousel from 'vue-owl-carousel';

export default {
  components: {
      carousel
  },
  created() {
  let ckeditor = document.createElement('script');    
  ckeditor.setAttribute('src',"https://platform.twitter.com/widgets.js");
  document.head.appendChild(ckeditor);
  },
  data() {
    return {
        newsFooter: this.selectImportant(News.sort(this.sortByDate()),5)
    };
  },
  methods:{
    sortByDate: function () {
        return function (x, y) {
            var dateA = new Date(x.dateDay + " " + x.dateMonth  + " " +  x.dateYear).getTime();
            var dateB = new Date(y.dateDay  + " " +  y.dateMonth  + " " +  y.dateYear).getTime();
            return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
            };
    },
    selectImportant: function(array, number){
        var news_list = []

        for (let index = 0; (news_list.length < number && index < array.length); index++) {
            if(array[index]['important']){
                news_list.push(array[index])
            }
        }
        return news_list;
    },
    scrollToTop() {
        window.scrollTo(0,0);
    }
  }
};
</script>

<style scoped>
.links ul li {
    margin-bottom: 5px;
}
.about-lab {
    padding: 10px 25px;
}

/* Medium devices (tablets, 768px and down) */
@media (max-width: 768px) {
    .links {
        margin-bottom: 40px;
        padding-left: 20px;
    }
    .links ul li{
        margin-bottom: 20px;
    }
}

</style>
